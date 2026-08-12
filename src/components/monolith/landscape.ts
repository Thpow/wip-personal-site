/**
 * Sci-Fi Corridor — Three.js.
 *
 * A hyper-real but performant futuristic hallway: a long corridor with
 * dark metallic floor/walls/ceiling, recessed neon strip lights running
 * along the baseboards and ceiling seams, glowing data conduits pulsing
 * along the walls, atmospheric fog, floating holographic data shards,
 * and a distant glowing terminus. The monolith (from scene.ts) stands
 * in the corridor's center like a terminal monument.
 *
 * Performance: procedural metallic texture shared across surfaces,
 * InstancedMesh for repeating panels and light strips, emissive
 * materials instead of extra real lights, one shadow-casting
 * directional light, fog to hide the far end.
 *
 * @module monolith/landscape
 */
import * as THREE from "three";

export interface LandscapeHandle {
  group: THREE.Group;
  /** Animates the neon strips, data conduits, and holographic shards. */
  update(elapsed: number): void;
  /** Removes the landscape from the scene and disposes GPU resources. */
  dispose(): void;
}

const CORRIDOR_LENGTH = 80; // z extent
const CORRIDOR_WIDTH = 14; // x extent
const CORRIDOR_HEIGHT = 10; // y extent
const FLOOR_Y = -3;

// ─── Procedural dark metal texture (canvas) ────────────────────────────
function makeMetalTexture(size = 256): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  // Mid-grey base with a cool tint. This is a colour MAP — it multiplies the
  // material colour, so a near-black base would crush every surface to black.
  ctx.fillStyle = "#8e97a2";
  ctx.fillRect(0, 0, size, size);
  // Fine metallic noise
  const img = ctx.getImageData(0, 0, size, size);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * 26;
    d[i] = Math.max(0, Math.min(255, d[i]! + n));
    d[i + 1] = Math.max(0, Math.min(255, d[i + 1]! + n));
    d[i + 2] = Math.max(0, Math.min(255, d[i + 2]! + n + 2));
  }
  ctx.putImageData(img, 0, 0);
  // Brushed metal streaks — subtle horizontal lines
  ctx.strokeStyle = "rgba(230,238,246,0.10)";
  ctx.lineWidth = 1;
  for (let y = 0; y < size; y += 3) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(size, y + Math.random() * 2 - 1);
    ctx.stroke();
  }
  // Panel seams — grid lines every 64px
  ctx.strokeStyle = "rgba(18,22,28,0.75)";
  ctx.lineWidth = 2;
  for (let p = 0; p <= size; p += 64) {
    ctx.beginPath();
    ctx.moveTo(p, 0);
    ctx.lineTo(p, size);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, p);
    ctx.lineTo(size, p);
    ctx.stroke();
  }
  // Rivets at seam intersections
  ctx.fillStyle = "rgba(206,216,226,0.55)";
  for (let x = 0; x <= size; x += 64) {
    for (let y = 0; y <= size; y += 64) {
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// ─── Procedural floor grate texture ────────────────────────────────────
function makeGrateTexture(size = 128): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#767f89";
  ctx.fillRect(0, 0, size, size);
  // Grid of dark cells with thin bright edges (glowing grate)
  ctx.strokeStyle = "rgba(140,225,245,0.55)";
  ctx.lineWidth = 1;
  const cell = 16;
  for (let x = 0; x <= size; x += cell) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, size);
    ctx.stroke();
  }
  for (let y = 0; y <= size; y += cell) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(size, y);
    ctx.stroke();
  }
  // Inner darkening per cell
  ctx.fillStyle = "rgba(20,26,32,0.45)";
  for (let x = 1; x < size; x += cell) {
    for (let y = 1; y < size; y += cell) {
      ctx.fillRect(x, y, cell - 2, cell - 2);
    }
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function buildLandscape(scene: THREE.Scene): LandscapeHandle {
  const group = new THREE.Group();
  const geometries: THREE.BufferGeometry[] = [];
  const materials: THREE.Material[] = [];
  const textures: THREE.Texture[] = [];

  const trackGeo = <T extends THREE.BufferGeometry>(g: T): T => {
    geometries.push(g);
    return g;
  };
  const trackMat = <T extends THREE.Material>(m: T): T => {
    materials.push(m);
    return m;
  };

  // ─── Shared materials ────────────────────────────────────────────────
  const metalTex = makeMetalTexture();
  textures.push(metalTex);
  const metalBump = metalTex.clone();
  textures.push(metalBump);

  // Metalness is kept low: fully metallic surfaces reflect nothing in a
  // scene with no environment map, so they render black. These read as lit
  // painted steel instead.
  const metal = trackMat(
    new THREE.MeshStandardMaterial({
      map: metalTex,
      bumpMap: metalBump,
      bumpScale: 0.03,
      color: 0x8f9aa6,
      roughness: 0.55,
      metalness: 0.25,
    }),
  );
  const metalDark = trackMat(
    new THREE.MeshStandardMaterial({
      map: metalTex,
      bumpMap: metalBump,
      bumpScale: 0.04,
      color: 0x59636e,
      roughness: 0.6,
      metalness: 0.3,
    }),
  );
  const floorMat = trackMat(
    new THREE.MeshStandardMaterial({
      map: makeGrateTexture(),
      color: 0x6b757f,
      roughness: 0.35,
      metalness: 0.35,
      emissive: 0x0a1a20,
      emissiveIntensity: 0.5,
    }),
  );
  textures.push((floorMat as THREE.MeshStandardMaterial).map!);

  // Neon strip materials — cyan and magenta
  const neonCyan = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0x000000,
      emissive: 0x22d3ee,
      emissiveIntensity: 2.2,
      roughness: 0.3,
      metalness: 0.1,
    }),
  );
  const neonMagenta = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0x000000,
      emissive: 0xe035a0,
      emissiveIntensity: 1.8,
      roughness: 0.3,
      metalness: 0.1,
    }),
  );
  // Data conduit — pulsing blue-white
  const conduitMat = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0x000000,
      emissive: 0x60a5fa,
      emissiveIntensity: 1.4,
      roughness: 0.2,
      metalness: 0.3,
    }),
  );
  // Holographic shard material
  const holoMat = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      emissive: 0x22d3ee,
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.4,
      roughness: 0.1,
      metalness: 0.5,
      side: THREE.DoubleSide,
    }),
  );
  // Distant terminus glow
  const terminusMat = trackMat(
    new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.15,
    }),
  );

  const box = (
    w: number,
    h: number,
    d: number,
    mat: THREE.Material,
    x: number,
    y: number,
    z: number,
    opts?: { castShadow?: boolean; receiveShadow?: boolean; rotY?: number },
  ): THREE.Mesh => {
    const mesh = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(w, h, d)), mat);
    mesh.position.set(x, y, z);
    if (opts?.rotY) mesh.rotation.y = opts.rotY;
    mesh.castShadow = opts?.castShadow ?? true;
    mesh.receiveShadow = opts?.receiveShadow ?? true;
    group.add(mesh);
    return mesh;
  };

  // ─── Floor ────────────────────────────────────────────────────────────
  const floorGeo = trackGeo(new THREE.PlaneGeometry(CORRIDOR_WIDTH, CORRIDOR_LENGTH));
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(0, FLOOR_Y, 0);
  floor.receiveShadow = true;
  (floorMat.map as THREE.Texture).repeat.set(CORRIDOR_WIDTH / 4, CORRIDOR_LENGTH / 4);
  group.add(floor);

  // ─── Ceiling ──────────────────────────────────────────────────────────
  const ceilGeo = trackGeo(new THREE.PlaneGeometry(CORRIDOR_WIDTH, CORRIDOR_LENGTH));
  const ceiling = new THREE.Mesh(ceilGeo, metalDark);
  ceiling.rotation.x = Math.PI / 2;
  ceiling.position.set(0, FLOOR_Y + CORRIDOR_HEIGHT, 0);
  ceiling.receiveShadow = true;
  (metalDark.map as THREE.Texture).repeat.set(CORRIDOR_WIDTH / 4, CORRIDOR_LENGTH / 4);
  group.add(ceiling);

  // ─── Walls (left and right) ──────────────────────────────────────────
  const wallGeoL = trackGeo(new THREE.PlaneGeometry(CORRIDOR_LENGTH, CORRIDOR_HEIGHT));
  const wallL = new THREE.Mesh(wallGeoL, metal);
  wallL.rotation.y = Math.PI / 2;
  wallL.position.set(-CORRIDOR_WIDTH / 2, FLOOR_Y + CORRIDOR_HEIGHT / 2, 0);
  wallL.receiveShadow = true;
  group.add(wallL);

  const wallGeoR = trackGeo(new THREE.PlaneGeometry(CORRIDOR_LENGTH, CORRIDOR_HEIGHT));
  const wallR = new THREE.Mesh(wallGeoR, metal);
  wallR.rotation.y = -Math.PI / 2;
  wallR.position.set(CORRIDOR_WIDTH / 2, FLOOR_Y + CORRIDOR_HEIGHT / 2, 0);
  wallR.receiveShadow = true;
  group.add(wallR);

  // Repeat metal texture on walls
  (metal.map as THREE.Texture).repeat.set(CORRIDOR_LENGTH / 4, CORRIDOR_HEIGHT / 3);

  // ─── Wall panels — recessed darker sections every 8 units ─────────────
  const PANEL_COUNT = 10;
  for (let i = 0; i < PANEL_COUNT; i++) {
    const z = -CORRIDOR_LENGTH / 2 + 4 + i * 8;
    // Left wall recessed panel
    box(0.15, 5, 6, metalDark, -CORRIDOR_WIDTH / 2 + 0.08, FLOOR_Y + 5, z, {
      castShadow: false,
      receiveShadow: true,
    });
    // Right wall recessed panel
    box(0.15, 5, 6, metalDark, CORRIDOR_WIDTH / 2 - 0.08, FLOOR_Y + 5, z, {
      castShadow: false,
      receiveShadow: true,
    });
  }

  // ─── Neon strip lights — baseboard + ceiling seam ────────────────────
  // Baseboard strips (both sides, full corridor length)
  const baseStripGeo = trackGeo(new THREE.BoxGeometry(0.1, 0.12, CORRIDOR_LENGTH));
  const baseStripL = new THREE.Mesh(baseStripGeo, neonCyan);
  baseStripL.position.set(-CORRIDOR_WIDTH / 2 + 0.06, FLOOR_Y + 0.15, 0);
  group.add(baseStripL);
  const baseStripR = new THREE.Mesh(baseStripGeo, neonCyan);
  baseStripR.position.set(CORRIDOR_WIDTH / 2 - 0.06, FLOOR_Y + 0.15, 0);
  group.add(baseStripR);

  // Ceiling seam strips (both sides)
  const ceilStripGeo = trackGeo(new THREE.BoxGeometry(0.1, 0.12, CORRIDOR_LENGTH));
  const ceilStripL = new THREE.Mesh(ceilStripGeo, neonMagenta);
  ceilStripL.position.set(-CORRIDOR_WIDTH / 2 + 0.06, FLOOR_Y + CORRIDOR_HEIGHT - 0.15, 0);
  group.add(ceilStripL);
  const ceilStripR = new THREE.Mesh(ceilStripGeo, neonMagenta);
  ceilStripR.position.set(CORRIDOR_WIDTH / 2 - 0.06, FLOOR_Y + CORRIDOR_HEIGHT - 0.15, 0);
  group.add(ceilStripR);

  // Ceiling runners — deliberately offset from the centre line so they frame
  // the headline overlay instead of cutting straight through it.
  const centerStripGeo = trackGeo(new THREE.BoxGeometry(0.18, 0.06, CORRIDOR_LENGTH));
  for (const side of [-1, 1]) {
    const runner = new THREE.Mesh(centerStripGeo, neonCyan);
    runner.position.set(side * 1.9, FLOOR_Y + CORRIDOR_HEIGHT - 0.05, 0);
    group.add(runner);
  }

  // ─── Data conduits — vertical glowing lines on walls ─────────────────
  const conduitGeo = trackGeo(new THREE.BoxGeometry(0.06, 3, 0.06));
  const conduits: THREE.Mesh[] = [];
  for (let i = 0; i < 8; i++) {
    const z = -CORRIDOR_LENGTH / 2 + 6 + i * 10;
    // Left wall conduit
    const cl = new THREE.Mesh(conduitGeo, conduitMat);
    cl.position.set(-CORRIDOR_WIDTH / 2 + 0.05, FLOOR_Y + 3.5, z);
    group.add(cl);
    conduits.push(cl);
    // Right wall conduit
    const cr = new THREE.Mesh(conduitGeo, conduitMat);
    cr.position.set(CORRIDOR_WIDTH / 2 - 0.05, FLOOR_Y + 3.5, z);
    group.add(cr);
    conduits.push(cr);
  }

  // ─── Floor light strips — crossing the corridor ──────────────────────
  const floorLightGeo = trackGeo(new THREE.BoxGeometry(CORRIDOR_WIDTH, 0.02, 0.15));
  const floorLights: THREE.Mesh[] = [];
  for (let i = 0; i < 12; i++) {
    const z = -CORRIDOR_LENGTH / 2 + 3 + i * 6.5;
    const fl = new THREE.Mesh(floorLightGeo, neonCyan);
    fl.position.set(0, FLOOR_Y + 0.01, z);
    group.add(fl);
    floorLights.push(fl);
  }

  // ─── Ceiling light fixtures — recessed boxes with emissive faces ─────
  // Kept narrow and offset to the sides: wide fixtures directly overhead
  // read as bright bars across the centre of the frame, colliding with the
  // hero headline overlay.
  const fixtureGlow = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0x0a0a0c,
      emissive: 0xa9e8f5,
      emissiveIntensity: 0.55,
      roughness: 0.5,
    }),
  );
  const fixtureGeo = trackGeo(new THREE.BoxGeometry(1.1, 0.3, 0.9));
  const faceGeo = trackGeo(new THREE.PlaneGeometry(0.95, 0.72));
  for (let i = 0; i < 8; i++) {
    const z = -CORRIDOR_LENGTH / 2 + 5 + i * 10;
    for (const side of [-1, 1]) {
      const x = side * (CORRIDOR_WIDTH / 2 - 3);
      const fix = new THREE.Mesh(fixtureGeo, metalDark);
      fix.position.set(x, FLOOR_Y + CORRIDOR_HEIGHT - 0.2, z);
      fix.castShadow = false;
      group.add(fix);
      const face = new THREE.Mesh(faceGeo, fixtureGlow);
      face.rotation.x = Math.PI / 2;
      face.position.set(x, FLOOR_Y + CORRIDOR_HEIGHT - 0.36, z);
      group.add(face);
    }
  }

  // ─── Distant terminus — glowing wall at the far end ──────────────────
  const terminusGeo = trackGeo(new THREE.PlaneGeometry(CORRIDOR_WIDTH, CORRIDOR_HEIGHT));
  const terminus = new THREE.Mesh(terminusGeo, terminusMat);
  terminus.position.set(0, FLOOR_Y + CORRIDOR_HEIGHT / 2, -CORRIDOR_LENGTH / 2 + 0.1);
  group.add(terminus);

  // Terminus frame — dark metal border
  box(0.2, CORRIDOR_HEIGHT + 0.4, 0.2, metalDark, -CORRIDOR_WIDTH / 2, FLOOR_Y + CORRIDOR_HEIGHT / 2, -CORRIDOR_LENGTH / 2);
  box(0.2, CORRIDOR_HEIGHT + 0.4, 0.2, metalDark, CORRIDOR_WIDTH / 2, FLOOR_Y + CORRIDOR_HEIGHT / 2, -CORRIDOR_LENGTH / 2);
  box(CORRIDOR_WIDTH + 0.4, 0.2, 0.2, metalDark, 0, FLOOR_Y + CORRIDOR_HEIGHT, -CORRIDOR_LENGTH / 2);
  box(CORRIDOR_WIDTH + 0.4, 0.2, 0.2, metalDark, 0, FLOOR_Y, -CORRIDOR_LENGTH / 2);

  // ─── Holographic data shards — floating geometric shapes ─────────────
  const SHARD_COUNT = 14;
  const shardGeo = trackGeo(new THREE.OctahedronGeometry(0.3, 0));
  const shards: { mesh: THREE.Mesh; baseY: number; phase: number; z: number; x: number }[] = [];
  for (let i = 0; i < SHARD_COUNT; i++) {
    const side = i % 2 === 0 ? -1 : 1;
    const x = side * (CORRIDOR_WIDTH / 2 - 2 - Math.random() * 2);
    const z = -CORRIDOR_LENGTH / 2 + 8 + (i / SHARD_COUNT) * (CORRIDOR_LENGTH - 16) + Math.random() * 4;
    const baseY = FLOOR_Y + 2 + Math.random() * 4;
    const mesh = new THREE.Mesh(shardGeo, holoMat);
    mesh.position.set(x, baseY, z);
    mesh.castShadow = false;
    group.add(mesh);
    shards.push({ mesh, baseY, phase: Math.random() * Math.PI * 2, z, x });
  }

  // ─── Support pillars / arches every 16 units ─────────────────────────
  for (let i = 0; i < 5; i++) {
    const z = -CORRIDOR_LENGTH / 2 + 8 + i * 16;
    box(0.4, CORRIDOR_HEIGHT, 0.4, metalDark, -CORRIDOR_WIDTH / 2, FLOOR_Y + CORRIDOR_HEIGHT / 2, z);
    box(0.4, CORRIDOR_HEIGHT, 0.4, metalDark, CORRIDOR_WIDTH / 2, FLOOR_Y + CORRIDOR_HEIGHT / 2, z);
    // Crossbeam at top
    box(CORRIDOR_WIDTH, 0.3, 0.4, metalDark, 0, FLOOR_Y + CORRIDOR_HEIGHT - 0.2, z, { castShadow: false });
  }

  // ─── Lighting ─────────────────────────────────────────────────────────
  // Cool ambient bounce — without this the corridor surfaces read as pure
  // black and only the emissive strips are visible (looks like loose lasers).
  const hemi = new THREE.HemisphereLight(0x8fa8c0, 0x141a22, 1.15);
  group.add(hemi);
  const ambient = new THREE.AmbientLight(0x93a6bb, 0.5);
  group.add(ambient);
  // Key light from the ceiling — cool white
  const key = new THREE.DirectionalLight(0xdce9f6, 2.1);
  key.position.set(4, FLOOR_Y + CORRIDOR_HEIGHT + 5, 14);
  key.target.position.set(0, FLOOR_Y, -4);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.left = -12;
  key.shadow.camera.right = 12;
  key.shadow.camera.top = 26;
  key.shadow.camera.bottom = -26;
  key.shadow.camera.near = 1;
  key.shadow.camera.far = 60;
  key.shadow.bias = -0.0004;
  group.add(key);
  group.add(key.target);
  // Cyan fill from the terminus direction
  const cyanFill = new THREE.PointLight(0x22d3ee, 26, 46, 1.6);
  cyanFill.position.set(0, FLOOR_Y + 4, -CORRIDOR_LENGTH / 2 + 4);
  group.add(cyanFill);
  // Magenta rim from behind the camera — separates the walls from the void
  const magentaFill = new THREE.PointLight(0xe035a0, 14, 40, 2);
  magentaFill.position.set(0, FLOOR_Y + 6, CORRIDOR_LENGTH / 2 - 6);
  group.add(magentaFill);
  // Mid-corridor lamps so the walls are lit along their whole length
  for (let i = -1; i <= 1; i++) {
    const lamp = new THREE.PointLight(0xbcd6ee, 9, 26, 2);
    lamp.position.set(0, FLOOR_Y + CORRIDOR_HEIGHT - 1.2, i * 18);
    group.add(lamp);
  }

  scene.add(group);

  let disposed = false;
  return {
    group,

    update(elapsed: number) {
      if (disposed) return;
      // Pulsing neon strips — subtle breathing
      const pulse = 2.0 + Math.sin(elapsed * 1.5) * 0.3;
      neonCyan.emissiveIntensity = pulse;
      neonMagenta.emissiveIntensity = 1.6 + Math.sin(elapsed * 1.5 + Math.PI) * 0.25;
      // Data conduits — traveling pulse
      const conduitPulse = 1.2 + Math.sin(elapsed * 3) * 0.4;
      conduitMat.emissiveIntensity = conduitPulse;
      // Floor lights — sequential chase
      for (let i = 0; i < floorLights.length; i++) {
        const fl = floorLights[i]!;
        const phase = elapsed * 2 - i * 0.5;
        (fl.material as THREE.MeshStandardMaterial).emissiveIntensity =
          1.5 + Math.sin(phase) * 0.8;
      }
      // Holographic shards — float + rotate
      for (const s of shards) {
        s.mesh.position.y = s.baseY + Math.sin(elapsed * 0.8 + s.phase) * 0.3;
        s.mesh.rotation.x = elapsed * 0.3 + s.phase;
        s.mesh.rotation.y = elapsed * 0.4 + s.phase;
        // Subtle opacity flicker
        (s.mesh.material as THREE.MeshStandardMaterial).opacity =
          0.3 + Math.sin(elapsed * 2 + s.phase) * 0.15;
      }
      // Terminus glow pulse
      terminusMat.opacity = 0.12 + Math.sin(elapsed * 0.8) * 0.05;
    },

    dispose() {
      if (disposed) return;
      disposed = true;
      scene.remove(group);
      for (const g of geometries) g.dispose();
      for (const mat of materials) mat.dispose();
      for (const t of textures) t.dispose();
    },
  };
}

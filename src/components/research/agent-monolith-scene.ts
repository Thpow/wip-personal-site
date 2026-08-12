/**
 * Agent Monolith Scene — Three.js + OrbitControls.
 *
 * Renders the 6-agent architecture as a cuboid monolith — each face inscribed
 * with one agent's number/name/role. The turn-order cycle (3,1,2,1,2,3,1,2,
 * 1,2,4,6,7) plays as an edge-highlight sequence. Concurrent pairs (1+[2,4],
 * 6+[7]) glow simultaneously. OrbitControls lets the user rotate the model.
 *
 * This is the "3D-rotatable research models" the owner requested — the
 * multi-agent system itself becomes a monolith you can orbit.
 *
 * Face assignments:
 *   +X = Agent 1 (CODER),    -X = Agent 2 (REVIEWER)
 *   +Y = Agent 3 (DIRECTOR), -Y = Agent 4 (QUALITY)
 *   +Z = Agent 6 (DOCS),     -Z = Agent 7 (IDEAS)
 *
 * @module research/agent-monolith-scene
 */
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export interface SceneHandle {
  dispose(): void;
}

const TURN_ORDER = [3, 1, 2, 1, 2, 3, 1, 2, 1, 2, 4, 6, 7];
const CONCURRENT_PAIRS: [number, number][] = [
  [1, 2],
  [1, 4],
  [6, 7],
];

// Face → agent number mapping (BoxGeometry face order: +X,-X,+Y,-Y,+Z,-Z)
const FACE_AGENTS = [1, 2, 3, 4, 6, 7];
const AGENT_LABELS: Record<number, string> = {
  3: "DIRECTOR",
  1: "CODER",
  2: "REVIEWER",
  4: "QUALITY",
  6: "DOCS",
  7: "IDEAS",
};

/**
 * Creates a canvas texture for a monolith face with the agent's number and label.
 */
function createFaceTexture(agentNum: number): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d")!;

  // Deep black background
  ctx.fillStyle = "#050505";
  ctx.fillRect(0, 0, 512, 512);

  // Subtle border
  ctx.strokeStyle = "rgba(244, 244, 245, 0.15)";
  ctx.lineWidth = 2;
  ctx.strokeRect(16, 16, 480, 480);

  // Agent number — massive, cold-white, centered
  ctx.fillStyle = "#f5f5f5";
  ctx.font = "900 200px ui-monospace, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(String(agentNum), 256, 220);

  // Agent label — monospace, smaller, below number
  ctx.fillStyle = "rgba(244, 244, 245, 0.5)";
  ctx.font = "400 28px ui-monospace, monospace";
  ctx.fillText(AGENT_LABELS[agentNum] ?? "", 256, 340);

  // Cyan accent line
  ctx.strokeStyle = "#00e5ff";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(206, 380);
  ctx.lineTo(306, 380);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function init(container: HTMLElement): SceneHandle {
  const width = container.clientWidth || 1;
  const height = container.clientHeight || 1;
  let disposed = false;

  // ─── Renderer ────────────────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);
  renderer.setClearColor(0x050505, 1);
  container.appendChild(renderer.domElement);

  // ─── Scene + Fog ─────────────────────────────────────────────────────
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x050505, 0.04);

  // ─── Camera ──────────────────────────────────────────────────────────
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(4, 3, 5);

  // ─── Agent Monolith — cuboid with 6 face textures ────────────────────
  const geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);
  const materials = FACE_AGENTS.map((agentNum) => {
    const texture = createFaceTexture(agentNum);
    return new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.8,
      metalness: 0.1,
      emissive: 0x000000,
    });
  });
  const monolith = new THREE.Mesh(geometry, materials);
  scene.add(monolith);

  // ─── Edge highlights for turn-order cycle ────────────────────────────
  const edges = new THREE.EdgesGeometry(geometry);
  const edgeMat = new THREE.LineBasicMaterial({
    color: 0x00e5ff,
    transparent: true,
    opacity: 0.15,
  });
  const edgeLines = new THREE.LineSegments(edges, edgeMat);
  scene.add(edgeLines);

  // ─── Lights ──────────────────────────────────────────────────────────
  scene.add(new THREE.AmbientLight(0xffffff, 0.4));
  const accentLight = new THREE.PointLight(0x00e5ff, 1.0, 15);
  accentLight.position.set(3, 3, 3);
  scene.add(accentLight);

  // ─── OrbitControls ───────────────────────────────────────────────────
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;
  controls.enablePan = false;
  controls.minDistance = 3;
  controls.maxDistance = 12;

  // ─── Turn-order animation ────────────────────────────────────────────
  let turnIndex = 0;
  let lastTurnTime = 0;
  const TURN_INTERVAL = 1.5; // seconds between turns

  const faceIndexForAgent = (agentNum: number): number =>
    FACE_AGENTS.indexOf(agentNum);

  const highlightAgent = (agentNum: number, intensity: number) => {
    const faceIdx = faceIndexForAgent(agentNum);
    if (faceIdx >= 0 && materials[faceIdx]) {
      materials[faceIdx].emissive.setHex(0x00e5ff);
      materials[faceIdx].emissiveIntensity = intensity;
    }
  };

  // ─── Animation loop ──────────────────────────────────────────────────
  let animFrame = 0;
  const clock = new THREE.Clock();
  const animate = () => {
    animFrame = requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    // Turn-order cycle — highlight current agent's face
    if (elapsed - lastTurnTime > TURN_INTERVAL) {
      // Dim all faces
      materials.forEach((m) => (m.emissiveIntensity = 0));
      // Highlight current agent
      const currentAgent = TURN_ORDER[turnIndex % TURN_ORDER.length];
      highlightAgent(currentAgent, 0.3);
      // Concurrent pair — highlight companion
      const pair = CONCURRENT_PAIRS.find(
        ([a, b]) => a === currentAgent || b === currentAgent,
      );
      if (pair) {
        const companion = pair[0] === currentAgent ? pair[1] : pair[0];
        highlightAgent(companion, 0.15);
      }
      turnIndex++;
      lastTurnTime = elapsed;
    }

    controls.update();
    renderer.render(scene, camera);
  };
  animate();

  // ─── Resize handling ─────────────────────────────────────────────────
  const resizeObserver = new ResizeObserver(() => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
  resizeObserver.observe(container);

  // ─── Dispose (idempotent) ────────────────────────────────────────────
  return {
    dispose() {
      if (disposed) return;
      disposed = true;
      cancelAnimationFrame(animFrame);
      resizeObserver.disconnect();
      controls.dispose();
      materials.forEach((m) => {
        m.map?.dispose();
        m.dispose();
      });
      geometry.dispose();
      edges.dispose();
      edgeMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    },
  };
}

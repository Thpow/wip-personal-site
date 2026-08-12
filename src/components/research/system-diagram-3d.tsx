/**
 * SystemDiagram3D — Figure: 3D interactive system architecture.
 *
 * A Three.js-powered 3D visualization of the devin-autopilot module structure.
 * Each module is a glowing 3D node positioned by its architectural layer.
 * Animated data-flow particles travel along the connections between modules.
 * The user can orbit, zoom, and click nodes to see details.
 *
 * Falls back to the 2D SystemDiagram on reduced-motion or WebGL failure.
 *
 * @module research/system-diagram-3d
 */
import { component$, useSignal, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { SYSTEM_MODULES, type SystemModule } from "~/data/agents";

// ─── 3D node layout (positions in 3D space by layer) ───────────────────
interface Node3D {
  id: string;
  module: SystemModule;
  position: [number, number, number];
}

const LAYER_Y: Record<string, number> = {
  entry: 6,
  core: 2,
  infra: -1,
  state: -1,
  interface: -5,
};

const LAYER_Z: Record<string, number> = {
  entry: 0,
  core: 0,
  infra: -3,
  state: 3,
  interface: 0,
};

// Manual x positions for a pleasing spread
const X_POSITIONS: Record<string, number> = {
  run: 0,
  orchestrator: -2,
  agents: 2,
  acp: 4,
  config: -4,
  sessions: 5,
  teamlog: -5,
  webgui: -3,
  sendcmd: 0,
  docsagent: 3,
};

const NODES_3D: Node3D[] = SYSTEM_MODULES.map((m) => ({
  id: m.id,
  module: m,
  position: [X_POSITIONS[m.id] ?? 0, LAYER_Y[m.layer] ?? 0, LAYER_Z[m.layer] ?? 0],
}));

// ─── Connections (data flows between modules) ──────────────────────────
interface Connection {
  from: string;
  to: string;
  label: string;
}

const CONNECTIONS: Connection[] = [
  { from: "run", to: "orchestrator", label: "run() → ExitReason" },
  { from: "config", to: "orchestrator", label: "SCHEDULE · PAIRS · roles" },
  { from: "orchestrator", to: "agents", label: "take_turn(shared_log)" },
  { from: "agents", to: "acp", label: "JSON-RPC over stdio" },
  { from: "agents", to: "teamlog", label: "append output" },
  { from: "teamlog", to: "agents", label: "brain reads tail" },
  { from: "agents", to: "sessions", label: "save/load session IDs" },
  { from: "orchestrator", to: "webgui", label: "live state" },
  { from: "sendcmd", to: "orchestrator", label: "commands.json" },
  { from: "orchestrator", to: "docsagent", label: "AST scan" },
];

const NODE_BY_ID: Record<string, Node3D> = Object.fromEntries(
  NODES_3D.map((n) => [n.id, n]),
);

const LAYER_COLORS: Record<string, number> = {
  entry: 0x22d3ee,
  core: 0x60a5fa,
  infra: 0xa78bfa,
  state: 0x34d399,
  interface: 0xfbbf24,
};

/**
 * Builds a canvas-texture billboard label so every node is identifiable
 * without hovering. Uses a Sprite so it always faces the camera.
 */
function makeLabelSprite(
  THREE: typeof import("three"),
  text: string,
  color: number,
): import("three").Sprite {
  const pad = 12;
  const font = "500 30px ui-monospace, SFMono-Regular, Menlo, monospace";
  const measure = document.createElement("canvas").getContext("2d")!;
  measure.font = font;
  const textW = Math.ceil(measure.measureText(text).width);

  const canvas = document.createElement("canvas");
  canvas.width = textW + pad * 2;
  canvas.height = 48;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "rgba(8,10,14,0.82)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = `#${color.toString(16).padStart(6, "0")}`;
  ctx.globalAlpha = 0.5;
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, canvas.width - 2, canvas.height - 2);
  ctx.globalAlpha = 1;
  ctx.font = font;
  ctx.fillStyle = "#eef4f8";
  ctx.textBaseline = "middle";
  ctx.fillText(text, pad, canvas.height / 2 + 1);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
  });
  const sprite = new THREE.Sprite(material);
  const scale = 0.0075;
  sprite.scale.set(canvas.width * scale, canvas.height * scale, 1);
  return sprite;
}

export const SystemDiagram3D = component$(() => {
  const containerRef = useSignal<HTMLDivElement>();
  const state = useStore<{
    mounted: boolean;
    selected: string | null;
    hovered: string | null;
  }>({
    mounted: false,
    selected: null,
    hovered: null,
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async ({ cleanup }) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const container = containerRef.value;
    if (!container) return;

    let disposed = false;
    const geometries: { dispose(): void }[] = [];
    const materials: { dispose(): void }[] = [];

    try {
      const THREE = await import("three");
      const { OrbitControls } = await import(
        "three/addons/controls/OrbitControls.js"
      );

      const width = container.clientWidth || 600;
      const height = container.clientHeight || 400;

      // ─── Renderer ──────────────────────────────────────────────────────
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.setClearColor(0x0a0a0c, 0);
      container.appendChild(renderer.domElement);

      // ─── Scene + Camera ────────────────────────────────────────────────
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x0a0a0c, 0.04);

      const camera = new THREE.PerspectiveCamera(46, width / height, 0.1, 200);
      // Pulled back and raised: the previous framing clipped the top layer.
      camera.position.set(11, 3, 22);

      // ─── Controls ──────────────────────────────────────────────────────
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.enablePan = false;
      controls.minDistance = 12;
      controls.maxDistance = 38;
      // Layers span y = -5 (interface) to +6 (entry); aim at the middle.
      controls.target.set(0, 0.5, 0);

      // ─── Lighting ──────────────────────────────────────────────────────
      scene.add(new THREE.AmbientLight(0x404060, 0.5));
      const point = new THREE.PointLight(0x22d3ee, 2, 30);
      point.position.set(0, 8, 5);
      scene.add(point);

      // ─── Nodes ─────────────────────────────────────────────────────────
      const nodeMeshes: Record<string, any> = {};
      const nodeGroup = new THREE.Group();

      for (const node of NODES_3D) {
        const color = LAYER_COLORS[node.module.layer] ?? 0x22d3ee;
        const geo = new THREE.OctahedronGeometry(0.5, 0);
        geometries.push(geo);
        const mat = new THREE.MeshStandardMaterial({
          color,
          emissive: color,
          emissiveIntensity: 0.4,
          roughness: 0.3,
          metalness: 0.7,
          transparent: true,
          opacity: 0.85,
        });
        materials.push(mat);
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(...node.position);
        mesh.userData = { id: node.id };
        nodeGroup.add(mesh);
        nodeMeshes[node.id] = mesh;

        // Glowing wireframe shell around each node
        const shellGeo = new THREE.OctahedronGeometry(0.65, 0);
        geometries.push(shellGeo);
        const shellMat = new THREE.MeshBasicMaterial({
          color,
          wireframe: true,
          transparent: true,
          opacity: 0.2,
        });
        materials.push(shellMat);
        const shell = new THREE.Mesh(shellGeo, shellMat);
        shell.position.set(...node.position);
        nodeGroup.add(shell);

        // Billboard label — without these the graph is unreadable until you
        // hover every node.
        const label = makeLabelSprite(THREE, node.module.label, color);
        label.position.set(
          node.position[0],
          node.position[1] + 1.05,
          node.position[2],
        );
        nodeGroup.add(label);
        geometries.push(label.geometry as unknown as { dispose(): void });
        materials.push(label.material as unknown as { dispose(): void });
        const tex = (label.material as { map?: { dispose(): void } }).map;
        if (tex) materials.push(tex);
      }
      scene.add(nodeGroup);

      // ─── Connections — animated lines with traveling particles ─────────
      const flowLines: {
        line: any;
        particle: any;
        t: number;
        speed: number;
        from: any;
        to: any;
      }[] = [];

      for (const conn of CONNECTIONS) {
        const fromNode = NODE_BY_ID[conn.from];
        const toNode = NODE_BY_ID[conn.to];
        if (!fromNode || !toNode) continue;

        const from = new THREE.Vector3(...fromNode.position);
        const to = new THREE.Vector3(...toNode.position);

        // Connection line
        const lineGeo = new THREE.BufferGeometry().setFromPoints([from, to]);
        geometries.push(lineGeo);
        const lineMat = new THREE.LineBasicMaterial({
          color: 0x22d3ee,
          transparent: true,
          opacity: 0.25,
        });
        materials.push(lineMat);
        const line = new THREE.Line(lineGeo, lineMat);
        scene.add(line);

        // Traveling particle
        const particleGeo = new THREE.SphereGeometry(0.08, 8, 8);
        geometries.push(particleGeo);
        const particleMat = new THREE.MeshBasicMaterial({
          color: 0x22d3ee,
          transparent: true,
          opacity: 0.9,
        });
        materials.push(particleMat);
        const particle = new THREE.Mesh(particleGeo, particleMat);
        scene.add(particle);

        flowLines.push({
          line,
          particle,
          t: Math.random(),
          speed: 0.3 + Math.random() * 0.3,
          from,
          to,
        });
      }

      // ─── Raycasting for hover/click ────────────────────────────────────
      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();
      let hoveredId: string | null = null;

      const updatePointer = (e: PointerEvent) => {
        const rect = renderer.domElement.getBoundingClientRect();
        pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      };

      const onPointerMove = (e: PointerEvent) => {
        updatePointer(e);
        raycaster.setFromCamera(pointer, camera);
        const hits = raycaster.intersectObjects(Object.values(nodeMeshes));
        if (hits.length > 0) {
          const id = (hits[0]!.object.userData as { id: string }).id;
          if (id !== hoveredId) {
            hoveredId = id;
            state.hovered = id;
            renderer.domElement.style.cursor = "pointer";
          }
        } else if (hoveredId !== null) {
          hoveredId = null;
          state.hovered = null;
          renderer.domElement.style.cursor = "default";
        }
      };

      const onPointerDown = (e: PointerEvent) => {
        updatePointer(e);
        raycaster.setFromCamera(pointer, camera);
        const hits = raycaster.intersectObjects(Object.values(nodeMeshes));
        if (hits.length > 0) {
          const id = (hits[0]!.object.userData as { id: string }).id;
          state.selected = state.selected === id ? null : id;
          controls.autoRotate = state.selected !== null ? false : true;
        }
      };

      renderer.domElement.addEventListener("pointermove", onPointerMove);
      renderer.domElement.addEventListener("pointerdown", onPointerDown);

      // ─── Animation loop ────────────────────────────────────────────────
      let animFrame = 0;
      const clock = new THREE.Clock();
      const animate = () => {
        if (disposed) return;
        animFrame = requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        // Rotate nodes slowly
        nodeGroup.rotation.y += 0.001;

        // Pulse node emissive based on hover/selection
        for (const [id, mesh] of Object.entries(nodeMeshes)) {
          const isActive = id === state.hovered || id === state.selected;
          const mat = mesh.material;
          mat.emissiveIntensity = isActive
            ? 1.2 + Math.sin(elapsed * 4) * 0.2
            : 0.4 + Math.sin(elapsed * 1.5 + mesh.position.x) * 0.1;
          mesh.scale.setScalar(isActive ? 1.3 : 1);
        }

        // Animate flow particles
        for (const flow of flowLines) {
          flow.t += flow.speed * 0.01;
          if (flow.t > 1) flow.t = 0;
          const pos = flow.from.clone().lerp(flow.to, flow.t);
          flow.particle.position.copy(pos);
          // Fade particle at endpoints
          const edgeFade = Math.min(flow.t, 1 - flow.t) * 4;
          flow.particle.material.opacity = Math.min(1, edgeFade) * 0.9;
        }

        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      // ─── Resize ────────────────────────────────────────────────────────
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const w = entry.contentRect.width;
          const h = entry.contentRect.height;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      });
      resizeObserver.observe(container);

      state.mounted = true;

      // ─── Cleanup ───────────────────────────────────────────────────────
      cleanup(() => {
        disposed = true;
        cancelAnimationFrame(animFrame);
        resizeObserver.disconnect();
        renderer.domElement.removeEventListener("pointermove", onPointerMove);
        renderer.domElement.removeEventListener("pointerdown", onPointerDown);
        controls.dispose();
        for (const g of geometries) g.dispose();
        for (const m of materials) m.dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement);
        }
      });
    } catch {
      // WebGL failure — fallback handled by parent
    }
  });

  const activeId = state.hovered ?? state.selected;
  const active = activeId ? NODE_BY_ID[activeId] : undefined;

  return (
    <figure style={{ margin: 0 }}>
      <div style={{ position: "relative", width: "100%" }}>
        {/* 3D canvas container */}
        <div
          ref={containerRef}
          style={{
            width: "100%",
            height: "440px",
            background: "transparent",
            borderRadius: "4px",
          }}
          aria-label="Interactive 3D system architecture — drag to rotate, click nodes for details"
        />

        {/* Placeholder while the WebGL graph initialises (and the permanent
            state when reduced-motion is set or WebGL is unavailable). */}
        {!state.mounted && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "ui-monospace, monospace",
              fontSize: "11px",
              color: "rgba(244, 244, 245, 0.35)",
              border: "1px solid rgba(244, 244, 245, 0.08)",
              letterSpacing: "0.08em",
            }}
          >
            initialising 3D module graph — the 2D blueprint above carries the
            same data
          </div>
        )}

        {/* Layer legend — top-left overlay */}
        {state.mounted && (
          <div
            style={{
              position: "absolute",
              top: "0.75rem",
              left: "0.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              fontFamily: "ui-monospace, monospace",
              fontSize: "9px",
              color: "#f4f4f5",
              opacity: 0.6,
              pointerEvents: "none",
            }}
          >
            {Object.entries(LAYER_COLORS).map(([layer, color]) => (
              <div key={layer} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    background: `#${color.toString(16).padStart(6, "0")}`,
                    borderRadius: "50%",
                  }}
                />
                {layer.toUpperCase()}
              </div>
            ))}
          </div>
        )}

        {/* Interaction hint — top-right */}
        {state.mounted && (
          <div
            style={{
              position: "absolute",
              top: "0.75rem",
              right: "0.75rem",
              fontFamily: "ui-monospace, monospace",
              fontSize: "9px",
              color: "#f4f4f5",
              opacity: 0.35,
              pointerEvents: "none",
            }}
          >
            drag to orbit · click a node
          </div>
        )}
      </div>

      {/* Detail panel */}
      <div
        aria-live="polite"
        style={{
          marginTop: "0.5rem",
          padding: "0.75rem 1rem",
          minHeight: "64px",
          background: "#0a0a0c",
          border: active
            ? "1px solid rgba(34, 211, 238, 0.4)"
            : "1px solid rgba(244, 244, 245, 0.1)",
          fontFamily: "ui-monospace, monospace",
          fontSize: "11px",
          lineHeight: 1.7,
          color: "#f4f4f5",
        }}
      >
        {active ? (
          <>
            <span style={{ color: "#22d3ee" }}>{active.module.file}</span>
            {"  —  "}
            <span style={{ opacity: 0.9 }}>{active.module.label}</span>
            <span
              style={{
                marginLeft: "0.5rem",
                padding: "0.1rem 0.4rem",
                fontSize: "9px",
                background: `rgba(${LAYER_COLORS[active.module.layer].toString(16).padStart(6, "0").slice(0, 2)}, ${parseInt(LAYER_COLORS[active.module.layer].toString(16).padStart(6, "0").slice(2, 4), 16)}, ${parseInt(LAYER_COLORS[active.module.layer].toString(16).padStart(6, "0").slice(4, 6), 16)}, 0.15)`,
                color: `#${LAYER_COLORS[active.module.layer].toString(16).padStart(6, "0")}`,
                borderRadius: "2px",
              }}
            >
              {active.module.layer.toUpperCase()}
            </span>
            <div style={{ opacity: 0.65, marginTop: "0.25rem" }}>{active.module.purpose}</div>
          </>
        ) : (
          <span style={{ opacity: 0.4 }}>
            hover or click any 3D node for its role — drag to orbit the graph
          </span>
        )}
      </div>

      <figcaption
        style={{
          marginTop: "0.75rem",
          fontFamily: "ui-monospace, monospace",
          fontSize: "10px",
          color: "#f4f4f5",
          opacity: 0.5,
          lineHeight: 1.6,
        }}
      >
        <span style={{ color: "#22d3ee" }}>Figure 1b.</span> 3D system
        architecture graph. Nodes are colored by layer (entry · core · infra ·
        state · interface); animated particles trace the live data flows
        between modules — dispatch, ACP transport, shared-log append/read,
        session persistence, and the control surfaces.
      </figcaption>
    </figure>
  );
});

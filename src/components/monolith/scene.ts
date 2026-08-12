/**
 * 3D Monolith Scene — Three.js + OrbitControls + fog shader + camera intro.
 *
 * Initializes the 3D monolith scene inside a container element.
 * Returns a handle with a `dispose()` method for cleanup.
 *
 * @module monolith/scene
 */
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { updateFogTime } from "./fog-shader";
import { playCameraIntro } from "./camera-intro";
import { buildLandscape } from "./landscape";
import { initMousePhysics } from "./mouse-physics";
import { buildWizard } from "./wizard";

export interface SceneHandle {
  /** Cleans up renderer, scene, controls, geometry, materials, observers. */
  dispose(): void;
}

/**
 * Initializes the 3D monolith scene inside a container element.
 */
export function init(container: HTMLElement): SceneHandle {
  // Guard against zero-size containers
  const width = container.clientWidth || 1;
  const height = container.clientHeight || 1;

  // ─── Renderer ────────────────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);
  renderer.setClearColor(0x0a0a0c, 1);
  // Realism pass: physically-correct lighting + ACES tone mapping + sRGB.
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  // ─── Scene + Fog ─────────────────────────────────────────────────────
  const scene = new THREE.Scene();
  // Dense atmospheric fog — swallows the far end of the corridor.
  scene.fog = new THREE.FogExp2(0x080a0e, 0.028);

  // ─── Camera ──────────────────────────────────────────────────────────
  /**
   * On portrait/narrow viewports a fixed vertical FOV frames far too much
   * ceiling and floor, which buries the headline in corridor clutter. Narrow
   * the vertical FOV as the aspect ratio drops.
   */
  const fovForAspect = (aspect: number): number => {
    if (aspect >= 1.4) return 55;
    if (aspect <= 0.6) return 38;
    // Linear ramp between the two anchors.
    return 38 + ((aspect - 0.6) / (1.4 - 0.6)) * (55 - 38);
  };

  const camera = new THREE.PerspectiveCamera(
    fovForAspect(width / height),
    width / height,
    0.1,
    200,
  );
  // Camera at the near end of the corridor, looking down its length.
  camera.position.set(0, 1.5, 28);

  // ─── Wizard figure — robed body, pyramid head, one eye per face ───────
  // Replaces the plain hexagonal monolith. The group's origin sits at the
  // figure's home position; physics syncs this transform each frame.
  const wizard = buildWizard();
  scene.add(wizard.group);
  const fogUniforms = wizard.fogUniforms;

  // ─── Impossible-architecture landscape ───────────────────────────────
  const landscape = buildLandscape(scene);

  // ─── Mouse-interactive physics — wizard wobble + debris shards ─────
  const physics = initMousePhysics(scene, camera, renderer.domElement, wizard.group);

  // ─── Lights ──────────────────────────────────────────────────────────
  // The landscape provides the key + fill lights (sun shaft, soffit, entrance).
  // A low ambient keeps the shadowed concrete legible without flattening it.
  const ambient = new THREE.AmbientLight(0x9fb0bc, 0.18);
  scene.add(ambient);

  // ─── OrbitControls ───────────────────────────────────────────────────
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  // Lock the view to a horizon-band — never look up at the ceiling or down
  // at the floor.
  controls.maxPolarAngle = Math.PI * 0.52;
  controls.minPolarAngle = Math.PI * 0.42;
  // Keep the camera close to the monolith and well inside the corridor.
  controls.minDistance = 6;
  controls.maxDistance = 22;
  // Restrict azimuth so the camera always looks roughly down the corridor
  // (toward -z) and can't swing around to face the near wall behind it.
  const azCenter = Math.PI; // looking toward -z
  controls.minAzimuthAngle = azCenter - 0.6;
  controls.maxAzimuthAngle = azCenter + 0.6;
  controls.target.set(0, 0.5, 0);
  // No auto-rotate — it swings the camera out of the corridor. A gentle
  // in-corridor sway is applied in the animate loop instead.
  controls.autoRotate = false;
  controls.enablePan = false;
  // Disable wheel zoom so scrolling the page works over the 100vh hero canvas.
  controls.enableZoom = false;

  // Corridor interior bounds for the per-frame camera clamp. Kept slightly
  // inside the walls so the camera never clips through a surface.
  const clampX = 5.5;
  const clampYMin = -1.8;
  const clampYMax = 5.2;
  const clampZMin = -34;
  const clampZMax = 34;

  // ─── Camera intro — cinematic dolly on load ──────────────────────────
  const introHandle = playCameraIntro(camera, controls);

  // ─── Clock for fog time updates ──────────────────────────────────────
  const clock = new THREE.Clock();

  // ─── Animation loop ──────────────────────────────────────────────────
  let animFrame = 0;
  const baseTargetY = controls.target.y;
  const animate = () => {
    animFrame = requestAnimationFrame(animate);
    const dt = clock.getDelta();
    const elapsed = clock.getElapsedTime();
    updateFogTime(fogUniforms, elapsed);
    landscape.update(elapsed);
    physics.update(dt);
    controls.update();
    // Hard lock the camera inside the corridor after the intro hands off.
    if (!introHandle.isRunning()) {
      camera.position.x = Math.max(-clampX, Math.min(clampX, camera.position.x));
      camera.position.y = Math.max(clampYMin, Math.min(clampYMax, camera.position.y));
      camera.position.z = Math.max(clampZMin, Math.min(clampZMax, camera.position.z));
      // Gentle in-corridor sway: subtle vertical bob + lateral drift so the
      // scene stays alive without swinging the camera out of the hallway.
      controls.target.y = baseTargetY + Math.sin(elapsed * 0.4) * 0.08;
      controls.target.x = Math.sin(elapsed * 0.27) * 0.18;
    }
    renderer.render(scene, camera);
  };
  animate();

  // ─── Resize handling ─────────────────────────────────────────────────
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const w = entry.contentRect.width;
      const h = entry.contentRect.height;
      camera.aspect = w / h;
      // Re-derive the FOV so rotating a phone doesn't reframe the corridor
      // into a wall of ceiling. Skipped while the intro tween owns the FOV.
      if (!introHandle.isRunning()) {
        camera.fov = fovForAspect(camera.aspect);
      }
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
  });
  resizeObserver.observe(container);

  // ─── Dispose (idempotent) ────────────────────────────────────────────
  let disposed = false;
  return {
    dispose() {
      if (disposed) return;
      disposed = true;
      cancelAnimationFrame(animFrame);
      resizeObserver.disconnect();
      introHandle.kill();
      physics.dispose();
      landscape.dispose();
      controls.dispose();
      wizard.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    },
  };
}

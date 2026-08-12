/**
 * Monolith Camera Intro — cinematic camera dolly on scene load (GSAP).
 *
 * 1. Camera starts at the far end of the corridor — `(0, 2, 38)` looking down
 * 2. Dolly forward to `(0, 1.5, 28)` over ~3.5s with `power2.inOut`
 * 3. Subtle look-at target shift from the terminus glow to the monolith
 * 4. After the dolly, OrbitControls auto-rotate takes over
 *
 * Respects `prefers-reduced-motion` — snaps to final position if set.
 *
 * @module monolith/camera-intro
 */
import gsap from "gsap";
import * as THREE from "three";
import type { OrbitControls } from "three/addons/controls/OrbitControls.js";

export interface IntroHandle {
  /** Kills the timeline immediately (e.g. on dispose). */
  kill(): void;
  /** True while the dolly tween is still driving the camera. */
  isRunning(): boolean;
}

/**
 * Plays the camera intro timeline.
 *
 * @param camera The PerspectiveCamera to animate
 * @param controls OrbitControls instance — disabled during intro, re-enabled after
 * @param lookAtTarget The point the camera looks at (monolith center)
 * @returns A handle with a `kill()` method for cleanup
 */
export function playCameraIntro(
  camera: THREE.PerspectiveCamera,
  controls: OrbitControls,
  lookAtTarget: THREE.Vector3 = new THREE.Vector3(0, 0.5, 0),
): IntroHandle {
  // Reduced-motion: snap to final position, no animation
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    camera.position.set(0, 1.5, 28);
    camera.lookAt(lookAtTarget);
    controls.target.copy(lookAtTarget);
    controls.update();
    return { kill() {}, isRunning() { return false; } };
  }

  const startPos = new THREE.Vector3(0, 2, 38);
  const endPos = new THREE.Vector3(0, 1.5, 28);
  const startLook = new THREE.Vector3(0, 1, -10);
  const endLook = lookAtTarget.clone();

  camera.position.copy(startPos);
  controls.enabled = false;
  controls.autoRotate = false;

  // Capture the FOV the scene derived for this aspect ratio so the dolly
  // narrows toward the correct destination instead of always 55.
  const targetFov = camera.fov;

  const timeline = gsap.timeline({
    onComplete() {
      controls.target.copy(endLook);
      controls.enabled = true;
      // autoRotate stays off — the corridor lock keeps the camera inside.
      controls.update();
    },
  });

  // Dolly — camera moves forward down the corridor over 3.5s
  timeline.to(
    camera.position,
    {
      x: endPos.x,
      y: endPos.y,
      z: endPos.z,
      duration: 3.5,
      ease: "power2.inOut",
      onUpdate() {
        const t = timeline.progress();
        const look = startLook.clone().lerp(endLook, t);
        camera.lookAt(look);
      },
    },
    0,
  );

  // FOV breathing — start wide, narrow to the aspect-appropriate target FOV.
  timeline.fromTo(
    camera,
    {
      fov: Math.min(targetFov + 10, 70),
    },
    {
      fov: targetFov,
      duration: 3.5,
      ease: "power2.inOut",
      onUpdate() {
        camera.updateProjectionMatrix();
      },
    },
    0,
  );

  return {
    kill() {
      timeline.kill();
      camera.position.copy(endPos);
      camera.fov = targetFov;
      camera.updateProjectionMatrix();
      controls.target.copy(endLook);
      controls.enabled = true;
      controls.update();
    },
    isRunning() {
      return timeline.isActive();
    },
  };
}

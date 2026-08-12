/**
 * Wizard Figure — Three.js.
 *
 * Replaces the plain hexagonal monolith with a robed wizard:
 *  - A tapered cylindrical robe (narrow shoulders, wide hem) in cold white.
 *  - A four-sided pyramid head sitting on the robe's shoulders.
 *  - A single glowing cyan eye on each of the pyramid's four faces.
 *  - A soft cyan point light near the head so the eyes read as a magical
 *    source and spill onto the robe.
 *
 * The figure matches the original monolith's footprint (base on the corridor
 * floor at y = -3, apex near y = +3) so existing camera framing still holds.
 *
 * @module monolith/wizard
 */
import * as THREE from "three";
import { createFogUniforms, injectFogShader } from "./fog-shader";

export interface WizardHandle {
  group: THREE.Group;
  fogUniforms: ReturnType<typeof createFogUniforms>;
  /** Disposes robe/head/eye geometries and materials. */
  dispose(): void;
}

export function buildWizard(): WizardHandle {
  const group = new THREE.Group();
  const geometries: THREE.BufferGeometry[] = [];
  const materials: THREE.Material[] = [];

  // ─── Robe — tapered cylinder, narrow at the shoulders, wide at the hem ──
  const robeHeight = 4.4;
  const robeGeo = new THREE.CylinderGeometry(0.45, 1.7, robeHeight, 12, 1, true);
  geometries.push(robeGeo);
  const robeMat = new THREE.MeshStandardMaterial({
    color: 0xf5f5f5,
    roughness: 0.85,
    metalness: 0.05,
    side: THREE.DoubleSide,
  });
  materials.push(robeMat);
  const fogUniforms = createFogUniforms();
  injectFogShader(robeMat, fogUniforms);
  const robe = new THREE.Mesh(robeGeo, robeMat);
  // Robe local center at y=0 → base at -2.2, top at +2.2.
  robe.castShadow = true;
  robe.receiveShadow = true;
  group.add(robe);

  // ─── Head — four-sided pyramid (ConeGeometry with 4 radial segments) ────
  const headRadius = 1.15;
  const headHeight = 1.7;
  const headGeo = new THREE.ConeGeometry(headRadius, headHeight, 4, 1);
  geometries.push(headGeo);
  const headMat = new THREE.MeshStandardMaterial({
    color: 0xf5f5f5,
    roughness: 0.8,
    metalness: 0.1,
    flatShading: true,
  });
  materials.push(headMat);
  injectFogShader(headMat, fogUniforms);
  const head = new THREE.Mesh(headGeo, headMat);
  // Cone apex at +h/2, base at -h/2. Rest the base on the robe's shoulders
  // (robe top = +2.2) with a slight overlap so no gap shows.
  head.position.y = 2.2 + headHeight / 2 - 0.1;
  head.castShadow = true;
  head.receiveShadow = true;
  // Rotate so a flat face points toward the camera (+z), not an edge.
  head.rotation.y = Math.PI / 4;
  group.add(head);

  // ─── Eyes — one glowing cyan eye on each of the four pyramid faces ──────
  // After the head's y-rotation of PI/4, the face centroids lie along the
  // cardinal axes (+x, +z, -x, -z). Centroid radial ≈ (2/3)*R*cos(45°);
  // centroid y (relative to cone center) = -h/6.
  const centroidR = (2 / 3) * headRadius * Math.cos(Math.PI / 4);
  const centroidY = -headHeight / 6;

  const eyeGeo = new THREE.SphereGeometry(0.16, 16, 16);
  geometries.push(eyeGeo);
  const eyeMat = new THREE.MeshStandardMaterial({
    color: 0x000000,
    emissive: 0x22d3ee,
    emissiveIntensity: 3.2,
    roughness: 0.2,
    metalness: 0.1,
  });
  materials.push(eyeMat);

  for (let i = 0; i < 4; i++) {
    const az = (i * Math.PI) / 2; // 0, 90, 180, 270°
    const eye = new THREE.Mesh(eyeGeo, eyeMat);
    // Sit the eye just proud of the face surface so it reads as an inset gem.
    const offset = 0.07;
    eye.position.set(
      Math.cos(az) * (centroidR + offset),
      centroidY,
      Math.sin(az) * (centroidR + offset),
    );
    // Parent to the head so the head's rotation carries the eyes.
    head.add(eye);
  }

  // ─── Magical glow — a cyan point light tucked under the pyramid base so
  //     the eyes feel like a single source and cyan light spills onto the
  //     robe's shoulders. Kept short-range for performance. ────────────────
  const eyeLight = new THREE.PointLight(0x22d3ee, 4, 5, 2);
  eyeLight.position.set(0, -headHeight / 2 + 0.15, 0);
  head.add(eyeLight);

  // ─── Place the figure: robe base rests on the corridor floor (y = -3) ───
  // Robe base in group space = -2.2; world base = group.y - 2.2 = -3 → group.y = -0.8.
  group.position.set(0, -0.8, 0);

  return {
    group,
    fogUniforms,
    dispose() {
      for (const g of geometries) g.dispose();
      for (const m of materials) m.dispose();
    },
  };
}

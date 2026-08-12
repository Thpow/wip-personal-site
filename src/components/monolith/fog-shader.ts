/**
 * Monolith Fog Shader — volumetric fog via onBeforeCompile.
 *
 * Injects depth-based exponential fog + cyan rim glow into a
 * MeshStandardMaterial without replacing it — preserving PBR lighting
 * while adding atmospheric depth.
 *
 * @module monolith/fog-shader
 */
import * as THREE from "three";

/**
 * Fog shader uniforms — shared between the material injection and the
 * animation loop so `uTime` can be updated each frame.
 */
export interface FogUniforms {
  uTime: { value: number };
  uFogColor: { value: THREE.Color };
  uFogDensity: { value: number };
  uRimColor: { value: THREE.Color };
  uRimPower: { value: number };
}

/**
 * Creates the fog uniforms with default monolith-aesthetic values.
 */
export function createFogUniforms(): FogUniforms {
  return {
    uTime: { value: 0 },
    // Matches scene.fog so the monolith dissolves into the same haze.
    uFogColor: { value: new THREE.Color(0x0b0f14) },
    uFogDensity: { value: 0.014 },
    uRimColor: { value: new THREE.Color(0x22d3ee) },
    uRimPower: { value: 2.0 },
  };
}

/**
 * Injects volumetric fog + cyan rim lighting into a MeshStandardMaterial
 * via `onBeforeCompile`. The material is modified in-place.
 */
export function injectFogShader(
  material: THREE.MeshStandardMaterial,
  uniforms: FogUniforms,
): void {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = uniforms.uTime;
    shader.uniforms.uFogColor = uniforms.uFogColor;
    shader.uniforms.uFogDensity = uniforms.uFogDensity;
    shader.uniforms.uRimColor = uniforms.uRimColor;
    shader.uniforms.uRimPower = uniforms.uRimPower;

    shader.vertexShader = shader.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
         varying vec3 vWorldPos;
         varying float vViewDepth;`,
      )
      // NOTE: must inject after <project_vertex> — `mvPosition` is declared
      // there, not in <begin_vertex>. Injecting earlier fails to compile.
      .replace(
        "#include <project_vertex>",
        `#include <project_vertex>
         vec4 fogWorldPos = modelMatrix * vec4(transformed, 1.0);
         vWorldPos = fogWorldPos.xyz;
         vViewDepth = -mvPosition.z;`,
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>
         uniform float uTime;
         uniform vec3 uFogColor;
         uniform float uFogDensity;
         uniform vec3 uRimColor;
         uniform float uRimPower;
         varying vec3 vWorldPos;
         varying float vViewDepth;`,
      )
      // NOTE: `fogFactor` is already declared by three's own <fog_fragment>
      // when scene.fog is set, so this uses distinct names to avoid a
      // redefinition compile error.
      .replace(
        "#include <dithering_fragment>",
        `#include <dithering_fragment>

         float volFog = 1.0 - exp(-uFogDensity * uFogDensity * vViewDepth * vViewDepth);
         float volDrift = sin(uTime * 0.1 + vWorldPos.x * 0.3) * 0.02;
         volFog = clamp(volFog + volDrift, 0.0, 1.0);

         float rimFactor = 1.0 - smoothstep(0.0, 0.5, vWorldPos.y + 3.0);
         rimFactor = pow(rimFactor, uRimPower);
         vec3 rim = uRimColor * rimFactor * 0.15;

         gl_FragColor.rgb = mix(gl_FragColor.rgb + rim, uFogColor, volFog);`,
      );
  };

  material.needsUpdate = true;
}

/**
 * Updates the fog shader's time uniform. Call in the animation loop.
 */
export function updateFogTime(uniforms: FogUniforms, time: number): void {
  uniforms.uTime.value = time;
}

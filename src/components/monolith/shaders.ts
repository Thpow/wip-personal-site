/**
 * GLSL shaders for the Digital Monolith 3D scene.
 *
 * Three shader programs exported as template strings:
 * 1. FOG_FRAGMENT_SHADER — depth-based atmospheric fog
 * 2. DISPLACEMENT_VERTEX_SHADER — subtle static surface displacement
 * 3. TRANSITION_FRAGMENT_SHADER — section-transition fog thickening
 *
 * All shaders target WebGL1 compatibility (Safari) with WebGL2 enhancement.
 * No shader exceeds ~40 lines of GLSL — compilation is fast and memory-light.
 *
 * @module monolith/shaders
 */

/**
 * Fragment shader: depth-based atmospheric fog.
 *
 * Mixes between the surface color (near) and fog color (far) using the
 * depth buffer. Distant fragments are desaturated toward grayscale so
 * the cyan accent (#22d3ee) reads as the ONLY saturated color in the scene.
 *
 * Uniforms:
 * - `uFogColor` (vec3): fog color — defaults to #0a0a0c (0.039, 0.039, 0.047)
 * - `uFogDensity` (float): fog density — 0.04 default, 0.08 for deep strata
 * - `uFogNear` (float): near fog start distance — 1.0
 * - `uFogFar` (float): far fog end distance — 20.0
 *
 * Varyings (from vertex shader):
 * - `vDepth` (float): linearized depth value (gl_FragCoord.z / gl_FragCoord.w)
 * - `vColor` (vec3): surface color from vertex shader
 */
export const FOG_FRAGMENT_SHADER = /* glsl */ `
uniform vec3 uFogColor;
uniform float uFogDensity;
uniform float uFogNear;
uniform float uFogFar;

varying float vDepth;
varying vec3 vColor;

void main() {
  // Linearize depth and clamp to [0, 1]
  float fogFactor = smoothstep(uFogNear, uFogFar, vDepth);
  fogFactor = clamp(fogFactor * uFogDensity * 10.0, 0.0, 1.0);

  // Mix surface color with fog color
  vec3 color = mix(vColor, uFogColor, fogFactor);

  // Desaturate distant fragments (>60% fog mix) toward grayscale
  // so cyan accent reads as the only saturated color
  if (fogFactor > 0.6) {
    float gray = dot(color, vec3(0.299, 0.587, 0.114));
    float desatMix = (fogFactor - 0.6) / 0.4;
    color = mix(color, vec3(gray), desatMix * 0.8);
  }

  gl_FragColor = vec4(color, 1.0);
}
`;

/**
 * Vertex shader: subtle static surface displacement.
 *
 * Displaces vertices along their normals using a hash-based noise function.
 * Displacement is capped at 0.05 units — the monolith looks like stone, not
 * liquid. The noise is low-frequency (sampled at 0.3 scale) for smooth
 * surface variation. uTime is frozen at 0.0 for static displacement (no
 * animation — the monolith is perfectly still).
 *
 * Uniforms:
 * - `uTime` (float): time value — frozen at 0.0 for static displacement
 * - `uDisplacementScale` (float): max displacement — 0.05 units
 *
 * Attributes:
 * - `position` (vec3): vertex position (Three.js default)
 * - `normal` (vec3): vertex normal (Three.js default)
 *
 * Varyings (passed to fragment shader):
 * - `vDepth` (float): linearized depth for fog calculation
 * - `vColor` (vec3): surface color (white #f4f4f5 for monolith)
 */
export const DISPLACEMENT_VERTEX_SHADER = /* glsl */ `
uniform float uTime;
uniform float uDisplacementScale;

varying float vDepth;
varying vec3 vColor;

// Hash-based noise (deterministic, no texture lookup)
float hash(vec3 p) {
  p = fract(p * vec3(443.897, 441.423, 437.195));
  p += dot(p, p.yzx + 19.19);
  return fract((p.x + p.y) * p.z);
}

// Smoothed 3D noise via trilinear interpolation of hash
float noise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x),
        mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
    mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
        mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
    f.z
  );
}

void main() {
  // Low-frequency noise for smooth surface variation
  float n = noise(position * 0.3 + uTime * 0.0);
  float displacement = (n - 0.5) * uDisplacementScale;

  // Displace along normal
  vec3 displaced = position + normal * displacement;

  // Standard projection
  vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
  vDepth = -mvPosition.z;

  // Monolith surface color — white
  vColor = vec3(0.957, 0.957, 0.961); // #f4f4f5

  gl_Position = projectionMatrix * mvPosition;
}
`;

/**
 * Fragment shader: section-transition fog thickening.
 *
 * Used during camera transitions between research paper sections. As the
 * camera moves to a new section, this shader thickens the fog over 800ms
 * then holds at the new density. The transition is driven by a single
 * uniform `uTransitionProgress` (0 = no transition, 1 = full transition).
 *
 * Uniforms:
 * - `uFogColor` (vec3): fog color — #0a0a0c
 * - `uBaseDensity` (float): base fog density — 0.04
 * - `uPeakDensity` (float): peak fog density during transition — 0.12
 * - `uTransitionProgress` (float): 0.0 to 1.0, drives the fog thickening
 *
 * Varyings:
 * - `vDepth` (float): linearized depth
 * - `vColor` (vec3): surface color
 */
export const TRANSITION_FRAGMENT_SHADER = /* glsl */ `
uniform vec3 uFogColor;
uniform float uBaseDensity;
uniform float uPeakDensity;
uniform float uTransitionProgress;

varying float vDepth;
varying vec3 vColor;

void main() {
  // Interpolate density from base to peak based on transition progress
  float density = mix(uBaseDensity, uPeakDensity, uTransitionProgress);

  float fogFactor = smoothstep(1.0, 20.0, vDepth);
  fogFactor = clamp(fogFactor * density * 10.0, 0.0, 1.0);

  vec3 color = mix(vColor, uFogColor, fogFactor);

  // Full desaturation at peak transition — the world fades to monochrome
  if (uTransitionProgress > 0.5) {
    float gray = dot(color, vec3(0.299, 0.587, 0.114));
    color = mix(color, vec3(gray), (uTransitionProgress - 0.5) * 2.0);
  }

  gl_FragColor = vec4(color, 1.0);
}
`;

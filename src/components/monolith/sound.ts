/**
 * Sound System — "Cavern Resonance"
 *
 * Three layers sharing one ConvolverNode (4s exponential decay reverb):
 * 1. Cavern Drone — 55Hz + 110Hz oscillators at 30% gain (the monolith's hum)
 * 2. Orbit Harmonics — 220-330Hz oscillator mapped to orbit angle at 10% gain
 *    (the monolith SOUNDS different as you orbit it — stillness that resonates)
 * 3. Navigation Strikes — 100ms filtered noise burst, lowpass 800Hz (percussive)
 *
 * Master gain 0.08 (subtle — ambient, not foreground). `enable()` must be
 * called from a user gesture (browser autoplay policy). `disable()` ramps
 * gain to 0 over 0.5s then suspends the context.
 *
 * On `prefers-reduced-motion: reduce`: returns a no-op object (all methods
 * empty) — sound is motion for the ears.
 *
 * Pure TypeScript + Web Audio API. No Three.js dependency.
 *
 * @module monolith/sound
 */

/** Sound system handle returned by `createSoundSystem`. */
export interface SoundSystem {
  /** Creates the AudioContext (must be called from a user gesture), starts drones. */
  enable(): void;
  /** Ramps master gain to 0 over 0.5s, then suspends the context. */
  disable(): void;
  /** Updates the orbit-harmonics oscillator frequency from a camera orbit angle (0-2π). */
  setOrbitAngle(angle: number): void;
  /** Triggers a 100ms percussive noise burst through the reverb. */
  playNavigationStrike(): void;
  /** Cleans up all audio nodes and closes the context. */
  dispose(): void;
}

/** No-op sound system for reduced-motion users. */
const NO_OP_SOUND_SYSTEM: SoundSystem = {
  enable() {},
  disable() {},
  setOrbitAngle() {},
  playNavigationStrike() {},
  dispose() {},
};

// ─── Constants ────────────────────────────────────────────────────────

const MASTER_GAIN = 0.08;
const DRONE_GAIN = 0.3;
const HARMONIC_GAIN = 0.1;
const DRONE_FREQ_LOW = 55; // A1 — sub-bass cavern hum
const DRONE_FREQ_HIGH = 110; // A2 — octave above
const HARMONIC_FREQ_MIN = 220; // A3
const HARMONIC_FREQ_MAX = 330; // E4 — perfect fifth range
const REVERB_DURATION = 4; // seconds — exponential decay tail
const REVERB_DECAY = 2; // exponential decay rate
const STRIKE_DURATION = 0.1; // 100ms
const STRIKE_LOWPASS = 800; // Hz
const DISABLE_RAMP_TIME = 0.5; // seconds

// ─── Impulse response generator ───────────────────────────────────────

/**
 * Generates a procedural impulse response for the ConvolverNode.
 * 4 seconds of stereo noise with exponential decay — a cavernous tail.
 */
function createImpulseResponse(
  context: AudioContext,
  duration: number,
  decay: number,
): AudioBuffer {
  const sampleRate = context.sampleRate;
  const length = Math.floor(sampleRate * duration);
  const buffer = context.createBuffer(2, length, sampleRate);

  for (let channel = 0; channel < 2; channel++) {
    const data = buffer.getChannelData(channel);
    for (let i = 0; i < length; i++) {
      // Exponential decay: 1 at t=0, → 0 at t=duration
      const t = i / length;
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, decay);
    }
  }

  return buffer;
}

// ─── Factory ──────────────────────────────────────────────────────────

/**
 * Creates the sound system. Checks `prefers-reduced-motion` and returns a
 * no-op if the user has requested reduced motion.
 *
 * @returns A `SoundSystem` handle (or no-op if reduced-motion)
 */
export function createSoundSystem(): SoundSystem {
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return NO_OP_SOUND_SYSTEM;
  }

  let context: AudioContext | null = null;
  let masterGain: GainNode | null = null;
  let convolver: ConvolverNode | null = null;
  let droneOscLow: OscillatorNode | null = null;
  let droneOscHigh: OscillatorNode | null = null;
  let droneGain: GainNode | null = null;
  let harmonicOsc: OscillatorNode | null = null;
  let harmonicGain: GainNode | null = null;
  let enabled = false;

  function enable(): void {
    if (enabled) return;

    // Lazy-create AudioContext (must be from user gesture)
    if (!context) {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      context = new Ctor();
    }

    if (context.state === "suspended") {
      void context.resume();
    }

    // Master gain
    masterGain = context.createGain();
    masterGain.gain.value = 0; // start silent, ramp up
    masterGain.connect(context.destination);

    // Shared reverb
    convolver = context.createConvolver();
    convolver.buffer = createImpulseResponse(context, REVERB_DURATION, REVERB_DECAY);
    convolver.connect(masterGain);

    // ─── Layer 1: Cavern Drone ────────────────────────────────────────
    droneGain = context.createGain();
    droneGain.gain.value = DRONE_GAIN;
    droneGain.connect(convolver);

    droneOscLow = context.createOscillator();
    droneOscLow.type = "sine";
    droneOscLow.frequency.value = DRONE_FREQ_LOW;
    droneOscLow.connect(droneGain);
    droneOscLow.start();

    droneOscHigh = context.createOscillator();
    droneOscHigh.type = "sine";
    droneOscHigh.frequency.value = DRONE_FREQ_HIGH;
    droneOscHigh.connect(droneGain);
    droneOscHigh.start();

    // ─── Layer 2: Orbit Harmonics ─────────────────────────────────────
    harmonicGain = context.createGain();
    harmonicGain.gain.value = HARMONIC_GAIN;
    harmonicGain.connect(convolver);

    harmonicOsc = context.createOscillator();
    harmonicOsc.type = "sine";
    harmonicOsc.frequency.value = HARMONIC_FREQ_MIN; // start at min
    harmonicOsc.connect(harmonicGain);
    harmonicOsc.start();

    // Ramp master gain up
    const now = context.currentTime;
    masterGain.gain.cancelScheduledValues(now);
    masterGain.gain.setValueAtTime(0, now);
    masterGain.gain.linearRampToValueAtTime(MASTER_GAIN, now + 0.5);

    enabled = true;
  }

  function disable(): void {
    if (!context || !masterGain || !enabled) return;

    const now = context.currentTime;
    masterGain.gain.cancelScheduledValues(now);
    masterGain.gain.setValueAtTime(masterGain.gain.value, now);
    masterGain.gain.linearRampToValueAtTime(0, now + DISABLE_RAMP_TIME);

    window.setTimeout(() => {
      if (context && context.state === "running") {
        void context.suspend();
      }
    }, DISABLE_RAMP_TIME * 1000 + 50);

    enabled = false;
  }

  function setOrbitAngle(angle: number): void {
    if (!context || !harmonicOsc || !enabled) return;

    // Map angle (0-2π) to frequency (220-330Hz)
    const normalized = (angle % (Math.PI * 2)) / (Math.PI * 2); // 0-1
    const freq = HARMONIC_FREQ_MIN + normalized * (HARMONIC_FREQ_MAX - HARMONIC_FREQ_MIN);

    const now = context.currentTime;
    harmonicOsc.frequency.cancelScheduledValues(now);
    harmonicOsc.frequency.setValueAtTime(harmonicOsc.frequency.value, now);
    harmonicOsc.frequency.linearRampToValueAtTime(freq, now + 0.1);
  }

  function playNavigationStrike(): void {
    if (!context || !convolver || !enabled) return;

    const now = context.currentTime;

    // Create a short noise buffer
    const sampleRate = context.sampleRate;
    const length = Math.floor(sampleRate * STRIKE_DURATION);
    const noiseBuffer = context.createBuffer(1, length, sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noiseSource = context.createBufferSource();
    noiseSource.buffer = noiseBuffer;

    // Lowpass filter at 800Hz
    const lowpass = context.createBiquadFilter();
    lowpass.type = "lowpass";
    lowpass.frequency.value = STRIKE_LOWPASS;

    // Envelope: quick attack, exponential decay
    const strikeGain = context.createGain();
    strikeGain.gain.setValueAtTime(0.5, now);
    strikeGain.gain.exponentialRampToValueAtTime(0.001, now + STRIKE_DURATION);

    noiseSource.connect(lowpass);
    lowpass.connect(strikeGain);
    strikeGain.connect(convolver);

    noiseSource.start(now);
    noiseSource.stop(now + STRIKE_DURATION);
  }

  function dispose(): void {
    if (!context) return;

    try {
      droneOscLow?.stop();
      droneOscHigh?.stop();
      harmonicOsc?.stop();
    } catch {
      // Oscillators may already be stopped
    }

    droneOscLow?.disconnect();
    droneOscHigh?.disconnect();
    droneGain?.disconnect();
    harmonicOsc?.disconnect();
    harmonicGain?.disconnect();
    convolver?.disconnect();
    masterGain?.disconnect();

    void context.close();
    context = null;
    masterGain = null;
    convolver = null;
    droneOscLow = null;
    droneOscHigh = null;
    droneGain = null;
    harmonicOsc = null;
    harmonicGain = null;
    enabled = false;
  }

  return {
    enable,
    disable,
    setOrbitAngle,
    playNavigationStrike,
    dispose,
  };
}

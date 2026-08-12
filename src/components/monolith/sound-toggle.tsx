import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { createSoundSystem, type SoundSystem } from "./sound";

/**
 * Sound Toggle — carved glyph in the bottom-right corner.
 *
 * A small inline SVG (3 horizontal lines of varying length) that looks like
 * an inscription, not a button. Cyan when active, white at 40% opacity when
 * inactive. Clicking toggles the ambient sound system.
 *
 * The sound system is created lazily on first enable (must be from a user
 * gesture per browser autoplay policy). The toggle stores the SoundSystem
 * instance in a Qwik store so it persists across toggles.
 *
 * @module monolith/sound-toggle
 */
export const SoundToggle = component$(() => {
  const state = useStore<{
    active: boolean;
    sound: SoundSystem | null;
  }>({
    active: false,
    sound: null,
  });

  // Dispose sound system on unmount
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    ({ cleanup }) => {
      cleanup(() => {
        state.sound?.dispose();
      });
    },
    { strategy: "document-ready" },
  );

  return (
    <button
      type="button"
      role="switch"
      aria-label="Toggle ambient sound"
      aria-checked={state.active ? "true" : "false"}
      onClick$={() => {
        if (!state.sound) {
          state.sound = createSoundSystem();
        }
        if (state.active) {
          state.sound.disable();
          state.active = false;
        } else {
          state.sound.enable();
          state.active = true;
        }
      }}
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: "var(--z-overlay)",
        background: "transparent",
        border: "none",
        padding: "0.5rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.6,
        transition: "opacity 0.2s",
      }}
      onMouseEnter$={(e) => {
        (e.currentTarget as HTMLButtonElement).style.opacity = "1";
      }}
      onMouseLeave$={(e) => {
        (e.currentTarget as HTMLButtonElement).style.opacity = "0.6";
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Three horizontal lines of varying length — carved sound-wave glyph */}
        <line
          x1="3"
          y1="7"
          x2="21"
          y2="7"
          stroke={state.active ? "var(--monolith-accent)" : "var(--monolith-white)"}
          stroke-width="2"
          stroke-linecap="round"
          opacity={state.active ? 1 : 0.4}
        />
        <line
          x1="6"
          y1="12"
          x2="18"
          y2="12"
          stroke={state.active ? "var(--monolith-accent)" : "var(--monolith-white)"}
          stroke-width="2"
          stroke-linecap="round"
          opacity={state.active ? 1 : 0.4}
        />
        <line
          x1="9"
          y1="17"
          x2="15"
          y2="17"
          stroke={state.active ? "var(--monolith-accent)" : "var(--monolith-white)"}
          stroke-width="2"
          stroke-linecap="round"
          opacity={state.active ? 1 : 0.4}
        />
      </svg>
    </button>
  );
});

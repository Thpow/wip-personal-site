/**
 * Agent Monolith Wrapper — Qwik component.
 *
 * Wraps the 3D agent monolith scene with the same Promise.race timeout pattern
 * as the hero wrapper. Falls back to the existing SVG topology diagram on
 * timeout/failure. This is the "3D-rotatable research models" the owner
 * requested — the multi-agent system as an orbitable monolith.
 *
 * @module research/agent-monolith
 */
import {
  component$,
  useSignal,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import { Topology } from "./topology";

const TIMEOUT_MS = 5000;

export const AgentMonolith = component$(() => {
  const containerRef = useSignal<HTMLDivElement>();
  const state = useStore<{ mounted: boolean; failed: boolean }>({
    mounted: false,
    failed: false,
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async ({ cleanup }) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const container = containerRef.value;
    if (!container) return;

    let dispose: (() => void) | null = null;
    let timeoutHandle: ReturnType<typeof setTimeout> | null = null;

    try {
      const importPromise = import("./agent-monolith-scene").then((m) => {
        if (state.failed) return;
        const handle = m.init(container);
        dispose = handle.dispose;
        state.mounted = true;
        if (timeoutHandle) clearTimeout(timeoutHandle);
      });

      const timeoutPromise = new Promise<void>((resolve) => {
        timeoutHandle = setTimeout(() => {
          if (!state.mounted) {
            state.failed = true;
          }
          resolve();
        }, TIMEOUT_MS);
      });

      await Promise.race([importPromise, timeoutPromise]);
    } catch {
      state.failed = true;
    } finally {
      if (timeoutHandle) clearTimeout(timeoutHandle);
    }

    cleanup(() => {
      if (dispose) dispose();
    });
  });

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "500px",
        minHeight: "400px",
        background: "#050505",
        overflow: "hidden",
        borderRadius: "4px",
      }}
      aria-label="3D Agent Architecture Monolith — drag to rotate"
    >
      {/* 3D canvas container */}
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
        aria-label="Interactive 3D agent monolith — drag to rotate"
      />

      {/* SVG topology fallback — visible until 3D mounts or if 3D fails */}
      {!state.mounted && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            padding: "1rem",
          }}
        >
          <Topology />
        </div>
      )}
    </div>
  );
});

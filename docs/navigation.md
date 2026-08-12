# Navigation Module — Wayfinding Through the Monolith

The navigation system provides wayfinding through the site's 7 sections without adding permanent visual noise. The principle: invitation, not announcement. The nav is felt, not seen.

## Files

- `face-nav.tsx` — 7-dot navigation on the right edge of the viewport. Each dot is a 4×4px square (architectural, not organic). Active dot: 6×6px cyan. Inactive: 4×4px white at 20% opacity. Hover: dot expands + monospace 10px label appears to the left ("HERO", "PROFILE", "EXPERIENCE", "PROJECTS", "SKILLS", "CONTACT", "RESEARCH"). Transition: 400ms cubic-bezier (expo-out) — the dot settles with weight. `prefers-reduced-motion`: transition disabled (instant). Mobile guard: hidden on screens <768px. Accessibility: `aria-label="Section navigation"` on `<nav>` container, `aria-label={s.label}` on each dot, `aria-current={isActive ? "true" : undefined}` on active dot.
- `scroll-progress.tsx` — 2px vertical line on the left edge of the viewport. A cyan fill (`var(--monolith-accent)` at 40% opacity) grows from top to bottom as the user scrolls. Track: `rgba(244,244,245,0.05)` (barely visible white). Transition: 100ms linear (smooth but not laggy). `pointerEvents: none` (doesn't block clicks). `aria-hidden="true"` (decorative). `prefers-reduced-motion`: transition disabled (instant). Mobile guard: hidden on screens <768px.
- `paper-layout.tsx` (TOC) — The research paper has its own table of contents in a 200px sidebar. The TOC active link uses cyan (navigation feedback). This is the sub-section navigation within the research paper — the FaceNav handles top-level navigation, the TOC handles research sub-sections.

## Key Patterns
- **IntersectionObserver**: FaceNav uses `rootMargin: "-45% 0px -45% 0px"` — the active section is the one whose center is near the viewport center. This is more accurate than default intersection (which fires when any part of the element is visible).
- **`useVisibleTask$` with `cleanup`**: Both components use the correct Qwik cleanup pattern (`({ cleanup }) => { cleanup(() => observer.disconnect()); }`), not React's return-based pattern.
- **Conditional render**: `if (!state.visible) return null` — the nav hydrates client-side only. Server renders nothing, client renders the nav after hydration. No hydration mismatch (both server and initial client render produce `null`).
- **Mobile guard**: `if (window.innerWidth < 768) return` inside `useVisibleTask$` — the nav is hidden on mobile where screen real estate is limited.
- **Passive scroll listener**: ScrollProgress uses `{ passive: true }` for the scroll event listener — doesn't block the main thread.

## Dependencies
- Section IDs: `hero`, `profile`, `experience`, `projects`, `skills`, `contact`, `research` (all verified unique — one per file)
- CSS tokens: `--monolith-accent`, `--monolith-white`

## Art-Direction Notes
- **Squares not circles**: The dots are squares because the monolith is geometric (hexagonal prism), not organic. Circles read as biological; squares read as architectural.
- **Invitation, not announcement**: The hover labels appear only when the user expresses interest (hover). The default state is 7 small dots — minimal, almost invisible. The labels are the invitation.
- **Balanced frame**: Progress on the left edge, navigation on the right edge, content in the center. The user is framed by the structure.
- **Felt, not seen**: The scroll progress line is 40% opacity — the user perceives their progress peripherally, not centrally. It's the site's most subtle UI element.
- **Three accent roles, non-overlapping**: Section numbers (navigational), cycle-light (atmospheric), SVG strokes (informational). The FaceNav active dot and scroll progress fill are functional feedback — they never appear in the same visual context as the section numbers or SVG strokes, so the "≤3 cyan on screen" rule is automatically satisfied.

# The First Five Minutes — A Guided First Look

> *After 28 cycles of blind work, these are the most important minutes of the project. This is not a technical checklist — it tells you what to feel, not just what to check. For technical verification, see `handoff.md`.*

## Minute 0–1: The First Sight

Load `http://localhost:5173`. Don't scroll. Don't open DevTools. Just look.

- Is there a black screen? Good — that's the void.
- Is there a canvas element? You should see a dark expanse, not a white page.
- Is there a loading state? A cyan pulse at the bottom indicates the 3D scene is initializing.
- Breathe. This is the first sight after 28 cycles of darkness.

**The question**: Does the page feel like a void, not a website? If yes, the art direction landed.

## Minute 1–2: The Monolith

Wait for the loading state to clear (should take under 5 seconds). The hexagonal prism should emerge from the fog.

- Is it still? The monolith should not rotate on its own. Stillness is the design.
- Is there fog? The FogExp2 shader should create depth — the monolith should fade into darkness at its edges.
- Does the cycle-light pulse? A faint cyan light should orbit the prism, illuminating each face in turn. This is the system's heartbeat.
- Move the mouse. The cycle-light should respond to cursor pull (cannon-es physics). Gentle, weighted, not springy.
- Watch for 30 seconds without moving the mouse. The light continues its cycle. The fog shifts. The monolith stands.

**The question**: Does it feel monumental? If yes, the 3D art direction landed.

## Minute 2–3: The Inscription

Scroll slowly to the profile section (second chamber).

- Is the name "Thomas Powell" visible? It should be in monospace, not a display font.
- Is the bio split into two paragraphs? The first is identity, the second is practice.
- Is there negative space? The section should not feel crowded — at least 40% of the viewport should be empty.
- Does it feel like an inscription carved into stone, not a resume pasted onto a page?

**The question**: Does it feel like an inscription, not a resume? If yes, the content density work landed.

## Minute 3–4: The Chambers

Continue scrolling through experience, projects, skills, contact.

- Do the section numbers (01, 02, 03, 04, 05, 06) create a rhythmic scan pattern? Each should be cyan, monospace, small.
- Is the cyan restrained? At any given scroll position, you should see no more than 3–4 cyan elements. If the page feels cyan-dominant, the desaturation pass failed.
- Do the project chambers feel like rooms, not cards? The single-column layout with breathing room should feel architectural.
- Are the skill bars static? They should not animate — fixed capability, not performance theater.
- Does the contact section feel like a closing chamber, not a call-to-action?

**The question**: Is the cyan restrained and the rhythm consistent? If yes, the restraint pass landed.

## Minute 4–5: The Research Paper

Scroll to the research paper section (after contact).

- Do the SVG diagrams render? The agent topology (isometric), turn cycle (13-turn circle), and concurrent pairs (parallel tracks) should be visible.
- Are the diagrams monochrome with cyan accents? They should match the site's palette, not use arbitrary colors.
- Does the layout feel academic? Two-column where appropriate, section numbering, monospace data — it should feel like a paper, not a blog post.
- Scroll back to the footer. Read the inscription: "Built by the system this site describes. Cycle 28 complete. Built blind across 28 cycles. Verified pending."

**The question**: Does it feel like a research paper, not a blog post? If yes, the paper layout landed.

## After the Five Minutes

If all five questions are "yes," the 28 cycles of blind work landed. The site is what it was designed to be.

If any answer is "no," consult `runtime-error-catalog.md` for likely causes, or `handoff.md` for the technical verification sequence.

The monolith stood in the dark for 28 cycles. Now it stands in the light.

# Sections Module — Content Sections

The content sections are the "chambers" of the monolith — each is a room the visitor enters as they scroll. The architectural principle: stillness, mass, restraint. Say less, weigh more.

## Files

- `profile.tsx` — The first text section. Bio (split into 2 paragraphs at the natural boundary "...interning at SAS since June 2022."), highlights (vertical list with white bullet markers), interests (tag chips), education (institution + degree + GPA). Title in cyan (profile's single accent — the profile section has no section number, so the title IS its accent). `id="profile"`.
- `experience.tsx` — 3 roles with company, location, dates, highlights (7 bullets with 0.75rem spacing), tech stack tags. Section number "03" in cyan. Datum lines and tech tags are subtle white (desaturated from cyan). `id="experience"`.
- `projects.tsx` — 8 projects with filter buttons (All, Work, Research, Open Source). Each project: title, org, category, description, features/challenges/outcomes (bulleted), tech tags. Filter active state uses cyan (interactive feedback). Section number "04" in cyan. Single-column layout (each project is a chamber, not a card in a grid). `id="projects"`.
- `skills.tsx` — 6 categories (Frontend, Backend, DevOps, Data, Research, Tools) with 1-sentence descriptions. 36 skill bars total. Bar fills are dimmed white (`rgba(244,244,245,0.25)`), percentage numbers are cyan (the single accent per skill row). Section number "05" in cyan. `id="skills"`.
- `contact.tsx` — Contact info (email, phone, location, status) in monospace rows with white labels. Social tags (GitHub, LinkedIn, Email) with subtle white borders. Section number "06" in cyan. `id="contact"`.
- `index.ts` — Barrel export for all 5 sections.

## Key Patterns
- **One cyan per section**: Each section has exactly ONE cyan element — the section number (01-06). The profile section is the exception: it has no number, so the title is its cyan accent. All decorative cyan (datum lines, tech tags, bullet markers, borders, labels) was cut to white at low opacity (0.08-0.6).
- **Section IDs**: Each section has a unique `id` for FaceNav IntersectionObserver targeting.
- **`data-section` attribute**: Used by `sections.css` for spatial rhythm (hairline seams, heading datum lines).
- **Monospace labels**: Metadata (dates, locations, tech tags, category labels) uses `ui-monospace` font — reads as "specification data" not body text.
- **Content density**: Bio is split into 2 paragraphs. Highlights have 0.75rem spacing. Skills have category descriptions. Projects are single-column.

## Dependencies
- Data from `~/data/*` (profile, experience, projects, skills, contact)
- Types from `~/data/types`
- CSS tokens from `~/styles/tokens.css`

## Art-Direction Notes
- The restraint principle: "accent used sparingly" — applied as a literal count (one cyan per section).
- Negative space is a primary design element — sections breathe.
- The section numbers create a rhythmic scan pattern: 01, 02, 03, 04, 05, 06 — each chamber marked by a single inscribed number.
- Tech tags are subtle white borders + white text — they read as specification data, not decorative chips.
- Skill bars are dimmed white — the skills section feels like a specification (monospace numbers, white bars), not a dashboard.

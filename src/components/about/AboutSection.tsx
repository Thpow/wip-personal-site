import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { aboutMe, techStack, getSkillsByCategory } from '~/data/skills';

export const AboutSection = component$(() => {
  useStylesScoped$(`
    .about-section {
      padding: 20px;
      position: relative;
      z-index: 1;
    }
    
    .about-window {
      max-width: 800px;
      margin: 0 auto;
      background: var(--win-surface);
      box-shadow: var(--win-border-window);
      padding: 3px;
    }
    
    .about-titlebar {
      background: linear-gradient(90deg, var(--win-titlebar), var(--win-accent-light));
      color: var(--win-titlebar-text);
      padding: 2px 4px;
      font-weight: 700;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      user-select: none;
      min-height: 20px;
    }
    
    .titlebar-left {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    
    .titlebar-buttons {
      display: flex;
      gap: 2px;
    }
    
    .titlebar-btn {
      width: 16px;
      height: 14px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 9px;
      font-weight: 700;
      font-family: 'IBM Plex Mono', monospace;
      color: var(--win-text-primary);
      padding: 0;
      line-height: 1;
      cursor: default;
    }
    
    .about-body {
      padding: 12px;
      background: var(--win-surface);
    }
    
    /* Tabs */
    /* CSS-only tabs via hidden radio inputs */
    .tab-radios { display: none; }

    .tab-bar {
      display: flex;
      gap: 0;
      position: relative;
      bottom: -2px;
      z-index: 2;
      padding-left: 4px;
    }

    .tab-label {
      padding: 5px 16px;
      background: var(--win-bg-dark);
      border: none;
      box-shadow:
        inset -1px 0 0 0 var(--win-shadow-dark),
        inset 1px 1px 0 0 var(--win-highlight),
        inset 0 1px 0 0 var(--win-white);
      color: var(--win-text-primary);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px;
      cursor: pointer;
      position: relative;
      user-select: none;
      display: block;
    }

    #tab-bio:checked ~ .about-body .tab-label[for="tab-bio"],
    #tab-skills:checked ~ .about-body .tab-label[for="tab-skills"],
    #tab-tech:checked ~ .about-body .tab-label[for="tab-tech"],
    #tab-interests:checked ~ .about-body .tab-label[for="tab-interests"] {
      background: var(--win-surface);
      padding-bottom: 6px;
      z-index: 3;
    }

    .tab-content {
      background: var(--win-surface);
      box-shadow: var(--win-border-raised);
      padding: 16px;
      position: relative;
      z-index: 1;
      min-height: 300px;
    }

    .tab-panel { display: none; }

    #tab-bio:checked ~ .about-body .tab-content .panel-bio,
    #tab-skills:checked ~ .about-body .tab-content .panel-skills,
    #tab-tech:checked ~ .about-body .tab-content .panel-tech,
    #tab-interests:checked ~ .about-body .tab-content .panel-interests {
      display: block;
    }
    
    /* Bio content */
    .bio-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
      font-size: 16px;
      font-weight: 700;
      color: var(--win-text-primary);
    }
    
    .bio-text {
      font-size: 13px;
      line-height: 1.7;
      color: var(--win-text-secondary);
      margin-bottom: 12px;
      white-space: pre-line;
    }
    
    .groupbox {
      box-shadow:
        inset 1px 1px 0 0 var(--win-shadow),
        inset -1px -1px 0 0 var(--win-white);
      padding: 12px 8px 8px;
      margin: 12px 0;
      position: relative;
    }
    
    .groupbox-label {
      position: absolute;
      top: -8px;
      left: 8px;
      background: var(--win-surface);
      padding: 0 4px;
      font-size: 12px;
      font-weight: 700;
      color: var(--win-text-primary);
    }
    
    .highlight-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .highlight-list li {
      padding: 4px 0;
      font-size: 13px;
      color: var(--win-text-primary);
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .highlight-list li::before {
      content: '>';
      color: var(--win-accent);
      font-weight: 700;
      flex-shrink: 0;
    }
    
    /* Skills — tag cloud style */
    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding: 4px 0;
    }
    
    .skill-tag {
      padding: 4px 12px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      font-size: 12px;
      cursor: default;
      white-space: nowrap;
    }
    
    .skill-tag:hover {
      background: var(--win-titlebar);
      color: var(--win-titlebar-text);
    }
    
    /* Tech Stack grid */
    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
      gap: 8px;
    }
    
    .tech-item {
      background: var(--win-white);
      box-shadow: var(--win-border-field);
      padding: 8px;
      text-align: center;
      cursor: default;
      font-size: 11px;
    }
    
    .tech-item:hover {
      background: var(--win-titlebar);
      color: var(--win-titlebar-text);
    }
    
    .tech-logo {
      width: 32px;
      height: 32px;
      margin: 0 auto 4px;
      image-rendering: auto;
    }
    
    .tech-name {
      font-weight: 700;
      font-size: 12px;
      margin-bottom: 2px;
    }
    
    .tech-exp {
      font-size: 11px;
      color: var(--win-text-muted);
    }
    
    .tech-item:hover .tech-exp {
      color: var(--win-bg-light);
    }
    
    /* Interests */
    .interest-list {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    
    .interest-tag {
      padding: 5px 12px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      font-size: 13px;
      cursor: default;
    }
    
    .interest-tag:hover {
      background: var(--win-titlebar);
      color: var(--win-titlebar-text);
    }
    
    /* Status bar */
    .about-statusbar {
      background: var(--win-surface);
      padding: 2px 4px;
      display: flex;
      gap: 2px;
      font-size: 11px;
      color: var(--win-text-secondary);
    }
    
    .statusbar-cell {
      padding: 1px 6px;
      box-shadow: var(--win-border-sunken);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .statusbar-cell:first-child { flex: 2; }
    .statusbar-cell:last-child { flex: 1; text-align: right; }
    
    @media (max-width: 768px) {
      .about-section {
        padding: 12px 8px;
      }
      
      .tab-label {
        font-size: 10px;
        padding: 3px 8px;
      }
      
      .tab-content {
        padding: 10px;
      }
      
      .tech-grid {
        grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
        gap: 6px;
      }
      
      .tech-logo {
        width: 24px;
        height: 24px;
      }
    }
  `);
  
  const frontendSkills = getSkillsByCategory('frontend').slice(0, 4);
  const backendSkills = getSkillsByCategory('backend').slice(0, 4);
  const analyticsSkills = getSkillsByCategory('analytics');

  return (
    <section id="about" class="about-section">
      {/* Hidden radio inputs must be siblings of .about-body for CSS sibling selectors */}
      <input class="tab-radios" type="radio" name="about-tab" id="tab-bio" defaultChecked />
      <input class="tab-radios" type="radio" name="about-tab" id="tab-skills" />
      <input class="tab-radios" type="radio" name="about-tab" id="tab-tech" />
      <input class="tab-radios" type="radio" name="about-tab" id="tab-interests" />

      <div class="about-window">
        <div class="about-titlebar">
          <div class="titlebar-left">
            <span>📋</span>
            <span>About Me - Properties</span>
          </div>
          <div class="titlebar-buttons">
            <button class="titlebar-btn" aria-hidden="true">_</button>
            <button class="titlebar-btn" aria-hidden="true">□</button>
            <button class="titlebar-btn" aria-hidden="true">×</button>
          </div>
        </div>

        <div class="about-body">
          <div class="tab-bar">
            <label class="tab-label" for="tab-bio">General</label>
            <label class="tab-label" for="tab-skills">Skills</label>
            <label class="tab-label" for="tab-tech">Tech Stack</label>
            <label class="tab-label" for="tab-interests">Interests</label>
          </div>

          <div class="tab-content">
            <div class="tab-panel panel-bio">
              <div class="bio-header">👤 {aboutMe.name}</div>
              <p style="font-size: 14px; color: var(--win-accent); margin-bottom: 8px; font-weight: 700;">
                {aboutMe.title}
              </p>
              <p class="bio-text">{aboutMe.bio}</p>
              <div class="groupbox">
                <span class="groupbox-label">Highlights</span>
                <ul class="highlight-list">
                  {aboutMe.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </div>
            </div>

            <div class="tab-panel panel-skills">
              <div class="groupbox">
                <span class="groupbox-label">Frontend Development</span>
                <div class="skill-tags">
                  {frontendSkills.map((s) => <span key={s.name} class="skill-tag">{s.name}</span>)}
                </div>
              </div>
              <div class="groupbox">
                <span class="groupbox-label">Backend Development</span>
                <div class="skill-tags">
                  {backendSkills.map((s) => <span key={s.name} class="skill-tag">{s.name}</span>)}
                </div>
              </div>
              <div class="groupbox">
                <span class="groupbox-label">Business Analytics & Data Science</span>
                <div class="skill-tags">
                  {analyticsSkills.map((s) => <span key={s.name} class="skill-tag">{s.name}</span>)}
                </div>
              </div>
            </div>

            <div class="tab-panel panel-tech">
              <div class="tech-grid">
                {techStack.map((tech) => (
                  <div key={tech.name} class="tech-item">
                    <img src={tech.logo} alt={tech.name} class="tech-logo" loading="lazy" width="32" height="32" />
                    <p class="tech-name">{tech.name}</p>
                    <p class="tech-exp">{tech.yearsOfExperience}yr</p>
                  </div>
                ))}
              </div>
            </div>

            <div class="tab-panel panel-interests">
              <div class="groupbox">
                <span class="groupbox-label">Interests & Passions</span>
                <div class="interest-list">
                  {aboutMe.interests.map((interest) => <span key={interest} class="interest-tag">{interest}</span>)}
                </div>
              </div>
              <div class="groupbox">
                <span class="groupbox-label">Education</span>
                <ul class="highlight-list">
                  <li>{aboutMe.education.degree}</li>
                  <li>{aboutMe.education.university}</li>
                  <li>{aboutMe.education.year}</li>
                  {aboutMe.education.achievements.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </div>
              <div class="groupbox">
                <span class="groupbox-label">Certifications</span>
                <ul class="highlight-list">
                  {aboutMe.certifications.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="about-statusbar">
          <div class="statusbar-cell">About Me</div>
          <div class="statusbar-cell">{techStack.length} technologies</div>
        </div>
      </div>
    </section>
  );
});
import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { experiences } from '~/data/experience';

export const ExperienceSection = component$(() => {
  useStylesScoped$(`
    .experience-section {
      padding: 20px;
      position: relative;
      z-index: 1;
    }
    
    .experience-window {
      max-width: 800px;
      margin: 0 auto;
      background: var(--win-surface);
      box-shadow: var(--win-border-window);
      padding: 3px;
    }
    
    .exp-titlebar {
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
    
    .exp-body {
      padding: 12px;
      background: var(--win-surface);
    }
    
    .exp-card {
      box-shadow: var(--win-border-raised);
      padding: 12px;
      margin-bottom: 12px;
      background: var(--win-surface);
    }
    
    .exp-card:last-child {
      margin-bottom: 0;
    }
    
    .exp-header {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 8px;
    }
    
    .exp-icon {
      font-size: 24px;
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--win-white);
      box-shadow: var(--win-border-field);
    }
    
    .exp-title-block {
      flex: 1;
    }
    
    .exp-role {
      font-size: 13px;
      font-weight: 700;
      color: var(--win-text-primary);
      margin-bottom: 2px;
    }
    
    .exp-company {
      font-size: 12px;
      color: var(--win-accent);
      font-weight: 700;
      margin-bottom: 2px;
    }
    
    .exp-meta {
      font-size: 10px;
      color: var(--win-text-muted);
      display: flex;
      gap: 8px;
    }
    
    .exp-date-badge {
      padding: 1px 6px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      font-size: 10px;
      font-weight: 700;
      color: var(--win-text-primary);
      white-space: nowrap;
    }
    
    .exp-separator {
      height: 1px;
      margin: 8px 0;
      box-shadow: inset 0 0 0 0.5px var(--win-shadow);
    }
    
    .exp-desc {
      font-size: 11px;
      color: var(--win-text-secondary);
      line-height: 1.5;
      margin-bottom: 8px;
    }
    
    .groupbox {
      box-shadow:
        inset 1px 1px 0 0 var(--win-shadow),
        inset -1px -1px 0 0 var(--win-white);
      padding: 12px 8px 8px;
      margin: 8px 0;
      position: relative;
    }
    
    .groupbox-label {
      position: absolute;
      top: -8px;
      left: 8px;
      background: var(--win-surface);
      padding: 0 4px;
      font-size: 11px;
      font-weight: 700;
      color: var(--win-text-primary);
    }
    
    .highlight-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .highlight-list li {
      padding: 2px 0;
      font-size: 11px;
      color: var(--win-text-primary);
      display: flex;
      align-items: flex-start;
      gap: 6px;
    }
    
    .highlight-list li::before {
      content: '>';
      color: var(--win-accent);
      font-weight: 700;
      flex-shrink: 0;
    }
    
    .tech-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-top: 8px;
    }
    
    .tech-tag {
      padding: 2px 8px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      font-size: 10px;
      cursor: default;
    }
    
    .tech-tag:hover {
      background: var(--win-titlebar);
      color: var(--win-titlebar-text);
    }
    
    .exp-statusbar {
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
      .experience-section { padding: 12px 8px; }
      .exp-header { flex-direction: column; align-items: flex-start; }
      .exp-meta { flex-direction: column; gap: 2px; }
    }
  `);
  
  return (
    <section id="experience" class="experience-section">
      <div class="experience-window">
        <div class="exp-titlebar">
          <div class="titlebar-left">
            <span>💼</span>
            <span>Experience - Task Manager</span>
          </div>
          <div class="titlebar-buttons">
            <button class="titlebar-btn" aria-hidden="true">_</button>
            <button class="titlebar-btn" aria-hidden="true">□</button>
            <button class="titlebar-btn" aria-hidden="true">×</button>
          </div>
        </div>
        
        <div class="exp-body">
          {experiences.map((exp) => (
            <div key={exp.id} class="exp-card">
              <div class="exp-header">
                <div class="exp-icon">💼</div>
                <div class="exp-title-block">
                  <div class="exp-role">{exp.role}</div>
                  <div class="exp-company">{exp.company}</div>
                  <div class="exp-meta">
                    <span class="exp-date-badge">{exp.startDate} — {exp.endDate}</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <div class="exp-separator"></div>
              
              <p class="exp-desc">{exp.description}</p>
              
              <div class="groupbox">
                <span class="groupbox-label">Key Contributions</span>
                <ul class="highlight-list">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
              
              <div class="tech-badges">
                {exp.technologies.map((t) => (
                  <span key={t} class="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div class="exp-statusbar">
          <div class="statusbar-cell">{experiences.length} position(s)</div>
          <div class="statusbar-cell">3+ years total</div>
        </div>
      </div>
    </section>
  );
});

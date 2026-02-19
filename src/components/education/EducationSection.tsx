import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { education } from '~/data/experience';

export const EducationSection = component$(() => {
  useStylesScoped$(`
    .education-section {
      padding: 20px;
      position: relative;
      z-index: 1;
    }
    
    .education-window {
      max-width: 800px;
      margin: 0 auto;
      background: var(--win-surface);
      box-shadow: var(--win-border-window);
      padding: 3px;
    }
    
    .edu-titlebar {
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
    
    .edu-body {
      padding: 12px;
      background: var(--win-surface);
    }
    
    .edu-card {
      box-shadow: var(--win-border-raised);
      padding: 12px;
      margin-bottom: 12px;
      background: var(--win-surface);
    }
    
    .edu-card:last-child {
      margin-bottom: 0;
    }
    
    .edu-header {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 8px;
    }
    
    .edu-icon {
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
    
    .edu-title-block {
      flex: 1;
    }
    
    .edu-degree {
      font-size: 13px;
      font-weight: 700;
      color: var(--win-text-primary);
      margin-bottom: 2px;
    }
    
    .edu-field {
      font-size: 12px;
      color: var(--win-accent);
      font-weight: 700;
      margin-bottom: 2px;
    }
    
    .edu-institution {
      font-size: 11px;
      color: var(--win-text-secondary);
      margin-bottom: 4px;
    }
    
    .edu-meta {
      display: flex;
      gap: 6px;
      align-items: center;
      flex-wrap: wrap;
    }
    
    .edu-badge {
      padding: 1px 6px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      font-size: 10px;
      font-weight: 700;
      color: var(--win-text-primary);
      white-space: nowrap;
    }
    
    .edu-gpa-badge {
      padding: 1px 6px;
      background: var(--win-titlebar);
      color: var(--win-titlebar-text);
      font-size: 10px;
      font-weight: 700;
      white-space: nowrap;
    }
    
    .edu-separator {
      height: 1px;
      margin: 8px 0;
      box-shadow: inset 0 0 0 0.5px var(--win-shadow);
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
    
    .edu-statusbar {
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
      .education-section { padding: 12px 8px; }
      .edu-header { flex-direction: column; align-items: flex-start; }
      .edu-meta { flex-direction: column; gap: 2px; }
    }
  `);
  
  return (
    <section id="education" class="education-section">
      <div class="education-window">
        <div class="edu-titlebar">
          <div class="titlebar-left">
            <span>🎓</span>
            <span>Education - Academic Records</span>
          </div>
          <div class="titlebar-buttons">
            <button class="titlebar-btn" aria-hidden="true">_</button>
            <button class="titlebar-btn" aria-hidden="true">□</button>
            <button class="titlebar-btn" aria-hidden="true">×</button>
          </div>
        </div>
        
        <div class="edu-body">
          {education.map((edu) => (
            <div key={edu.id} class="edu-card">
              <div class="edu-header">
                <div class="edu-icon">🎓</div>
                <div class="edu-title-block">
                  <div class="edu-degree">{edu.degree}</div>
                  <div class="edu-field">{edu.field}</div>
                  <div class="edu-institution">{edu.institution}</div>
                  <div class="edu-meta">
                    <span class="edu-badge">{edu.startDate} — {edu.endDate}</span>
                    <span class="edu-gpa-badge">GPA: {edu.gpa}</span>
                  </div>
                </div>
              </div>
              
              <div class="edu-separator"></div>
              
              <div class="groupbox">
                <span class="groupbox-label">Highlights</span>
                <ul class="highlight-list">
                  {edu.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div class="edu-statusbar">
          <div class="statusbar-cell">{education.length} degree(s)</div>
          <div class="statusbar-cell">UNC Charlotte</div>
        </div>
      </div>
    </section>
  );
});

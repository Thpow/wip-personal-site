import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { projects, getCategories } from '~/data/projects';

export const ProjectsSection = component$(() => {
  useStylesScoped$(`
    .projects-section {
      padding: 20px;
      position: relative;
      z-index: 1;
    }
    
    .projects-window {
      max-width: 900px;
      margin: 0 auto;
      background: var(--win-surface);
      box-shadow: var(--win-border-window);
      padding: 3px;
    }
    
    .proj-titlebar {
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
    
    /* Menu bar */
    .proj-menubar {
      background: var(--win-surface);
      padding: 2px 0;
      display: flex;
      gap: 0;
      border-bottom: 1px solid var(--win-shadow);
    }
    
    .menubar-item {
      padding: 2px 8px;
      font-size: 11px;
      cursor: pointer;
      user-select: none;
      color: var(--win-text-primary);
      background: transparent;
      border: none;
      font-family: 'IBM Plex Mono', monospace;
    }
    
    .menubar-item:hover,
    .menubar-item.active {
      background: var(--win-titlebar);
      color: var(--win-titlebar-text);
    }
    
    .proj-body {
      padding: 12px;
      background: var(--win-surface);
    }
    
    /* Address bar */
    .address-bar {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 10px;
      font-size: 11px;
    }
    
    .address-label {
      font-weight: 700;
      white-space: nowrap;
    }
    
    .address-field {
      flex: 1;
      background: var(--win-white);
      box-shadow: var(--win-border-field);
      padding: 2px 6px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      color: var(--win-text-primary);
    }
    
    /* File list */
    .file-list-header {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 0;
      margin-bottom: 0;
    }
    
    .file-list-header-cell {
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      padding: 2px 8px;
      font-size: 11px;
      font-weight: 700;
      cursor: default;
      user-select: none;
    }
    
    .file-list {
      background: var(--win-white);
      box-shadow: var(--win-border-field);
      min-height: 200px;
      max-height: 400px;
      overflow-y: auto;
    }
    
    .proj-details {
      padding: 3px 8px;
      font-size: 11px;
      cursor: pointer;
      border: none;
      background: transparent;
      width: 100%;
      text-align: left;
      font-family: 'IBM Plex Mono', monospace;
      color: var(--win-text-primary);
    }
    
    .proj-details:nth-child(even) {
      background: #f0f0f0;
    }
    
    .proj-details:hover {
      background: var(--win-titlebar);
      color: var(--win-titlebar-text);
    }
    
    .file-name {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .file-icon {
      font-size: 14px;
      flex-shrink: 0;
    }
    
    .file-cat {
      text-transform: uppercase;
      font-size: 10px;
    }
    
    .file-tech {
      font-size: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .proj-detail-body {
      padding: 12px;
      background: var(--win-surface);
    }
    
    .proj-detail-desc {
      font-size: 12px;
      color: var(--win-text-secondary);
      line-height: 1.5;
      margin-bottom: 12px;
    }
    
    .proj-detail-section {
      margin-bottom: 12px;
    }
    
    .proj-detail-section-title {
      font-weight: 700;
      font-size: 11px;
      margin-bottom: 4px;
    }
    
    .proj-tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }
    
    .proj-tech-tag {
      padding: 2px 8px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      font-size: 10px;
    }
    
    .proj-feature-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .proj-feature-list li {
      padding: 2px 0;
      font-size: 11px;
      color: var(--win-text-primary);
      display: flex;
      align-items: flex-start;
      gap: 6px;
    }
    
    .proj-feature-list li::before {
      content: '>';
      color: var(--win-accent);
      font-weight: 700;
      flex-shrink: 0;
    }
    
    /* Status bar */
    .proj-statusbar {
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
      .projects-section { padding: 12px 8px; }
      .file-list-header { grid-template-columns: 1fr; }
      .file-list-header-cell:not(:first-child) { display: none; }
    }
  `);
  
  const allCategories = [
    { value: 'all', label: 'All Projects' },
    ...getCategories()
  ];

  return (
    <section id="projects" class="projects-section">
      <div class="projects-window">
        <div class="proj-titlebar">
          <div class="titlebar-left">
            <span>📁</span>
            <span>Projects - File Explorer</span>
          </div>
          <div class="titlebar-buttons">
            <button class="titlebar-btn" aria-hidden="true">_</button>
            <button class="titlebar-btn" aria-hidden="true">□</button>
            <button class="titlebar-btn" aria-hidden="true">×</button>
          </div>
        </div>

        <div class="proj-body">
          <div class="address-bar">
            <span class="address-label">Address:</span>
            <div class="address-field">C:\Portfolio\Projects\*</div>
          </div>

          <div class="file-list-header">
            <div class="file-list-header-cell">Name ▼ click to expand</div>
            <div class="file-list-header-cell">Category</div>
            <div class="file-list-header-cell">Technologies</div>
          </div>

          <div class="file-list">
            {projects.map((project) => (
              <details key={project.id} class="proj-details">
                <summary>
                  <span class="file-name">
                    <span class="file-icon">📄</span>
                    {project.title}
                  </span>
                  <span class="file-cat">{project.category}</span>
                  <span class="file-tech">{project.technologies.slice(0, 3).join(', ')}</span>
                </summary>
                <div class="proj-detail-body">
                  <p class="proj-detail-desc">{project.description}</p>
                  <div class="proj-detail-section">
                    <div class="proj-detail-section-title">Technologies</div>
                    <div class="proj-tech-tags">
                      {project.technologies.map((t) => (
                        <span key={t} class="proj-tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div class="proj-detail-section">
                    <div class="proj-detail-section-title">Key Features</div>
                    <ul class="proj-feature-list">
                      {project.features.map((f) => <li key={f}>{f}</li>)}
                    </ul>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>

        <div class="proj-statusbar">
          <div class="statusbar-cell">{projects.length} object(s) — click any row to expand</div>
          <div class="statusbar-cell">All categories</div>
        </div>
      </div>
    </section>
  );
});
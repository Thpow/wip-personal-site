import { component$, useSignal, useStylesScoped$, $ } from '@builder.io/qwik';
import { projects, getCategories, type Project } from '~/data/projects';

export const ProjectsSection = component$(() => {
  const selectedCategory = useSignal<string>('all');
  const selectedProject = useSignal<Project | null>(null);
  const isModalOpen = useSignal(false);
  
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
    
    .file-item {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 0;
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
    
    .file-item:nth-child(even) {
      background: #f0f0f0;
    }
    
    .file-item:hover {
      background: var(--win-titlebar);
      color: var(--win-titlebar-text);
    }
    
    .file-item.selected {
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
    
    /* Detail modal — Win95 dialog */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      opacity: 0;
      visibility: hidden;
    }
    
    .modal-overlay.open {
      opacity: 1;
      visibility: visible;
    }
    
    .modal-window {
      background: var(--win-surface);
      box-shadow: var(--win-border-window);
      padding: 3px;
      max-width: 640px;
      width: 100%;
      max-height: 80vh;
      overflow-y: auto;
    }
    
    .modal-titlebar {
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
    
    .modal-close-btn {
      width: 16px;
      height: 14px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      border: none;
      cursor: pointer;
      font-size: 9px;
      font-weight: 700;
      font-family: 'IBM Plex Mono', monospace;
      color: var(--win-text-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      line-height: 1;
    }
    
    .modal-close-btn:active {
      box-shadow: var(--win-border-button-pressed);
    }
    
    .modal-body {
      padding: 12px;
      background: var(--win-surface);
    }
    
    .modal-desc {
      font-size: 12px;
      color: var(--win-text-secondary);
      line-height: 1.5;
      margin-bottom: 12px;
    }
    
    .groupbox {
      box-shadow:
        inset 1px 1px 0 0 var(--win-shadow),
        inset -1px -1px 0 0 var(--win-white);
      padding: 12px 8px 8px;
      margin: 10px 0;
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
    
    .item-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .item-list li {
      padding: 2px 0;
      font-size: 11px;
      color: var(--win-text-primary);
      display: flex;
      align-items: flex-start;
      gap: 6px;
    }
    
    .item-list li::before {
      content: '>';
      color: var(--win-accent);
      font-weight: 700;
      flex-shrink: 0;
    }
    
    .outcome-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 6px;
    }
    
    .outcome-card {
      background: var(--win-white);
      box-shadow: var(--win-border-field);
      padding: 8px;
      text-align: center;
    }
    
    .outcome-value {
      font-size: 14px;
      font-weight: 700;
      color: var(--win-accent);
      margin-bottom: 2px;
    }
    
    .outcome-label {
      font-size: 10px;
      color: var(--win-text-secondary);
    }
    
    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 6px;
      margin-top: 12px;
    }
    
    .win-btn {
      padding: 4px 20px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      border: none;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px;
      color: var(--win-text-primary);
      cursor: pointer;
      min-height: 23px;
      min-width: 75px;
    }
    
    .win-btn:active {
      box-shadow: var(--win-border-button-pressed);
    }
    
    .tech-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-top: 4px;
    }
    
    .tech-tag {
      padding: 2px 8px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      font-size: 10px;
    }
    
    @media (max-width: 768px) {
      .projects-section {
        padding: 12px 8px;
      }
      
      .file-list-header {
        grid-template-columns: 1fr;
      }
      
      .file-list-header-cell:not(:first-child) {
        display: none;
      }
      
      .file-item {
        grid-template-columns: 1fr;
      }
      
      .file-cat,
      .file-tech {
        display: none;
      }
      
      .modal-overlay {
        padding: 8px;
      }
      
      .outcome-grid {
        grid-template-columns: 1fr;
      }
    }
  `);
  
  const categories = [
    { value: 'all', label: 'All Projects' },
    ...getCategories()
  ];
  
  const filteredProjects = selectedCategory.value === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory.value);
  
  const handleCategoryChange = $((category: string) => {
    selectedCategory.value = category;
  });
  
  const openProjectModal = $((project: Project) => {
    selectedProject.value = project;
    isModalOpen.value = true;
  });
  
  const closeModal = $(() => {
    isModalOpen.value = false;
    setTimeout(() => {
      selectedProject.value = null;
    }, 300);
  });
  
  return (
    <section id="projects" class="projects-section">
      <div class="projects-window">
        {/* Title Bar */}
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
        
        {/* Menu Bar (filter) */}
        <div class="proj-menubar">
          {categories.map((cat) => (
            <button
              key={cat.value}
              class={`menubar-item ${selectedCategory.value === cat.value ? 'active' : ''}`}
              onClick$={() => handleCategoryChange(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        
        <div class="proj-body">
          {/* Address Bar */}
          <div class="address-bar">
            <span class="address-label">Address:</span>
            <div class="address-field">
              C:\Portfolio\Projects\{selectedCategory.value === 'all' ? '*' : selectedCategory.value}
            </div>
          </div>
          
          {/* File list header */}
          <div class="file-list-header">
            <div class="file-list-header-cell">Name</div>
            <div class="file-list-header-cell">Category</div>
            <div class="file-list-header-cell">Technologies</div>
          </div>
          
          {/* File list */}
          <div class="file-list">
            {filteredProjects.map((project) => (
              <button
                key={project.id}
                class={`file-item ${selectedProject.value?.id === project.id ? 'selected' : ''}`}
                onClick$={() => openProjectModal(project)}
              >
                <span class="file-name">
                  <span class="file-icon">📄</span>
                  {project.title}
                </span>
                <span class="file-cat">{project.category}</span>
                <span class="file-tech">{project.technologies.slice(0, 3).join(', ')}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Status Bar */}
        <div class="proj-statusbar">
          <div class="statusbar-cell">{filteredProjects.length} object(s)</div>
          <div class="statusbar-cell">
            {selectedCategory.value === 'all' ? 'All categories' : selectedCategory.value}
          </div>
        </div>
      </div>
      
      {/* Project Detail Modal */}
      <div class={`modal-overlay ${isModalOpen.value ? 'open' : ''}`} onClick$={closeModal}>
        {selectedProject.value && (
          <div class="modal-window" onClick$={(e: Event) => e.stopPropagation()}>
            <div class="modal-titlebar">
              <div class="titlebar-left">
                <span>📄</span>
                <span>{selectedProject.value.title} - Details</span>
              </div>
              <button class="modal-close-btn" onClick$={closeModal}>×</button>
            </div>
            
            <div class="modal-body">
              <p class="modal-desc">{selectedProject.value.description}</p>
              
              <div class="groupbox">
                <span class="groupbox-label">Technologies</span>
                <div class="tech-badges">
                  {selectedProject.value.technologies.map((t) => (
                    <span key={t} class="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
              
              <div class="groupbox">
                <span class="groupbox-label">Key Features</span>
                <ul class="item-list">
                  {selectedProject.value.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              
              <div class="groupbox">
                <span class="groupbox-label">Outcomes</span>
                <div class="outcome-grid">
                  {selectedProject.value.outcomes.map((outcome) => {
                    const [value, ...rest] = outcome.split(' ');
                    return (
                      <div key={outcome} class="outcome-card">
                        <div class="outcome-value">{value}</div>
                        <div class="outcome-label">{rest.join(' ')}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div class="groupbox">
                <span class="groupbox-label">Challenges</span>
                <ul class="item-list">
                  {selectedProject.value.challenges.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              
              <div class="modal-actions">
                <button class="win-btn" onClick$={closeModal}>OK</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
});
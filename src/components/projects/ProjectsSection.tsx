import { component$, useSignal, useStylesScoped$, $ } from '@builder.io/qwik';
import { projects, getCategories, type Project } from '~/data/projects';

export const ProjectsSection = component$(() => {
  const selectedCategory = useSignal<string>('all');
  const selectedProject = useSignal<Project | null>(null);
  const isModalOpen = useSignal(false);
  
  useStylesScoped$(`
    .projects-section {
      padding: 100px 20px;
      background: linear-gradient(135deg, rgba(224, 229, 236, 0.5), var(--neu-base));
      min-height: 100vh;
    }
    
    .projects-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .section-title {
      text-align: center;
      font-size: 2.5rem;
      color: var(--neu-text-primary);
      margin-bottom: 20px;
      font-weight: 700;
    }
    
    .section-subtitle {
      text-align: center;
      color: var(--neu-text-secondary);
      margin-bottom: 60px;
      font-size: 1.1rem;
    }
    
    .filter-tabs {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 60px;
      flex-wrap: wrap;
    }
    
    .filter-tab {
      padding: 12px 28px;
      background: var(--neu-base);
      border: none;
      border-radius: var(--neu-radius-full);
      box-shadow: var(--neu-shadow-md);
      color: var(--neu-text-secondary);
      font-weight: 500;
      cursor: pointer;
      transition: all var(--neu-transition-base);
      font-size: 0.95rem;
    }
    
    .filter-tab:hover {
      box-shadow: var(--neu-shadow-lg);
      transform: translateY(-2px);
      color: var(--neu-text-primary);
    }
    
    .filter-tab.active {
      background: linear-gradient(145deg, var(--neu-accent), var(--neu-accent-dark));
      color: white;
      box-shadow: var(--neu-shadow-lg);
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 40px;
      margin-bottom: 60px;
    }
    
    .project-card {
      background: var(--neu-base);
      border-radius: var(--neu-radius-lg);
      box-shadow: var(--neu-shadow-lg);
      overflow: hidden;
      transition: all var(--neu-transition-base);
      cursor: pointer;
      position: relative;
      display: flex;
      flex-direction: column;
    }
    
    .project-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--neu-shadow-xl);
    }
    
    .project-image-container {
      position: relative;
      height: 220px;
      overflow: hidden;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    
    .project-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--neu-transition-slow);
    }
    
    .project-card:hover .project-image {
      transform: scale(1.1);
    }
    
    .project-category {
      position: absolute;
      top: 15px;
      right: 15px;
      padding: 6px 16px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-full);
      box-shadow: var(--neu-shadow-sm);
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--neu-accent);
    }
    
    .project-content {
      padding: 30px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    
    .project-title {
      font-size: 1.4rem;
      color: var(--neu-text-primary);
      margin-bottom: 15px;
      font-weight: 700;
    }
    
    .project-description {
      color: var(--neu-text-secondary);
      line-height: 1.6;
      margin-bottom: 20px;
      flex: 1;
    }
    
    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 25px;
    }
    
    .tech-badge {
      padding: 5px 12px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-full);
      box-shadow: var(--neu-shadow-inset-sm);
      font-size: 0.8rem;
      color: var(--neu-text-secondary);
      font-weight: 500;
    }
    
    .project-links {
      display: flex;
      gap: 15px;
    }
    
    .project-link {
      flex: 1;
      padding: 10px 20px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-sm);
      color: var(--neu-text-primary);
      text-decoration: none;
      text-align: center;
      font-weight: 500;
      transition: all var(--neu-transition-base);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    
    .project-link:hover {
      box-shadow: var(--neu-shadow-md);
      transform: translateY(-2px);
    }
    
    .project-link.primary {
      background: linear-gradient(145deg, var(--neu-accent), var(--neu-accent-dark));
      color: white;
    }
    
    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(5px);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      opacity: 0;
      visibility: hidden;
      transition: all var(--neu-transition-base);
    }
    
    .modal-overlay.open {
      opacity: 1;
      visibility: visible;
    }
    
    .modal-content {
      background: var(--neu-base);
      border-radius: var(--neu-radius-lg);
      box-shadow: var(--neu-shadow-xl);
      max-width: 900px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      transform: scale(0.9);
      transition: transform var(--neu-transition-base);
    }
    
    .modal-overlay.open .modal-content {
      transform: scale(1);
    }
    
    .modal-close {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      background: var(--neu-base);
      border-radius: 50%;
      box-shadow: var(--neu-shadow-md);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      transition: all var(--neu-transition-base);
    }
    
    .modal-close:hover {
      box-shadow: var(--neu-shadow-lg);
      transform: rotate(90deg);
    }
    
    .modal-header {
      padding: 40px;
      border-bottom: 1px solid rgba(163, 177, 198, 0.2);
    }
    
    .modal-title {
      font-size: 2rem;
      color: var(--neu-text-primary);
      margin-bottom: 10px;
    }
    
    .modal-category {
      color: var(--neu-accent);
      font-weight: 600;
      text-transform: uppercase;
      font-size: 0.9rem;
    }
    
    .modal-body {
      padding: 40px;
    }
    
    .modal-section {
      margin-bottom: 40px;
    }
    
    .modal-section-title {
      font-size: 1.3rem;
      color: var(--neu-text-primary);
      margin-bottom: 20px;
      font-weight: 600;
    }
    
    .feature-list {
      display: grid;
      gap: 15px;
    }
    
    .feature-item {
      display: flex;
      gap: 15px;
      padding: 15px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .feature-icon {
      width: 24px;
      height: 24px;
      background: var(--neu-accent);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }
    
    .stat-card {
      padding: 20px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-md);
      text-align: center;
    }
    
    .stat-value {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--neu-accent);
      margin-bottom: 5px;
    }
    
    .stat-label {
      color: var(--neu-text-secondary);
      font-size: 0.9rem;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
      
      .filter-tabs {
        gap: 10px;
      }
      
      .filter-tab {
        padding: 10px 20px;
        font-size: 0.9rem;
      }
      
      .modal-content {
        max-height: 100vh;
        border-radius: 0;
      }
      
      .modal-header,
      .modal-body {
        padding: 25px;
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
      <div class="projects-container">
        <h2 class="section-title animate-fadeInUp">Featured Projects</h2>
        <p class="section-subtitle animate-fadeInUp stagger-1">
          Explore my portfolio of full-stack applications and technical solutions
        </p>
        
        {/* Filter Tabs */}
        <div class="filter-tabs animate-fadeInUp stagger-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              class={`filter-tab ${selectedCategory.value === cat.value ? 'active' : ''}`}
              onClick$={() => handleCategoryChange(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div class="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              class={`project-card animate-fadeInUp stagger-${Math.min(index + 3, 8)}`}
              onClick$={() => openProjectModal(project)}
            >
              <div class="project-image-container">
                <img 
                  src={project.images[0]}
                  alt={project.title}
                  class="project-image"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <span class="project-category">{project.category}</span>
              </div>
              
              <div class="project-content">
                <h3 class="project-title">{project.title}</h3>
                <p class="project-description">{project.description}</p>
                
                <div class="project-tech">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} class="tech-badge">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span class="tech-badge">+{project.technologies.length - 4}</span>
                  )}
                </div>
                
                <div class="project-links">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      class="project-link primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick$={(e: Event) => e.stopPropagation()}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      class="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick$={(e: Event) => e.stopPropagation()}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Modal */}
        <div class={`modal-overlay ${isModalOpen.value ? 'open' : ''}`} onClick$={closeModal}>
          {selectedProject.value && (
            <div class="modal-content" onClick$={(e: Event) => e.stopPropagation()}>
              <button class="modal-close" onClick$={closeModal}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div class="modal-header">
                <h3 class="modal-title">{selectedProject.value.title}</h3>
                <span class="modal-category">{selectedProject.value.category}</span>
              </div>
              
              <div class="modal-body">
                <div class="modal-section">
                  <h4 class="modal-section-title">Key Features</h4>
                  <div class="feature-list">
                    {selectedProject.value.features.map((feature) => (
                      <div key={feature} class="feature-item">
                        <div class="feature-icon">✓</div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div class="modal-section">
                  <h4 class="modal-section-title">Project Outcomes</h4>
                  <div class="stats-grid">
                    {selectedProject.value.outcomes.map((outcome) => {
                      const [value, ...rest] = outcome.split(' ');
                      return (
                        <div key={outcome} class="stat-card">
                          <div class="stat-value">{value}</div>
                          <div class="stat-label">{rest.join(' ')}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div class="modal-section">
                  <h4 class="modal-section-title">Technical Challenges</h4>
                  <div class="feature-list">
                    {selectedProject.value.challenges.map((challenge) => (
                      <div key={challenge} class="feature-item">
                        <div class="feature-icon">💡</div>
                        <span>{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
});
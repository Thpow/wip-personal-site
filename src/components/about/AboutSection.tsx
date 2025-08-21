import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { aboutMe, techStack, getSkillsByCategory } from '~/data/skills';

export const AboutSection = component$(() => {
  useStylesScoped$(`
    .about-section {
      padding: 100px 20px;
      background: transparent;
      position: relative;
    }
    
    .about-container {
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
    
    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      margin-bottom: 80px;
    }
    
    .bio-section {
      padding: 40px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-lg);
      box-shadow: var(--neu-shadow-lg);
    }
    
    .bio-title {
      font-size: 1.8rem;
      color: var(--neu-text-primary);
      margin-bottom: 10px;
    }
    
    .bio-subtitle {
      color: var(--neu-accent);
      font-size: 1.1rem;
      margin-bottom: 30px;
    }
    
    .bio-text {
      color: var(--neu-text-secondary);
      line-height: 1.8;
      margin-bottom: 30px;
      white-space: pre-line;
    }
    
    .highlights {
      display: grid;
      grid-template-columns: 1fr;
      gap: 15px;
    }
    
    .highlight-item {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 15px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .highlight-icon {
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
    
    .skills-section {
      padding: 40px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-lg);
      box-shadow: var(--neu-shadow-lg);
    }
    
    .skills-title {
      font-size: 1.5rem;
      color: var(--neu-text-primary);
      margin-bottom: 30px;
    }
    
    .skill-category {
      margin-bottom: 30px;
    }
    
    .category-title {
      font-size: 0.9rem;
      color: var(--neu-text-muted);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 15px;
    }
    
    .skill-item {
      margin-bottom: 20px;
    }
    
    .skill-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    
    .skill-name {
      color: var(--neu-text-primary);
      font-weight: 500;
    }
    
    .skill-level {
      color: var(--neu-accent);
      font-weight: 600;
    }
    
    .skill-bar {
      height: 10px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-full);
      box-shadow: var(--neu-shadow-inset-sm);
      overflow: hidden;
    }
    
    .skill-progress {
      height: 100%;
      background: linear-gradient(90deg, var(--neu-accent), var(--neu-accent-dark));
      border-radius: var(--neu-radius-full);
      transition: width 1s ease-out;
      box-shadow: 2px 2px 4px rgba(108, 99, 255, 0.3);
    }
    
    .tech-stack {
      margin-top: 80px;
    }
    
    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 30px;
      margin-top: 40px;
    }
    
    .tech-card {
      padding: 25px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-lg);
      box-shadow: var(--neu-shadow-md);
      text-align: center;
      transition: all var(--neu-transition-base);
      cursor: pointer;
    }
    
    .tech-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--neu-shadow-lg);
    }
    
    .tech-logo {
      width: 60px;
      height: 60px;
      margin: 0 auto 15px;
      filter: grayscale(20%);
      transition: filter var(--neu-transition-base);
    }
    
    .tech-card:hover .tech-logo {
      filter: grayscale(0%);
    }
    
    .tech-name {
      font-size: 0.9rem;
      color: var(--neu-text-primary);
      font-weight: 600;
      margin-bottom: 5px;
    }
    
    .tech-experience {
      font-size: 0.8rem;
      color: var(--neu-text-secondary);
    }
    
    .interests-section {
      margin-top: 60px;
      padding: 40px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-lg);
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .interests-title {
      font-size: 1.3rem;
      color: var(--neu-text-primary);
      margin-bottom: 20px;
      text-align: center;
    }
    
    .interests-list {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
    }
    
    .interest-tag {
      padding: 10px 20px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-full);
      box-shadow: var(--neu-shadow-sm);
      color: var(--neu-text-secondary);
      font-size: 0.9rem;
      transition: all var(--neu-transition-base);
    }
    
    .interest-tag:hover {
      color: var(--neu-accent);
      box-shadow: var(--neu-shadow-md);
      transform: scale(1.05);
    }
    
    /* Responsive */
    @media (max-width: 968px) {
      .about-section {
        padding: 80px 16px;
      }
      
      .about-content {
        grid-template-columns: 1fr;
        gap: 40px;
        margin-bottom: 60px;
      }
      
      .bio-section,
      .skills-section {
        padding: 32px;
      }
      
      .tech-stack {
        margin-top: 60px;
      }
      
      .tech-grid {
        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
        gap: 20px;
        margin-top: 32px;
      }
      
      .tech-card {
        padding: 20px 16px;
      }
      
      .tech-logo {
        width: 48px;
        height: 48px;
        margin-bottom: 12px;
      }
      
      .tech-name {
        font-size: 0.85rem;
      }
      
      .tech-experience {
        font-size: 0.75rem;
      }
    }
    
    @media (max-width: 768px) {
      .about-section {
        padding: 70px 16px;
      }
      
      .section-title {
        font-size: 2.2rem;
        margin-bottom: 16px;
      }
      
      .section-subtitle {
        font-size: 1rem;
        margin-bottom: 50px;
        padding: 0 10px;
      }
      
      .about-content {
        gap: 32px;
        margin-bottom: 50px;
      }
      
      .bio-section,
      .skills-section {
        padding: 28px 24px;
      }
      
      .bio-title {
        font-size: 1.6rem;
        margin-bottom: 8px;
      }
      
      .bio-subtitle {
        font-size: 1rem;
        margin-bottom: 24px;
      }
      
      .bio-text {
        font-size: 0.95rem;
        line-height: 1.7;
        margin-bottom: 24px;
      }
      
      .highlight-item {
        padding: 12px;
        gap: 12px;
      }
      
      .highlight-icon {
        width: 20px;
        height: 20px;
        font-size: 0.8rem;
      }
      
      .skills-title {
        font-size: 1.4rem;
        margin-bottom: 24px;
      }
      
      .skill-category {
        margin-bottom: 24px;
      }
      
      .category-title {
        font-size: 0.85rem;
        margin-bottom: 12px;
      }
      
      .skill-item {
        margin-bottom: 16px;
      }
      
      .skill-name,
      .skill-level {
        font-size: 0.9rem;
      }
      
      .skill-bar {
        height: 8px;
      }
      
      .tech-stack {
        margin-top: 50px;
      }
      
      .tech-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin-top: 28px;
      }
      
      .tech-card {
        padding: 16px 12px;
      }
      
      .tech-logo {
        width: 40px;
        height: 40px;
        margin-bottom: 10px;
      }
      
      .interests-section {
        margin-top: 50px;
        padding: 32px 24px;
      }
      
      .interests-title {
        font-size: 1.2rem;
        margin-bottom: 16px;
      }
      
      .interests-list {
        gap: 12px;
      }
      
      .interest-tag {
        padding: 8px 16px;
        font-size: 0.85rem;
      }
    }
    
    @media (max-width: 480px) {
      .about-section {
        padding: 60px 12px;
      }
      
      .section-title {
        font-size: 1.9rem;
      }
      
      .section-subtitle {
        font-size: 0.95rem;
        padding: 0 8px;
      }
      
      .bio-section,
      .skills-section {
        padding: 24px 20px;
      }
      
      .bio-title {
        font-size: 1.4rem;
      }
      
      .bio-subtitle {
        font-size: 0.95rem;
      }
      
      .bio-text {
        font-size: 0.9rem;
      }
      
      .highlight-item {
        padding: 10px;
        gap: 10px;
        font-size: 0.9rem;
      }
      
      .skills-title {
        font-size: 1.3rem;
      }
      
      .tech-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 14px;
      }
      
      .tech-card {
        padding: 14px 10px;
      }
      
      .tech-logo {
        width: 36px;
        height: 36px;
        margin-bottom: 8px;
      }
      
      .tech-name {
        font-size: 0.8rem;
      }
      
      .tech-experience {
        font-size: 0.7rem;
      }
      
      .interests-section {
        padding: 28px 20px;
      }
      
      .interests-list {
        gap: 10px;
      }
      
      .interest-tag {
        padding: 6px 14px;
        font-size: 0.8rem;
      }
    }
  `);
  
  const frontendSkills = getSkillsByCategory('frontend').slice(0, 4);
  const backendSkills = getSkillsByCategory('backend').slice(0, 4);
  
  return (
    <section id="about" class="about-section">
      <div class="about-container">
        <h2 class="section-title animate-fadeInUp">About Me</h2>
        <p class="section-subtitle animate-fadeInUp stagger-1">
          Passionate about building scalable solutions and creating exceptional user experiences
        </p>
        
        <div class="about-content">
          {/* Bio Section */}
          <div class="bio-section animate-fadeInLeft">
            <h3 class="bio-title">{aboutMe.name}</h3>
            <p class="bio-subtitle">{aboutMe.title}</p>
            <p class="bio-text">{aboutMe.bio}</p>
            
            <div class="highlights">
              {aboutMe.highlights.slice(0, 4).map((highlight, index) => (
                <div key={index} class="highlight-item">
                  <div class="highlight-icon">✓</div>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Skills Section */}
          <div class="skills-section animate-fadeInRight">
            <h3 class="skills-title">Core Skills</h3>
            
            <div class="skill-category">
              <p class="category-title">Frontend Development</p>
              {frontendSkills.map((skill) => (
                <div key={skill.name} class="skill-item">
                  <div class="skill-header">
                    <span class="skill-name">{skill.name}</span>
                    <span class="skill-level">{skill.level}%</span>
                  </div>
                  <div class="skill-bar">
                    <div 
                      class="skill-progress" 
                      style={`width: ${skill.level}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div class="skill-category">
              <p class="category-title">Backend Development</p>
              {backendSkills.map((skill) => (
                <div key={skill.name} class="skill-item">
                  <div class="skill-header">
                    <span class="skill-name">{skill.name}</span>
                    <span class="skill-level">{skill.level}%</span>
                  </div>
                  <div class="skill-bar">
                    <div 
                      class="skill-progress" 
                      style={`width: ${skill.level}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Tech Stack */}
        <div class="tech-stack">
          <h3 class="section-title">Tech Stack</h3>
          <p class="section-subtitle">Technologies I work with daily</p>
          
          <div class="tech-grid">
            {techStack.map((tech) => (
              <div key={tech.name} class="tech-card animate-scaleIn">
                <img 
                  src={tech.logo}
                  alt={tech.name}
                  class="tech-logo"
                  loading="lazy"
                  width="60"
                  height="60"
                />
                <p class="tech-name">{tech.name}</p>
                <p class="tech-experience">{tech.yearsOfExperience} years</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Interests */}
        <div class="interests-section">
          <h3 class="interests-title">Interests & Passions</h3>
          <div class="interests-list">
            {aboutMe.interests.map((interest) => (
              <span key={interest} class="interest-tag">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
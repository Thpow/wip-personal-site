import { component$, useSignal, useVisibleTask$, useStylesScoped$ } from '@builder.io/qwik';

export const HeroSection = component$(() => {
  const displayText = useSignal('');
  const showCursor = useSignal(true);
  const fullText = "Intern @ SAS | MSBA Data Science & Business Analytics | BS CompSci";
  
  useStylesScoped$(`
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 80px 20px;
      position: relative;
      overflow: hidden;
    }
    
    .hero-content {
      text-align: center;
      max-width: 900px;
      z-index: 1;
      position: relative;
    }
    
    .profile-container {
      margin-bottom: 40px;
      display: inline-block;
      position: relative;
    }
    
    .profile-image-wrapper {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: var(--neu-base);
      box-shadow: var(--neu-shadow-xl);
      padding: 10px;
      position: relative;
      overflow: hidden;
      animation: float 3s ease-in-out infinite;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    
    .profile-image {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: var(--neu-shadow-inset-md);
    }
    
    .profile-status {
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 40px;
      height: 40px;
      background: var(--neu-base);
      border-radius: 50%;
      box-shadow: var(--neu-shadow-md);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .status-dot {
      width: 20px;
      height: 20px;
      background: #48bb78;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.2);
        opacity: 0.8;
      }
    }
    
    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      color: var(--neu-text-primary);
      margin-bottom: 20px;
      animation: fadeInUp 0.8s ease-out;
    }
    
    .hero-subtitle {
      font-size: 1.25rem;
      color: var(--neu-text-secondary);
      margin-bottom: 40px;
      min-height: 30px;
      font-family: 'Courier New', monospace;
    }
    
    .typewriter-text {
      display: inline-block;
      color: var(--neu-accent);
    }
    
    .cursor {
      display: inline-block;
      width: 3px;
      height: 1.25rem;
      background: var(--neu-accent);
      margin-left: 2px;
      animation: blink 1s infinite;
    }
    
    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
    
    .cta-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }
    
    .cta-button {
      padding: 15px 35px;
      border: none;
      border-radius: var(--neu-radius-md);
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: all var(--neu-transition-base);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }
    
    .cta-button.primary {
      background: linear-gradient(145deg, var(--neu-accent), var(--neu-accent-dark));
      color: white;
      box-shadow: var(--neu-shadow-lg);
    }
    
    .cta-button.primary:hover {
      box-shadow: var(--neu-shadow-xl);
      transform: translateY(-2px);
    }
    
    .cta-button.secondary {
      background: var(--neu-base);
      color: var(--neu-text-primary);
      box-shadow: var(--neu-shadow-lg);
    }
    
    .cta-button.secondary:hover {
      box-shadow: var(--neu-shadow-xl);
      transform: translateY(-2px);
    }
    
    .cta-button:active {
      transform: translateY(0);
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      color: var(--neu-text-secondary);
      animation: bounce 2s infinite;
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
      40% { transform: translateX(-50%) translateY(-10px); }
      60% { transform: translateX(-50%) translateY(-5px); }
    }
    
    .scroll-mouse {
      width: 30px;
      height: 50px;
      border: 2px solid var(--neu-text-secondary);
      border-radius: 25px;
      position: relative;
    }
    
    .scroll-wheel {
      width: 4px;
      height: 10px;
      background: var(--neu-text-secondary);
      border-radius: 2px;
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      animation: scroll 2s infinite;
    }
    
    @keyframes scroll {
      0% { top: 10px; opacity: 1; }
      100% { top: 30px; opacity: 0; }
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .hero-section {
        padding: 60px 16px;
        min-height: 100vh;
      }
      
      .hero-content {
        max-width: 100%;
      }
      
      .profile-container {
        margin-bottom: 30px;
      }
      
      .profile-image-wrapper {
        width: 140px;
        height: 140px;
        padding: 8px;
      }
      
      .profile-status {
        width: 32px;
        height: 32px;
        bottom: 8px;
        right: 8px;
      }
      
      .status-dot {
        width: 16px;
        height: 16px;
      }
      
      .hero-title {
        font-size: 2.2rem;
        margin-bottom: 16px;
        line-height: 1.1;
      }
      
      .hero-subtitle {
        font-size: 0.95rem;
        margin-bottom: 32px;
        padding: 0 10px;
        line-height: 1.5;
      }
      
      .cursor {
        height: 0.95rem;
      }
      
      .cta-buttons {
        flex-direction: column;
        align-items: center;
        gap: 16px;
        margin-bottom: 32px;
      }
      
      .cta-button {
        width: 100%;
        max-width: 280px;
        padding: 16px 32px;
        font-size: 0.95rem;
        justify-content: center;
      }
      
      .cta-button:hover {
        transform: translateY(-1px);
      }
      
      .scroll-indicator {
        bottom: 15px;
        gap: 8px;
      }
      
      .scroll-mouse {
        width: 24px;
        height: 40px;
      }
      
      .scroll-wheel {
        width: 3px;
        height: 8px;
        top: 8px;
      }
      
      .scroll-indicator span {
        font-size: 0.8rem;
      }
    }
    
    /* Extra small mobile devices */
    @media (max-width: 480px) {
      .hero-section {
        padding: 50px 12px;
      }
      
      .profile-image-wrapper {
        width: 120px;
        height: 120px;
        padding: 6px;
      }
      
      .profile-status {
        width: 28px;
        height: 28px;
        bottom: 6px;
        right: 6px;
      }
      
      .status-dot {
        width: 14px;
        height: 14px;
      }
      
      .hero-title {
        font-size: 1.9rem;
        margin-bottom: 14px;
      }
      
      .hero-subtitle {
        font-size: 0.9rem;
        margin-bottom: 28px;
        padding: 0 8px;
      }
      
      .cursor {
        height: 0.9rem;
      }
      
      .cta-button {
        max-width: 260px;
        padding: 14px 28px;
        font-size: 0.9rem;
      }
      
      .scroll-indicator {
        bottom: 10px;
      }
      
      .scroll-indicator span {
        font-size: 0.75rem;
      }
    }
    
    /* Landscape mobile orientation */
    @media (max-width: 768px) and (orientation: landscape) {
      .hero-section {
        padding: 40px 16px;
        min-height: 100vh;
      }
      
      .profile-image-wrapper {
        width: 100px;
        height: 100px;
      }
      
      .hero-title {
        font-size: 1.8rem;
        margin-bottom: 12px;
      }
      
      .hero-subtitle {
        font-size: 0.85rem;
        margin-bottom: 24px;
      }
      
      .cta-buttons {
        flex-direction: row;
        gap: 12px;
        margin-bottom: 20px;
      }
      
      .cta-button {
        width: auto;
        max-width: 200px;
        padding: 12px 24px;
        font-size: 0.85rem;
      }
      
      .scroll-indicator {
        bottom: 10px;
      }
    }
  `);
  
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        displayText.value = fullText.slice(0, index);
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);
    
    const cursorInterval = setInterval(() => {
      showCursor.value = !showCursor.value;
    }, 500);
    
    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  });
  
  return (
    <section id="home" class="hero-section">
      <div class="hero-content">
        <div class="profile-container">
          <div class="profile-image-wrapper">
            <img
              src="/pfp.jpeg"
              alt="Profile"
              class="profile-image"
              width="200"
              height="200"
            />
            <div class="profile-status">
              <div class="status-dot"></div>
            </div>
          </div>
        </div>
        
        <h1 class="hero-title animate-fadeInUp">Thomas Powell</h1>
        
        <p class="hero-subtitle">
          <span class="typewriter-text">{displayText.value}</span>
          {showCursor.value && <span class="cursor"></span>}
        </p>
        
        <div class="cta-buttons">
          <a href="#projects" class="cta-button primary">
            <span>View Projects</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="/powellthomas-resume.docx" download class="cta-button secondary">
            <span>Download Resume</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
});
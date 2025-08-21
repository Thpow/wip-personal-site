import { component$, useSignal, useStylesScoped$, $ } from '@builder.io/qwik';

export const NavBar = component$(() => {
  const activeSection = useSignal('home');
  const isMenuOpen = useSignal(false);
  
  useStylesScoped$(`
    .navbar {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--neu-base);
      border-radius: var(--neu-radius-xl);
      padding: 15px 30px;
      box-shadow: var(--neu-shadow-lg);
      z-index: var(--neu-z-fixed);
      display: flex;
      gap: 30px;
      align-items: center;
      transition: all var(--neu-transition-base);
      max-width: 90%;
      width: auto;
    }
    
    .navbar.scrolled {
      top: 10px;
      padding: 12px 25px;
      box-shadow: var(--neu-shadow-xl);
    }
    
    .nav-links {
      display: flex;
      gap: 20px;
      align-items: center;
    }
    
    .nav-link {
      color: var(--neu-text-secondary);
      text-decoration: none;
      font-weight: 500;
      font-size: 0.95rem;
      transition: all var(--neu-transition-base);
      padding: 8px 16px;
      border-radius: var(--neu-radius-lg);
      position: relative;
      cursor: pointer;
    }
    
    .nav-link:hover {
      color: var(--neu-text-primary);
      background: var(--neu-base);
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .nav-link.active {
      color: var(--neu-accent);
      background: var(--neu-base);
      box-shadow: var(--neu-shadow-inset-md);
    }
    
    .logo {
      font-weight: 700;
      font-size: 1.25rem;
      color: var(--neu-text-primary);
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
    }
    
    .logo-icon {
      width: 32px;
      height: 32px;
      background: linear-gradient(145deg, #2e7d32, #795548);
      border-radius: var(--neu-radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      box-shadow: var(--neu-shadow-sm);
    }
    
    .menu-toggle {
      display: none;
      background: var(--neu-base);
      border: none;
      padding: 8px;
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-sm);
      cursor: pointer;
      transition: all var(--neu-transition-base);
    }
    
    .menu-toggle:hover {
      box-shadow: var(--neu-shadow-md);
    }
    
    .menu-toggle:active {
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .menu-icon {
      width: 24px;
      height: 24px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    
    .menu-icon span {
      display: block;
      height: 2px;
      width: 100%;
      background: var(--neu-text-primary);
      border-radius: 2px;
      transition: all var(--neu-transition-base);
    }
    
    .menu-toggle.open .menu-icon span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    
    .menu-toggle.open .menu-icon span:nth-child(2) {
      opacity: 0;
    }
    
    .menu-toggle.open .menu-icon span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
    
    /* Mobile Styles */
    @media (max-width: 768px) {
      .navbar {
        width: calc(100% - 20px);
        padding: 10px 16px;
        top: 10px;
        max-width: none;
      }
      
      .logo {
        font-size: 1.1rem;
      }
      
      .logo-icon {
        width: 28px;
        height: 28px;
      }
      
      .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--neu-base);
        border-radius: var(--neu-radius-lg);
        box-shadow: var(--neu-shadow-xl);
        flex-direction: column;
        padding: 25px 20px;
        margin-top: 15px;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-20px);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .nav-links.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      
      .nav-link {
        width: 100%;
        text-align: center;
        padding: 16px 20px;
        margin: 4px 0;
        font-size: 1rem;
        border-radius: var(--neu-radius-md);
        transition: all 0.2s ease;
      }
      
      .nav-link:hover {
        transform: translateX(5px);
        background: var(--neu-base);
        box-shadow: var(--neu-shadow-md);
      }
      
      .nav-link.active {
        background: linear-gradient(145deg, var(--neu-accent), var(--neu-accent-dark));
        color: white;
        box-shadow: var(--neu-shadow-md);
      }
      
      .menu-toggle {
        display: block;
        padding: 10px;
      }
      
      .menu-icon {
        width: 20px;
        height: 20px;
      }
    }
    
    /* Extra small mobile devices */
    @media (max-width: 480px) {
      .navbar {
        width: calc(100% - 16px);
        padding: 8px 12px;
      }
      
      .logo {
        font-size: 1rem;
      }
      
      .logo-icon {
        width: 24px;
        height: 24px;
      }
      
      .nav-links {
        padding: 20px 16px;
      }
      
      .nav-link {
        padding: 14px 16px;
        font-size: 0.95rem;
      }
    }
  `);
  
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];
  
  const handleNavClick = $((sectionId: string) => {
    activeSection.value = sectionId;
    isMenuOpen.value = false;
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  });
  
  const toggleMenu = $(() => {
    isMenuOpen.value = !isMenuOpen.value;
  });
  
  return (
    <nav class="navbar">
      <a href="#home" class="logo" onClick$={() => handleNavClick('home')}>
        <div class="logo-icon">TP</div>
        <span>Portfolio</span>
      </a>
      
      <div class={`nav-links ${isMenuOpen.value ? 'open' : ''}`}>
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            class={`nav-link ${activeSection.value === section.id ? 'active' : ''}`}
            onClick$={() => handleNavClick(section.id)}
          >
            {section.label}
          </a>
        ))}
      </div>
      
      <button
        class={`menu-toggle ${isMenuOpen.value ? 'open' : ''}`}
        onClick$={toggleMenu}
        aria-label="Toggle menu"
      >
        <div class="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </nav>
  );
});
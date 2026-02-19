import { component$, useSignal, useVisibleTask$, useStylesScoped$, $ } from '@builder.io/qwik';

export const NavBar = component$(() => {
  const activeSection = useSignal('home');
  const isStartOpen = useSignal(false);
  const currentTime = useSignal('');
  
  useStylesScoped$(`
    .taskbar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 32px;
      background: var(--win-surface);
      box-shadow:
        inset 0 1px 0 0 var(--win-white),
        inset 0 2px 0 0 var(--win-bg-light);
      z-index: var(--win-z-taskbar);
      display: flex;
      align-items: center;
      padding: 2px 4px;
      gap: 4px;
    }
    
    .start-button {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 2px 8px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      border: none;
      cursor: pointer;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px;
      font-weight: 700;
      color: var(--win-text-primary);
      height: 26px;
      min-width: auto;
      user-select: none;
    }
    
    .start-button:active,
    .start-button.pressed {
      box-shadow: var(--win-border-button-pressed);
      padding: 3px 7px 1px 9px;
    }
    
    .start-logo {
      width: 18px;
      height: 18px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 1px;
    }
    
    .start-logo span:nth-child(1) { background: #ff0000; }
    .start-logo span:nth-child(2) { background: #00ff00; }
    .start-logo span:nth-child(3) { background: #0000ff; }
    .start-logo span:nth-child(4) { background: #ffff00; }
    
    .start-logo span {
      width: 8px;
      height: 8px;
    }
    
    .taskbar-divider {
      width: 2px;
      height: 24px;
      box-shadow:
        inset 1px 0 0 0 var(--win-shadow),
        inset -1px 0 0 0 var(--win-white);
      margin: 0 2px;
    }
    
    .taskbar-items {
      display: flex;
      gap: 2px;
      flex: 1;
      overflow: hidden;
    }
    
    .taskbar-item {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 2px 8px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      border: none;
      cursor: pointer;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      color: var(--win-text-primary);
      height: 24px;
      min-width: 0;
      max-width: 160px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-decoration: none;
      user-select: none;
    }
    
    .taskbar-item:active {
      box-shadow: var(--win-border-button-pressed);
    }
    
    .taskbar-item.active {
      box-shadow: var(--win-border-button-pressed);
      background: repeating-conic-gradient(var(--win-bg-light) 0% 25%, var(--win-white) 0% 50%) 50% / 2px 2px;
      font-weight: 700;
    }
    
    .taskbar-item-icon {
      font-size: 12px;
      flex-shrink: 0;
    }
    
    .clock-area {
      display: flex;
      align-items: center;
      padding: 2px 8px;
      box-shadow: var(--win-border-sunken);
      height: 24px;
      font-size: 11px;
      color: var(--win-text-primary);
      white-space: nowrap;
      min-width: 60px;
      justify-content: center;
    }
    
    /* Start Menu */
    .start-menu {
      position: absolute;
      bottom: 32px;
      left: 0;
      width: 200px;
      background: var(--win-surface);
      box-shadow: var(--win-border-window);
      display: none;
      padding: 3px;
    }
    
    .start-menu.open {
      display: block;
    }
    
    .start-menu-sidebar {
      position: absolute;
      left: 3px;
      top: 3px;
      bottom: 3px;
      width: 24px;
      background: linear-gradient(0deg, var(--win-titlebar), var(--win-accent-light));
      display: flex;
      align-items: flex-end;
      padding: 4px 2px;
    }
    
    .start-menu-sidebar-text {
      color: var(--win-white);
      font-size: 12px;
      font-weight: 700;
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      letter-spacing: 2px;
    }
    
    .start-menu-items {
      margin-left: 28px;
      padding: 4px 0;
    }
    
    .start-menu-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      font-size: 12px;
      cursor: pointer;
      text-decoration: none;
      color: var(--win-text-primary);
      background: transparent;
      border: none;
      font-family: 'IBM Plex Mono', monospace;
      width: 100%;
      text-align: left;
      white-space: nowrap;
    }
    
    .start-menu-item:hover {
      background: var(--win-titlebar);
      color: var(--win-titlebar-text);
    }
    
    .start-menu-item-icon {
      font-size: 16px;
      width: 20px;
      text-align: center;
      flex-shrink: 0;
    }
    
    .start-menu-separator {
      height: 1px;
      background: var(--win-shadow);
      margin: 4px 12px;
      border-bottom: 1px solid var(--win-white);
    }
    
    @media (max-width: 768px) {
      .taskbar-item {
        max-width: 80px;
        font-size: 10px;
        padding: 2px 4px;
      }
      
      .taskbar-item span:not(.taskbar-item-icon) {
        display: none;
      }
      
      .clock-area {
        font-size: 10px;
        min-width: 50px;
        padding: 2px 4px;
      }
      
      .start-button span:last-child {
        display: none;
      }
    }
  `);
  
  const sections = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About Me', icon: '📋' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'projects', label: 'Projects', icon: '📁' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];
  
  const handleNavClick = $((sectionId: string) => {
    activeSection.value = sectionId;
    isStartOpen.value = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  });
  
  const toggleStart = $(() => {
    isStartOpen.value = !isStartOpen.value;
  });
  
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const updateTime = () => {
      const now = new Date();
      currentTime.value = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.start-button') && !target.closest('.start-menu')) {
        isStartOpen.value = false;
      }
    };
    document.addEventListener('click', handleClick);
    
    return () => {
      clearInterval(interval);
      document.removeEventListener('click', handleClick);
    };
  });
  
  return (
    <nav class="taskbar">
      {/* Start Menu Popup */}
      <div class={`start-menu ${isStartOpen.value ? 'open' : ''}`}>
        <div class="start-menu-sidebar">
          <span class="start-menu-sidebar-text">Powell96</span>
        </div>
        <div class="start-menu-items">
          {sections.map((section) => (
            <button
              key={section.id}
              class="start-menu-item"
              onClick$={() => handleNavClick(section.id)}
            >
              <span class="start-menu-item-icon">{section.icon}</span>
              <span>{section.label}</span>
            </button>
          ))}
          <div class="start-menu-separator"></div>
          <a
            href="/powellthomas-resume.docx"
            download
            class="start-menu-item"
            onClick$={() => { isStartOpen.value = false; }}
          >
            <span class="start-menu-item-icon">📄</span>
            <span>Resume.docx</span>
          </a>
        </div>
      </div>
      
      {/* Start Button */}
      <button
        class={`start-button ${isStartOpen.value ? 'pressed' : ''}`}
        onClick$={toggleStart}
        aria-label="Start menu"
      >
        <span class="start-logo">
          <span></span><span></span><span></span><span></span>
        </span>
        <span>Start</span>
      </button>
      
      <div class="taskbar-divider"></div>
      
      {/* Taskbar Items */}
      <div class="taskbar-items">
        {sections.map((section) => (
          <button
            key={section.id}
            class={`taskbar-item ${activeSection.value === section.id ? 'active' : ''}`}
            onClick$={() => handleNavClick(section.id)}
          >
            <span class="taskbar-item-icon">{section.icon}</span>
            <span>{section.label}</span>
          </button>
        ))}
      </div>
      
      <div class="taskbar-divider"></div>
      
      {/* Clock */}
      <div class="clock-area">
        {currentTime.value}
      </div>
    </nav>
  );
});
import { component$, useStylesScoped$, $ } from '@builder.io/qwik';

export const ASCIIDecorations = component$(() => {
  useStylesScoped$(`
    .crt-overlay {
      pointer-events: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 99998;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 1px,
        rgba(0, 0, 0, 0.03) 1px,
        rgba(0, 0, 0, 0.03) 2px
      );
      animation: crt-flicker 4s linear infinite;
    }
    
    @keyframes crt-flicker {
      0% { opacity: 0.35; }
      5% { opacity: 0.32; }
      10% { opacity: 0.36; }
      15% { opacity: 0.33; }
      20% { opacity: 0.37; }
      100% { opacity: 0.35; }
    }
    
    .desktop-icons {
      position: fixed;
      top: 16px;
      right: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 1;
    }
    
    .desktop-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      padding: 4px;
      cursor: pointer;
      text-align: center;
      width: 72px;
      user-select: none;
      text-decoration: none;
      background: none;
      border: none;
      font-family: 'IBM Plex Mono', monospace;
    }
    
    .desktop-icon:hover .icon-label,
    .desktop-icon:focus .icon-label {
      background: var(--win-titlebar);
      color: var(--win-titlebar-text);
      outline: 1px dotted var(--win-white);
    }
    
    .icon-img {
      font-size: 28px;
      line-height: 1;
    }
    
    .icon-label {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 10px;
      color: var(--win-white);
      text-shadow: 1px 1px 0 var(--win-black);
      padding: 1px 2px;
      word-break: break-word;
      line-height: 1.2;
    }
    
    @media (max-width: 768px) {
      .desktop-icons {
        display: none;
      }
    }
  `);
  
  const scrollTo = $((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  });
  
  const desktopIcons = [
    { id: 'home', icon: '💻', label: 'My Computer' },
    { id: 'about', icon: '�', label: 'About Me' },
    { id: 'experience', icon: '💼', label: 'Experience' },
    { id: 'education', icon: '🎓', label: 'Education' },
    { id: 'projects', icon: '📁', label: 'Projects' },
    { id: 'contact', icon: '📧', label: 'Email' },
  ];
  
  return (
    <>
      {/* CRT Scanline Overlay */}
      <div class="crt-overlay"></div>
      
      {/* Desktop Icons */}
      <div class="desktop-icons">
        {desktopIcons.map((item) => (
          <button key={item.id} class="desktop-icon" onClick$={() => scrollTo(item.id)}>
            <span class="icon-img">{item.icon}</span>
            <span class="icon-label">{item.label}</span>
          </button>
        ))}
        <a href="/powellthomas-resume.docx" download class="desktop-icon">
          <span class="icon-img">📄</span>
          <span class="icon-label">Resume.docx</span>
        </a>
      </div>
    </>
  );
});

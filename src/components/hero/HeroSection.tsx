import { component$, useStylesScoped$ } from '@builder.io/qwik';

export const HeroSection = component$(() => {
  
  useStylesScoped$(`
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px 20px 60px;
      position: relative;
      z-index: 1;
    }
    
    .hero-window {
      max-width: 620px;
      width: 100%;
      background: var(--win-surface);
      box-shadow: var(--win-border-window);
      padding: 3px;
    }
    
    .hero-titlebar {
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
    
    .titlebar-icon {
      font-size: 14px;
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
    
    .hero-body {
      padding: 20px;
      background: var(--win-surface);
    }
    
    .hero-profile-row {
      display: flex;
      gap: 20px;
      align-items: flex-start;
      margin-bottom: 16px;
    }
    
    .profile-frame {
      width: 100px;
      height: 100px;
      flex-shrink: 0;
      box-shadow: var(--win-border-sunken);
      padding: 2px;
      background: var(--win-white);
    }
    
    .profile-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      image-rendering: auto;
      display: block;
    }
    
    .profile-info {
      flex: 1;
    }
    
    .hero-name {
      font-size: 18px;
      font-weight: 700;
      color: var(--win-text-primary);
      margin-bottom: 4px;
    }
    
    .hero-role {
      font-size: 12px;
      color: var(--win-text-secondary);
      margin-bottom: 8px;
    }
    
    .status-row {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      color: var(--win-success);
    }
    
    .status-led {
      width: 8px;
      height: 8px;
      background: var(--win-success);
      border: 1px solid #006600;
      animation: status-blink 2s step-end infinite;
    }
    
    @keyframes status-blink {
      0%, 70% { background: var(--win-success); }
      75%, 95% { background: #004400; }
      100% { background: var(--win-success); }
    }
    
    .hero-separator {
      height: 2px;
      margin: 12px 0;
      box-shadow:
        inset 0 1px 0 0 var(--win-shadow),
        inset 0 -1px 0 0 var(--win-white);
    }
    
    .terminal-box {
      background: var(--win-black);
      color: #00ff00;
      padding: 12px;
      font-family: 'IBM Plex Mono', 'Courier New', monospace;
      font-size: 12px;
      line-height: 1.6;
      box-shadow: var(--win-border-sunken);
      min-height: 60px;
      margin-bottom: 16px;
    }
    
    .terminal-text {
      color: #00ff00;
      overflow: hidden;
      white-space: nowrap;
      display: inline-block;
      max-width: 0;
      animation: typing 2s steps(56, end) 0.3s forwards;
    }

    @keyframes typing {
      from { max-width: 0; }
      to { max-width: 100%; }
    }

    @media (max-width: 600px) {
      .terminal-text {
        white-space: normal;
        max-width: 100%;
        animation: none;
        overflow: visible;
      }
    }
    
    .terminal-cursor {
      display: inline-block;
      width: 7px;
      height: 13px;
      background: #00ff00;
      animation: cursor-blink 0.8s step-end infinite;
      vertical-align: text-bottom;
    }
    
    @keyframes cursor-blink {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0; }
    }
    
    .hero-actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
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
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    
    .win-btn:active {
      box-shadow: var(--win-border-button-pressed);
      padding: 5px 19px 3px 21px;
    }
    
    .win-btn.primary {
      font-weight: 700;
      box-shadow:
        var(--win-border-button),
        0 0 0 1px var(--win-black);
    }
    
    .win-btn.primary:active {
      box-shadow:
        var(--win-border-button-pressed),
        0 0 0 1px var(--win-black);
    }
    
    .hero-statusbar {
      background: var(--win-surface);
      padding: 2px 4px;
      display: flex;
      gap: 2px;
      font-size: 11px;
      color: var(--win-text-secondary);
    }
    
    .statusbar-item {
      padding: 1px 6px;
      box-shadow: var(--win-border-sunken);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .statusbar-item:first-child {
      flex: 2;
    }
    
    .statusbar-item:last-child {
      flex: 1;
      text-align: right;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .hero-section {
        padding: 20px 8px 50px;
        align-items: flex-start;
        padding-top: 40px;
      }
      
      .hero-window {
        max-width: 100%;
      }
      
      .hero-profile-row {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      
      .profile-frame {
        width: 80px;
        height: 80px;
      }
      
      .hero-name {
        font-size: 16px;
      }
      
      .hero-actions {
        flex-direction: column;
      }
      
      .win-btn {
        width: 100%;
        justify-content: center;
      }
      
      .terminal-box {
        font-size: 11px;
      }
    }
  `);
  
  return (
    <section id="home" class="hero-section">
      <div class="hero-window">
        {/* Title Bar */}
        <div class="hero-titlebar">
          <div class="titlebar-left">
            <span class="titlebar-icon">💻</span>
            <span>Welcome - Thomas Powell</span>
          </div>
          <div class="titlebar-buttons">
            <button class="titlebar-btn" aria-hidden="true">_</button>
            <button class="titlebar-btn" aria-hidden="true">□</button>
            <button class="titlebar-btn" aria-hidden="true">×</button>
          </div>
        </div>
        
        {/* Window Body */}
        <div class="hero-body">
          <div class="hero-profile-row">
            <div class="profile-frame">
              <img
                src="https://raw.githubusercontent.com/Thpow/wip-personal-site/main/public/pfp.jpeg"
                alt="Thomas Powell"
                class="profile-image"
                width="96"
                height="96"
                loading="eager"
              />
            </div>
            <div class="profile-info">
              <h1 class="hero-name">Thomas Powell</h1>
              <p class="hero-role">Technical Intern at SAS | CS & Data Science Student</p>
              <div class="status-row">
                <div class="status-led"></div>
                <span>Online — Available for opportunities</span>
              </div>
            </div>
          </div>
          
          <div class="hero-separator"></div>
          
          {/* Terminal prompt */}
          <div class="terminal-box">
            <span class="terminal-text">C:\USERS\TPOWELL&gt; Intern @ SAS | Student at UNC Charlotte</span>
            <span class="terminal-cursor"></span>
          </div>
          
          {/* Action buttons */}
          <div class="hero-actions">
            <a href="#projects" class="win-btn primary">
              📁 View Projects
            </a>
            <a href="/powellthomas-resume.docx" download class="win-btn">
              💾 Download Resume
            </a>
          </div>
        </div>
        
        {/* Status Bar */}
        <div class="hero-statusbar">
          <div class="statusbar-item">Ready</div>
          <div class="statusbar-item">UNC Charlotte</div>
        </div>
      </div>
    </section>
  );
});
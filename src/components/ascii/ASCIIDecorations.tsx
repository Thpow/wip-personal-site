import { component$, useSignal, useVisibleTask$, useStylesScoped$ } from '@builder.io/qwik';

export const ASCIIDecorations = component$(() => {
  const dnaFrame = useSignal<string>('');
  const telomereFrame = useSignal<string>('');
  const time = useSignal(0);
  
  useStylesScoped$(`
    .ascii-decorations {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      z-index: 0;
      font-family: 'Courier New', monospace;
      font-size: 10px;
      line-height: 10px;
    }
    
    /* DNA Sidebar - Left */
    .dna-sidebar {
      position: fixed;
      left: 20px;
      top: 50%;
      transform: translateY(-50%) perspective(800px) rotateY(-15deg);
      width: 100px;
      pointer-events: auto;
      opacity: 0.8;
    }
    
    .dna-strand {
      white-space: pre;
      color: #00CED1;
      text-shadow: 0 0 5px rgba(0, 206, 209, 0.5);
    }
    
    /* Telomere Sidebar - Right */
    .telomere-sidebar {
      position: fixed;
      right: 20px;
      top: 50%;
      transform: translateY(-50%) perspective(800px) rotateY(15deg);
      width: 100px;
      pointer-events: auto;
      opacity: 0.8;
    }
    
    .telomere-strand {
      white-space: pre;
      color: #48D1CC;
      text-shadow: 0 0 5px rgba(72, 209, 204, 0.5);
    }
    
    /* Terminal - Top Left */
    .terminal-art {
      position: fixed;
      left: 40px;
      top: 120px;
      pointer-events: auto;
      opacity: 0.6;
    }
    
    .terminal-text {
      white-space: pre;
      color: #00CED1;
      font-size: 9px;
      line-height: 9px;
    }
    
    /* Sigma - Top Right */
    .sigma-art {
      position: fixed;
      right: 150px;
      top: 100px;
      pointer-events: auto;
      opacity: 0.7;
    }
    
    .sigma-text {
      white-space: pre;
      color: #40E0D0;
      font-size: 14px;
      line-height: 14px;
      text-shadow: 0 0 8px rgba(64, 224, 208, 0.6);
    }
    
    /* ML Neural Network - Bottom Right */
    .ml-art {
      position: fixed;
      right: 40px;
      bottom: 120px;
      pointer-events: auto;
      opacity: 0.6;
    }
    
    .ml-text {
      white-space: pre;
      color: #7FFFD4;
      font-size: 8px;
      line-height: 8px;
    }
    
    /* Animated pulse for some elements */
    .animated {
      animation: pulse 3s ease-in-out infinite;
    }
    
    @keyframes pulse {
      0%, 100% {
        opacity: 0.6;
        text-shadow: 0 0 5px currentColor;
      }
      50% {
        opacity: 1;
        text-shadow: 0 0 15px currentColor, 0 0 25px currentColor;
      }
    }
    
    /* Rotating animation for DNA */
    .rotating {
      animation: rotate-slow 30s linear infinite;
    }
    
    @keyframes rotate-slow {
      from { transform: translateY(-50%) perspective(800px) rotateY(-15deg) rotateZ(0deg); }
      to { transform: translateY(-50%) perspective(800px) rotateY(-15deg) rotateZ(360deg); }
    }
    
    /* Hover glitch effect */
    .ascii-char {
      display: inline-block;
      transition: all 0.1s;
    }
    
    .ascii-char:hover,
    .ascii-char.glitch {
      color: #00ff88 !important;
      text-shadow: 
        0 0 10px #00ff88,
        2px 0 5px #00ff88,
        -2px 0 5px #00ff88 !important;
      animation: glitch-shake 0.3s linear;
    }
    
    @keyframes glitch-shake {
      0%, 100% { transform: translate(0); }
      25% { transform: translate(-1px, 1px); }
      50% { transform: translate(1px, -1px); }
      75% { transform: translate(-1px, -1px); }
    }
    
    /* Responsive - hide on smaller screens */
    @media (max-width: 1024px) {
      .dna-sidebar {
        left: 5px;
        transform: translateY(-50%) scale(0.7);
      }
      
      .telomere-sidebar {
        right: 5px;
        transform: translateY(-50%) scale(0.7);
      }
      
      .terminal-art,
      .sigma-art,
      .ml-art {
        display: none;
      }
    }
    
    @media (max-width: 768px) {
      .dna-sidebar,
      .telomere-sidebar {
        display: none;
      }
    }
  `);
  
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    let rotation = 0;
    
    const generateDNA3D = () => {
      const lines: string[] = [];
      const height = 30;
      rotation += 0.05;
      
      for (let y = 0; y < height; y++) {
        const angle1 = (y / 2 + rotation) % (Math.PI * 2);
        const angle2 = angle1 + Math.PI;
        
        const x1 = Math.sin(angle1) * 4 + 6;
        const x2 = Math.sin(angle2) * 4 + 6;
        const z1 = Math.cos(angle1);
        const z2 = Math.cos(angle2);
        
        const lineArray = new Array(12).fill(' ');
        const bases = ['A', 'T', 'G', 'C'];
        const base = bases[Math.floor(y / 3) % 4];
        
        const x1Idx = Math.floor(x1);
        const x2Idx = Math.floor(x2);
        
        if (x1Idx >= 0 && x1Idx < 12) {
          const char = z1 > 0.3 ? '●' : z1 > -0.3 ? '◉' : '○';
          lineArray[x1Idx] = `<span class="ascii-char" data-base="${base}">${char}</span>`;
        }
        
        if (x2Idx >= 0 && x2Idx < 12) {
          const char = z2 > 0.3 ? '●' : z2 > -0.3 ? '◉' : '○';
          lineArray[x2Idx] = `<span class="ascii-char" data-base="${base}">${char}</span>`;
        }
        
        if (y % 3 === 0) {
          const min = Math.min(x1Idx, x2Idx);
          const max = Math.max(x1Idx, x2Idx);
          for (let i = min + 1; i < max && i < 12; i++) {
            if (i >= 0 && lineArray[i] === ' ') {
              lineArray[i] = `<span class="ascii-char">─</span>`;
            }
          }
        }
        
        lines.push(lineArray.join(''));
      }
      
      dnaFrame.value = lines.join('\n');
    };
    
    const generateTelomere = () => {
      const lines: string[] = [];
      const height = 25;
      const pattern = ['TTAGGG', 'AATCCC', 'TTAGGG', 'AATCCC'];
      
      for (let y = 0; y < height; y++) {
        const offset = Math.floor(time.value / 10) % 6;
        const seq = pattern[Math.floor(y / 4) % pattern.length];
        const line = ' '.repeat(offset) + seq.split('').map(c => 
          `<span class="ascii-char">${c}</span>`
        ).join(' ');
        lines.push(line);
      }
      
      telomereFrame.value = lines.join('\n');
    };
    
    const update = () => {
      generateDNA3D();
      generateTelomere();
      time.value++;
    };
    
    update();
    const animationId = setInterval(update, 100);
    
    // Add hover glitch effect
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('ascii-char')) {
        target.classList.add('glitch');
        setTimeout(() => {
          target.classList.remove('glitch');
        }, 300);
      }
    };
    
    document.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      clearInterval(animationId);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  });
  
  const terminalArt = `
┌─────────────────┐
│ >_ root@sys     │
│ $ initialize    │
│ [████████] 100% │
│ > Ready         │
└─────────────────┘
`.trim();
  
  const sigmaArt = `
  ╔═══╗
  ║ Σ ║
  ╚═══╝
`.trim();
  
  const mlArt = `
  ○────○────○
  │ ╲  │  ╱ │
  ○──○─○─○──○
  │ ╱  │  ╲ │
  ○────○────○
   Neural Net
`.trim();
  
  return (
    <div class="ascii-decorations">
      {/* DNA Strand - Left Sidebar */}
      <div class="dna-sidebar rotating">
        <div class="dna-strand" dangerouslySetInnerHTML={dnaFrame.value}></div>
      </div>
      
      {/* Telomere - Right Sidebar */}
      <div class="telomere-sidebar animated">
        <div class="telomere-strand" dangerouslySetInnerHTML={telomereFrame.value}></div>
      </div>
      
      {/* Terminal - Top Left */}
      <div class="terminal-art">
        <pre class="terminal-text">
          {terminalArt.split('').map((char, i) => (
            <span key={i} class="ascii-char">{char}</span>
          ))}
        </pre>
      </div>
      
      {/* Sigma - Top Right */}
      <div class="sigma-art animated">
        <pre class="sigma-text">
          {sigmaArt.split('').map((char, i) => (
            <span key={i} class="ascii-char">{char}</span>
          ))}
        </pre>
      </div>
      
      {/* ML Neural Network - Bottom Right */}
      <div class="ml-art">
        <pre class="ml-text">
          {mlArt.split('').map((char, i) => (
            <span key={i} class="ascii-char">{char}</span>
          ))}
        </pre>
      </div>
    </div>
  );
});

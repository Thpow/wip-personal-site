import { component$, useSignal, useVisibleTask$, useStylesScoped$ } from '@builder.io/qwik';

export const DNABackground = component$(() => {
  const canvasRef = useSignal<HTMLDivElement>();
  const dnaFrame = useSignal<string>('');
  const time = useSignal(0);
  
  useStylesScoped$(`
    .dna-background {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      z-index: -1;
      pointer-events: auto;
      background: linear-gradient(to bottom, #ffffff, #f8f9fa);
      font-family: 'Courier New', monospace;
      font-size: 8px;
      line-height: 8px;
      color: #00CED1;
      white-space: pre;
      user-select: none;
    }
    
    .dna-canvas {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      font-family: 'Courier New', monospace;
      overflow: hidden;
    }
    
    .dna-frame {
      position: absolute;
      transform: perspective(1000px) rotateX(10deg);
      letter-spacing: 1px;
      text-align: center;
      white-space: pre;
      line-height: 1.2;
      opacity: 0.9;
    }
    
    /* 3D DNA strand colors - GHK-Cu inspired blue */
    .base-A {
      color: #00CED1; /* Dark Turquoise - GHK-Cu primary */
      text-shadow: 0 0 3px rgba(0, 206, 209, 0.5);
    }
    
    .base-T {
      color: #48D1CC; /* Medium Turquoise */
      text-shadow: 0 0 3px rgba(72, 209, 204, 0.5);
    }
    
    .base-G {
      color: #40E0D0; /* Turquoise */
      text-shadow: 0 0 3px rgba(64, 224, 208, 0.5);
    }
    
    .base-C {
      color: #7FFFD4; /* Aquamarine */
      text-shadow: 0 0 3px rgba(127, 255, 212, 0.5);
    }
    
    .connector {
      color: #87CEEB; /* Sky Blue */
      opacity: 0.4;
    }
    
    .backbone {
      color: #B0C4DE; /* Light Steel Blue */
      opacity: 0.6;
    }
    
    /* 3D rotation animation */
    @keyframes rotate3d {
      from {
        transform: perspective(1000px) rotateX(10deg) rotateY(0deg);
      }
      to {
        transform: perspective(1000px) rotateX(10deg) rotateY(360deg);
      }
    }
    
    .rotating {
      animation: rotate3d 20s linear infinite;
    }
    
    /* Depth layers for 3D effect */
    .layer-front {
      z-index: 3;
      opacity: 1;
      transform: translateZ(50px);
    }
    
    .layer-middle {
      z-index: 2;
      opacity: 0.7;
      transform: translateZ(0px);
    }
    
    .layer-back {
      z-index: 1;
      opacity: 0.4;
      transform: translateZ(-50px);
    }
    
    /* Glowing effect for active bases */
    @keyframes glow {
      0%, 100% {
        opacity: 0.7;
        text-shadow: 0 0 5px currentColor;
      }
      50% {
        opacity: 1;
        text-shadow: 0 0 15px currentColor, 0 0 25px currentColor;
      }
    }
    
    .glow-effect {
      animation: glow 2s ease-in-out infinite;
    }
    
    /* Subtle scanline effect */
    .scanline {
      position: absolute;
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, 
        transparent,
        rgba(0, 206, 209, 0.3),
        transparent
      );
      animation: scan 8s linear infinite;
      pointer-events: none;
    }
    
    @keyframes scan {
      0% { top: -1px; }
      100% { top: 100%; }
    }
    
    /* Hover interaction - slight zoom */
    .dna-canvas:hover .dna-frame {
      transform: perspective(1000px) rotateX(10deg) scale(1.05);
      transition: transform 0.3s ease;
    }
    
    /* Responsive text size */
    @media (max-width: 768px) {
      .dna-background {
        font-size: 6px;
        line-height: 6px;
      }
    }
    
    @media (max-width: 480px) {
      .dna-background {
        font-size: 5px;
        line-height: 5px;
      }
    }
  `);
  
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const height = 40; // Height of the DNA strand
    const width = 80; // Width of the viewport
    
    // ASCII characters for 3D DNA structure
    const bases = {
      A: 'A', T: 'T', G: 'G', C: 'C'
    };
    const backbone = ['○', '●', '◉', '◎'];
    const connectors = ['═', '─', '╌', '┄', '━'];
    
    let rotation = 0;
    
    const generateDNA3D = () => {
      const lines: string[] = [];
      rotation += 0.05;
      
      for (let y = 0; y < height; y++) {
        let line = '';
        const angle1 = (y / 3 + rotation) % (Math.PI * 2);
        const angle2 = angle1 + Math.PI;
        
        // Calculate 3D positions
        const x1 = Math.sin(angle1) * 20 + width / 2;
        const x2 = Math.sin(angle2) * 20 + width / 2;
        const z1 = Math.cos(angle1);
        const z2 = Math.cos(angle2);
        
        // Create empty line
        const lineArray = new Array(width).fill(' ');
        
        // Determine which base pair to use
        const basePairIndex = Math.floor(y / 2) % 4;
        const basePairs = [['A', 'T'], ['G', 'C'], ['C', 'G'], ['T', 'A']];
        const [base1, base2] = basePairs[basePairIndex];
        
        // Draw backbone with depth-based styling
        const backbone1Index = Math.floor(x1);
        const backbone2Index = Math.floor(x2);
        
        if (backbone1Index >= 0 && backbone1Index < width) {
          const backboneChar = backbone[y % backbone.length];
          const depthClass = z1 > 0.3 ? 'layer-front' : z1 > -0.3 ? 'layer-middle' : 'layer-back';
          lineArray[backbone1Index] = `<span class="backbone ${depthClass}">${backboneChar}</span>`;
        }
        
        if (backbone2Index >= 0 && backbone2Index < width) {
          const backboneChar = backbone[(y + 2) % backbone.length];
          const depthClass = z2 > 0.3 ? 'layer-front' : z2 > -0.3 ? 'layer-middle' : 'layer-back';
          lineArray[backbone2Index] = `<span class="backbone ${depthClass}">${backboneChar}</span>`;
        }
        
        // Draw base pairs every few lines
        if (y % 3 === 0) {
          const basePos1 = backbone1Index + Math.floor((backbone2Index - backbone1Index) * 0.3);
          const basePos2 = backbone1Index + Math.floor((backbone2Index - backbone1Index) * 0.7);
          
          if (basePos1 >= 0 && basePos1 < width) {
            const shouldGlow = Math.random() > 0.8;
            lineArray[basePos1] = `<span class="base-${base1} ${shouldGlow ? 'glow-effect' : ''}">${base1}</span>`;
          }
          
          if (basePos2 >= 0 && basePos2 < width) {
            const shouldGlow = Math.random() > 0.8;
            lineArray[basePos2] = `<span class="base-${base2} ${shouldGlow ? 'glow-effect' : ''}">${base2}</span>`;
          }
          
          // Draw connectors between bases
          for (let i = basePos1 + 1; i < basePos2 && i < width; i++) {
            if (i >= 0 && lineArray[i] === ' ') {
              const connectorChar = connectors[Math.floor(Math.random() * connectors.length)];
              lineArray[i] = `<span class="connector">${connectorChar}</span>`;
            }
          }
        }
        
        // Convert array to string
        line = lineArray.map(char => char === ' ' ? ' ' : char).join('');
        lines.push(line);
      }
      
      dnaFrame.value = lines.join('\n');
      time.value++;
    };
    
    generateDNA3D();
    const animationId = setInterval(generateDNA3D, 50); // 20 FPS for smooth rotation
    
    return () => {
      clearInterval(animationId);
    };
  });
  
  return (
    <div ref={canvasRef} class="dna-background">
      <div class="dna-canvas">
        <div class="dna-frame rotating" dangerouslySetInnerHTML={dnaFrame.value}></div>
      </div>
      <div class="scanline"></div>
    </div>
  );
});

import{_ as t}from"./q-XYi0b4s7.js";import{E as i,B as e,q as a}from"./q-Cn9eRv09.js";const o=()=>(i(a(()=>t(()=>Promise.resolve().then(()=>n),void 0),"s_5keZie0WZ7I")),e("div",null,{class:"background-shapes"},[e("div",null,{class:"shape shape-1 kiwi-skin"},null,3,null),e("div",null,{class:"shape shape-2 kiwi-fruit"},null,3,null),e("div",null,{class:"shape shape-3 kiwi-skin"},null,3,null),e("div",null,{class:"shape shape-4 kiwi-fruit"},null,3,null),e("div",null,{class:"shape shape-5 kiwi-skin"},null,3,null),e("div",null,{class:"shape shape-6 kiwi-fruit"},null,3,null)],3,"70_0")),r=`
    .background-shapes {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      z-index: -1;
      pointer-events: none;
    }
    
    .shape {
      position: absolute;
      border-radius: 50%;
      transform-style: preserve-3d;
      filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2));
    }
    
    /* Kiwi skin texture sphere */
    .kiwi-skin {
      background: 
        radial-gradient(ellipse at 30% 30%, #8B4513 0%, #7c3f00 40%, #5D2F00 100%);
      position: relative;
      overflow: hidden;
    }
    
    .kiwi-skin::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: 
        repeating-conic-gradient(from 0deg at 50% 50%, 
          transparent 0deg, 
          rgba(139, 69, 19, 0.1) 2deg, 
          transparent 4deg, 
          transparent 6deg),
        repeating-radial-gradient(circle at 50% 50%, 
          transparent 0px, 
          rgba(92, 51, 23, 0.2) 2px, 
          transparent 4px);
      transform: rotate(45deg);
      mix-blend-mode: multiply;
    }
    
    .kiwi-skin::after {
      content: '';
      position: absolute;
      top: 10%;
      left: 10%;
      width: 40%;
      height: 40%;
      background: radial-gradient(ellipse at center, 
        rgba(255, 255, 255, 0.3) 0%, 
        transparent 70%);
      filter: blur(10px);
    }
    
    /* Kiwi fruit interior sphere */
    .kiwi-fruit {
      background: 
        radial-gradient(circle at center, 
          #F5F5DC 0%, 
          #F5F5DC 5%, 
          #8EE53F 5.5%, 
          #7FD63F 40%, 
          #6BC63F 70%, 
          #5AB63F 100%);
      position: relative;
      overflow: hidden;
      box-shadow: 
        inset -20px -20px 40px rgba(0, 0, 0, 0.3),
        inset 20px 20px 40px rgba(255, 255, 255, 0.2);
    }
    
    .kiwi-fruit::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      transform: translate(-50%, -50%);
      background: 
        repeating-conic-gradient(from 0deg at 50% 50%, 
          transparent 0deg, 
          rgba(0, 0, 0, 0.05) 10deg, 
          transparent 10deg, 
          transparent 20deg);
    }
    
    /* Seeds pattern */
    .kiwi-fruit::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(circle at 20% 30%, #2C2C2C 2px, transparent 2px),
        radial-gradient(circle at 40% 20%, #2C2C2C 1.5px, transparent 1.5px),
        radial-gradient(circle at 60% 40%, #2C2C2C 2px, transparent 2px),
        radial-gradient(circle at 30% 60%, #2C2C2C 1.5px, transparent 1.5px),
        radial-gradient(circle at 70% 30%, #2C2C2C 1.5px, transparent 1.5px),
        radial-gradient(circle at 50% 70%, #2C2C2C 2px, transparent 2px),
        radial-gradient(circle at 80% 60%, #2C2C2C 1.5px, transparent 1.5px),
        radial-gradient(circle at 25% 80%, #2C2C2C 2px, transparent 2px),
        radial-gradient(circle at 75% 75%, #2C2C2C 1.5px, transparent 1.5px);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      opacity: 0.6;
    }
    
    /* Individual sphere styles */
    .shape-1 {
      width: 350px;
      height: 350px;
      top: 10%;
      left: -100px;
      animation: float 20s ease-in-out infinite, rotate 30s linear infinite;
      opacity: 0.7;
    }
    
    .shape-2 {
      width: 280px;
      height: 280px;
      bottom: 15%;
      right: -80px;
      animation: float 18s ease-in-out infinite reverse, rotate 25s linear infinite reverse;
      opacity: 0.6;
    }
    
    .shape-3 {
      width: 200px;
      height: 200px;
      top: 50%;
      left: 15%;
      animation: float 15s ease-in-out infinite, rotate 20s linear infinite;
      opacity: 0.8;
    }
    
    .shape-4 {
      width: 250px;
      height: 250px;
      top: 20%;
      right: 20%;
      animation: float 22s ease-in-out infinite reverse, rotate 28s linear infinite reverse;
      opacity: 0.7;
    }
    
    .shape-5 {
      width: 180px;
      height: 180px;
      bottom: 30%;
      left: 30%;
      animation: float 17s ease-in-out infinite, rotate 23s linear infinite;
      opacity: 0.6;
    }
    
    .shape-6 {
      width: 300px;
      height: 300px;
      top: 70%;
      right: 10%;
      animation: float 25s ease-in-out infinite reverse, rotate 35s linear infinite reverse;
      opacity: 0.5;
    }
    
    @keyframes float {
      0%, 100% { 
        transform: translateY(0) translateX(0) scale(1);
      }
      25% {
        transform: translateY(-30px) translateX(20px) scale(1.05);
      }
      50% { 
        transform: translateY(20px) translateX(-10px) scale(0.95);
      }
      75% {
        transform: translateY(-10px) translateX(-20px) scale(1.02);
      }
    }
    
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .shape-1 { width: 250px; height: 250px; }
      .shape-2 { width: 200px; height: 200px; }
      .shape-3 { width: 150px; height: 150px; }
      .shape-4 { width: 180px; height: 180px; }
      .shape-5 { width: 130px; height: 130px; }
      .shape-6 { width: 220px; height: 220px; }
    }
    
    @media (max-width: 480px) {
      .shape-1 { width: 180px; height: 180px; }
      .shape-2 { width: 150px; height: 150px; }
      .shape-3 { width: 100px; height: 100px; }
      .shape-4 { width: 130px; height: 130px; }
      .shape-5 { width: 90px; height: 90px; }
      .shape-6 { width: 160px; height: 160px; }
    }
  `,n=Object.freeze(Object.defineProperty({__proto__:null,s_5keZie0WZ7I:r},Symbol.toStringTag,{value:"Module"}));export{r as s_5keZie0WZ7I,o as s_CIpJWWhXzoM};

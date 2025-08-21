import{u,k as a,E as c,o as p,B as e,h as d,q as r,_hW as h}from"./q-Cn9eRv09.js";import{_ as s}from"./q-XYi0b4s7.js";const m=()=>{const[o,t]=u();let n=0;const l=setInterval(()=>{n<=61?(o.value="Full-Stack Developer | Problem Solver | Innovation Enthusiast".slice(0,n),n++):clearInterval(l)},50),i=setInterval(()=>{t.value=!t.value},500);return()=>{clearInterval(l),clearInterval(i)}},x=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_qJmIgBWFER0:m},Symbol.toStringTag,{value:"Module"})),f=`
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
      bottom: 40px;
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
      .hero-title {
        font-size: 2.5rem;
      }
      
      .hero-subtitle {
        font-size: 1rem;
      }
      
      .profile-image-wrapper {
        width: 150px;
        height: 150px;
      }
      
      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }
      
      .cta-button {
        width: 250px;
      }
    }
  `,v=Object.freeze(Object.defineProperty({__proto__:null,s_R0z7yMvPekY:f},Symbol.toStringTag,{value:"Module"})),b=()=>{const o=a(""),t=a(!0);return c(r(()=>s(()=>Promise.resolve().then(()=>v),void 0),"s_R0z7yMvPekY")),p(r(()=>s(()=>Promise.resolve().then(()=>x),void 0),"s_qJmIgBWFER0",[o,t])),e("section",null,{id:"home",class:"hero-section"},e("div",null,{class:"hero-content"},[e("div",null,{class:"profile-container"},e("div",null,{class:"profile-image-wrapper"},[e("img",null,{src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",alt:"Profile",class:"profile-image",width:180,height:180},null,3,null),e("div",null,{class:"profile-status"},e("div",null,{class:"status-dot"},null,3,null),3,null)],3,null),3,null),e("h1",null,{class:"hero-title animate-fadeInUp"},"John Doe",3,null),e("p",null,{class:"hero-subtitle"},[e("span",null,{class:"typewriter-text"},d(n=>n.value,[o]),3,null),t.value&&e("span",null,{class:"cursor"},null,3,"HJ_0")],1,null),e("div",null,{class:"cta-buttons"},[e("a",null,{href:"#projects",class:"cta-button primary"},[e("span",null,null,"View Projects",3,null),e("svg",null,{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},e("path",null,{d:"M5 12h14M12 5l7 7-7 7"},null,3,null),3,null)],3,null),e("a",null,{href:"/resume.pdf",download:!0,class:"cta-button secondary"},[e("span",null,null,"Download CV",3,null),e("svg",null,{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},e("path",null,{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"},null,3,null),3,null)],3,null)],3,null),e("div",null,{class:"scroll-indicator"},[e("div",null,{class:"scroll-mouse"},e("div",null,{class:"scroll-wheel"},null,3,null),3,null),e("span",null,null,"Scroll to explore",3,null)],3,null)],1,null),1,"HJ_1")},y=Object.freeze(Object.defineProperty({__proto__:null,s_1V8LiPxWuaU:b},Symbol.toStringTag,{value:"Module"}));export{y as H,h as _hW,b as s_1V8LiPxWuaU,f as s_R0z7yMvPekY,m as s_qJmIgBWFER0};

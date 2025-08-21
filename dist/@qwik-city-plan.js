import{c as g,i as l,b as c,S as _,F as w,u as m,d as v,e,f as p,g as d,h as s,j as x,k as I,l as k}from"./q-DzeDeIr8.js";const A=()=>c(w,{children:c(_,null,3,"yB_0")},1,"yB_1"),P=g(l(A,"s_VKFlAWJuVm8")),M=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),T=`
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
  `,E=n=>{const[a,t]=x();a.value=n,t.value=!1;const r=document.getElementById(n);r&&r.scrollIntoView({behavior:"smooth"})},D=()=>{const[n]=x();n.value=!n.value},U=()=>{const n=m("home"),a=m(!1);v(l(T,"s_gZs8EX5SgiU"));const t=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"projects",label:"Projects"},{id:"contact",label:"Contact"}],r=l(E,"s_uYqmvnpRTCw",[n,a]),u=l(D,"s_LlZXhqmUmt8",[a]);return e("nav",null,{class:"navbar"},[e("a",null,{href:"#home",class:"logo",onClick$:p("s_0NkL50ppaIg",[r])},[e("div",null,{class:"logo-icon"},"TP",3,null),e("span",null,null,"Portfolio",3,null)],3,null),e("div",null,{class:d(o=>`nav-links ${o.value?"open":""}`,[a],'`nav-links ${p0.value?"open":""}`')},t.map(o=>e("a",{href:`#${o.id}`,class:`nav-link ${n.value===o.id?"active":""}`,onClick$:p("s_0hCi1q038Qo",[r,o])},null,s(o,"label"),0,o.id)),1,null),e("button",null,{class:d(o=>`menu-toggle ${o.value?"open":""}`,[a],'`menu-toggle ${p0.value?"open":""}`'),"aria-label":"Toggle menu",onClick$:u},e("div",null,{class:"menu-icon"},[e("span",null,null,null,3,null),e("span",null,null,null,3,null),e("span",null,null,null,3,null)],3,null),3,null)],1,"R4_0")},L=g(l(U,"s_ropMBSBWqro")),O="/assets/CCkPUdZ7-pfp.webp 200w, /assets/BcNx890t-pfp.webp 400w, /assets/CvN5FndE-pfp.webp 600w, /assets/B0L4iJjN-pfp.webp 800w",B=800,H=800,q={srcSet:O,width:B,height:H};function Y(n,a,t,r){return e("img",{decoding:"async",loading:"lazy",...n},q,void 0,3,a,r)}const Q=`
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
        bottom: 30px;
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
        bottom: 25px;
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
        bottom: 20px;
      }
    }
  `,$=()=>{const n=m(""),a=m(!0);return v(l(Q,"s_R0z7yMvPekY")),I(p("s_qJmIgBWFER0",[n,a])),e("section",null,{id:"home",class:"hero-section"},e("div",null,{class:"hero-content"},[e("div",null,{class:"profile-container"},e("div",null,{class:"profile-image-wrapper"},[c(Y,{alt:"Profile",class:"profile-image",[k]:{alt:k,class:k}},3,"HJ_0"),e("div",null,{class:"profile-status"},e("div",null,{class:"status-dot"},null,3,null),3,null)],1,null),1,null),e("h1",null,{class:"hero-title animate-fadeInUp"},"Thomas Powell",3,null),e("p",null,{class:"hero-subtitle"},[e("span",null,{class:"typewriter-text"},d(t=>t.value,[n],"p0.value"),3,null),a.value&&e("span",null,{class:"cursor"},null,3,"HJ_1")],1,null),e("div",null,{class:"cta-buttons"},[e("a",null,{href:"#projects",class:"cta-button primary"},[e("span",null,null,"View Projects",3,null),e("svg",null,{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},e("path",null,{d:"M5 12h14M12 5l7 7-7 7"},null,3,null),3,null)],3,null),e("a",null,{href:"/powellthomas-resume.docx",download:!0,class:"cta-button secondary"},[e("span",null,null,"Download Resume",3,null),e("svg",null,{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},e("path",null,{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"},null,3,null),3,null)],3,null)],3,null),e("div",null,{class:"scroll-indicator"},[e("div",null,{class:"scroll-mouse"},e("div",null,{class:"scroll-wheel"},null,3,null),3,null),e("span",null,null,"Scroll to explore",3,null)],3,null)],1,null),1,"HJ_2")},G=g(l($,"s_1V8LiPxWuaU")),J=[{name:"HTML/CSS/JS",level:90,category:"frontend"},{name:"Flask",level:85,category:"frontend"},{name:"Web Development",level:85,category:"frontend"},{name:"Full Stack Development",level:80,category:"frontend"},{name:"Python",level:95,category:"backend"},{name:"Java",level:75,category:"backend"},{name:"C++",level:70,category:"backend"},{name:"Machine Learning",level:80,category:"backend"},{name:"Web Automation",level:90,category:"backend"},{name:"Test Driven Development",level:85,category:"backend"},{name:"AWS S3",level:85,category:"database"},{name:"Cloud Storage",level:80,category:"database"},{name:"Docker",level:90,category:"devops"},{name:"Kubernetes",level:85,category:"devops"},{name:"AWS",level:85,category:"devops"},{name:"Terraform",level:80,category:"devops"},{name:"CI/CD",level:90,category:"devops"},{name:"Infrastructure/Architecture",level:85,category:"devops"},{name:"Helm",level:80,category:"devops"},{name:"Git",level:95,category:"tools"},{name:"Operating Systems",level:85,category:"tools"},{name:"Networking",level:75,category:"tools"},{name:"Selenium Grid",level:90,category:"tools"},{name:"Prompt Engineering",level:80,category:"tools"},{name:"Problem Solving",level:95,category:"soft"},{name:"Communication",level:90,category:"soft"},{name:"Team Collaboration",level:90,category:"soft"},{name:"Project Management",level:85,category:"soft"}],F=[{name:"Python",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",proficiency:"expert",yearsOfExperience:3},{name:"Docker",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",proficiency:"advanced",yearsOfExperience:2},{name:"Kubernetes",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",proficiency:"advanced",yearsOfExperience:2},{name:"AWS",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",proficiency:"advanced",yearsOfExperience:2},{name:"Terraform",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",proficiency:"advanced",yearsOfExperience:2},{name:"Java",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",proficiency:"intermediate",yearsOfExperience:2},{name:"Git",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",proficiency:"expert",yearsOfExperience:3},{name:"Flask",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",proficiency:"advanced",yearsOfExperience:2},{name:"HTML5",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",proficiency:"advanced",yearsOfExperience:3},{name:"JavaScript",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",proficiency:"advanced",yearsOfExperience:2},{name:"C++",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",proficiency:"intermediate",yearsOfExperience:1},{name:"Linux",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",proficiency:"advanced",yearsOfExperience:3}],S=n=>J.filter(a=>a.category===n),h={name:"Thomas Powell",title:"Technical Intern at SAS | CS & Data Science Student",bio:`I'm a Student at UNC Charlotte, deeply invested in computers and software as both a hobby and career. Graduate of the Academy of Information Technology and interning at SAS since June 2022.
        
        Currently earning both my BS in Computer Science with concentration in data science, and a MS in data science and business analytics dual track. My work at SAS focuses on quality assurance infrastructure, cloud engineering, and full-stack development.
        
        I specialize in creating automation tools, web applications, and cloud infrastructure to enable quality assurance and development teams. My projects range from selenium grid deployments to command line tools for internal APIs.`,highlights:["3+ years as Technical Intern at SAS","BS Computer Science & MS Data Science student","Second Place & Golden Hack Award at UNC Charlotte AxeHack","3.95 GPA (Undergrad) / 4.0 GPA (Graduate)","AOIT Honors Program Graduate","Experience with enterprise-scale projects"],interests:["Cloud Infrastructure","DevOps Automation","Machine Learning","Web Development","Test Automation","Containerization"]},R=`
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
  `,W=()=>{v(l(R,"s_3Vkkdid5Eow"));const n=S("frontend").slice(0,4),a=S("backend").slice(0,4);return e("section",null,{id:"about",class:"about-section"},e("div",null,{class:"about-container"},[e("h2",null,{class:"section-title animate-fadeInUp"},"About Me",3,null),e("p",null,{class:"section-subtitle animate-fadeInUp stagger-1"},"Passionate about building scalable solutions and creating exceptional user experiences",3,null),e("div",null,{class:"about-content"},[e("div",null,{class:"bio-section animate-fadeInLeft"},[e("h3",null,{class:"bio-title"},h.name,3,null),e("p",null,{class:"bio-subtitle"},h.title,3,null),e("p",null,{class:"bio-text"},h.bio,3,null),e("div",null,{class:"highlights"},h.highlights.slice(0,4).map((t,r)=>e("div",null,{class:"highlight-item"},[e("div",null,{class:"highlight-icon"},"✓",3,null),e("span",null,null,t,1,null)],1,r)),1,null)],1,null),e("div",null,{class:"skills-section animate-fadeInRight"},[e("h3",null,{class:"skills-title"},"Core Skills",3,null),e("div",null,{class:"skill-category"},[e("p",null,{class:"category-title"},"Frontend Development",3,null),n.map(t=>e("div",null,{class:"skill-item"},[e("div",null,{class:"skill-header"},[e("span",null,{class:"skill-name"},s(t,"name"),1,null),e("span",null,{class:"skill-level"},[s(t,"level"),"%"],1,null)],1,null),e("div",null,{class:"skill-bar"},e("div",{style:`width: ${t.level}%`},{class:"skill-progress"},null,3,null),1,null)],1,t.name))],1,null),e("div",null,{class:"skill-category"},[e("p",null,{class:"category-title"},"Backend Development",3,null),a.map(t=>e("div",null,{class:"skill-item"},[e("div",null,{class:"skill-header"},[e("span",null,{class:"skill-name"},s(t,"name"),1,null),e("span",null,{class:"skill-level"},[s(t,"level"),"%"],1,null)],1,null),e("div",null,{class:"skill-bar"},e("div",{style:`width: ${t.level}%`},{class:"skill-progress"},null,3,null),1,null)],1,t.name))],1,null)],1,null)],1,null),e("div",null,{class:"tech-stack"},[e("h3",null,{class:"section-title"},"Tech Stack",3,null),e("p",null,{class:"section-subtitle"},"Technologies I work with daily",3,null),e("div",null,{class:"tech-grid"},F.map(t=>e("div",null,{class:"tech-card animate-scaleIn"},[e("img",{src:s(t,"logo"),alt:s(t,"name")},{class:"tech-logo",loading:"lazy",width:"60",height:"60"},null,3,null),e("p",null,{class:"tech-name"},s(t,"name"),1,null),e("p",null,{class:"tech-experience"},[s(t,"yearsOfExperience")," years"],1,null)],1,t.name)),1,null)],1,null),e("div",null,{class:"interests-section"},[e("h3",null,{class:"interests-title"},"Interests & Passions",3,null),e("div",null,{class:"interests-list"},h.interests.map(t=>e("span",null,{class:"interest-tag"},t,1,t)),1,null)],1,null)],1,null),1,"uH_0")},V=g(l(W,"s_kQDJUnc38Vs")),j=[{id:"ciqe-devcontainers",title:"CIQE Development Containers",description:"Containerization of repos and projects with the CI360 team allowing for normalization of testing and development environments across teams",category:"devops",technologies:["Docker","DevContainers","AWS","Git","Kubernetes","Helm","Docker Compose"],images:["https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"],features:["Immediate productivity when working with repos and projects","Automated project-specific setup for all requirements","Internal features handle AWS and Git authentication","Automatic installation of packages including auth","Security automated and connectivity to private resources","Templates with complex setup baked in for teammates"],challenges:["Creating universal devcontainer templates","Handling authentication across multiple services","Ensuring security compliance in containers","Managing versioning and updates across teams"],outcomes:["90% reduction in environment setup time","Standardized development environments","Zero manual configuration required","Adopted across multiple teams"]},{id:"qegrid-selenium",title:"QEGRID: Selenium Grid",description:"Enterprise-scale Selenium Grid deployment allowing browsers of selenium tests to run inside an internally deployed grid for better resource management",category:"devops",technologies:["Selenium","Docker","Kubernetes","Python","Java","AWS"],images:["https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop"],features:["Resource connectivity and efficient handling","Run tests quicker with parallel execution","Normalization of browser versions","Standardized test runners across teams","Centralized test execution management","Scalable infrastructure for concurrent tests"],challenges:["Managing browser compatibility across versions","Optimizing resource allocation for parallel tests","Ensuring network connectivity for internal resources","Scaling to handle peak test loads"],outcomes:["70% faster test execution","Support for 100+ concurrent tests","Unified browser testing platform","Reduced infrastructure costs"]},{id:"splitstation-webapp",title:"SplitStation: Internal Webapp Tool",description:"Full-stack web application for controlling production deployment segments with complete pipeline, authentication, and tracking capabilities",category:"fullstack",technologies:["Flask","Python","HTML/CSS/JS","Docker","AWS","Azure","CloudFormation","Split.io"],images:["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"],features:["Control production deployment segments","Advanced permission management system","Change tracking and audit logs","Custom interaction workflows","Full authentication and authorization","Real-time segment updates"],challenges:["Building secure authentication from scratch","Implementing complex permission hierarchies","Ensuring production safety with segment controls","Creating intuitive UI for complex operations"],outcomes:["100% adoption by QA team","Zero production incidents","50% faster segment management","Complete audit trail compliance"]},{id:"ci360-cli-tool",title:"CI360: Command Line Tool",description:"Enterprise CLI tool for interaction with internal APIs, featuring automatic proxying and simplified complex operations",category:"backend",technologies:["Python","Click","REST APIs","Docker","AWS","Internal APIs"],images:["https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop"],features:["Simplified interaction with complex internal APIs","Automatic proxying and authentication","Single command for complex operations","Pipeline deployment and distribution","Create customer identity with one command","Comprehensive error handling and logging"],challenges:["Abstracting complex API logic","Handling various authentication methods","Creating intuitive command structure","Ensuring cross-platform compatibility"],outcomes:["80% reduction in API interaction time","Adopted by 50+ developers","Eliminated manual API configuration","Standardized API interactions"]},{id:"spotify-playlist-builder",title:"Spotify Playlist Builder",description:"Award-winning web application for building Spotify playlists with swipe-based interface, developed at UNC Charlotte AxeHack",category:"fullstack",technologies:["Python","Flask","HTML","CSS","JavaScript","Spotify API"],images:["https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&h=600&fit=crop"],features:["Swipe-based song selection interface","Real-time playlist building","Spotify API integration","Responsive web design","User authentication with Spotify","Playlist export functionality"],challenges:["Implementing swipe gestures in web","Managing Spotify API rate limits","Creating engaging user interface","Handling real-time updates"],outcomes:["Second Place at AxeHack","Golden Hack Award winner","Built in 24-hour hackathon","Innovative UI/UX design"]},{id:"qa-automation-suite",title:"QA Infrastructure & Automation",description:"Comprehensive suite of automation tools, web apps, and cloud infrastructure to enable quality assurance across CI360 platform",category:"devops",technologies:["Python","AWS","Terraform","Docker","Kubernetes","GitHub Actions","S3"],images:["https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"],features:["Automated test archiving to S3","GitHub Actions integration","Terraform and Helm deployments","Automatic tenant permissions management","Test results visualization webapp","Complete CI/CD pipeline automation"],challenges:["Orchestrating complex deployment workflows","Managing multi-cloud resources","Ensuring test isolation and reproducibility","Scaling infrastructure based on demand"],outcomes:["95% test automation coverage","60% reduction in QA cycle time","Zero manual deployment steps","Complete test history retention"]}],N=()=>[{value:"fullstack",label:"Full Stack"},{value:"frontend",label:"Frontend"},{value:"backend",label:"Backend"},{value:"mobile",label:"Mobile"},{value:"devops",label:"DevOps"}],K=`
    .projects-section {
      padding: 100px 20px;
      background: linear-gradient(135deg, rgba(224, 229, 236, 0.5), var(--neu-base));
      min-height: 100vh;
    }
    
    .projects-container {
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
    
    .filter-tabs {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 60px;
      flex-wrap: wrap;
    }
    
    .filter-tab {
      padding: 12px 28px;
      background: var(--neu-base);
      border: none;
      border-radius: var(--neu-radius-full);
      box-shadow: var(--neu-shadow-md);
      color: var(--neu-text-secondary);
      font-weight: 500;
      cursor: pointer;
      transition: all var(--neu-transition-base);
      font-size: 0.95rem;
    }
    
    .filter-tab:hover {
      box-shadow: var(--neu-shadow-lg);
      transform: translateY(-2px);
      color: var(--neu-text-primary);
    }
    
    .filter-tab.active {
      background: linear-gradient(145deg, var(--neu-accent), var(--neu-accent-dark));
      color: white;
      box-shadow: var(--neu-shadow-lg);
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 40px;
      margin-bottom: 60px;
    }
    
    .project-card {
      background: var(--neu-base);
      border-radius: var(--neu-radius-lg);
      box-shadow: var(--neu-shadow-lg);
      overflow: hidden;
      transition: all var(--neu-transition-base);
      cursor: pointer;
      position: relative;
      display: flex;
      flex-direction: column;
    }
    
    .project-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--neu-shadow-xl);
    }
    
    .project-image-container {
      position: relative;
      height: 220px;
      overflow: hidden;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    
    .project-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--neu-transition-slow);
    }
    
    .project-card:hover .project-image {
      transform: scale(1.1);
    }
    
    .project-category {
      position: absolute;
      top: 15px;
      right: 15px;
      padding: 6px 16px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-full);
      box-shadow: var(--neu-shadow-sm);
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--neu-accent);
    }
    
    .project-content {
      padding: 30px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    
    .project-title {
      font-size: 1.4rem;
      color: var(--neu-text-primary);
      margin-bottom: 15px;
      font-weight: 700;
    }
    
    .project-description {
      color: var(--neu-text-secondary);
      line-height: 1.6;
      margin-bottom: 20px;
      flex: 1;
    }
    
    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 25px;
    }
    
    .tech-badge {
      padding: 5px 12px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-full);
      box-shadow: var(--neu-shadow-inset-sm);
      font-size: 0.8rem;
      color: var(--neu-text-secondary);
      font-weight: 500;
    }
    
    .project-links {
      display: flex;
      gap: 15px;
    }
    
    .project-link {
      flex: 1;
      padding: 10px 20px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-sm);
      color: var(--neu-text-primary);
      text-decoration: none;
      text-align: center;
      font-weight: 500;
      transition: all var(--neu-transition-base);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    
    .project-link:hover {
      box-shadow: var(--neu-shadow-md);
      transform: translateY(-2px);
    }
    
    .project-link.primary {
      background: linear-gradient(145deg, var(--neu-accent), var(--neu-accent-dark));
      color: white;
    }
    
    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(5px);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      opacity: 0;
      visibility: hidden;
      transition: all var(--neu-transition-base);
    }
    
    .modal-overlay.open {
      opacity: 1;
      visibility: visible;
    }
    
    .modal-content {
      background: var(--neu-base);
      border-radius: var(--neu-radius-lg);
      box-shadow: var(--neu-shadow-xl);
      max-width: 900px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      transform: scale(0.9);
      transition: transform var(--neu-transition-base);
    }
    
    .modal-overlay.open .modal-content {
      transform: scale(1);
    }
    
    .modal-close {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      background: var(--neu-base);
      border-radius: 50%;
      box-shadow: var(--neu-shadow-md);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      transition: all var(--neu-transition-base);
    }
    
    .modal-close:hover {
      box-shadow: var(--neu-shadow-lg);
      transform: rotate(90deg);
    }
    
    .modal-header {
      padding: 40px;
      border-bottom: 1px solid rgba(163, 177, 198, 0.2);
    }
    
    .modal-title {
      font-size: 2rem;
      color: var(--neu-text-primary);
      margin-bottom: 10px;
    }
    
    .modal-category {
      color: var(--neu-accent);
      font-weight: 600;
      text-transform: uppercase;
      font-size: 0.9rem;
    }
    
    .modal-body {
      padding: 40px;
    }
    
    .modal-section {
      margin-bottom: 40px;
    }
    
    .modal-section-title {
      font-size: 1.3rem;
      color: var(--neu-text-primary);
      margin-bottom: 20px;
      font-weight: 600;
    }
    
    .feature-list {
      display: grid;
      gap: 15px;
    }
    
    .feature-item {
      display: flex;
      gap: 15px;
      padding: 15px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .feature-icon {
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
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }
    
    .stat-card {
      padding: 20px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-md);
      text-align: center;
    }
    
    .stat-value {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--neu-accent);
      margin-bottom: 5px;
    }
    
    .stat-label {
      color: var(--neu-text-secondary);
      font-size: 0.9rem;
    }
    
    /* Responsive */
    @media (max-width: 968px) {
      .projects-section {
        padding: 80px 16px;
      }
      
      .projects-grid {
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 32px;
      }
      
      .project-image-container {
        height: 200px;
      }
      
      .project-content {
        padding: 24px;
      }
    }
    
    @media (max-width: 768px) {
      .projects-section {
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
      
      .filter-tabs {
        gap: 12px;
        margin-bottom: 50px;
        padding: 0 10px;
      }
      
      .filter-tab {
        padding: 12px 20px;
        font-size: 0.9rem;
        min-width: auto;
        flex: 1;
        max-width: 140px;
      }
      
      .projects-grid {
        grid-template-columns: 1fr;
        gap: 28px;
        margin-bottom: 50px;
      }
      
      .project-card {
        max-width: 100%;
      }
      
      .project-image-container {
        height: 180px;
      }
      
      .project-content {
        padding: 20px;
      }
      
      .project-title {
        font-size: 1.3rem;
        margin-bottom: 12px;
      }
      
      .project-description {
        font-size: 0.95rem;
        line-height: 1.5;
        margin-bottom: 16px;
      }
      
      .project-tech {
        gap: 8px;
        margin-bottom: 20px;
      }
      
      .tech-badge {
        padding: 4px 10px;
        font-size: 0.75rem;
      }
      
      .project-links {
        gap: 12px;
      }
      
      .project-link {
        padding: 12px 16px;
        font-size: 0.9rem;
      }
      
      /* Modal improvements for mobile */
      .modal-overlay {
        padding: 10px;
        align-items: flex-start;
        padding-top: 20px;
      }
      
      .modal-content {
        max-height: calc(100vh - 40px);
        border-radius: var(--neu-radius-lg);
        margin: 0;
        width: 100%;
        max-width: 100%;
      }
      
      .modal-close {
        top: 15px;
        right: 15px;
        width: 36px;
        height: 36px;
      }
      
      .modal-header {
        padding: 50px 20px 20px;
      }
      
      .modal-title {
        font-size: 1.6rem;
        margin-bottom: 8px;
        line-height: 1.2;
      }
      
      .modal-category {
        font-size: 0.85rem;
      }
      
      .modal-body {
        padding: 20px;
      }
      
      .modal-section {
        margin-bottom: 32px;
      }
      
      .modal-section-title {
        font-size: 1.2rem;
        margin-bottom: 16px;
      }
      
      .feature-item {
        padding: 12px;
        gap: 12px;
        font-size: 0.9rem;
      }
      
      .feature-icon {
        width: 20px;
        height: 20px;
        font-size: 0.8rem;
      }
      
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }
      
      .stat-card {
        padding: 16px;
      }
      
      .stat-value {
        font-size: 1.5rem;
      }
      
      .stat-label {
        font-size: 0.85rem;
      }
    }
    
    @media (max-width: 480px) {
      .projects-section {
        padding: 60px 12px;
      }
      
      .section-title {
        font-size: 1.9rem;
      }
      
      .section-subtitle {
        font-size: 0.95rem;
        padding: 0 8px;
      }
      
      .filter-tabs {
        gap: 8px;
        padding: 0 8px;
        flex-wrap: wrap;
        justify-content: center;
      }
      
      .filter-tab {
        padding: 10px 16px;
        font-size: 0.85rem;
        min-width: 80px;
        max-width: 120px;
      }
      
      .projects-grid {
        gap: 24px;
      }
      
      .project-image-container {
        height: 160px;
      }
      
      .project-content {
        padding: 18px;
      }
      
      .project-title {
        font-size: 1.2rem;
        margin-bottom: 10px;
      }
      
      .project-description {
        font-size: 0.9rem;
        margin-bottom: 14px;
      }
      
      .tech-badge {
        padding: 3px 8px;
        font-size: 0.7rem;
      }
      
      .project-link {
        padding: 10px 14px;
        font-size: 0.85rem;
      }
      
      /* Modal for small screens */
      .modal-overlay {
        padding: 5px;
        padding-top: 10px;
      }
      
      .modal-content {
        max-height: calc(100vh - 20px);
        border-radius: var(--neu-radius-md);
      }
      
      .modal-close {
        top: 12px;
        right: 12px;
        width: 32px;
        height: 32px;
      }
      
      .modal-header {
        padding: 45px 16px 16px;
      }
      
      .modal-title {
        font-size: 1.4rem;
      }
      
      .modal-body {
        padding: 16px;
      }
      
      .modal-section {
        margin-bottom: 28px;
      }
      
      .modal-section-title {
        font-size: 1.1rem;
        margin-bottom: 14px;
      }
      
      .feature-item {
        padding: 10px;
        gap: 10px;
        font-size: 0.85rem;
      }
      
      .stats-grid {
        grid-template-columns: 1fr;
        gap: 12px;
      }
      
      .stat-card {
        padding: 14px;
      }
      
      .stat-value {
        font-size: 1.3rem;
      }
      
      .stat-label {
        font-size: 0.8rem;
      }
    }
    
    /* Landscape mobile orientation */
    @media (max-width: 768px) and (orientation: landscape) {
      .projects-section {
        padding: 50px 16px;
      }
      
      .filter-tabs {
        margin-bottom: 40px;
      }
      
      .projects-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }
      
      .project-image-container {
        height: 140px;
      }
      
      .project-content {
        padding: 16px;
      }
      
      .modal-overlay {
        padding-top: 10px;
      }
      
      .modal-content {
        max-height: calc(100vh - 20px);
      }
    }
  `,X=n=>{const[a]=x();a.value=n},Z=n=>{const[a,t]=x();t.value=n,a.value=!0},ee=()=>{const[n,a]=x();n.value=!1,setTimeout(()=>{a.value=null},300)},te=()=>{const n=m("all"),a=m(null),t=m(!1);v(l(K,"s_x09mof0NAUM"));const r=[{value:"all",label:"All Projects"},...N()],u=n.value==="all"?j:j.filter(i=>i.category===n.value),o=l(X,"s_04T8x2lEfJQ",[n]),C=l(Z,"s_kH0dZ6cEGg4",[t,a]),z=l(ee,"s_AlkI4Q6oVwQ",[t,a]);return e("section",null,{id:"projects",class:"projects-section"},e("div",null,{class:"projects-container"},[e("h2",null,{class:"section-title animate-fadeInUp"},"Featured Projects",3,null),e("p",null,{class:"section-subtitle animate-fadeInUp stagger-1"},"Explore my portfolio of full-stack applications and technical solutions",3,null),e("div",null,{class:"filter-tabs animate-fadeInUp stagger-2"},r.map(i=>e("button",{class:`filter-tab ${n.value===i.value?"active":""}`,onClick$:p("s_1xEgQnu0yC4",[i,o])},null,s(i,"label"),0,i.value)),1,null),e("div",null,{class:"projects-grid"},u.map((i,y)=>e("div",{class:`project-card animate-fadeInUp stagger-${Math.min(y+3,8)}`,onClick$:p("s_7w8zQT0J9wQ",[C,i])},null,[e("div",null,{class:"project-image-container"},[e("img",{src:i.images[0],alt:s(i,"title")},{class:"project-image",loading:"lazy",width:"800",height:"600"},null,3,null),e("span",null,{class:"project-category"},s(i,"category"),1,null)],1,null),e("div",null,{class:"project-content"},[e("h3",null,{class:"project-title"},s(i,"title"),1,null),e("p",null,{class:"project-description"},s(i,"description"),1,null),e("div",null,{class:"project-tech"},[i.technologies.slice(0,4).map(f=>e("span",null,{class:"tech-badge"},f,1,f)),i.technologies.length>4&&e("span",null,{class:"tech-badge"},["+",i.technologies.length-4],1,"m6_0")],1,null),e("div",null,{class:"project-links"},e("button",null,{class:"project-link primary",onClick$:p("s_x0Kaq5Nib7o")},[e("svg",null,{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},e("path",null,{d:"M9 12h6M12 9v6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"},null,3,null),3,null),"View Details"],3,null),3,null)],1,null)],0,i.id)),1,null),e("div",null,{class:d(i=>`modal-overlay ${i.value?"open":""}`,[t],'`modal-overlay ${p0.value?"open":""}`'),onClick$:z},a.value&&e("div",null,{class:"modal-content",onClick$:p("s_42RUnvGm7aU")},[e("button",null,{class:"modal-close",onClick$:z},e("svg",null,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",null,{x1:"18",y1:"6",x2:"6",y2:"18"},null,3,null),e("line",null,{x1:"6",y1:"6",x2:"18",y2:"18"},null,3,null)],3,null),3,null),e("div",null,{class:"modal-header"},[e("h3",null,{class:"modal-title"},d(i=>i.value.title,[a],"p0.value.title"),3,null),e("span",null,{class:"modal-category"},d(i=>i.value.category,[a],"p0.value.category"),3,null)],3,null),e("div",null,{class:"modal-body"},[e("div",null,{class:"modal-section"},[e("h4",null,{class:"modal-section-title"},"Key Features",3,null),e("div",null,{class:"feature-list"},a.value.features.map(i=>e("div",null,{class:"feature-item"},[e("div",null,{class:"feature-icon"},"✓",3,null),e("span",null,null,i,1,null)],1,i)),1,null)],1,null),e("div",null,{class:"modal-section"},[e("h4",null,{class:"modal-section-title"},"Project Outcomes",3,null),e("div",null,{class:"stats-grid"},a.value.outcomes.map(i=>{const[y,...f]=i.split(" ");return e("div",null,{class:"stat-card"},[e("div",null,{class:"stat-value"},y,1,null),e("div",null,{class:"stat-label"},f.join(" "),1,null)],1,i)}),1,null)],1,null),e("div",null,{class:"modal-section"},[e("h4",null,{class:"modal-section-title"},"Technical Challenges",3,null),e("div",null,{class:"feature-list"},a.value.challenges.map(i=>e("div",null,{class:"feature-item"},[e("div",null,{class:"feature-icon"},"💡",3,null),e("span",null,null,i,1,null)],1,i)),1,null)],1,null)],1,null)],1,"m6_1"),1,null)],1,null),1,"m6_2")},ne=g(l(te,"s_JdVX0L8bEOA")),ae=[{name:"LinkedIn",url:"https://www.linkedin.com/in/twpow/",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>`,color:"#0077B5"},{name:"Email",url:"mailto:thomas.walker.powell@gmail.com",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
    </svg>`,color:"#EA4335"},{name:"GitHub",url:"https://github.com/twpow",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>`,color:"#333"}],b={email:"thomas.walker.powell@gmail.com",phone:"(919) 593-8731",location:"Charlotte, NC",availability:"Currently interning at SAS"},ie=`
    .contact-section {
      padding: 100px 20px;
      background: transparent;
      min-height: 100vh;
    }
    
    .contact-container {
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
    
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
    }
    
    .contact-info {
      padding: 40px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-lg);
      box-shadow: var(--neu-shadow-lg);
    }
    
    .info-title {
      font-size: 1.5rem;
      color: var(--neu-text-primary);
      margin-bottom: 30px;
      font-weight: 600;
    }
    
    .info-item {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 25px;
      padding: 20px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .info-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(145deg, var(--neu-accent), var(--neu-accent-dark));
      border-radius: var(--neu-radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;
    }
    
    .info-details {
      flex: 1;
    }
    
    .info-label {
      font-size: 0.9rem;
      color: var(--neu-text-muted);
      margin-bottom: 5px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .info-value {
      color: var(--neu-text-primary);
      font-weight: 500;
    }
    
    .social-links {
      margin-top: 40px;
    }
    
    .social-title {
      font-size: 1.2rem;
      color: var(--neu-text-primary);
      margin-bottom: 20px;
      font-weight: 600;
    }
    
    .social-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
    }
    
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-md);
      color: var(--neu-text-secondary);
      text-decoration: none;
      transition: all var(--neu-transition-base);
    }
    
    .social-link:hover {
      box-shadow: var(--neu-shadow-lg);
      transform: translateY(-3px);
      color: var(--neu-accent);
    }
    
    .social-link svg {
      width: 24px;
      height: 24px;
    }
    
    .contact-form {
      padding: 40px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-lg);
      box-shadow: var(--neu-shadow-lg);
    }
    
    .form-title {
      font-size: 1.5rem;
      color: var(--neu-text-primary);
      margin-bottom: 30px;
      font-weight: 600;
    }
    
    .form-group {
      margin-bottom: 25px;
    }
    
    .form-label {
      display: block;
      color: var(--neu-text-primary);
      font-weight: 500;
      margin-bottom: 10px;
      font-size: 0.95rem;
    }
    
    .form-input,
    .form-textarea {
      width: 100%;
      padding: 15px 20px;
      background: var(--neu-base);
      border: none;
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-inset-sm);
      color: var(--neu-text-primary);
      font-size: 1rem;
      font-family: inherit;
      transition: all var(--neu-transition-base);
      outline: none;
    }
    
    .form-input:focus,
    .form-textarea:focus {
      box-shadow: var(--neu-shadow-inset-md);
    }
    
    .form-input::placeholder,
    .form-textarea::placeholder {
      color: var(--neu-text-muted);
    }
    
    .form-textarea {
      resize: vertical;
      min-height: 150px;
    }
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    
    .form-submit {
      width: 100%;
      padding: 18px 40px;
      background: linear-gradient(145deg, var(--neu-accent), var(--neu-accent-dark));
      color: white;
      border: none;
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-lg);
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all var(--neu-transition-base);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    
    .form-submit:hover:not(:disabled) {
      box-shadow: var(--neu-shadow-xl);
      transform: translateY(-2px);
    }
    
    .form-submit:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: var(--neu-shadow-md);
    }
    
    .form-submit:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    .submit-status {
      margin-top: 20px;
      padding: 15px;
      border-radius: var(--neu-radius-md);
      text-align: center;
      font-weight: 500;
      animation: fadeIn 0.3s ease-out;
    }
    
    .submit-status.success {
      background: rgba(72, 187, 120, 0.1);
      color: var(--neu-success);
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .submit-status.error {
      background: rgba(245, 101, 101, 0.1);
      color: var(--neu-error);
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .availability-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: rgba(72, 187, 120, 0.1);
      color: var(--neu-success);
      border-radius: var(--neu-radius-full);
      font-size: 0.9rem;
      font-weight: 500;
      margin-top: 20px;
    }
    
    .availability-dot {
      width: 8px;
      height: 8px;
      background: var(--neu-success);
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
    
    /* Loading Spinner */
    .spinner {
      width: 20px;
      height: 20px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    /* Responsive */
    @media (max-width: 968px) {
      .contact-section {
        padding: 80px 16px;
      }
      
      .contact-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      
      .contact-info,
      .contact-form {
        padding: 32px;
      }
      
      .form-row {
        grid-template-columns: 1fr;
        gap: 16px;
      }
      
      .social-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
      }
    }
    
    @media (max-width: 768px) {
      .contact-section {
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
      
      .contact-content {
        gap: 32px;
      }
      
      .contact-info,
      .contact-form {
        padding: 28px 24px;
      }
      
      .info-title,
      .form-title {
        font-size: 1.4rem;
        margin-bottom: 24px;
      }
      
      .info-item {
        margin-bottom: 20px;
        padding: 16px;
        gap: 16px;
      }
      
      .info-icon {
        width: 44px;
        height: 44px;
      }
      
      .info-label {
        font-size: 0.85rem;
      }
      
      .info-value {
        font-size: 0.95rem;
      }
      
      .social-links {
        margin-top: 32px;
      }
      
      .social-title {
        font-size: 1.1rem;
        margin-bottom: 16px;
      }
      
      .social-grid {
        gap: 10px;
      }
      
      .social-link {
        padding: 12px;
      }
      
      .social-link svg {
        width: 20px;
        height: 20px;
      }
      
      .form-group {
        margin-bottom: 20px;
      }
      
      .form-label {
        font-size: 0.9rem;
        margin-bottom: 8px;
      }
      
      .form-input,
      .form-textarea {
        padding: 14px 18px;
        font-size: 0.95rem;
      }
      
      .form-textarea {
        min-height: 130px;
      }
      
      .form-submit {
        padding: 16px 36px;
        font-size: 1rem;
      }
      
      .availability-badge {
        margin-top: 16px;
        padding: 6px 14px;
        font-size: 0.85rem;
      }
      
      .availability-dot {
        width: 6px;
        height: 6px;
      }
    }
    
    @media (max-width: 480px) {
      .contact-section {
        padding: 60px 12px;
      }
      
      .section-title {
        font-size: 1.9rem;
      }
      
      .section-subtitle {
        font-size: 0.95rem;
        padding: 0 8px;
      }
      
      .contact-info,
      .contact-form {
        padding: 24px 20px;
      }
      
      .info-title,
      .form-title {
        font-size: 1.3rem;
        margin-bottom: 20px;
      }
      
      .info-item {
        padding: 14px;
        gap: 14px;
        margin-bottom: 16px;
      }
      
      .info-icon {
        width: 40px;
        height: 40px;
      }
      
      .info-label {
        font-size: 0.8rem;
      }
      
      .info-value {
        font-size: 0.9rem;
      }
      
      .social-links {
        margin-top: 28px;
      }
      
      .social-title {
        font-size: 1rem;
        margin-bottom: 14px;
      }
      
      .social-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
      }
      
      .social-link {
        padding: 10px;
      }
      
      .social-link svg {
        width: 18px;
        height: 18px;
      }
      
      .form-group {
        margin-bottom: 18px;
      }
      
      .form-label {
        font-size: 0.85rem;
        margin-bottom: 6px;
      }
      
      .form-input,
      .form-textarea {
        padding: 12px 16px;
        font-size: 0.9rem;
      }
      
      .form-textarea {
        min-height: 120px;
      }
      
      .form-submit {
        padding: 14px 32px;
        font-size: 0.95rem;
      }
      
      .submit-status {
        margin-top: 16px;
        padding: 12px;
        font-size: 0.9rem;
      }
      
      .availability-badge {
        margin-top: 14px;
        padding: 5px 12px;
        font-size: 0.8rem;
      }
    }
    
    /* Landscape mobile orientation */
    @media (max-width: 768px) and (orientation: landscape) {
      .contact-section {
        padding: 50px 16px;
      }
      
      .contact-content {
        gap: 28px;
      }
      
      .contact-info,
      .contact-form {
        padding: 24px 20px;
      }
      
      .form-row {
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      
      .form-textarea {
        min-height: 100px;
      }
      
      .social-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `,oe=async n=>{const[a,t,r]=x();n.preventDefault(),t.value=!0,r.value="idle",await new Promise(u=>setTimeout(u,2e3)),console.log("Form submitted:",a.value),t.value=!1,r.value="success",setTimeout(()=>{a.value={name:"",email:"",subject:"",message:""},r.value="idle"},3e3)},le=(n,a)=>{const[t]=x();t.value={...t.value,[n]:a}},re=()=>{const n=m({name:"",email:"",subject:"",message:""}),a=m(!1),t=m("idle");v(l(ie,"s_tvPusS0UOeY"));const r=l(oe,"s_LMfn7cFC95k",[n,a,t]),u=l(le,"s_G0PU4nT0vKs",[n]);return e("section",null,{id:"contact",class:"contact-section"},e("div",null,{class:"contact-container"},[e("h2",null,{class:"section-title animate-fadeInUp"},"Get In Touch",3,null),e("p",null,{class:"section-subtitle animate-fadeInUp stagger-1"},"Let's discuss your next project or collaboration opportunity",3,null),e("div",null,{class:"contact-content"},[e("div",null,{class:"contact-info animate-fadeInLeft"},[e("h3",null,{class:"info-title"},"Contact Information",3,null),e("div",null,{class:"info-item"},[e("div",null,{class:"info-icon"},e("svg",null,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},e("path",null,{d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},null,3,null),3,null),3,null),e("div",null,{class:"info-details"},[e("p",null,{class:"info-label"},"Email",3,null),e("p",null,{class:"info-value"},b.email,3,null)],3,null)],3,null),e("div",null,{class:"info-item"},[e("div",null,{class:"info-icon"},e("svg",null,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},e("path",null,{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"},null,3,null),3,null),3,null),e("div",null,{class:"info-details"},[e("p",null,{class:"info-label"},"Phone",3,null),e("p",null,{class:"info-value"},b.phone,3,null)],3,null)],3,null),e("div",null,{class:"info-item"},[e("div",null,{class:"info-icon"},e("svg",null,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",null,{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"},null,3,null),e("circle",null,{cx:"12",cy:"10",r:"3"},null,3,null)],3,null),3,null),e("div",null,{class:"info-details"},[e("p",null,{class:"info-label"},"Location",3,null),e("p",null,{class:"info-value"},b.location,3,null)],3,null)],3,null),e("div",null,{class:"availability-badge"},[e("span",null,{class:"availability-dot"},null,3,null),b.availability],3,null),e("div",null,{class:"social-links"},[e("h4",null,{class:"social-title"},"Connect With Me",3,null),e("div",null,{class:"social-grid"},ae.map(o=>e("a",{href:s(o,"url"),title:s(o,"name"),dangerouslySetInnerHTML:s(o,"icon")},{target:"_blank",rel:"noopener noreferrer",class:"social-link"},null,3,o.name)),1,null)],1,null)],1,null),e("div",null,{class:"contact-form animate-fadeInRight"},[e("h3",null,{class:"form-title"},"Send Me a Message",3,null),e("form",null,{onSubmit$:r},[e("div",null,{class:"form-row"},[e("div",null,{class:"form-group"},[e("label",null,{class:"form-label",for:"name"},"Your Name",3,null),e("input",null,{type:"text",id:"name",class:"form-input",placeholder:"John Smith",value:d(o=>o.value.name,[n],"p0.value.name"),required:!0,onInput$:p("s_vKy2S362iTQ",[u])},null,3,null)],3,null),e("div",null,{class:"form-group"},[e("label",null,{class:"form-label",for:"email"},"Email Address",3,null),e("input",null,{type:"email",id:"email",class:"form-input",placeholder:"john@example.com",value:d(o=>o.value.email,[n],"p0.value.email"),required:!0,onInput$:p("s_LuZO1QS7gEs",[u])},null,3,null)],3,null)],3,null),e("div",null,{class:"form-group"},[e("label",null,{class:"form-label",for:"subject"},"Subject",3,null),e("input",null,{type:"text",id:"subject",class:"form-input",placeholder:"Project Inquiry",value:d(o=>o.value.subject,[n],"p0.value.subject"),required:!0,onInput$:p("s_zAJbdncFBqs",[u])},null,3,null)],3,null),e("div",null,{class:"form-group"},[e("label",null,{class:"form-label",for:"message"},"Message",3,null),e("textarea",null,{id:"message",class:"form-textarea",placeholder:"Tell me about your project...",value:d(o=>o.value.message,[n],"p0.value.message"),required:!0,onInput$:p("s_1M8Ii0d2Bp4",[u])},null,3,null)],3,null),e("button",null,{type:"submit",class:"form-submit",disabled:d(o=>o.value,[a],"p0.value")},a.value?c(w,{children:[e("span",null,{class:"spinner"},null,3,null),"Sending..."]},3,"Db_0"):c(w,{children:["Send Message",e("svg",null,{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",null,{x1:"22",y1:"2",x2:"11",y2:"13"},null,3,null),e("polygon",null,{points:"22 2 15 22 11 13 2 9 22 2"},null,3,null)],3,null)]},3,"Db_1"),1,null),t.value==="success"&&e("div",null,{class:"submit-status success"},"✓ Message sent successfully! I'll get back to you soon.",3,"Db_2"),t.value==="error"&&e("div",null,{class:"submit-status error"},"✗ Something went wrong. Please try again or email me directly.",3,"Db_3")],1,null)],1,null)],1,null)],1,null),1,"Db_4")},se=g(l(re,"s_Ubng8hDLd1Y")),ce=()=>c(w,{children:[c(L,null,3,"i8_0"),e("main",null,null,[c(G,null,3,"i8_1"),c(V,null,3,"i8_2"),c(ne,null,3,"i8_3"),c(se,null,3,"i8_4")],1,null)]},1,"i8_5"),de=g(l(ce,"s_B0lqk5IDDy4")),pe={title:"Thomas Powell - Technical Intern & Computer Science Student",meta:[{name:"description",content:"Technical Intern at SAS specializing in cloud engineering, DevOps, and full-stack development. UNC Charlotte Computer Science and Data Science student."},{name:"keywords",content:"Thomas Powell, SAS intern, cloud engineering, DevOps, full-stack developer, Python, AWS, Docker, Kubernetes, UNC Charlotte"},{property:"og:title",content:"Thomas Powell - Technical Intern & Computer Science Student"},{property:"og:description",content:"Explore my portfolio of enterprise projects at SAS, including cloud infrastructure, automation tools, and web applications."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:"Thomas Powell - Technical Intern & Computer Science Student"},{name:"twitter:description",content:"Technical Intern at SAS specializing in cloud engineering, DevOps, and full-stack development."}]},ue=Object.freeze(Object.defineProperty({__proto__:null,default:de,head:pe},Symbol.toStringTag,{value:"Module"})),me=[],ge=()=>M,xe=[["/",[ge,()=>ue],"/",["q-BQwkKZy9.js","q-3J1xeeGP.js"]]],he=[],ve=!0,fe="/",be=!0,ye={routes:xe,serverPlugins:me,menus:he,trailingSlash:ve,basePathname:fe,cacheModules:be};export{fe as basePathname,be as cacheModules,ye as default,he as menus,xe as routes,me as serverPlugins,ve as trailingSlash};

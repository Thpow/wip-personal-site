import{c as h,i as r,b,S as _,F as P,u as m,d as f,e as I,f as e,g as u,h as g,j as i,k as v}from"./q-CDXfbrmY.js";const j=()=>b(P,{children:b(_,null,3,"yB_0")},1,"yB_1"),D=h(r(j,"s_VKFlAWJuVm8")),T=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"})),E=`
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
  `,B=n=>{const[l,o]=v();l.value=n,o.value=!1;const d=document.getElementById(n);d&&d.scrollIntoView({behavior:"smooth"})},L=()=>{const[n]=v();n.value=!n.value},G=()=>{const n=m("home"),l=m(!1),o=m("");f(r(E,"s_gZs8EX5SgiU"));const d=[{id:"home",label:"Home",icon:"🏠"},{id:"about",label:"About Me",icon:"📋"},{id:"experience",label:"Experience",icon:"💼"},{id:"education",label:"Education",icon:"🎓"},{id:"projects",label:"Projects",icon:"📁"},{id:"contact",label:"Contact",icon:"📧"}],p=r(B,"s_uYqmvnpRTCw",[n,l]),s=r(L,"s_PQr6Q05eFQQ",[l]);return I(g("s_kebqLBLUrEE",[o,l])),e("nav",null,{class:"taskbar"},[e("div",null,{class:u(c=>`start-menu ${c.value?"open":""}`,[l],'`start-menu ${p0.value?"open":""}`')},[e("div",null,{class:"start-menu-sidebar"},e("span",null,{class:"start-menu-sidebar-text"},"Powell96",3,null),3,null),e("div",null,{class:"start-menu-items"},[d.map(c=>e("button",{onClick$:g("s_bmKvtUY4mpI",[p,c])},{class:"start-menu-item"},[e("span",null,{class:"start-menu-item-icon"},i(c,"icon"),1,null),e("span",null,null,i(c,"label"),1,null)],0,c.id)),e("div",null,{class:"start-menu-separator"},null,3,null),e("a",null,{href:"/powellthomas-resume.docx",download:!0,class:"start-menu-item",onClick$:g("s_AcTGWeS0w0E",[l])},[e("span",null,{class:"start-menu-item-icon"},"📄",3,null),e("span",null,null,"Resume.docx",3,null)],3,null)],1,null)],1,null),e("button",null,{class:u(c=>`start-button ${c.value?"pressed":""}`,[l],'`start-button ${p0.value?"pressed":""}`'),"aria-label":"Start menu",onClick$:s},[e("span",null,{class:"start-logo"},[e("span",null,null,null,3,null),e("span",null,null,null,3,null),e("span",null,null,null,3,null),e("span",null,null,null,3,null)],3,null),e("span",null,null,"Start",3,null)],3,null),e("div",null,{class:"taskbar-divider"},null,3,null),e("div",null,{class:"taskbar-items"},d.map(c=>e("button",{class:`taskbar-item ${n.value===c.id?"active":""}`,onClick$:g("s_LYYLoZpGp5I",[p,c])},null,[e("span",null,{class:"taskbar-item-icon"},i(c,"icon"),1,null),e("span",null,null,i(c,"label"),1,null)],0,c.id)),1,null),e("div",null,{class:"taskbar-divider"},null,3,null),e("div",null,{class:"clock-area"},u(c=>c.value,[o],"p0.value"),3,null)],1,"R4_0")},H=h(r(G,"s_ropMBSBWqro")),O=`
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
    
    .profile-fallback {
      width: 100%;
      height: 100%;
      background: var(--win-bg-light);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      font-weight: 700;
      color: var(--win-titlebar);
      font-family: 'IBM Plex Mono', monospace;
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
      word-break: break-all;
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
  `,U=()=>{const n=m(""),l=m(!0),o=m(!1);return f(r(O,"s_R0z7yMvPekY")),I(g("s_qJmIgBWFER0",[n,l])),e("section",null,{id:"home",class:"hero-section"},e("div",null,{class:"hero-window"},[e("div",null,{class:"hero-titlebar"},[e("div",null,{class:"titlebar-left"},[e("span",null,{class:"titlebar-icon"},"💻",3,null),e("span",null,null,"Welcome - Thomas Powell",3,null)],3,null),e("div",null,{class:"titlebar-buttons"},[e("button",null,{class:"titlebar-btn","aria-hidden":"true"},"_",3,null),e("button",null,{class:"titlebar-btn","aria-hidden":"true"},"□",3,null),e("button",null,{class:"titlebar-btn","aria-hidden":"true"},"×",3,null)],3,null)],3,null),e("div",null,{class:"hero-body"},[e("div",null,{class:"hero-profile-row"},[e("div",null,{class:"profile-frame"},o.value?e("div",null,{class:"profile-fallback"},"TP",3,null):e("img",null,{src:"/pfp.jpeg",alt:"Thomas Powell",class:"profile-image",width:"96",height:"96",loading:"eager",onError$:g("s_jF086pYgk4M",[o])},null,3,"HJ_0"),1,null),e("div",null,{class:"profile-info"},[e("h1",null,{class:"hero-name"},"Thomas Powell",3,null),e("p",null,{class:"hero-role"},"Technical Intern at SAS | CS & Data Science Student",3,null),e("div",null,{class:"status-row"},[e("div",null,{class:"status-led"},null,3,null),e("span",null,null,"Online — Available for opportunities",3,null)],3,null)],3,null)],1,null),e("div",null,{class:"hero-separator"},null,3,null),e("div",null,{class:"terminal-box"},[e("span",null,{class:"terminal-text"},u(d=>d.value,[n],"p0.value"),3,null),l.value&&e("span",null,{class:"terminal-cursor"},null,3,"HJ_1")],1,null),e("div",null,{class:"hero-actions"},[e("a",null,{href:"#projects",class:"win-btn primary"},"📁 View Projects",3,null),e("a",null,{href:"/powellthomas-resume.docx",download:!0,class:"win-btn"},"💾 Download Resume",3,null)],3,null)],1,null),e("div",null,{class:"hero-statusbar"},[e("div",null,{class:"statusbar-item"},"Ready",3,null),e("div",null,{class:"statusbar-item"},"UNC Charlotte",3,null)],3,null)],1,null),1,"HJ_2")},R=h(r(U,"s_1V8LiPxWuaU")),$=[{name:"HTML/CSS/JS",level:90,category:"frontend"},{name:"Flask",level:85,category:"frontend"},{name:"Web Development",level:85,category:"frontend"},{name:"Full Stack Development",level:80,category:"frontend"},{name:"App Development",level:80,category:"frontend"},{name:"Python",level:95,category:"backend"},{name:"Java",level:75,category:"backend"},{name:"C++",level:70,category:"backend"},{name:"R",level:70,category:"backend"},{name:"Machine Learning",level:80,category:"backend"},{name:"Web Automation",level:90,category:"backend"},{name:"Test Driven Development",level:85,category:"backend"},{name:"Gen AI Development",level:75,category:"backend"},{name:"Gen AI Testing",level:85,category:"backend"},{name:"SAS",level:80,category:"analytics"},{name:"Business Analytics",level:75,category:"analytics"},{name:"Econometrics",level:70,category:"analytics"},{name:"Statistical Analysis",level:75,category:"analytics"},{name:"Data Visualization",level:80,category:"analytics"},{name:"Predictive Modeling",level:70,category:"analytics"},{name:"AWS S3",level:85,category:"database"},{name:"Cloud Storage",level:80,category:"database"},{name:"Docker",level:90,category:"devops"},{name:"Kubernetes",level:85,category:"devops"},{name:"AWS",level:85,category:"devops"},{name:"Terraform",level:80,category:"devops"},{name:"CI/CD",level:90,category:"devops"},{name:"Infrastructure/Architecture",level:85,category:"devops"},{name:"Helm",level:80,category:"devops"},{name:"Git",level:95,category:"tools"},{name:"Operating Systems",level:85,category:"tools"},{name:"Networking",level:75,category:"tools"},{name:"Selenium Grid",level:90,category:"tools"},{name:"Prompt Engineering",level:80,category:"tools"},{name:"Problem Solving",level:95,category:"soft"},{name:"Communication",level:90,category:"soft"},{name:"Team Collaboration",level:90,category:"soft"},{name:"Project Management",level:85,category:"soft"}],S=[{name:"Python",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",proficiency:"expert",yearsOfExperience:3},{name:"R",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",proficiency:"intermediate",yearsOfExperience:1},{name:"SAS",logo:"https://www.sas.com/content/dam/SAS/en_us/image/other/logos/sas-logo-primary-rgb.svg",proficiency:"intermediate",yearsOfExperience:2},{name:"Docker",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",proficiency:"advanced",yearsOfExperience:2},{name:"Kubernetes",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",proficiency:"advanced",yearsOfExperience:2},{name:"AWS",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",proficiency:"advanced",yearsOfExperience:2},{name:"Terraform",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",proficiency:"advanced",yearsOfExperience:2},{name:"Java",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",proficiency:"intermediate",yearsOfExperience:2},{name:"Git",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",proficiency:"expert",yearsOfExperience:3},{name:"Flask",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",proficiency:"advanced",yearsOfExperience:2},{name:"HTML5",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",proficiency:"advanced",yearsOfExperience:3},{name:"JavaScript",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",proficiency:"advanced",yearsOfExperience:2},{name:"C++",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",proficiency:"intermediate",yearsOfExperience:1},{name:"Linux",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",proficiency:"advanced",yearsOfExperience:3}],k=n=>$.filter(l=>l.category===n),x={name:"Thomas Powell",title:"Technical Intern at SAS | CS & Data Science Student",bio:`Student at UNC Charlotte, deeply invested in computers and software as both a hobby and career. Graduate of the Academy of Information Technology and interning at SAS since June 2022.

Currently earning both my BS in Computer Science with concentration in data science, and a MS in Data Science and Business Analytics dual track. My work at SAS focuses on quality assurance infrastructure, cloud engineering, GenAI testing, and full-stack development.

I specialize in creating automation tools, web applications, cloud infrastructure, and GenAI test strategies. My projects range from Selenium Grid deployments to paper trading apps deployed to the App Store.`,highlights:["3+ years as Technical Intern at SAS","BS Computer Science (3.95 GPA) & MS Data Science student","Second Place & Golden Hack Award at UNC Charlotte AxeHack","GenAI test strategy development using DeepEval","Paper trading app deployed to App Store","AOIT Honors Program Graduate","Experience with enterprise-scale projects"],interests:["Data Science","Artificial Intelligence","GenAI Development","Longevity Research","Finance & Fintech","Cloud Infrastructure","DevOps Automation","Business Analytics","Econometrics"],education:{degree:"BS Computer Science (Data Science) & MS Data Science & Business Analytics",university:"University of North Carolina at Charlotte",year:"Expected May 2027",achievements:["3.95 GPA (Undergrad)","Accelerated 4+1 Program","AOIT Honors Program"]},certifications:["Adobe Dreamweaver CS5","Microsoft PowerPoint 2019","Microsoft Word 2019"]},Q=`
    .about-section {
      padding: 20px;
      position: relative;
      z-index: 1;
    }
    
    .about-window {
      max-width: 800px;
      margin: 0 auto;
      background: var(--win-surface);
      box-shadow: var(--win-border-window);
      padding: 3px;
    }
    
    .about-titlebar {
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
    
    .about-body {
      padding: 12px;
      background: var(--win-surface);
    }
    
    /* Tabs */
    .tab-bar {
      display: flex;
      gap: 0;
      position: relative;
      bottom: -2px;
      z-index: 2;
      padding-left: 4px;
    }
    
    .tab-btn {
      padding: 4px 14px;
      background: var(--win-bg-dark);
      border: none;
      box-shadow:
        inset -1px 0 0 0 var(--win-shadow-dark),
        inset 1px 1px 0 0 var(--win-highlight),
        inset 0 1px 0 0 var(--win-white);
      color: var(--win-text-primary);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      cursor: pointer;
      position: relative;
      user-select: none;
    }
    
    .tab-btn.active {
      background: var(--win-surface);
      padding-bottom: 6px;
      z-index: 3;
      box-shadow:
        inset -1px 0 0 0 var(--win-shadow-dark),
        inset 1px 1px 0 0 var(--win-highlight),
        inset 0 1px 0 0 var(--win-white);
    }
    
    .tab-content {
      background: var(--win-surface);
      box-shadow: var(--win-border-raised);
      padding: 16px;
      position: relative;
      z-index: 1;
      min-height: 300px;
    }
    
    .tab-panel {
      display: none;
    }
    
    .tab-panel.active {
      display: block;
    }
    
    /* Bio content */
    .bio-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
      font-size: 14px;
      font-weight: 700;
      color: var(--win-text-primary);
    }
    
    .bio-text {
      font-size: 12px;
      line-height: 1.6;
      color: var(--win-text-secondary);
      margin-bottom: 12px;
      white-space: pre-line;
    }
    
    .groupbox {
      box-shadow:
        inset 1px 1px 0 0 var(--win-shadow),
        inset -1px -1px 0 0 var(--win-white);
      padding: 12px 8px 8px;
      margin: 12px 0;
      position: relative;
    }
    
    .groupbox-label {
      position: absolute;
      top: -8px;
      left: 8px;
      background: var(--win-surface);
      padding: 0 4px;
      font-size: 11px;
      font-weight: 700;
      color: var(--win-text-primary);
    }
    
    .highlight-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .highlight-list li {
      padding: 3px 0;
      font-size: 11px;
      color: var(--win-text-primary);
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .highlight-list li::before {
      content: '>';
      color: var(--win-accent);
      font-weight: 700;
      flex-shrink: 0;
    }
    
    /* Skills — SAS data grid style */
    .skill-grid {
      width: 100%;
      border-collapse: collapse;
      font-size: 11px;
      font-family: 'IBM Plex Mono', monospace;
      margin-bottom: 12px;
    }
    
    .skill-grid th {
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      padding: 3px 8px;
      text-align: left;
      font-weight: 700;
      white-space: nowrap;
      cursor: default;
      font-size: 11px;
    }
    
    .skill-grid td {
      padding: 3px 8px;
      border-bottom: 1px solid var(--win-bg-dark);
      white-space: nowrap;
    }
    
    .skill-grid tr:nth-child(even) {
      background: #e8e8e8;
    }
    
    .skill-grid tr:hover td {
      background: var(--win-titlebar);
      color: var(--win-titlebar-text);
    }
    
    .progress-cell {
      width: 120px;
    }
    
    .mini-progress {
      width: 100%;
      height: 12px;
      background: var(--win-white);
      box-shadow: var(--win-border-field);
      overflow: hidden;
    }
    
    .mini-progress-bar {
      height: 100%;
      background: var(--win-titlebar);
    }
    
    .mini-progress-bar.wip {
      background: var(--win-shadow);
    }
    
    .wip-label {
      color: var(--win-text-muted);
      font-style: italic;
    }
    
    /* Tech Stack grid */
    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
      gap: 8px;
    }
    
    .tech-item {
      background: var(--win-white);
      box-shadow: var(--win-border-field);
      padding: 8px;
      text-align: center;
      cursor: default;
      font-size: 11px;
    }
    
    .tech-item:hover {
      background: var(--win-titlebar);
      color: var(--win-titlebar-text);
    }
    
    .tech-logo {
      width: 32px;
      height: 32px;
      margin: 0 auto 4px;
      image-rendering: auto;
    }
    
    .tech-name {
      font-weight: 700;
      font-size: 10px;
      margin-bottom: 2px;
    }
    
    .tech-exp {
      font-size: 9px;
      color: var(--win-text-muted);
    }
    
    .tech-item:hover .tech-exp {
      color: var(--win-bg-light);
    }
    
    /* Interests */
    .interest-list {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    
    .interest-tag {
      padding: 3px 10px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      font-size: 11px;
      cursor: default;
    }
    
    .interest-tag:hover {
      background: var(--win-titlebar);
      color: var(--win-titlebar-text);
    }
    
    /* Status bar */
    .about-statusbar {
      background: var(--win-surface);
      padding: 2px 4px;
      display: flex;
      gap: 2px;
      font-size: 11px;
      color: var(--win-text-secondary);
    }
    
    .statusbar-cell {
      padding: 1px 6px;
      box-shadow: var(--win-border-sunken);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .statusbar-cell:first-child { flex: 2; }
    .statusbar-cell:last-child { flex: 1; text-align: right; }
    
    @media (max-width: 768px) {
      .about-section {
        padding: 12px 8px;
      }
      
      .tab-btn {
        font-size: 10px;
        padding: 3px 8px;
      }
      
      .tab-content {
        padding: 10px;
      }
      
      .tech-grid {
        grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
        gap: 6px;
      }
      
      .tech-logo {
        width: 24px;
        height: 24px;
      }
      
      .skill-grid {
        font-size: 10px;
      }
      
      .progress-cell {
        width: 80px;
      }
    }
  `,F=n=>{const[l]=v();l.value=n},q=()=>{var c;const n=m("bio");f(r(Q,"s_3Vkkdid5Eow"));const l=k("frontend").slice(0,4),o=k("backend").slice(0,4),d=k("analytics"),p=r(F,"s_1RiRlL0eh3A",[n]),s=[{id:"bio",label:"General"},{id:"skills",label:"Skills"},{id:"tech",label:"Tech Stack"},{id:"interests",label:"Interests"}];return e("section",null,{id:"about",class:"about-section"},e("div",null,{class:"about-window"},[e("div",null,{class:"about-titlebar"},[e("div",null,{class:"titlebar-left"},[e("span",null,null,"📋",3,null),e("span",null,null,"About Me - Properties",3,null)],3,null),e("div",null,{class:"titlebar-buttons"},[e("button",null,{class:"titlebar-btn","aria-hidden":"true"},"_",3,null),e("button",null,{class:"titlebar-btn","aria-hidden":"true"},"□",3,null),e("button",null,{class:"titlebar-btn","aria-hidden":"true"},"×",3,null)],3,null)],3,null),e("div",null,{class:"about-body"},[e("div",null,{class:"tab-bar"},s.map(t=>e("button",{class:`tab-btn ${n.value===t.id?"active":""}`,onClick$:g("s_MhllPkmXV2A",[p,t])},null,i(t,"label"),0,t.id)),1,null),e("div",null,{class:"tab-content"},[e("div",null,{class:u(t=>`tab-panel ${t.value==="bio"?"active":""}`,[n],'`tab-panel ${p0.value==="bio"?"active":""}`')},[e("div",null,{class:"bio-header"},["👤 ",x.name],3,null),e("p",null,{style:"font-size: 12px; color: var(--win-accent); margin-bottom: 8px; font-weight: 700;"},x.title,3,null),e("p",null,{class:"bio-text"},x.bio,3,null),e("div",null,{class:"groupbox"},[e("span",null,{class:"groupbox-label"},"Highlights",3,null),e("ul",null,{class:"highlight-list"},x.highlights.map((t,a)=>e("li",null,null,t,1,a)),1,null)],1,null)],1,null),e("div",null,{class:u(t=>`tab-panel ${t.value==="skills"?"active":""}`,[n],'`tab-panel ${p0.value==="skills"?"active":""}`')},[e("div",null,{class:"groupbox"},[e("span",null,{class:"groupbox-label"},"Frontend Development",3,null),e("table",null,{class:"skill-grid"},[e("thead",null,null,e("tr",null,null,[e("th",null,null,"Skill",3,null),e("th",null,null,"Level",3,null),e("th",null,{class:"progress-cell"},"Progress",3,null)],3,null),3,null),e("tbody",null,null,l.map(t=>e("tr",null,null,[e("td",null,null,i(t,"name"),1,null),e("td",null,null,[i(t,"level"),"%"],1,null),e("td",null,{class:"progress-cell"},e("div",null,{class:"mini-progress"},e("div",{style:`width: ${t.level}%`},{class:"mini-progress-bar"},null,3,null),1,null),1,null)],1,t.name)),1,null)],1,null)],1,null),e("div",null,{class:"groupbox"},[e("span",null,{class:"groupbox-label"},"Backend Development",3,null),e("table",null,{class:"skill-grid"},[e("thead",null,null,e("tr",null,null,[e("th",null,null,"Skill",3,null),e("th",null,null,"Level",3,null),e("th",null,{class:"progress-cell"},"Progress",3,null)],3,null),3,null),e("tbody",null,null,o.map(t=>e("tr",null,null,[e("td",null,null,i(t,"name"),1,null),e("td",null,null,[i(t,"level"),"%"],1,null),e("td",null,{class:"progress-cell"},e("div",null,{class:"mini-progress"},e("div",{style:`width: ${t.level}%`},{class:"mini-progress-bar"},null,3,null),1,null),1,null)],1,t.name)),1,null)],1,null)],1,null),e("div",null,{class:"groupbox"},[e("span",null,{class:"groupbox-label"},"Business Analytics & Data Science",3,null),e("table",null,{class:"skill-grid"},[e("thead",null,null,e("tr",null,null,[e("th",null,null,"Skill",3,null),e("th",null,null,"Level",3,null),e("th",null,{class:"progress-cell"},"Progress",3,null)],3,null),3,null),e("tbody",null,null,d.map(t=>e("tr",null,null,[e("td",null,null,i(t,"name"),1,null),e("td",null,null,[i(t,"level"),"%"],1,null),e("td",null,{class:"progress-cell"},e("div",null,{class:"mini-progress"},e("div",{style:`width: ${t.level}%`},{class:"mini-progress-bar"},null,3,null),1,null),1,null)],1,t.name)),1,null)],1,null)],1,null)],1,null),e("div",null,{class:u(t=>`tab-panel ${t.value==="tech"?"active":""}`,[n],'`tab-panel ${p0.value==="tech"?"active":""}`')},e("div",null,{class:"tech-grid"},S.map(t=>e("div",null,{class:"tech-item"},[e("img",{src:i(t,"logo"),alt:i(t,"name")},{class:"tech-logo",loading:"lazy",width:"32",height:"32"},null,3,null),e("p",null,{class:"tech-name"},i(t,"name"),1,null),e("p",null,{class:"tech-exp"},[i(t,"yearsOfExperience"),"yr"],1,null)],1,t.name)),1,null),1,null),e("div",null,{class:u(t=>`tab-panel ${t.value==="interests"?"active":""}`,[n],'`tab-panel ${p0.value==="interests"?"active":""}`')},[e("div",null,{class:"groupbox"},[e("span",null,{class:"groupbox-label"},"Interests & Passions",3,null),e("div",null,{class:"interest-list"},x.interests.map(t=>e("span",null,{class:"interest-tag"},t,1,t)),1,null)],1,null),e("div",null,{class:"groupbox"},[e("span",null,{class:"groupbox-label"},"Education",3,null),e("ul",null,{class:"highlight-list"},[e("li",null,null,x.education.degree,3,null),e("li",null,null,x.education.university,3,null),e("li",null,null,x.education.year,3,null),x.education.achievements.map((t,a)=>e("li",null,null,t,1,a))],1,null)],1,null),e("div",null,{class:"groupbox"},[e("span",null,{class:"groupbox-label"},"Certifications",3,null),e("ul",null,{class:"highlight-list"},x.certifications.map((t,a)=>e("li",null,null,t,1,a)),1,null)],1,null)],1,null)],1,null)],1,null),e("div",null,{class:"about-statusbar"},[e("div",null,{class:"statusbar-cell"},["Tab: ",(c=s.find(t=>t.id===n.value))==null?void 0:c.label],1,null),e("div",null,{class:"statusbar-cell"},[S.length," technologies"],3,null)],1,null)],1,null),1,"uH_0")},W=h(r(q,"s_kQDJUnc38Vs")),A=[{id:"sas-intern",company:"SAS",role:"Technical Intern",location:"Cary, NC",startDate:"Jun 2022",endDate:"Present",description:"Quality assurance infrastructure, cloud engineering, and full-stack development for the CI360 platform team.",highlights:["Built enterprise Selenium Grid deployment on Kubernetes for parallel test execution","Created containerized development environments adopted across multiple teams","Developed full-stack web application for production deployment segment control","Built CLI tools for internal API interaction used by 50+ developers","Automated QA infrastructure with Terraform, Helm, and GitHub Actions","Designed GenAI test strategy using DeepEval framework","Worked on cloud infrastructure with AWS, Docker, and Kubernetes"],technologies:["Python","Docker","Kubernetes","AWS","Terraform","Flask","Selenium","Helm","GitHub Actions","GenAI","DeepEval"],logo:"https://www.sas.com/content/dam/SAS/en_us/image/other/logos/sas-logo-primary-rgb.svg"},{id:"aoit-graduate",company:"Academy of Information Technology (AOIT)",role:"Honors Program Graduate",location:"Holly Springs, NC",startDate:"Aug 2018",endDate:"Jun 2022",description:"Completed the AOIT Honors Program with focus on information technology, web development, and computer science fundamentals.",highlights:["Graduated from AOIT Honors Program","Earned Adobe Dreamweaver CS5 certification","Earned Microsoft PowerPoint 2019 certification","Earned Microsoft Word 2019 certification","Foundation in web development, networking, and IT systems"],technologies:["HTML","CSS","JavaScript","Adobe Dreamweaver","Networking","IT Systems"]}],z=[{id:"uncc-ms",institution:"University of North Carolina at Charlotte",degree:"Master of Science",field:"Data Science and Business Analytics",startDate:"Aug 2025",endDate:"Expected May 2027",gpa:"TBD",highlights:["Dual-track program with BS in Computer Science","Focus on econometrics, machine learning, and business analytics","Accelerated 4+1 program"]},{id:"uncc-bs",institution:"University of North Carolina at Charlotte",degree:"Bachelor of Science",field:"Computer Science (Data Science Concentration)",startDate:"Aug 2022",endDate:"Expected May 2026",gpa:"3.95",highlights:["3.95 GPA","Data Science concentration","Second Place & Golden Hack Award at AxeHack Hackathon","Coursework in algorithms, data structures, machine learning, and statistics"]}],N=`
    .experience-section {
      padding: 20px;
      position: relative;
      z-index: 1;
    }
    
    .experience-window {
      max-width: 800px;
      margin: 0 auto;
      background: var(--win-surface);
      box-shadow: var(--win-border-window);
      padding: 3px;
    }
    
    .exp-titlebar {
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
    
    .exp-body {
      padding: 12px;
      background: var(--win-surface);
    }
    
    .exp-card {
      box-shadow: var(--win-border-raised);
      padding: 12px;
      margin-bottom: 12px;
      background: var(--win-surface);
    }
    
    .exp-card:last-child {
      margin-bottom: 0;
    }
    
    .exp-header {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 8px;
    }
    
    .exp-icon {
      font-size: 24px;
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--win-white);
      box-shadow: var(--win-border-field);
    }
    
    .exp-title-block {
      flex: 1;
    }
    
    .exp-role {
      font-size: 13px;
      font-weight: 700;
      color: var(--win-text-primary);
      margin-bottom: 2px;
    }
    
    .exp-company {
      font-size: 12px;
      color: var(--win-accent);
      font-weight: 700;
      margin-bottom: 2px;
    }
    
    .exp-meta {
      font-size: 10px;
      color: var(--win-text-muted);
      display: flex;
      gap: 8px;
    }
    
    .exp-date-badge {
      padding: 1px 6px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      font-size: 10px;
      font-weight: 700;
      color: var(--win-text-primary);
      white-space: nowrap;
    }
    
    .exp-separator {
      height: 1px;
      margin: 8px 0;
      box-shadow: inset 0 0 0 0.5px var(--win-shadow);
    }
    
    .exp-desc {
      font-size: 11px;
      color: var(--win-text-secondary);
      line-height: 1.5;
      margin-bottom: 8px;
    }
    
    .groupbox {
      box-shadow:
        inset 1px 1px 0 0 var(--win-shadow),
        inset -1px -1px 0 0 var(--win-white);
      padding: 12px 8px 8px;
      margin: 8px 0;
      position: relative;
    }
    
    .groupbox-label {
      position: absolute;
      top: -8px;
      left: 8px;
      background: var(--win-surface);
      padding: 0 4px;
      font-size: 11px;
      font-weight: 700;
      color: var(--win-text-primary);
    }
    
    .highlight-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .highlight-list li {
      padding: 2px 0;
      font-size: 11px;
      color: var(--win-text-primary);
      display: flex;
      align-items: flex-start;
      gap: 6px;
    }
    
    .highlight-list li::before {
      content: '>';
      color: var(--win-accent);
      font-weight: 700;
      flex-shrink: 0;
    }
    
    .tech-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-top: 8px;
    }
    
    .tech-tag {
      padding: 2px 8px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      font-size: 10px;
      cursor: default;
    }
    
    .tech-tag:hover {
      background: var(--win-titlebar);
      color: var(--win-titlebar-text);
    }
    
    .exp-statusbar {
      background: var(--win-surface);
      padding: 2px 4px;
      display: flex;
      gap: 2px;
      font-size: 11px;
      color: var(--win-text-secondary);
    }
    
    .statusbar-cell {
      padding: 1px 6px;
      box-shadow: var(--win-border-sunken);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .statusbar-cell:first-child { flex: 2; }
    .statusbar-cell:last-child { flex: 1; text-align: right; }
    
    @media (max-width: 768px) {
      .experience-section { padding: 12px 8px; }
      .exp-header { flex-direction: column; align-items: flex-start; }
      .exp-meta { flex-direction: column; gap: 2px; }
    }
  `,J=()=>(f(r(N,"s_zs1AoTAmf7M")),e("section",null,{id:"experience",class:"experience-section"},e("div",null,{class:"experience-window"},[e("div",null,{class:"exp-titlebar"},[e("div",null,{class:"titlebar-left"},[e("span",null,null,"💼",3,null),e("span",null,null,"Experience - Task Manager",3,null)],3,null),e("div",null,{class:"titlebar-buttons"},[e("button",null,{class:"titlebar-btn","aria-hidden":"true"},"_",3,null),e("button",null,{class:"titlebar-btn","aria-hidden":"true"},"□",3,null),e("button",null,{class:"titlebar-btn","aria-hidden":"true"},"×",3,null)],3,null)],3,null),e("div",null,{class:"exp-body"},A.map(n=>e("div",null,{class:"exp-card"},[e("div",null,{class:"exp-header"},[e("div",null,{class:"exp-icon"},"💼",3,null),e("div",null,{class:"exp-title-block"},[e("div",null,{class:"exp-role"},i(n,"role"),1,null),e("div",null,{class:"exp-company"},i(n,"company"),1,null),e("div",null,{class:"exp-meta"},[e("span",null,{class:"exp-date-badge"},[i(n,"startDate")," — ",i(n,"endDate")],1,null),e("span",null,null,i(n,"location"),1,null)],1,null)],1,null)],1,null),e("div",null,{class:"exp-separator"},null,3,null),e("p",null,{class:"exp-desc"},i(n,"description"),1,null),e("div",null,{class:"groupbox"},[e("span",null,{class:"groupbox-label"},"Key Contributions",3,null),e("ul",null,{class:"highlight-list"},n.highlights.map((l,o)=>e("li",null,null,l,1,o)),1,null)],1,null),e("div",null,{class:"tech-badges"},n.technologies.map(l=>e("span",null,{class:"tech-tag"},l,1,l)),1,null)],1,n.id)),1,null),e("div",null,{class:"exp-statusbar"},[e("div",null,{class:"statusbar-cell"},[A.length," position(s)"],3,null),e("div",null,{class:"statusbar-cell"},"3+ years total",3,null)],3,null)],1,null),1,"XA_0")),K=h(r(J,"s_D21UbpjhrGk")),V=`
    .education-section {
      padding: 20px;
      position: relative;
      z-index: 1;
    }
    
    .education-window {
      max-width: 800px;
      margin: 0 auto;
      background: var(--win-surface);
      box-shadow: var(--win-border-window);
      padding: 3px;
    }
    
    .edu-titlebar {
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
    
    .edu-body {
      padding: 12px;
      background: var(--win-surface);
    }
    
    .edu-card {
      box-shadow: var(--win-border-raised);
      padding: 12px;
      margin-bottom: 12px;
      background: var(--win-surface);
    }
    
    .edu-card:last-child {
      margin-bottom: 0;
    }
    
    .edu-header {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 8px;
    }
    
    .edu-icon {
      font-size: 24px;
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--win-white);
      box-shadow: var(--win-border-field);
    }
    
    .edu-title-block {
      flex: 1;
    }
    
    .edu-degree {
      font-size: 13px;
      font-weight: 700;
      color: var(--win-text-primary);
      margin-bottom: 2px;
    }
    
    .edu-field {
      font-size: 12px;
      color: var(--win-accent);
      font-weight: 700;
      margin-bottom: 2px;
    }
    
    .edu-institution {
      font-size: 11px;
      color: var(--win-text-secondary);
      margin-bottom: 4px;
    }
    
    .edu-meta {
      display: flex;
      gap: 6px;
      align-items: center;
      flex-wrap: wrap;
    }
    
    .edu-badge {
      padding: 1px 6px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      font-size: 10px;
      font-weight: 700;
      color: var(--win-text-primary);
      white-space: nowrap;
    }
    
    .edu-gpa-badge {
      padding: 1px 6px;
      background: var(--win-titlebar);
      color: var(--win-titlebar-text);
      font-size: 10px;
      font-weight: 700;
      white-space: nowrap;
    }
    
    .edu-separator {
      height: 1px;
      margin: 8px 0;
      box-shadow: inset 0 0 0 0.5px var(--win-shadow);
    }
    
    .groupbox {
      box-shadow:
        inset 1px 1px 0 0 var(--win-shadow),
        inset -1px -1px 0 0 var(--win-white);
      padding: 12px 8px 8px;
      margin: 8px 0;
      position: relative;
    }
    
    .groupbox-label {
      position: absolute;
      top: -8px;
      left: 8px;
      background: var(--win-surface);
      padding: 0 4px;
      font-size: 11px;
      font-weight: 700;
      color: var(--win-text-primary);
    }
    
    .highlight-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .highlight-list li {
      padding: 2px 0;
      font-size: 11px;
      color: var(--win-text-primary);
      display: flex;
      align-items: flex-start;
      gap: 6px;
    }
    
    .highlight-list li::before {
      content: '>';
      color: var(--win-accent);
      font-weight: 700;
      flex-shrink: 0;
    }
    
    .edu-statusbar {
      background: var(--win-surface);
      padding: 2px 4px;
      display: flex;
      gap: 2px;
      font-size: 11px;
      color: var(--win-text-secondary);
    }
    
    .statusbar-cell {
      padding: 1px 6px;
      box-shadow: var(--win-border-sunken);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .statusbar-cell:first-child { flex: 2; }
    .statusbar-cell:last-child { flex: 1; text-align: right; }
    
    @media (max-width: 768px) {
      .education-section { padding: 12px 8px; }
      .edu-header { flex-direction: column; align-items: flex-start; }
      .edu-meta { flex-direction: column; gap: 2px; }
    }
  `,Y=()=>(f(r(V,"s_WJTepUqIjKU")),e("section",null,{id:"education",class:"education-section"},e("div",null,{class:"education-window"},[e("div",null,{class:"edu-titlebar"},[e("div",null,{class:"titlebar-left"},[e("span",null,null,"🎓",3,null),e("span",null,null,"Education - Academic Records",3,null)],3,null),e("div",null,{class:"titlebar-buttons"},[e("button",null,{class:"titlebar-btn","aria-hidden":"true"},"_",3,null),e("button",null,{class:"titlebar-btn","aria-hidden":"true"},"□",3,null),e("button",null,{class:"titlebar-btn","aria-hidden":"true"},"×",3,null)],3,null)],3,null),e("div",null,{class:"edu-body"},z.map(n=>e("div",null,{class:"edu-card"},[e("div",null,{class:"edu-header"},[e("div",null,{class:"edu-icon"},"🎓",3,null),e("div",null,{class:"edu-title-block"},[e("div",null,{class:"edu-degree"},i(n,"degree"),1,null),e("div",null,{class:"edu-field"},i(n,"field"),1,null),e("div",null,{class:"edu-institution"},i(n,"institution"),1,null),e("div",null,{class:"edu-meta"},[e("span",null,{class:"edu-badge"},[i(n,"startDate")," — ",i(n,"endDate")],1,null),e("span",null,{class:"edu-gpa-badge"},["GPA: ",i(n,"gpa")],1,null)],1,null)],1,null)],1,null),e("div",null,{class:"edu-separator"},null,3,null),e("div",null,{class:"groupbox"},[e("span",null,{class:"groupbox-label"},"Highlights",3,null),e("ul",null,{class:"highlight-list"},n.highlights.map((l,o)=>e("li",null,null,l,1,o)),1,null)],1,null)],1,n.id)),1,null),e("div",null,{class:"edu-statusbar"},[e("div",null,{class:"statusbar-cell"},[z.length," degree(s)"],3,null),e("div",null,{class:"statusbar-cell"},"UNC Charlotte",3,null)],3,null)],1,null),1,"K4_0")),Z=h(r(Y,"s_bQotAN8UqIA")),C=[{id:"ciqe-devcontainers",title:"CIQE Development Containers",description:"Containerization of repos and projects with the CI360 team allowing for normalization of testing and development environments across teams",category:"sas",technologies:["Docker","DevContainers","AWS","Git","Kubernetes","Helm","Docker Compose"],images:["https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"],features:["Immediate productivity when working with repos and projects","Automated project-specific setup for all requirements","Internal features handle AWS and Git authentication","Automatic installation of packages including auth","Security automated and connectivity to private resources","Templates with complex setup baked in for teammates"],challenges:["Creating universal devcontainer templates","Handling authentication across multiple services","Ensuring security compliance in containers","Managing versioning and updates across teams"],outcomes:["90% reduction in environment setup time","Standardized development environments","Zero manual configuration required","Adopted across multiple teams"]},{id:"qegrid-selenium",title:"QEGRID: Selenium Grid",description:"Enterprise-scale Selenium Grid deployment allowing browsers of selenium tests to run inside an internally deployed grid for better resource management",category:"sas",technologies:["Selenium","Docker","Kubernetes","Python","Java","AWS"],images:["https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop"],features:["Resource connectivity and efficient handling","Run tests quicker with parallel execution","Normalization of browser versions","Standardized test runners across teams","Centralized test execution management","Scalable infrastructure for concurrent tests"],challenges:["Managing browser compatibility across versions","Optimizing resource allocation for parallel tests","Ensuring network connectivity for internal resources","Scaling to handle peak test loads"],outcomes:["70% faster test execution","Support for 100+ concurrent tests","Unified browser testing platform","Reduced infrastructure costs"]},{id:"splitstation-webapp",title:"SplitStation: Internal Webapp Tool",description:"Full-stack web application for controlling production deployment segments with complete pipeline, authentication, and tracking capabilities",category:"sas",technologies:["Flask","Python","HTML/CSS/JS","Docker","AWS","Azure","CloudFormation","Split.io"],images:["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"],features:["Control production deployment segments","Advanced permission management system","Change tracking and audit logs","Custom interaction workflows","Full authentication and authorization","Real-time segment updates"],challenges:["Building secure authentication from scratch","Implementing complex permission hierarchies","Ensuring production safety with segment controls","Creating intuitive UI for complex operations"],outcomes:["100% adoption by QA team","Zero production incidents","50% faster segment management","Complete audit trail compliance"]},{id:"ci360-cli-tool",title:"CI360: Command Line Tool",description:"Enterprise CLI tool for interaction with internal APIs, featuring automatic proxying and simplified complex operations",category:"sas",technologies:["Python","Click","REST APIs","Docker","AWS","Internal APIs"],images:["https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop"],features:["Simplified interaction with complex internal APIs","Automatic proxying and authentication","Single command for complex operations","Pipeline deployment and distribution","Create customer identity with one command","Comprehensive error handling and logging"],challenges:["Abstracting complex API logic","Handling various authentication methods","Creating intuitive command structure","Ensuring cross-platform compatibility"],outcomes:["80% reduction in API interaction time","Adopted by 50+ developers","Eliminated manual API configuration","Standardized API interactions"]},{id:"spotify-playlist-builder",title:"Spotify Playlist Builder",description:"Award-winning web application for building Spotify playlists with swipe-based interface, developed at UNC Charlotte AxeHack",category:"other",technologies:["Python","Flask","HTML","CSS","JavaScript","Spotify API"],images:["https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&h=600&fit=crop"],features:["Swipe-based song selection interface","Real-time playlist building","Spotify API integration","Responsive web design","User authentication with Spotify","Playlist export functionality"],challenges:["Implementing swipe gestures in web","Managing Spotify API rate limits","Creating engaging user interface","Handling real-time updates"],outcomes:["Second Place at AxeHack","Golden Hack Award winner","Built in 24-hour hackathon","Innovative UI/UX design"]},{id:"qa-automation-suite",title:"QA Infrastructure & Automation",description:"Comprehensive suite of automation tools, web apps, and cloud infrastructure to enable quality assurance across CI360 platform",category:"sas",technologies:["Python","AWS","Terraform","Docker","Kubernetes","GitHub Actions","S3"],images:["https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"],features:["Automated test archiving to S3","GitHub Actions integration","Terraform and Helm deployments","Automatic tenant permissions management","Test results visualization webapp","Complete CI/CD pipeline automation"],challenges:["Orchestrating complex deployment workflows","Managing multi-cloud resources","Ensuring test isolation and reproducibility","Scaling infrastructure based on demand"],outcomes:["95% test automation coverage","60% reduction in QA cycle time","Zero manual deployment steps","Complete test history retention"]},{id:"paper-trading-app",title:"Paper Trading Competition App",description:"Mobile application for simulated stock trading competitions, deployed to the App Store. Users compete in real-time paper trading with live market data.",category:"app",technologies:["Swift","Python","REST APIs","Market Data APIs","App Store","Mobile Development"],images:["https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop"],features:["Real-time paper trading with live market data","Competition leaderboards and rankings","Portfolio tracking and performance analytics","User authentication and profile management","Push notifications for trade alerts","Historical performance charting"],challenges:["Real-time market data integration","App Store review and deployment process","Handling concurrent trading operations","Building responsive mobile UI"],outcomes:["Deployed to App Store","Real-time market data","Competition platform","Full mobile experience"]},{id:"genai-deepeval",title:"GenAI Test Strategy (DeepEval)",description:"Comprehensive GenAI testing strategy using the DeepEval framework for evaluating LLM outputs, ensuring quality and reliability of AI-generated content.",category:"genai",technologies:["Python","DeepEval","LLMs","Prompt Engineering","GenAI","Testing Frameworks"],images:["https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop"],features:["LLM output evaluation and scoring","Automated test case generation","Hallucination detection metrics","Answer relevancy and faithfulness testing","Contextual recall and precision metrics","Regression testing for model updates"],challenges:["Defining reliable evaluation metrics for AI outputs","Handling non-deterministic LLM responses","Building comprehensive test coverage","Integrating with existing QA pipelines"],outcomes:["Automated LLM testing","Standardized AI quality metrics","Integrated into CI/CD","Reduced manual review time"]},{id:"ml-project-1",title:"Neural Network Model",description:"Coming Soon - Advanced deep learning model for pattern recognition and prediction",category:"machine-learning",technologies:["Python","TensorFlow","PyTorch","Scikit-learn","Pandas","NumPy"],images:["https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop"],features:["Advanced pattern recognition","Real-time prediction capabilities","Model optimization techniques","Data preprocessing pipeline"],challenges:["Training data optimization","Model accuracy improvements","Computational efficiency"],outcomes:["In Development","Target: 95% accuracy","Real-time processing"]},{id:"longevity-project-1",title:"Longevity Research Platform",description:"Coming Soon - Bioinformatics platform for longevity and health optimization research",category:"longevity",technologies:["Python","R","BioPython","Data Analysis","Machine Learning"],images:["https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=600&fit=crop"],features:["Biomarker analysis","Health data tracking","Research collaboration tools","Data visualization dashboards"],challenges:["Complex biological data processing","Integration of multiple data sources","Privacy and security compliance"],outcomes:["In Development","Collaboration with researchers","Open-source initiative"]}],X=()=>[{value:"sas",label:"SAS"},{value:"genai",label:"GenAI"},{value:"app",label:"Apps"},{value:"machine-learning",label:"Machine Learning"},{value:"longevity",label:"Longevity"},{value:"other",label:"Other"}],ee=`
    .projects-section {
      padding: 20px;
      position: relative;
      z-index: 1;
    }
    
    .projects-window {
      max-width: 900px;
      margin: 0 auto;
      background: var(--win-surface);
      box-shadow: var(--win-border-window);
      padding: 3px;
    }
    
    .proj-titlebar {
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
    
    /* Menu bar */
    .proj-menubar {
      background: var(--win-surface);
      padding: 2px 0;
      display: flex;
      gap: 0;
      border-bottom: 1px solid var(--win-shadow);
    }
    
    .menubar-item {
      padding: 2px 8px;
      font-size: 11px;
      cursor: pointer;
      user-select: none;
      color: var(--win-text-primary);
      background: transparent;
      border: none;
      font-family: 'IBM Plex Mono', monospace;
    }
    
    .menubar-item:hover,
    .menubar-item.active {
      background: var(--win-titlebar);
      color: var(--win-titlebar-text);
    }
    
    .proj-body {
      padding: 12px;
      background: var(--win-surface);
    }
    
    /* Address bar */
    .address-bar {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 10px;
      font-size: 11px;
    }
    
    .address-label {
      font-weight: 700;
      white-space: nowrap;
    }
    
    .address-field {
      flex: 1;
      background: var(--win-white);
      box-shadow: var(--win-border-field);
      padding: 2px 6px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      color: var(--win-text-primary);
    }
    
    /* File list */
    .file-list-header {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 0;
      margin-bottom: 0;
    }
    
    .file-list-header-cell {
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      padding: 2px 8px;
      font-size: 11px;
      font-weight: 700;
      cursor: default;
      user-select: none;
    }
    
    .file-list {
      background: var(--win-white);
      box-shadow: var(--win-border-field);
      min-height: 200px;
      max-height: 400px;
      overflow-y: auto;
    }
    
    .file-item {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 0;
      padding: 3px 8px;
      font-size: 11px;
      cursor: pointer;
      border: none;
      background: transparent;
      width: 100%;
      text-align: left;
      font-family: 'IBM Plex Mono', monospace;
      color: var(--win-text-primary);
    }
    
    .file-item:nth-child(even) {
      background: #f0f0f0;
    }
    
    .file-item:hover {
      background: var(--win-titlebar);
      color: var(--win-titlebar-text);
    }
    
    .file-item.selected {
      background: var(--win-titlebar);
      color: var(--win-titlebar-text);
    }
    
    .file-name {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .file-icon {
      font-size: 14px;
      flex-shrink: 0;
    }
    
    .file-cat {
      text-transform: uppercase;
      font-size: 10px;
    }
    
    .file-tech {
      font-size: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    /* Status bar */
    .proj-statusbar {
      background: var(--win-surface);
      padding: 2px 4px;
      display: flex;
      gap: 2px;
      font-size: 11px;
      color: var(--win-text-secondary);
    }
    
    .statusbar-cell {
      padding: 1px 6px;
      box-shadow: var(--win-border-sunken);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .statusbar-cell:first-child { flex: 2; }
    .statusbar-cell:last-child { flex: 1; text-align: right; }
    
    /* Detail modal — Win95 dialog */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      opacity: 0;
      visibility: hidden;
    }
    
    .modal-overlay.open {
      opacity: 1;
      visibility: visible;
    }
    
    .modal-window {
      background: var(--win-surface);
      box-shadow: var(--win-border-window);
      padding: 3px;
      max-width: 640px;
      width: 100%;
      max-height: 80vh;
      overflow-y: auto;
    }
    
    .modal-titlebar {
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
    
    .modal-close-btn {
      width: 16px;
      height: 14px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      border: none;
      cursor: pointer;
      font-size: 9px;
      font-weight: 700;
      font-family: 'IBM Plex Mono', monospace;
      color: var(--win-text-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      line-height: 1;
    }
    
    .modal-close-btn:active {
      box-shadow: var(--win-border-button-pressed);
    }
    
    .modal-body {
      padding: 12px;
      background: var(--win-surface);
    }
    
    .modal-desc {
      font-size: 12px;
      color: var(--win-text-secondary);
      line-height: 1.5;
      margin-bottom: 12px;
    }
    
    .groupbox {
      box-shadow:
        inset 1px 1px 0 0 var(--win-shadow),
        inset -1px -1px 0 0 var(--win-white);
      padding: 12px 8px 8px;
      margin: 10px 0;
      position: relative;
    }
    
    .groupbox-label {
      position: absolute;
      top: -8px;
      left: 8px;
      background: var(--win-surface);
      padding: 0 4px;
      font-size: 11px;
      font-weight: 700;
      color: var(--win-text-primary);
    }
    
    .item-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .item-list li {
      padding: 2px 0;
      font-size: 11px;
      color: var(--win-text-primary);
      display: flex;
      align-items: flex-start;
      gap: 6px;
    }
    
    .item-list li::before {
      content: '>';
      color: var(--win-accent);
      font-weight: 700;
      flex-shrink: 0;
    }
    
    .outcome-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 6px;
    }
    
    .outcome-card {
      background: var(--win-white);
      box-shadow: var(--win-border-field);
      padding: 8px;
      text-align: center;
    }
    
    .outcome-value {
      font-size: 14px;
      font-weight: 700;
      color: var(--win-accent);
      margin-bottom: 2px;
    }
    
    .outcome-label {
      font-size: 10px;
      color: var(--win-text-secondary);
    }
    
    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 6px;
      margin-top: 12px;
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
      min-width: 75px;
    }
    
    .win-btn:active {
      box-shadow: var(--win-border-button-pressed);
    }
    
    .tech-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-top: 4px;
    }
    
    .tech-tag {
      padding: 2px 8px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      font-size: 10px;
    }
    
    @media (max-width: 768px) {
      .projects-section {
        padding: 12px 8px;
      }
      
      .file-list-header {
        grid-template-columns: 1fr;
      }
      
      .file-list-header-cell:not(:first-child) {
        display: none;
      }
      
      .file-item {
        grid-template-columns: 1fr;
      }
      
      .file-cat,
      .file-tech {
        display: none;
      }
      
      .modal-overlay {
        padding: 8px;
      }
      
      .outcome-grid {
        grid-template-columns: 1fr;
      }
    }
  `,ne=n=>{const[l]=v();l.value=n},le=n=>{const[l,o]=v();o.value=n,l.value=!0},te=()=>{const[n,l]=v();n.value=!1,setTimeout(()=>{l.value=null},300)},ae=()=>{const n=m("all"),l=m(null),o=m(!1);f(r(ee,"s_x09mof0NAUM"));const d=[{value:"all",label:"All Projects"},...X()],p=n.value==="all"?C:C.filter(a=>a.category===n.value),s=r(ne,"s_04T8x2lEfJQ",[n]),c=r(le,"s_kH0dZ6cEGg4",[o,l]),t=r(te,"s_AlkI4Q6oVwQ",[o,l]);return e("section",null,{id:"projects",class:"projects-section"},[e("div",null,{class:"projects-window"},[e("div",null,{class:"proj-titlebar"},[e("div",null,{class:"titlebar-left"},[e("span",null,null,"📁",3,null),e("span",null,null,"Projects - File Explorer",3,null)],3,null),e("div",null,{class:"titlebar-buttons"},[e("button",null,{class:"titlebar-btn","aria-hidden":"true"},"_",3,null),e("button",null,{class:"titlebar-btn","aria-hidden":"true"},"□",3,null),e("button",null,{class:"titlebar-btn","aria-hidden":"true"},"×",3,null)],3,null)],3,null),e("div",null,{class:"proj-menubar"},d.map(a=>e("button",{class:`menubar-item ${n.value===a.value?"active":""}`,onClick$:g("s_1xEgQnu0yC4",[a,s])},null,i(a,"label"),0,a.value)),1,null),e("div",null,{class:"proj-body"},[e("div",null,{class:"address-bar"},[e("span",null,{class:"address-label"},"Address:",3,null),e("div",null,{class:"address-field"},["C:\\Portfolio\\Projects\\",u(a=>a.value==="all"?"*":a.value,[n],'p0.value==="all"?"*":p0.value')],3,null)],3,null),e("div",null,{class:"file-list-header"},[e("div",null,{class:"file-list-header-cell"},"Name",3,null),e("div",null,{class:"file-list-header-cell"},"Category",3,null),e("div",null,{class:"file-list-header-cell"},"Technologies",3,null)],3,null),e("div",null,{class:"file-list"},p.map(a=>{var y;return e("button",{class:`file-item ${((y=l.value)==null?void 0:y.id)===a.id?"selected":""}`,onClick$:g("s_0fQE1ynJqGM",[c,a])},null,[e("span",null,{class:"file-name"},[e("span",null,{class:"file-icon"},"📄",3,null),i(a,"title")],1,null),e("span",null,{class:"file-cat"},i(a,"category"),1,null),e("span",null,{class:"file-tech"},a.technologies.slice(0,3).join(", "),1,null)],0,a.id)}),1,null)],1,null),e("div",null,{class:"proj-statusbar"},[e("div",null,{class:"statusbar-cell"},[i(p,"length")," object(s)"],1,null),e("div",null,{class:"statusbar-cell"},u(a=>a.value==="all"?"All categories":a.value,[n],'p0.value==="all"?"All categories":p0.value'),3,null)],1,null)],1,null),e("div",null,{class:u(a=>`modal-overlay ${a.value?"open":""}`,[o],'`modal-overlay ${p0.value?"open":""}`'),onClick$:t},l.value&&e("div",null,{class:"modal-window",onClick$:g("s_fkUqghrXBi0")},[e("div",null,{class:"modal-titlebar"},[e("div",null,{class:"titlebar-left"},[e("span",null,null,"📄",3,null),e("span",null,null,[u(a=>a.value.title,[l],"p0.value.title")," - Details"],3,null)],3,null),e("button",null,{class:"modal-close-btn",onClick$:t},"×",3,null)],3,null),e("div",null,{class:"modal-body"},[e("p",null,{class:"modal-desc"},u(a=>a.value.description,[l],"p0.value.description"),3,null),e("div",null,{class:"groupbox"},[e("span",null,{class:"groupbox-label"},"Technologies",3,null),e("div",null,{class:"tech-badges"},l.value.technologies.map(a=>e("span",null,{class:"tech-tag"},a,1,a)),1,null)],1,null),e("div",null,{class:"groupbox"},[e("span",null,{class:"groupbox-label"},"Key Features",3,null),e("ul",null,{class:"item-list"},l.value.features.map(a=>e("li",null,null,a,1,a)),1,null)],1,null),e("div",null,{class:"groupbox"},[e("span",null,{class:"groupbox-label"},"Outcomes",3,null),e("div",null,{class:"outcome-grid"},l.value.outcomes.map(a=>{const[y,...M]=a.split(" ");return e("div",null,{class:"outcome-card"},[e("div",null,{class:"outcome-value"},y,1,null),e("div",null,{class:"outcome-label"},M.join(" "),1,null)],1,a)}),1,null)],1,null),e("div",null,{class:"groupbox"},[e("span",null,{class:"groupbox-label"},"Challenges",3,null),e("ul",null,{class:"item-list"},l.value.challenges.map(a=>e("li",null,null,a,1,a)),1,null)],1,null),e("div",null,{class:"modal-actions"},e("button",null,{class:"win-btn",onClick$:t},"OK",3,null),3,null)],1,null)],1,"m6_0"),1,null)],1,"m6_1")},ie=h(r(ae,"s_JdVX0L8bEOA")),oe=[{name:"LinkedIn",url:"https://www.linkedin.com/in/twpow/",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>`,color:"#0077B5"},{name:"Email",url:"mailto:thomas.walker.powell@gmail.com",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
    </svg>`,color:"#EA4335"},{name:"GitHub",url:"https://github.com/twpow",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>`,color:"#333"}],w={email:"thomas.walker.powell@gmail.com",phone:"(919) 593-8731",location:"Charlotte, NC",availability:"Currently interning at SAS",responseTime:"Usually responds within 24-48 hours"},re=`
    .contact-section { padding: 20px; position: relative; z-index: 1; }
    
    .contact-layout {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 16px;
      max-width: 900px;
      margin: 0 auto;
    }
    
    /* Info window */
    .info-window {
      background: var(--win-surface);
      box-shadow: var(--win-border-window);
      padding: 3px;
      align-self: start;
    }
    
    .win-titlebar {
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
    
    .titlebar-left { display: flex; align-items: center; gap: 4px; }
    
    .titlebar-btn {
      width: 16px; height: 14px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      border: none;
      display: flex; align-items: center; justify-content: center;
      font-size: 9px; font-weight: 700;
      font-family: 'IBM Plex Mono', monospace;
      color: var(--win-text-primary);
      padding: 0; line-height: 1; cursor: default;
    }
    
    .win-body { padding: 12px; background: var(--win-surface); }
    
    .info-row {
      display: flex; align-items: center; gap: 8px;
      padding: 4px 0; font-size: 11px; color: var(--win-text-primary);
    }
    
    .info-icon { font-size: 14px; flex-shrink: 0; width: 20px; text-align: center; }
    .info-label { font-weight: 700; font-size: 10px; color: var(--win-text-muted); text-transform: uppercase; }
    .info-value { font-size: 11px; }
    
    .separator {
      height: 2px; margin: 8px 0;
      box-shadow: inset 0 1px 0 0 var(--win-shadow), inset 0 -1px 0 0 var(--win-white);
    }
    
    .status-badge {
      display: flex; align-items: center; gap: 6px;
      font-size: 11px; color: var(--win-success);
      padding: 4px 0;
    }
    
    .status-led {
      width: 8px; height: 8px;
      background: var(--win-success);
      border: 1px solid #006600;
    }
    
    .social-section { margin-top: 8px; }
    .social-label { font-size: 11px; font-weight: 700; margin-bottom: 6px; }
    
    .social-grid { display: flex; gap: 4px; flex-wrap: wrap; }
    
    .social-btn {
      width: 32px; height: 32px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      border: none;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; color: var(--win-text-primary);
      text-decoration: none;
    }
    
    .social-btn:hover {
      background: var(--win-titlebar);
      color: var(--win-titlebar-text);
    }
    
    .social-btn:active { box-shadow: var(--win-border-button-pressed); }
    .social-btn svg { width: 16px; height: 16px; }
    
    /* Form window */
    .form-window {
      background: var(--win-surface);
      box-shadow: var(--win-border-window);
      padding: 3px;
    }
    
    .form-body { padding: 12px; background: var(--win-surface); }
    
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 8px; }
    .form-group { margin-bottom: 8px; }
    
    .form-label {
      display: block; font-size: 11px; font-weight: 700;
      color: var(--win-text-primary); margin-bottom: 3px;
    }
    
    .form-input, .form-textarea {
      width: 100%; padding: 3px 4px;
      border: none; background: var(--win-white);
      box-shadow: var(--win-border-field);
      color: var(--win-text-primary);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px; outline: none;
    }
    
    .form-input::placeholder, .form-textarea::placeholder { color: var(--win-text-muted); }
    .form-textarea { resize: vertical; min-height: 100px; }
    
    .form-actions { display: flex; justify-content: flex-end; gap: 6px; margin-top: 10px; }
    
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
      min-width: 75px;
    }
    
    .win-btn:active { box-shadow: var(--win-border-button-pressed); }
    
    .win-btn.primary {
      font-weight: 700;
      box-shadow: var(--win-border-button), 0 0 0 1px var(--win-black);
    }
    
    .win-btn:disabled {
      color: var(--win-text-disabled);
      text-shadow: 1px 1px 0 var(--win-white);
      cursor: default;
    }
    
    .submit-msg {
      margin-top: 8px; padding: 6px 8px;
      font-size: 11px; font-weight: 700;
    }
    
    .submit-msg.success { background: #c0ffc0; color: var(--win-success); }
    .submit-msg.error { background: #ffc0c0; color: var(--win-error); }
    
    .win-statusbar {
      background: var(--win-surface);
      padding: 2px 4px;
      display: flex; gap: 2px;
      font-size: 11px; color: var(--win-text-secondary);
    }
    
    .statusbar-cell {
      padding: 1px 6px;
      box-shadow: var(--win-border-sunken);
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    
    .statusbar-cell:first-child { flex: 2; }
    .statusbar-cell:last-child { flex: 1; text-align: right; }
    
    @media (max-width: 768px) {
      .contact-section { padding: 12px 8px; }
      .contact-layout { grid-template-columns: 1fr; }
      .form-row { grid-template-columns: 1fr; }
    }
  `,se=async n=>{const[l,o,d]=v();n.preventDefault(),o.value=!0,d.value="idle",await new Promise(p=>setTimeout(p,2e3)),console.log("Form submitted:",l.value),o.value=!1,d.value="success",setTimeout(()=>{l.value={name:"",email:"",subject:"",message:""},d.value="idle"},3e3)},ce=(n,l)=>{const[o]=v();o.value={...o.value,[n]:l}},ue=()=>{const n=m({name:"",email:"",subject:"",message:""}),l=m(!1),o=m("idle");f(r(re,"s_tvPusS0UOeY"));const d=r(se,"s_LMfn7cFC95k",[n,l,o]),p=r(ce,"s_G0PU4nT0vKs",[n]);return e("section",null,{id:"contact",class:"contact-section"},e("div",null,{class:"contact-layout"},[e("div",null,{class:"info-window"},[e("div",null,{class:"win-titlebar"},[e("div",null,{class:"titlebar-left"},[e("span",null,null,"📇",3,null),e("span",null,null,"Contact Info",3,null)],3,null),e("button",null,{class:"titlebar-btn","aria-hidden":"true"},"×",3,null)],3,null),e("div",null,{class:"win-body"},[e("div",null,{class:"info-row"},[e("span",null,{class:"info-icon"},"📧",3,null),e("div",null,null,[e("div",null,{class:"info-label"},"Email",3,null),e("div",null,{class:"info-value"},w.email,3,null)],3,null)],3,null),e("div",null,{class:"info-row"},[e("span",null,{class:"info-icon"},"📞",3,null),e("div",null,null,[e("div",null,{class:"info-label"},"Phone",3,null),e("div",null,{class:"info-value"},w.phone,3,null)],3,null)],3,null),e("div",null,{class:"info-row"},[e("span",null,{class:"info-icon"},"📍",3,null),e("div",null,null,[e("div",null,{class:"info-label"},"Location",3,null),e("div",null,{class:"info-value"},w.location,3,null)],3,null)],3,null),e("div",null,{class:"separator"},null,3,null),e("div",null,{class:"status-badge"},[e("div",null,{class:"status-led"},null,3,null),e("span",null,null,w.availability,3,null)],3,null),e("div",null,{class:"separator"},null,3,null),e("div",null,{class:"social-section"},[e("div",null,{class:"social-label"},"Connect:",3,null),e("div",null,{class:"social-grid"},oe.map(s=>e("a",{href:i(s,"url"),title:i(s,"name"),dangerouslySetInnerHTML:i(s,"icon")},{target:"_blank",rel:"noopener noreferrer",class:"social-btn"},null,3,s.name)),1,null)],1,null)],1,null)],1,null),e("div",null,{class:"form-window"},[e("div",null,{class:"win-titlebar"},[e("div",null,{class:"titlebar-left"},[e("span",null,null,"✉️",3,null),e("span",null,null,"New Message - Compose",3,null)],3,null),e("div",null,{style:"display: flex; gap: 2px;"},[e("button",null,{class:"titlebar-btn","aria-hidden":"true"},"_",3,null),e("button",null,{class:"titlebar-btn","aria-hidden":"true"},"□",3,null),e("button",null,{class:"titlebar-btn","aria-hidden":"true"},"×",3,null)],3,null)],3,null),e("div",null,{class:"form-body"},e("form",null,{onSubmit$:d},[e("div",null,{class:"form-row"},[e("div",null,{class:"form-group"},[e("label",null,{class:"form-label",for:"name"},"From:",3,null),e("input",null,{type:"text",id:"name",class:"form-input",placeholder:"Your Name",value:u(s=>s.value.name,[n],"p0.value.name"),required:!0,onInput$:g("s_vKy2S362iTQ",[p])},null,3,null)],3,null),e("div",null,{class:"form-group"},[e("label",null,{class:"form-label",for:"email"},"Reply-To:",3,null),e("input",null,{type:"email",id:"email",class:"form-input",placeholder:"your@email.com",value:u(s=>s.value.email,[n],"p0.value.email"),required:!0,onInput$:g("s_LuZO1QS7gEs",[p])},null,3,null)],3,null)],3,null),e("div",null,{class:"form-group"},[e("label",null,{class:"form-label",for:"subject"},"Subject:",3,null),e("input",null,{type:"text",id:"subject",class:"form-input",placeholder:"Project Inquiry",value:u(s=>s.value.subject,[n],"p0.value.subject"),required:!0,onInput$:g("s_zAJbdncFBqs",[p])},null,3,null)],3,null),e("div",null,{class:"form-group"},[e("label",null,{class:"form-label",for:"message"},"Message:",3,null),e("textarea",null,{id:"message",class:"form-textarea",placeholder:"Type your message here...",value:u(s=>s.value.message,[n],"p0.value.message"),required:!0,onInput$:g("s_1M8Ii0d2Bp4",[p])},null,3,null)],3,null),e("div",null,{class:"form-actions"},e("button",null,{type:"submit",class:"win-btn primary",disabled:u(s=>s.value,[l],"p0.value")},u(s=>s.value?"⌛ Sending...":"📨 Send",[l],'p0.value?"⌛ Sending...":"📨 Send"'),3,null),3,null),o.value==="success"&&e("div",null,{class:"submit-msg success"},"✓ Message sent successfully!",3,"Db_0"),o.value==="error"&&e("div",null,{class:"submit-msg error"},"✗ Error sending. Try emailing directly.",3,"Db_1")],1,null),1,null),e("div",null,{class:"win-statusbar"},[e("div",null,{class:"statusbar-cell"},"Ready",3,null),e("div",null,{class:"statusbar-cell"},w.responseTime,3,null)],3,null)],1,null)],1,null),1,"Db_2")},de=h(r(ue,"s_Ubng8hDLd1Y")),pe=()=>b(P,{children:[b(H,null,3,"i8_0"),e("main",null,null,[b(R,null,3,"i8_1"),b(W,null,3,"i8_2"),b(K,null,3,"i8_3"),b(Z,null,3,"i8_4"),b(ie,null,3,"i8_5"),b(de,null,3,"i8_6")],1,null)]},1,"i8_7"),ge=h(r(pe,"s_B0lqk5IDDy4")),me={title:"Thomas Powell - Technical Intern & Computer Science Student",meta:[{name:"description",content:"Technical Intern at SAS specializing in cloud engineering, DevOps, and full-stack development. UNC Charlotte Computer Science and Data Science student."},{name:"keywords",content:"Thomas Powell, SAS intern, cloud engineering, DevOps, full-stack developer, Python, AWS, Docker, Kubernetes, UNC Charlotte"},{property:"og:title",content:"Thomas Powell - Technical Intern & Computer Science Student"},{property:"og:description",content:"Explore my portfolio of enterprise projects at SAS, including cloud infrastructure, automation tools, and web applications."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:"Thomas Powell - Technical Intern & Computer Science Student"},{name:"twitter:description",content:"Technical Intern at SAS specializing in cloud engineering, DevOps, and full-stack development."}]},xe=Object.freeze(Object.defineProperty({__proto__:null,default:ge,head:me},Symbol.toStringTag,{value:"Module"})),be=[],he=()=>T,ve=[["/",[he,()=>xe],"/",["q-BQwkKZy9.js","q-CYtR45vV.js"]]],fe=[],we=!0,ye="/",ke=!0,Ae={routes:ve,serverPlugins:be,menus:fe,trailingSlash:we,basePathname:ye,cacheModules:ke};export{ye as basePathname,ke as cacheModules,Ae as default,fe as menus,ve as routes,be as serverPlugins,we as trailingSlash};

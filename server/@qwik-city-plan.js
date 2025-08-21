import{c as h,i as r,u as p,b,d as e,e as c,f as u,g as i,h as g,j as M,k as m,F as y}from"./q-Yz2pce6C.js";const _=`
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
      background: linear-gradient(145deg, var(--neu-accent), var(--neu-accent-dark));
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
        width: calc(100% - 40px);
        padding: 12px 20px;
        top: 10px;
      }
      
      .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--neu-base);
        border-radius: var(--neu-radius-lg);
        box-shadow: var(--neu-shadow-lg);
        flex-direction: column;
        padding: 20px;
        margin-top: 10px;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: all var(--neu-transition-base);
      }
      
      .nav-links.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      
      .nav-link {
        width: 100%;
        text-align: center;
        padding: 12px;
      }
      
      .menu-toggle {
        display: block;
      }
    }
  `,C=a=>{const[n,t]=g();n.value=a,t.value=!1;const s=document.getElementById(a);s&&s.scrollIntoView({behavior:"smooth"})},I=()=>{const[a]=g();a.value=!a.value},P=()=>{const a=p("home"),n=p(!1);b(r(_,"s_gZs8EX5SgiU"));const t=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"projects",label:"Projects"},{id:"contact",label:"Contact"}],s=r(C,"s_uYqmvnpRTCw",[a,n]),d=r(I,"s_LlZXhqmUmt8",[n]);return e("nav",null,{class:"navbar"},[e("a",null,{href:"#home",class:"logo",onClick$:c("s_0NkL50ppaIg",[s])},[e("div",null,{class:"logo-icon"},"JD",3,null),e("span",null,null,"Portfolio",3,null)],3,null),e("div",null,{class:u(o=>`nav-links ${o.value?"open":""}`,[n],'`nav-links ${p0.value?"open":""}`')},t.map(o=>e("a",{href:`#${o.id}`,class:`nav-link ${a.value===o.id?"active":""}`,onClick$:c("s_0hCi1q038Qo",[s,o])},null,i(o,"label"),0,o.id)),1,null),e("button",null,{class:u(o=>`menu-toggle ${o.value?"open":""}`,[n],'`menu-toggle ${p0.value?"open":""}`'),"aria-label":"Toggle menu",onClick$:d},e("div",null,{class:"menu-icon"},[e("span",null,null,null,3,null),e("span",null,null,null,3,null),e("span",null,null,null,3,null)],3,null),3,null)],1,"R4_0")},D=h(r(P,"s_ropMBSBWqro")),A=`
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
  `,L=()=>{const a=p(""),n=p(!0);return b(r(A,"s_R0z7yMvPekY")),M(c("s_qJmIgBWFER0",[a,n])),e("section",null,{id:"home",class:"hero-section"},e("div",null,{class:"hero-content"},[e("div",null,{class:"profile-container"},e("div",null,{class:"profile-image-wrapper"},[e("img",null,{src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",alt:"Profile",class:"profile-image",width:180,height:180},null,3,null),e("div",null,{class:"profile-status"},e("div",null,{class:"status-dot"},null,3,null),3,null)],3,null),3,null),e("h1",null,{class:"hero-title animate-fadeInUp"},"John Doe",3,null),e("p",null,{class:"hero-subtitle"},[e("span",null,{class:"typewriter-text"},u(t=>t.value,[a],"p0.value"),3,null),n.value&&e("span",null,{class:"cursor"},null,3,"HJ_0")],1,null),e("div",null,{class:"cta-buttons"},[e("a",null,{href:"#projects",class:"cta-button primary"},[e("span",null,null,"View Projects",3,null),e("svg",null,{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},e("path",null,{d:"M5 12h14M12 5l7 7-7 7"},null,3,null),3,null)],3,null),e("a",null,{href:"/resume.pdf",download:!0,class:"cta-button secondary"},[e("span",null,null,"Download CV",3,null),e("svg",null,{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},e("path",null,{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"},null,3,null),3,null)],3,null)],3,null),e("div",null,{class:"scroll-indicator"},[e("div",null,{class:"scroll-mouse"},e("div",null,{class:"scroll-wheel"},null,3,null),3,null),e("span",null,null,"Scroll to explore",3,null)],3,null)],1,null),1,"HJ_1")},U=h(r(L,"s_1V8LiPxWuaU")),R=[{name:"React/Next.js",level:95,category:"frontend"},{name:"TypeScript",level:90,category:"frontend"},{name:"Vue.js",level:85,category:"frontend"},{name:"HTML/CSS",level:95,category:"frontend"},{name:"Tailwind CSS",level:90,category:"frontend"},{name:"D3.js",level:80,category:"frontend"},{name:"WebGL/Three.js",level:75,category:"frontend"},{name:"Node.js",level:90,category:"backend"},{name:"Python",level:85,category:"backend"},{name:"Go",level:75,category:"backend"},{name:"GraphQL",level:85,category:"backend"},{name:"REST APIs",level:95,category:"backend"},{name:"Microservices",level:80,category:"backend"},{name:"PostgreSQL",level:85,category:"database"},{name:"MongoDB",level:80,category:"database"},{name:"Redis",level:85,category:"database"},{name:"Elasticsearch",level:75,category:"database"},{name:"Docker",level:85,category:"devops"},{name:"Kubernetes",level:75,category:"devops"},{name:"AWS",level:80,category:"devops"},{name:"CI/CD",level:85,category:"devops"},{name:"Terraform",level:70,category:"devops"},{name:"Git",level:95,category:"tools"},{name:"Linux",level:85,category:"tools"},{name:"Agile/Scrum",level:90,category:"tools"},{name:"Figma",level:70,category:"tools"},{name:"Problem Solving",level:95,category:"soft"},{name:"Team Leadership",level:85,category:"soft"},{name:"Communication",level:90,category:"soft"},{name:"Project Management",level:80,category:"soft"}],T=[{name:"React",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",proficiency:"expert",yearsOfExperience:5},{name:"Node.js",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",proficiency:"expert",yearsOfExperience:5},{name:"TypeScript",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",proficiency:"advanced",yearsOfExperience:4},{name:"PostgreSQL",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",proficiency:"advanced",yearsOfExperience:4},{name:"Docker",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",proficiency:"advanced",yearsOfExperience:3},{name:"AWS",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",proficiency:"advanced",yearsOfExperience:3},{name:"GraphQL",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",proficiency:"advanced",yearsOfExperience:3},{name:"MongoDB",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",proficiency:"advanced",yearsOfExperience:4},{name:"Redis",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",proficiency:"advanced",yearsOfExperience:3},{name:"Python",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",proficiency:"advanced",yearsOfExperience:4},{name:"Kubernetes",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",proficiency:"intermediate",yearsOfExperience:2},{name:"Vue.js",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",proficiency:"advanced",yearsOfExperience:3}],j=a=>R.filter(n=>n.category===a),v={name:"John Doe",title:"Full-Stack Developer & System Architect",bio:`Passionate full-stack developer with 5+ years of experience building scalable web applications and distributed systems. 
        I specialize in creating elegant solutions to complex problems, with a focus on performance, user experience, and clean code.
        
        My journey in tech started with a curiosity about how things work, which evolved into a career dedicated to building 
        innovative digital solutions. I thrive in collaborative environments and enjoy mentoring junior developers while 
        continuously learning from peers.`,highlights:["5+ years of professional development experience","Led teams of up to 10 developers","Architected solutions handling millions of users","Open source contributor with 1000+ GitHub stars","Speaker at tech conferences and meetups","Mentor and technical writer"],interests:["Cloud Architecture","Machine Learning","Open Source","Technical Writing","UI/UX Design","DevOps Automation"]},E=`
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
      .about-content {
        grid-template-columns: 1fr;
      }
      
      .tech-grid {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 20px;
      }
      
      .tech-card {
        padding: 20px;
      }
      
      .tech-logo {
        width: 50px;
        height: 50px;
      }
    }
    
    @media (max-width: 640px) {
      .section-title {
        font-size: 2rem;
      }
      
      .bio-section,
      .skills-section {
        padding: 25px;
      }
      
      .tech-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `,B=()=>{b(r(E,"s_3Vkkdid5Eow"));const a=j("frontend").slice(0,4),n=j("backend").slice(0,4);return e("section",null,{id:"about",class:"about-section"},e("div",null,{class:"about-container"},[e("h2",null,{class:"section-title animate-fadeInUp"},"About Me",3,null),e("p",null,{class:"section-subtitle animate-fadeInUp stagger-1"},"Passionate about building scalable solutions and creating exceptional user experiences",3,null),e("div",null,{class:"about-content"},[e("div",null,{class:"bio-section animate-fadeInLeft"},[e("h3",null,{class:"bio-title"},v.name,3,null),e("p",null,{class:"bio-subtitle"},v.title,3,null),e("p",null,{class:"bio-text"},v.bio,3,null),e("div",null,{class:"highlights"},v.highlights.slice(0,4).map((t,s)=>e("div",null,{class:"highlight-item"},[e("div",null,{class:"highlight-icon"},"✓",3,null),e("span",null,null,t,1,null)],1,s)),1,null)],1,null),e("div",null,{class:"skills-section animate-fadeInRight"},[e("h3",null,{class:"skills-title"},"Core Skills",3,null),e("div",null,{class:"skill-category"},[e("p",null,{class:"category-title"},"Frontend Development",3,null),a.map(t=>e("div",null,{class:"skill-item"},[e("div",null,{class:"skill-header"},[e("span",null,{class:"skill-name"},i(t,"name"),1,null),e("span",null,{class:"skill-level"},[i(t,"level"),"%"],1,null)],1,null),e("div",null,{class:"skill-bar"},e("div",{style:`width: ${t.level}%`},{class:"skill-progress"},null,3,null),1,null)],1,t.name))],1,null),e("div",null,{class:"skill-category"},[e("p",null,{class:"category-title"},"Backend Development",3,null),n.map(t=>e("div",null,{class:"skill-item"},[e("div",null,{class:"skill-header"},[e("span",null,{class:"skill-name"},i(t,"name"),1,null),e("span",null,{class:"skill-level"},[i(t,"level"),"%"],1,null)],1,null),e("div",null,{class:"skill-bar"},e("div",{style:`width: ${t.level}%`},{class:"skill-progress"},null,3,null),1,null)],1,t.name))],1,null)],1,null)],1,null),e("div",null,{class:"tech-stack"},[e("h3",null,{class:"section-title"},"Tech Stack",3,null),e("p",null,{class:"section-subtitle"},"Technologies I work with daily",3,null),e("div",null,{class:"tech-grid"},T.map(t=>e("div",null,{class:"tech-card animate-scaleIn"},[e("img",{src:i(t,"logo"),alt:i(t,"name")},{class:"tech-logo",loading:"lazy",width:"60",height:"60"},null,3,null),e("p",null,{class:"tech-name"},i(t,"name"),1,null),e("p",null,{class:"tech-experience"},[i(t,"yearsOfExperience")," years"],1,null)],1,t.name)),1,null)],1,null),e("div",null,{class:"interests-section"},[e("h3",null,{class:"interests-title"},"Interests & Passions",3,null),e("div",null,{class:"interests-list"},v.interests.map(t=>e("span",null,{class:"interest-tag"},t,1,t)),1,null)],1,null)],1,null),1,"uH_0")},O=h(r(B,"s_kQDJUnc38Vs")),z=[{id:"ecommerce-platform",title:"E-Commerce Platform",description:"Full-stack e-commerce solution with microservices architecture, real-time inventory management, and secure payment processing",category:"fullstack",technologies:["React","Node.js","PostgreSQL","Redis","Docker","AWS","Stripe","GraphQL"],images:["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"],liveUrl:"https://demo-ecommerce.example.com",githubUrl:"https://github.com/username/ecommerce-platform",architecture:{diagram:"https://via.placeholder.com/800x600/e0e5ec/6c63ff?text=Architecture+Diagram",description:"Microservices architecture with API Gateway, separate services for auth, products, orders, and payments. Uses event-driven communication with RabbitMQ for service coordination."},features:["Real-time inventory management with WebSocket updates","Secure payment processing with Stripe integration","Admin dashboard with analytics and reporting","Mobile-responsive design with PWA capabilities","Multi-language and multi-currency support","Advanced search with Elasticsearch"],challenges:["Implementing efficient caching strategy with Redis","Handling concurrent transactions and race conditions","Optimizing database queries for scale","Managing distributed transactions across microservices"],outcomes:["50ms average API response time","99.9% uptime over 12 months","Handles 10,000+ concurrent users","Reduced cart abandonment by 35%"]},{id:"task-management-app",title:"AI-Powered Task Management",description:"Real-time collaborative task management system with AI-powered insights, smart prioritization, and team analytics",category:"fullstack",technologies:["Vue.js","Express","MongoDB","Socket.io","TensorFlow.js","Python","FastAPI"],images:["https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"],liveUrl:"https://tasks.example.com",githubUrl:"https://github.com/username/task-management",architecture:{diagram:"https://via.placeholder.com/800x600/e0e5ec/6c63ff?text=Event-Driven+Architecture",description:"Event-driven architecture with WebSocket connections for real-time updates, separate ML service for predictions"},features:["Real-time collaboration with conflict resolution","AI-powered task prioritization and time estimation","Kanban, Gantt, and Calendar views","Team analytics and productivity insights","Automated workflow templates","Integration with Slack, GitHub, and Jira"],challenges:["Implementing conflict-free replicated data types (CRDTs)","Real-time synchronization across devices","Training ML model for accurate task predictions","Scaling WebSocket connections"],outcomes:["30% improvement in team productivity","Used by 500+ teams globally","4.8/5 user satisfaction rating","95% accuracy in task time estimation"]},{id:"data-visualization",title:"Data Analytics Dashboard",description:"Interactive data visualization platform for business intelligence with real-time streaming and custom dashboards",category:"frontend",technologies:["D3.js","React","TypeScript","WebGL","Chart.js","Apache Kafka","ClickHouse"],images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"],liveUrl:"https://analytics.example.com",githubUrl:"https://github.com/username/data-dashboard",features:["30+ interactive chart types","Real-time data streaming with WebSockets","Custom dashboard builder with drag-and-drop","Export to PDF, Excel, and PowerPoint","Collaborative annotations and sharing","Advanced filtering and drill-down capabilities"],challenges:["Rendering large datasets efficiently (1M+ points)","Creating responsive visualizations","Implementing drag-and-drop dashboard builder","Optimizing WebGL performance"],outcomes:["Renders 1M+ data points at 60fps","Reduced report generation time by 80%","Used by Fortune 500 companies","50% faster decision making"]},{id:"devops-platform",title:"DevOps Automation Platform",description:"Comprehensive CI/CD platform with infrastructure as code, monitoring, and automated deployment pipelines",category:"devops",technologies:["Go","Kubernetes","Terraform","Prometheus","Grafana","GitLab CI","Ansible"],images:["https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop"],githubUrl:"https://github.com/username/devops-platform",architecture:{diagram:"https://via.placeholder.com/800x600/e0e5ec/6c63ff?text=K8s+Architecture",description:"Kubernetes-based platform with GitOps workflow, automated scaling, and comprehensive monitoring stack"},features:["Automated CI/CD pipelines with GitOps","Infrastructure as Code with Terraform","Auto-scaling based on metrics","Comprehensive monitoring and alerting","Blue-green and canary deployments","Secret management with HashiCorp Vault"],challenges:["Managing multi-cloud deployments","Implementing zero-downtime deployments","Optimizing container resource allocation","Building custom Kubernetes operators"],outcomes:["90% reduction in deployment time","Zero-downtime deployments achieved","40% reduction in infrastructure costs","100+ microservices managed"]},{id:"mobile-banking",title:"Mobile Banking Application",description:"Secure mobile banking app with biometric authentication, real-time transactions, and AI-powered fraud detection",category:"mobile",technologies:["React Native","Node.js","PostgreSQL","Redis","AWS","Machine Learning","Blockchain"],images:["https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop"],liveUrl:"https://apps.apple.com/app/example",githubUrl:"https://github.com/username/mobile-banking",features:["Biometric authentication (Face ID/Touch ID)","Real-time transaction processing","AI-powered fraud detection","P2P payments with QR codes","Investment portfolio management","Blockchain-based transaction verification"],challenges:["Implementing bank-grade security","Real-time fraud detection with ML","Ensuring PCI DSS compliance","Optimizing app performance and battery usage"],outcomes:["1M+ downloads in first year","4.7/5 app store rating","99.99% transaction success rate","50% reduction in fraud cases"]},{id:"social-platform",title:"Social Learning Platform",description:"Educational social network with live streaming, collaborative learning spaces, and gamification elements",category:"fullstack",technologies:["Next.js","GraphQL","PostgreSQL","Redis","WebRTC","AWS","ElasticSearch"],images:["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop"],liveUrl:"https://learn.example.com",githubUrl:"https://github.com/username/social-learning",architecture:{diagram:"https://via.placeholder.com/800x600/e0e5ec/6c63ff?text=Microservices+%26+WebRTC",description:"Microservices with GraphQL federation, WebRTC for video streaming, and event-driven gamification system"},features:["Live video streaming classes","Collaborative whiteboards","Gamification with badges and leaderboards","AI-powered content recommendations","Discussion forums with real-time updates","Progress tracking and analytics"],challenges:["Scaling WebRTC for thousands of concurrent users","Implementing real-time collaborative features","Building recommendation engine","Managing video content delivery"],outcomes:["100K+ active learners","85% course completion rate","4.9/5 user satisfaction","30% improvement in learning outcomes"]}],Q=()=>[{value:"fullstack",label:"Full Stack"},{value:"frontend",label:"Frontend"},{value:"backend",label:"Backend"},{value:"mobile",label:"Mobile"},{value:"devops",label:"DevOps"}],F=`
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
    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
      
      .filter-tabs {
        gap: 10px;
      }
      
      .filter-tab {
        padding: 10px 20px;
        font-size: 0.9rem;
      }
      
      .modal-content {
        max-height: 100vh;
        border-radius: 0;
      }
      
      .modal-header,
      .modal-body {
        padding: 25px;
      }
    }
  `,G=a=>{const[n]=g();n.value=a},$=a=>{const[n,t]=g();t.value=a,n.value=!0},Y=()=>{const[a,n]=g();a.value=!1,setTimeout(()=>{n.value=null},300)},W=()=>{const a=p("all"),n=p(null),t=p(!1);b(r(F,"s_x09mof0NAUM"));const s=[{value:"all",label:"All Projects"},...Q()],d=a.value==="all"?z:z.filter(l=>l.category===a.value),o=r(G,"s_04T8x2lEfJQ",[a]),S=r($,"s_kH0dZ6cEGg4",[t,n]),k=r(Y,"s_AlkI4Q6oVwQ",[t,n]);return e("section",null,{id:"projects",class:"projects-section"},e("div",null,{class:"projects-container"},[e("h2",null,{class:"section-title animate-fadeInUp"},"Featured Projects",3,null),e("p",null,{class:"section-subtitle animate-fadeInUp stagger-1"},"Explore my portfolio of full-stack applications and technical solutions",3,null),e("div",null,{class:"filter-tabs animate-fadeInUp stagger-2"},s.map(l=>e("button",{class:`filter-tab ${a.value===l.value?"active":""}`,onClick$:c("s_1xEgQnu0yC4",[l,o])},null,i(l,"label"),0,l.value)),1,null),e("div",null,{class:"projects-grid"},d.map((l,w)=>e("div",{class:`project-card animate-fadeInUp stagger-${Math.min(w+3,8)}`,onClick$:c("s_7w8zQT0J9wQ",[S,l])},null,[e("div",null,{class:"project-image-container"},[e("img",{src:l.images[0],alt:i(l,"title")},{class:"project-image",loading:"lazy",width:"800",height:"600"},null,3,null),e("span",null,{class:"project-category"},i(l,"category"),1,null)],1,null),e("div",null,{class:"project-content"},[e("h3",null,{class:"project-title"},i(l,"title"),1,null),e("p",null,{class:"project-description"},i(l,"description"),1,null),e("div",null,{class:"project-tech"},[l.technologies.slice(0,4).map(f=>e("span",null,{class:"tech-badge"},f,1,f)),l.technologies.length>4&&e("span",null,{class:"tech-badge"},["+",l.technologies.length-4],1,"m6_0")],1,null),e("div",null,{class:"project-links"},[l.liveUrl&&e("a",{href:i(l,"liveUrl")},{class:"project-link primary",target:"_blank",rel:"noopener noreferrer",onClick$:c("s_x65cA0NoyOM")},[e("svg",null,{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},e("path",null,{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"},null,3,null),3,null),"Live Demo"],3,"m6_1"),l.githubUrl&&e("a",{href:i(l,"githubUrl")},{class:"project-link",target:"_blank",rel:"noopener noreferrer",onClick$:c("s_euptowWQvR4")},[e("svg",null,{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},e("path",null,{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"},null,3,null),3,null),"GitHub"],3,"m6_2")],1,null)],1,null)],0,l.id)),1,null),e("div",null,{class:u(l=>`modal-overlay ${l.value?"open":""}`,[t],'`modal-overlay ${p0.value?"open":""}`'),onClick$:k},n.value&&e("div",null,{class:"modal-content",onClick$:c("s_42RUnvGm7aU")},[e("button",null,{class:"modal-close",onClick$:k},e("svg",null,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",null,{x1:"18",y1:"6",x2:"6",y2:"18"},null,3,null),e("line",null,{x1:"6",y1:"6",x2:"18",y2:"18"},null,3,null)],3,null),3,null),e("div",null,{class:"modal-header"},[e("h3",null,{class:"modal-title"},u(l=>l.value.title,[n],"p0.value.title"),3,null),e("span",null,{class:"modal-category"},u(l=>l.value.category,[n],"p0.value.category"),3,null)],3,null),e("div",null,{class:"modal-body"},[e("div",null,{class:"modal-section"},[e("h4",null,{class:"modal-section-title"},"Key Features",3,null),e("div",null,{class:"feature-list"},n.value.features.map(l=>e("div",null,{class:"feature-item"},[e("div",null,{class:"feature-icon"},"✓",3,null),e("span",null,null,l,1,null)],1,l)),1,null)],1,null),e("div",null,{class:"modal-section"},[e("h4",null,{class:"modal-section-title"},"Project Outcomes",3,null),e("div",null,{class:"stats-grid"},n.value.outcomes.map(l=>{const[w,...f]=l.split(" ");return e("div",null,{class:"stat-card"},[e("div",null,{class:"stat-value"},w,1,null),e("div",null,{class:"stat-label"},f.join(" "),1,null)],1,l)}),1,null)],1,null),e("div",null,{class:"modal-section"},[e("h4",null,{class:"modal-section-title"},"Technical Challenges",3,null),e("div",null,{class:"feature-list"},n.value.challenges.map(l=>e("div",null,{class:"feature-item"},[e("div",null,{class:"feature-icon"},"💡",3,null),e("span",null,null,l,1,null)],1,l)),1,null)],1,null)],1,null)],1,"m6_3"),1,null)],1,null),1,"m6_4")},V=h(r(W,"s_JdVX0L8bEOA")),q=[{name:"GitHub",url:"https://github.com/johndoe",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>`,color:"#333"},{name:"LinkedIn",url:"https://linkedin.com/in/johndoe",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>`,color:"#0077B5"},{name:"Twitter",url:"https://twitter.com/johndoe",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
    </svg>`,color:"#1DA1F2"},{name:"Email",url:"mailto:john.doe@example.com",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
    </svg>`,color:"#EA4335"},{name:"Stack Overflow",url:"https://stackoverflow.com/users/123456/johndoe",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z"/>
    </svg>`,color:"#F48024"},{name:"Dev.to",url:"https://dev.to/johndoe",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/>
    </svg>`,color:"#0A0A0A"}],x={email:"john.doe@example.com",phone:"+1 (555) 123-4567",location:"San Francisco, CA",availability:"Available for freelance projects"},H=`
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
      .contact-content {
        grid-template-columns: 1fr;
      }
      
      .form-row {
        grid-template-columns: 1fr;
      }
    }
    
    @media (max-width: 640px) {
      .contact-info,
      .contact-form {
        padding: 25px;
      }
      
      .social-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .section-title {
        font-size: 2rem;
      }
    }
  `,J=async a=>{const[n,t,s]=g();a.preventDefault(),t.value=!0,s.value="idle",await new Promise(d=>setTimeout(d,2e3)),console.log("Form submitted:",n.value),t.value=!1,s.value="success",setTimeout(()=>{n.value={name:"",email:"",subject:"",message:""},s.value="idle"},3e3)},N=(a,n)=>{const[t]=g();t.value={...t.value,[a]:n}},K=()=>{const a=p({name:"",email:"",subject:"",message:""}),n=p(!1),t=p("idle");b(r(H,"s_tvPusS0UOeY"));const s=r(J,"s_LMfn7cFC95k",[a,n,t]),d=r(N,"s_G0PU4nT0vKs",[a]);return e("section",null,{id:"contact",class:"contact-section"},e("div",null,{class:"contact-container"},[e("h2",null,{class:"section-title animate-fadeInUp"},"Get In Touch",3,null),e("p",null,{class:"section-subtitle animate-fadeInUp stagger-1"},"Let's discuss your next project or collaboration opportunity",3,null),e("div",null,{class:"contact-content"},[e("div",null,{class:"contact-info animate-fadeInLeft"},[e("h3",null,{class:"info-title"},"Contact Information",3,null),e("div",null,{class:"info-item"},[e("div",null,{class:"info-icon"},e("svg",null,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},e("path",null,{d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},null,3,null),3,null),3,null),e("div",null,{class:"info-details"},[e("p",null,{class:"info-label"},"Email",3,null),e("p",null,{class:"info-value"},x.email,3,null)],3,null)],3,null),e("div",null,{class:"info-item"},[e("div",null,{class:"info-icon"},e("svg",null,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},e("path",null,{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"},null,3,null),3,null),3,null),e("div",null,{class:"info-details"},[e("p",null,{class:"info-label"},"Phone",3,null),e("p",null,{class:"info-value"},x.phone,3,null)],3,null)],3,null),e("div",null,{class:"info-item"},[e("div",null,{class:"info-icon"},e("svg",null,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",null,{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"},null,3,null),e("circle",null,{cx:"12",cy:"10",r:"3"},null,3,null)],3,null),3,null),e("div",null,{class:"info-details"},[e("p",null,{class:"info-label"},"Location",3,null),e("p",null,{class:"info-value"},x.location,3,null)],3,null)],3,null),e("div",null,{class:"availability-badge"},[e("span",null,{class:"availability-dot"},null,3,null),x.availability],3,null),e("div",null,{class:"social-links"},[e("h4",null,{class:"social-title"},"Connect With Me",3,null),e("div",null,{class:"social-grid"},q.map(o=>e("a",{href:i(o,"url"),title:i(o,"name"),dangerouslySetInnerHTML:i(o,"icon")},{target:"_blank",rel:"noopener noreferrer",class:"social-link"},null,3,o.name)),1,null)],1,null)],1,null),e("div",null,{class:"contact-form animate-fadeInRight"},[e("h3",null,{class:"form-title"},"Send Me a Message",3,null),e("form",null,{onSubmit$:s},[e("div",null,{class:"form-row"},[e("div",null,{class:"form-group"},[e("label",null,{class:"form-label",for:"name"},"Your Name",3,null),e("input",null,{type:"text",id:"name",class:"form-input",placeholder:"John Smith",value:u(o=>o.value.name,[a],"p0.value.name"),required:!0,onInput$:c("s_vKy2S362iTQ",[d])},null,3,null)],3,null),e("div",null,{class:"form-group"},[e("label",null,{class:"form-label",for:"email"},"Email Address",3,null),e("input",null,{type:"email",id:"email",class:"form-input",placeholder:"john@example.com",value:u(o=>o.value.email,[a],"p0.value.email"),required:!0,onInput$:c("s_LuZO1QS7gEs",[d])},null,3,null)],3,null)],3,null),e("div",null,{class:"form-group"},[e("label",null,{class:"form-label",for:"subject"},"Subject",3,null),e("input",null,{type:"text",id:"subject",class:"form-input",placeholder:"Project Inquiry",value:u(o=>o.value.subject,[a],"p0.value.subject"),required:!0,onInput$:c("s_zAJbdncFBqs",[d])},null,3,null)],3,null),e("div",null,{class:"form-group"},[e("label",null,{class:"form-label",for:"message"},"Message",3,null),e("textarea",null,{id:"message",class:"form-textarea",placeholder:"Tell me about your project...",value:u(o=>o.value.message,[a],"p0.value.message"),required:!0,onInput$:c("s_1M8Ii0d2Bp4",[d])},null,3,null)],3,null),e("button",null,{type:"submit",class:"form-submit",disabled:u(o=>o.value,[n],"p0.value")},n.value?m(y,{children:[e("span",null,{class:"spinner"},null,3,null),"Sending..."]},3,"Db_0"):m(y,{children:["Send Message",e("svg",null,{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",null,{x1:"22",y1:"2",x2:"11",y2:"13"},null,3,null),e("polygon",null,{points:"22 2 15 22 11 13 2 9 22 2"},null,3,null)],3,null)]},3,"Db_1"),1,null),t.value==="success"&&e("div",null,{class:"submit-status success"},"✓ Message sent successfully! I'll get back to you soon.",3,"Db_2"),t.value==="error"&&e("div",null,{class:"submit-status error"},"✗ Something went wrong. Please try again or email me directly.",3,"Db_3")],1,null)],1,null)],1,null)],1,null),1,"Db_4")},X=h(r(K,"s_Ubng8hDLd1Y")),Z=()=>m(y,{children:[m(D,null,3,"i8_0"),e("main",null,null,[m(U,null,3,"i8_1"),m(O,null,3,"i8_2"),m(V,null,3,"i8_3"),m(X,null,3,"i8_4")],1,null)]},1,"i8_5"),ee=h(r(Z,"s_B0lqk5IDDy4")),te={title:"John Doe - Full-Stack Developer Portfolio",meta:[{name:"description",content:"Full-Stack Developer specializing in scalable web applications, microservices architecture, and innovative digital solutions. View my projects and get in touch."},{name:"keywords",content:"full-stack developer, web development, React, Node.js, TypeScript, portfolio, software engineer"},{property:"og:title",content:"John Doe - Full-Stack Developer Portfolio"},{property:"og:description",content:"Explore my portfolio of full-stack projects, from e-commerce platforms to data visualization dashboards."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:"John Doe - Full-Stack Developer Portfolio"},{name:"twitter:description",content:"Full-Stack Developer specializing in scalable web applications and innovative digital solutions."}]},ae=Object.freeze(Object.defineProperty({__proto__:null,default:ee,head:te},Symbol.toStringTag,{value:"Module"})),ne=[],le=[["/",[()=>ae],"/",["q-BT0Uw01w.js"]]],oe=[],ie=!0,re="/",se=!0,ue={routes:le,serverPlugins:ne,menus:oe,trailingSlash:ie,basePathname:re,cacheModules:se};export{re as basePathname,se as cacheModules,ue as default,oe as menus,le as routes,ne as serverPlugins,ie as trailingSlash};

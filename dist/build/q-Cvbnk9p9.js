import{u as s,k as d,E as _,B as e,q as a,G as r,h as p,_hW as m}from"./q-Cn9eRv09.js";import{_ as i}from"./q-XYi0b4s7.js";const y=()=>{const[n,o]=s();n.value=!1,setTimeout(()=>{o.value=null},300)},w=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_AlkI4Q6oVwQ:y},Symbol.toStringTag,{value:"Module"})),S=()=>{const[n,o]=s();return n(o)},k=Object.freeze(Object.defineProperty({__proto__:null,s_7w8zQT0J9wQ:S},Symbol.toStringTag,{value:"Module"})),j=n=>{const[o,l]=s();l.value=n,o.value=!0},P=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_kH0dZ6cEGg4:j},Symbol.toStringTag,{value:"Module"})),C=()=>{const[n,o]=s();return o(n.value)},A=Object.freeze(Object.defineProperty({__proto__:null,s_1xEgQnu0yC4:C},Symbol.toStringTag,{value:"Module"})),I=`
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
  `,E=Object.freeze(Object.defineProperty({__proto__:null,s_x09mof0NAUM:I},Symbol.toStringTag,{value:"Module"})),z=n=>{const[o]=s();o.value=n},T=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_04T8x2lEfJQ:z},Symbol.toStringTag,{value:"Module"})),h=[{id:"ciqe-devcontainers",title:"CIQE Development Containers",description:"Containerization of repos and projects with the CI360 team allowing for normalization of testing and development environments across teams",category:"devops",technologies:["Docker","DevContainers","AWS","Git","Kubernetes","Helm","Docker Compose"],images:["https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"],features:["Immediate productivity when working with repos and projects","Automated project-specific setup for all requirements","Internal features handle AWS and Git authentication","Automatic installation of packages including auth","Security automated and connectivity to private resources","Templates with complex setup baked in for teammates"],challenges:["Creating universal devcontainer templates","Handling authentication across multiple services","Ensuring security compliance in containers","Managing versioning and updates across teams"],outcomes:["90% reduction in environment setup time","Standardized development environments","Zero manual configuration required","Adopted across multiple teams"]},{id:"qegrid-selenium",title:"QEGRID: Selenium Grid",description:"Enterprise-scale Selenium Grid deployment allowing browsers of selenium tests to run inside an internally deployed grid for better resource management",category:"devops",technologies:["Selenium","Docker","Kubernetes","Python","Java","AWS"],images:["https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop"],features:["Resource connectivity and efficient handling","Run tests quicker with parallel execution","Normalization of browser versions","Standardized test runners across teams","Centralized test execution management","Scalable infrastructure for concurrent tests"],challenges:["Managing browser compatibility across versions","Optimizing resource allocation for parallel tests","Ensuring network connectivity for internal resources","Scaling to handle peak test loads"],outcomes:["70% faster test execution","Support for 100+ concurrent tests","Unified browser testing platform","Reduced infrastructure costs"]},{id:"splitstation-webapp",title:"SplitStation: Internal Webapp Tool",description:"Full-stack web application for controlling production deployment segments with complete pipeline, authentication, and tracking capabilities",category:"fullstack",technologies:["Flask","Python","HTML/CSS/JS","Docker","AWS","Azure","CloudFormation","Split.io"],images:["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"],features:["Control production deployment segments","Advanced permission management system","Change tracking and audit logs","Custom interaction workflows","Full authentication and authorization","Real-time segment updates"],challenges:["Building secure authentication from scratch","Implementing complex permission hierarchies","Ensuring production safety with segment controls","Creating intuitive UI for complex operations"],outcomes:["100% adoption by QA team","Zero production incidents","50% faster segment management","Complete audit trail compliance"]},{id:"ci360-cli-tool",title:"CI360: Command Line Tool",description:"Enterprise CLI tool for interaction with internal APIs, featuring automatic proxying and simplified complex operations",category:"backend",technologies:["Python","Click","REST APIs","Docker","AWS","Internal APIs"],images:["https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop"],features:["Simplified interaction with complex internal APIs","Automatic proxying and authentication","Single command for complex operations","Pipeline deployment and distribution","Create customer identity with one command","Comprehensive error handling and logging"],challenges:["Abstracting complex API logic","Handling various authentication methods","Creating intuitive command structure","Ensuring cross-platform compatibility"],outcomes:["80% reduction in API interaction time","Adopted by 50+ developers","Eliminated manual API configuration","Standardized API interactions"]},{id:"spotify-playlist-builder",title:"Spotify Playlist Builder",description:"Award-winning web application for building Spotify playlists with swipe-based interface, developed at UNC Charlotte AxeHack",category:"fullstack",technologies:["Python","Flask","HTML","CSS","JavaScript","Spotify API"],images:["https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&h=600&fit=crop"],features:["Swipe-based song selection interface","Real-time playlist building","Spotify API integration","Responsive web design","User authentication with Spotify","Playlist export functionality"],challenges:["Implementing swipe gestures in web","Managing Spotify API rate limits","Creating engaging user interface","Handling real-time updates"],outcomes:["Second Place at AxeHack","Golden Hack Award winner","Built in 24-hour hackathon","Innovative UI/UX design"]},{id:"qa-automation-suite",title:"QA Infrastructure & Automation",description:"Comprehensive suite of automation tools, web apps, and cloud infrastructure to enable quality assurance across CI360 platform",category:"devops",technologies:["Python","AWS","Terraform","Docker","Kubernetes","GitHub Actions","S3"],images:["https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"],features:["Automated test archiving to S3","GitHub Actions integration","Terraform and Helm deployments","Automatic tenant permissions management","Test results visualization webapp","Complete CI/CD pipeline automation"],challenges:["Orchestrating complex deployment workflows","Managing multi-cloud resources","Ensuring test isolation and reproducibility","Scaling infrastructure based on demand"],outcomes:["95% test automation coverage","60% reduction in QA cycle time","Zero manual deployment steps","Complete test history retention"]}],O=()=>[{value:"fullstack",label:"Full Stack"},{value:"frontend",label:"Frontend"},{value:"backend",label:"Backend"},{value:"mobile",label:"Mobile"},{value:"devops",label:"DevOps"}],M=()=>{const n=d("all"),o=d(null),l=d(!1);_(a(()=>i(()=>Promise.resolve().then(()=>E),void 0),"s_x09mof0NAUM"));const f=[{value:"all",label:"All Projects"},...O()],v=n.value==="all"?h:h.filter(t=>t.category===n.value),b=a(()=>i(()=>Promise.resolve().then(()=>T),void 0),"s_04T8x2lEfJQ",[n]),x=a(()=>i(()=>Promise.resolve().then(()=>P),void 0),"s_kH0dZ6cEGg4",[l,o]),g=a(()=>i(()=>Promise.resolve().then(()=>w),void 0),"s_AlkI4Q6oVwQ",[l,o]);return e("section",null,{id:"projects",class:"projects-section"},e("div",null,{class:"projects-container"},[e("h2",null,{class:"section-title animate-fadeInUp"},"Featured Projects",3,null),e("p",null,{class:"section-subtitle animate-fadeInUp stagger-1"},"Explore my portfolio of full-stack applications and technical solutions",3,null),e("div",null,{class:"filter-tabs animate-fadeInUp stagger-2"},f.map(t=>e("button",{class:`filter-tab ${n.value===t.value?"active":""}`,onClick$:a(()=>i(()=>Promise.resolve().then(()=>A),void 0),"s_1xEgQnu0yC4",[t,b])},null,r(t,"label"),0,t.value)),1,null),e("div",null,{class:"projects-grid"},v.map((t,u)=>e("div",{class:`project-card animate-fadeInUp stagger-${Math.min(u+3,8)}`,onClick$:a(()=>i(()=>Promise.resolve().then(()=>k),void 0),"s_7w8zQT0J9wQ",[x,t])},null,[e("div",null,{class:"project-image-container"},[e("img",{src:t.images[0],alt:r(t,"title")},{class:"project-image",loading:"lazy",width:"800",height:"600"},null,3,null),e("span",null,{class:"project-category"},r(t,"category"),1,null)],1,null),e("div",null,{class:"project-content"},[e("h3",null,{class:"project-title"},r(t,"title"),1,null),e("p",null,{class:"project-description"},r(t,"description"),1,null),e("div",null,{class:"project-tech"},[t.technologies.slice(0,4).map(c=>e("span",null,{class:"tech-badge"},c,1,c)),t.technologies.length>4&&e("span",null,{class:"tech-badge"},["+",t.technologies.length-4],1,"m6_0")],1,null),e("div",null,{class:"project-links"},e("button",null,{class:"project-link primary",onClick$:a(()=>i(()=>import("./q-BCUl09Gr.js"),[]),"s_x0Kaq5Nib7o")},[e("svg",null,{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},e("path",null,{d:"M9 12h6M12 9v6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"},null,3,null),3,null),"View Details"],3,null),3,null)],1,null)],0,t.id)),1,null),e("div",null,{class:p(t=>`modal-overlay ${t.value?"open":""}`,[l]),onClick$:g},o.value&&e("div",null,{class:"modal-content",onClick$:a(()=>i(()=>import("./q-C6UxDU7U.js"),[]),"s_42RUnvGm7aU")},[e("button",null,{class:"modal-close",onClick$:g},e("svg",null,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",null,{x1:"18",y1:"6",x2:"6",y2:"18"},null,3,null),e("line",null,{x1:"6",y1:"6",x2:"18",y2:"18"},null,3,null)],3,null),3,null),e("div",null,{class:"modal-header"},[e("h3",null,{class:"modal-title"},p(t=>t.value.title,[o]),3,null),e("span",null,{class:"modal-category"},p(t=>t.value.category,[o]),3,null)],3,null),e("div",null,{class:"modal-body"},[e("div",null,{class:"modal-section"},[e("h4",null,{class:"modal-section-title"},"Key Features",3,null),e("div",null,{class:"feature-list"},o.value.features.map(t=>e("div",null,{class:"feature-item"},[e("div",null,{class:"feature-icon"},"✓",3,null),e("span",null,null,t,1,null)],1,t)),1,null)],1,null),e("div",null,{class:"modal-section"},[e("h4",null,{class:"modal-section-title"},"Project Outcomes",3,null),e("div",null,{class:"stats-grid"},o.value.outcomes.map(t=>{const[u,...c]=t.split(" ");return e("div",null,{class:"stat-card"},[e("div",null,{class:"stat-value"},u,1,null),e("div",null,{class:"stat-label"},c.join(" "),1,null)],1,t)}),1,null)],1,null),e("div",null,{class:"modal-section"},[e("h4",null,{class:"modal-section-title"},"Technical Challenges",3,null),e("div",null,{class:"feature-list"},o.value.challenges.map(t=>e("div",null,{class:"feature-item"},[e("div",null,{class:"feature-icon"},"💡",3,null),e("span",null,null,t,1,null)],1,t)),1,null)],1,null)],1,null)],1,"m6_1"),1,null)],1,null),1,"m6_2")},R=Object.freeze(Object.defineProperty({__proto__:null,s_JdVX0L8bEOA:M},Symbol.toStringTag,{value:"Module"}));export{R as P,m as _hW,z as s_04T8x2lEfJQ,C as s_1xEgQnu0yC4,S as s_7w8zQT0J9wQ,y as s_AlkI4Q6oVwQ,M as s_JdVX0L8bEOA,j as s_kH0dZ6cEGg4,I as s_x09mof0NAUM};

import{u as s,k as u,E as _,B as e,q as n,G as r,h as p,_hW as m}from"./q-Cn9eRv09.js";import{_ as i}from"./q-XYi0b4s7.js";const w=()=>{const[o,a]=s();o.value=!1,setTimeout(()=>{a.value=null},300)},y=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_AlkI4Q6oVwQ:w},Symbol.toStringTag,{value:"Module"})),k=()=>{const[o,a]=s();return o(a)},j=Object.freeze(Object.defineProperty({__proto__:null,s_7w8zQT0J9wQ:k},Symbol.toStringTag,{value:"Module"})),P=o=>{const[a,l]=s();l.value=o,a.value=!0},S=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_kH0dZ6cEGg4:P},Symbol.toStringTag,{value:"Module"})),C=()=>{const[o,a]=s();return a(o.value)},A=Object.freeze(Object.defineProperty({__proto__:null,s_1xEgQnu0yC4:C},Symbol.toStringTag,{value:"Module"})),M=`
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
  `,E=Object.freeze(Object.defineProperty({__proto__:null,s_x09mof0NAUM:M},Symbol.toStringTag,{value:"Module"})),I=o=>{const[a]=s();a.value=o},O=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_04T8x2lEfJQ:I},Symbol.toStringTag,{value:"Module"})),h=[{id:"ecommerce-platform",title:"E-Commerce Platform",description:"Full-stack e-commerce solution with microservices architecture, real-time inventory management, and secure payment processing",category:"fullstack",technologies:["React","Node.js","PostgreSQL","Redis","Docker","AWS","Stripe","GraphQL"],images:["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"],liveUrl:"https://demo-ecommerce.example.com",githubUrl:"https://github.com/username/ecommerce-platform",architecture:{diagram:"https://via.placeholder.com/800x600/e0e5ec/6c63ff?text=Architecture+Diagram",description:"Microservices architecture with API Gateway, separate services for auth, products, orders, and payments. Uses event-driven communication with RabbitMQ for service coordination."},features:["Real-time inventory management with WebSocket updates","Secure payment processing with Stripe integration","Admin dashboard with analytics and reporting","Mobile-responsive design with PWA capabilities","Multi-language and multi-currency support","Advanced search with Elasticsearch"],challenges:["Implementing efficient caching strategy with Redis","Handling concurrent transactions and race conditions","Optimizing database queries for scale","Managing distributed transactions across microservices"],outcomes:["50ms average API response time","99.9% uptime over 12 months","Handles 10,000+ concurrent users","Reduced cart abandonment by 35%"]},{id:"task-management-app",title:"AI-Powered Task Management",description:"Real-time collaborative task management system with AI-powered insights, smart prioritization, and team analytics",category:"fullstack",technologies:["Vue.js","Express","MongoDB","Socket.io","TensorFlow.js","Python","FastAPI"],images:["https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"],liveUrl:"https://tasks.example.com",githubUrl:"https://github.com/username/task-management",architecture:{diagram:"https://via.placeholder.com/800x600/e0e5ec/6c63ff?text=Event-Driven+Architecture",description:"Event-driven architecture with WebSocket connections for real-time updates, separate ML service for predictions"},features:["Real-time collaboration with conflict resolution","AI-powered task prioritization and time estimation","Kanban, Gantt, and Calendar views","Team analytics and productivity insights","Automated workflow templates","Integration with Slack, GitHub, and Jira"],challenges:["Implementing conflict-free replicated data types (CRDTs)","Real-time synchronization across devices","Training ML model for accurate task predictions","Scaling WebSocket connections"],outcomes:["30% improvement in team productivity","Used by 500+ teams globally","4.8/5 user satisfaction rating","95% accuracy in task time estimation"]},{id:"data-visualization",title:"Data Analytics Dashboard",description:"Interactive data visualization platform for business intelligence with real-time streaming and custom dashboards",category:"frontend",technologies:["D3.js","React","TypeScript","WebGL","Chart.js","Apache Kafka","ClickHouse"],images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"],liveUrl:"https://analytics.example.com",githubUrl:"https://github.com/username/data-dashboard",features:["30+ interactive chart types","Real-time data streaming with WebSockets","Custom dashboard builder with drag-and-drop","Export to PDF, Excel, and PowerPoint","Collaborative annotations and sharing","Advanced filtering and drill-down capabilities"],challenges:["Rendering large datasets efficiently (1M+ points)","Creating responsive visualizations","Implementing drag-and-drop dashboard builder","Optimizing WebGL performance"],outcomes:["Renders 1M+ data points at 60fps","Reduced report generation time by 80%","Used by Fortune 500 companies","50% faster decision making"]},{id:"devops-platform",title:"DevOps Automation Platform",description:"Comprehensive CI/CD platform with infrastructure as code, monitoring, and automated deployment pipelines",category:"devops",technologies:["Go","Kubernetes","Terraform","Prometheus","Grafana","GitLab CI","Ansible"],images:["https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop"],githubUrl:"https://github.com/username/devops-platform",architecture:{diagram:"https://via.placeholder.com/800x600/e0e5ec/6c63ff?text=K8s+Architecture",description:"Kubernetes-based platform with GitOps workflow, automated scaling, and comprehensive monitoring stack"},features:["Automated CI/CD pipelines with GitOps","Infrastructure as Code with Terraform","Auto-scaling based on metrics","Comprehensive monitoring and alerting","Blue-green and canary deployments","Secret management with HashiCorp Vault"],challenges:["Managing multi-cloud deployments","Implementing zero-downtime deployments","Optimizing container resource allocation","Building custom Kubernetes operators"],outcomes:["90% reduction in deployment time","Zero-downtime deployments achieved","40% reduction in infrastructure costs","100+ microservices managed"]},{id:"mobile-banking",title:"Mobile Banking Application",description:"Secure mobile banking app with biometric authentication, real-time transactions, and AI-powered fraud detection",category:"mobile",technologies:["React Native","Node.js","PostgreSQL","Redis","AWS","Machine Learning","Blockchain"],images:["https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop"],liveUrl:"https://apps.apple.com/app/example",githubUrl:"https://github.com/username/mobile-banking",features:["Biometric authentication (Face ID/Touch ID)","Real-time transaction processing","AI-powered fraud detection","P2P payments with QR codes","Investment portfolio management","Blockchain-based transaction verification"],challenges:["Implementing bank-grade security","Real-time fraud detection with ML","Ensuring PCI DSS compliance","Optimizing app performance and battery usage"],outcomes:["1M+ downloads in first year","4.7/5 app store rating","99.99% transaction success rate","50% reduction in fraud cases"]},{id:"social-platform",title:"Social Learning Platform",description:"Educational social network with live streaming, collaborative learning spaces, and gamification elements",category:"fullstack",technologies:["Next.js","GraphQL","PostgreSQL","Redis","WebRTC","AWS","ElasticSearch"],images:["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop"],liveUrl:"https://learn.example.com",githubUrl:"https://github.com/username/social-learning",architecture:{diagram:"https://via.placeholder.com/800x600/e0e5ec/6c63ff?text=Microservices+%26+WebRTC",description:"Microservices with GraphQL federation, WebRTC for video streaming, and event-driven gamification system"},features:["Live video streaming classes","Collaborative whiteboards","Gamification with badges and leaderboards","AI-powered content recommendations","Discussion forums with real-time updates","Progress tracking and analytics"],challenges:["Scaling WebRTC for thousands of concurrent users","Implementing real-time collaborative features","Building recommendation engine","Managing video content delivery"],outcomes:["100K+ active learners","85% course completion rate","4.9/5 user satisfaction","30% improvement in learning outcomes"]}],z=()=>[{value:"fullstack",label:"Full Stack"},{value:"frontend",label:"Frontend"},{value:"backend",label:"Backend"},{value:"mobile",label:"Mobile"},{value:"devops",label:"DevOps"}],R=()=>{const o=u("all"),a=u(null),l=u(!1);_(n(()=>i(()=>Promise.resolve().then(()=>E),void 0),"s_x09mof0NAUM"));const v=[{value:"all",label:"All Projects"},...z()],f=o.value==="all"?h:h.filter(t=>t.category===o.value),b=n(()=>i(()=>Promise.resolve().then(()=>O),void 0),"s_04T8x2lEfJQ",[o]),x=n(()=>i(()=>Promise.resolve().then(()=>S),void 0),"s_kH0dZ6cEGg4",[l,a]),g=n(()=>i(()=>Promise.resolve().then(()=>y),void 0),"s_AlkI4Q6oVwQ",[l,a]);return e("section",null,{id:"projects",class:"projects-section"},e("div",null,{class:"projects-container"},[e("h2",null,{class:"section-title animate-fadeInUp"},"Featured Projects",3,null),e("p",null,{class:"section-subtitle animate-fadeInUp stagger-1"},"Explore my portfolio of full-stack applications and technical solutions",3,null),e("div",null,{class:"filter-tabs animate-fadeInUp stagger-2"},v.map(t=>e("button",{class:`filter-tab ${o.value===t.value?"active":""}`,onClick$:n(()=>i(()=>Promise.resolve().then(()=>A),void 0),"s_1xEgQnu0yC4",[t,b])},null,r(t,"label"),0,t.value)),1,null),e("div",null,{class:"projects-grid"},f.map((t,d)=>e("div",{class:`project-card animate-fadeInUp stagger-${Math.min(d+3,8)}`,onClick$:n(()=>i(()=>Promise.resolve().then(()=>j),void 0),"s_7w8zQT0J9wQ",[x,t])},null,[e("div",null,{class:"project-image-container"},[e("img",{src:t.images[0],alt:r(t,"title")},{class:"project-image",loading:"lazy",width:"800",height:"600"},null,3,null),e("span",null,{class:"project-category"},r(t,"category"),1,null)],1,null),e("div",null,{class:"project-content"},[e("h3",null,{class:"project-title"},r(t,"title"),1,null),e("p",null,{class:"project-description"},r(t,"description"),1,null),e("div",null,{class:"project-tech"},[t.technologies.slice(0,4).map(c=>e("span",null,{class:"tech-badge"},c,1,c)),t.technologies.length>4&&e("span",null,{class:"tech-badge"},["+",t.technologies.length-4],1,"m6_0")],1,null),e("div",null,{class:"project-links"},[t.liveUrl&&e("a",{href:r(t,"liveUrl")},{class:"project-link primary",target:"_blank",rel:"noopener noreferrer",onClick$:n(()=>i(()=>import("./q-C2bX4TKj.js"),[]),"s_x65cA0NoyOM")},[e("svg",null,{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},e("path",null,{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"},null,3,null),3,null),"Live Demo"],3,"m6_1"),t.githubUrl&&e("a",{href:r(t,"githubUrl")},{class:"project-link",target:"_blank",rel:"noopener noreferrer",onClick$:n(()=>i(()=>import("./q-S3Ea4SNL.js"),[]),"s_euptowWQvR4")},[e("svg",null,{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},e("path",null,{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"},null,3,null),3,null),"GitHub"],3,"m6_2")],1,null)],1,null)],0,t.id)),1,null),e("div",null,{class:p(t=>`modal-overlay ${t.value?"open":""}`,[l]),onClick$:g},a.value&&e("div",null,{class:"modal-content",onClick$:n(()=>i(()=>import("./q-C6UxDU7U.js"),[]),"s_42RUnvGm7aU")},[e("button",null,{class:"modal-close",onClick$:g},e("svg",null,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",null,{x1:"18",y1:"6",x2:"6",y2:"18"},null,3,null),e("line",null,{x1:"6",y1:"6",x2:"18",y2:"18"},null,3,null)],3,null),3,null),e("div",null,{class:"modal-header"},[e("h3",null,{class:"modal-title"},p(t=>t.value.title,[a]),3,null),e("span",null,{class:"modal-category"},p(t=>t.value.category,[a]),3,null)],3,null),e("div",null,{class:"modal-body"},[e("div",null,{class:"modal-section"},[e("h4",null,{class:"modal-section-title"},"Key Features",3,null),e("div",null,{class:"feature-list"},a.value.features.map(t=>e("div",null,{class:"feature-item"},[e("div",null,{class:"feature-icon"},"✓",3,null),e("span",null,null,t,1,null)],1,t)),1,null)],1,null),e("div",null,{class:"modal-section"},[e("h4",null,{class:"modal-section-title"},"Project Outcomes",3,null),e("div",null,{class:"stats-grid"},a.value.outcomes.map(t=>{const[d,...c]=t.split(" ");return e("div",null,{class:"stat-card"},[e("div",null,{class:"stat-value"},d,1,null),e("div",null,{class:"stat-label"},c.join(" "),1,null)],1,t)}),1,null)],1,null),e("div",null,{class:"modal-section"},[e("h4",null,{class:"modal-section-title"},"Technical Challenges",3,null),e("div",null,{class:"feature-list"},a.value.challenges.map(t=>e("div",null,{class:"feature-item"},[e("div",null,{class:"feature-icon"},"💡",3,null),e("span",null,null,t,1,null)],1,t)),1,null)],1,null)],1,null)],1,"m6_3"),1,null)],1,null),1,"m6_4")},Q=Object.freeze(Object.defineProperty({__proto__:null,s_JdVX0L8bEOA:R},Symbol.toStringTag,{value:"Module"}));export{Q as P,m as _hW,I as s_04T8x2lEfJQ,C as s_1xEgQnu0yC4,k as s_7w8zQT0J9wQ,w as s_AlkI4Q6oVwQ,R as s_JdVX0L8bEOA,P as s_kH0dZ6cEGg4,M as s_x09mof0NAUM};

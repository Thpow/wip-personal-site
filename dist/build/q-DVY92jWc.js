import{u as i,k as u,E as v,B as n,q as l,h as d,G as _,_hW as c}from"./q-Cn9eRv09.js";import{_ as r}from"./q-XYi0b4s7.js";const g=()=>{const[e,o]=i();return e(o.id)},m=Object.freeze(Object.defineProperty({__proto__:null,s_0hCi1q038Qo:g},Symbol.toStringTag,{value:"Module"})),b=`
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
  `,h=Object.freeze(Object.defineProperty({__proto__:null,s_gZs8EX5SgiU:b},Symbol.toStringTag,{value:"Module"})),x=e=>{const[o,s]=i();o.value=e,s.value=!1;const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})},f=Object.freeze(Object.defineProperty({__proto__:null,_hW:c,s_uYqmvnpRTCw:x},Symbol.toStringTag,{value:"Module"})),w=()=>{const[e]=i();return e("home")},y=Object.freeze(Object.defineProperty({__proto__:null,s_0NkL50ppaIg:w},Symbol.toStringTag,{value:"Module"})),k=()=>{const e=u("home"),o=u(!1);v(l(()=>r(()=>Promise.resolve().then(()=>h),void 0),"s_gZs8EX5SgiU"));const s=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"projects",label:"Projects"},{id:"contact",label:"Contact"}],t=l(()=>r(()=>Promise.resolve().then(()=>f),void 0),"s_uYqmvnpRTCw",[e,o]),p=l(()=>r(()=>Promise.resolve().then(()=>N),void 0),"s_LlZXhqmUmt8",[o]);return n("nav",null,{class:"navbar"},[n("a",null,{href:"#home",class:"logo",onClick$:l(()=>r(()=>Promise.resolve().then(()=>y),void 0),"s_0NkL50ppaIg",[t])},[n("div",null,{class:"logo-icon"},"JD",3,null),n("span",null,null,"Portfolio",3,null)],3,null),n("div",null,{class:d(a=>`nav-links ${a.value?"open":""}`,[o])},s.map(a=>n("a",{href:`#${a.id}`,class:`nav-link ${e.value===a.id?"active":""}`,onClick$:l(()=>r(()=>Promise.resolve().then(()=>m),void 0),"s_0hCi1q038Qo",[t,a])},null,_(a,"label"),0,a.id)),1,null),n("button",null,{class:d(a=>`menu-toggle ${a.value?"open":""}`,[o]),"aria-label":"Toggle menu",onClick$:p},n("div",null,{class:"menu-icon"},[n("span",null,null,null,3,null),n("span",null,null,null,3,null),n("span",null,null,null,3,null)],3,null),3,null)],1,"R4_0")},B=Object.freeze(Object.defineProperty({__proto__:null,s_ropMBSBWqro:k},Symbol.toStringTag,{value:"Module"})),S=()=>{const[e]=i();e.value=!e.value},N=Object.freeze(Object.defineProperty({__proto__:null,_hW:c,s_LlZXhqmUmt8:S},Symbol.toStringTag,{value:"Module"}));export{B as N,c as _hW,w as s_0NkL50ppaIg,g as s_0hCi1q038Qo,S as s_LlZXhqmUmt8,b as s_gZs8EX5SgiU,k as s_ropMBSBWqro,x as s_uYqmvnpRTCw};

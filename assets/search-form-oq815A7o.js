import{r as n,j as t,c as f,L as q,p as m,q as z,A as k,f as L,g as $,s as F}from"./index-shmuyxf9.js";import{u as v}from"./index.esm-EqQQDq-k.js";const w=(e,s)=>{const[o,i]=n.useState(e);return n.useEffect(()=>{const u=setTimeout(()=>i(e),s);return()=>clearTimeout(u)},[e,s]),o},P="_suggestion_13jnm_1",Q="_link_13jnm_15",A="_img_13jnm_22",B="_imgVertical_13jnm_30",a={suggestion:P,link:Q,img:A,imgVertical:B},D=n.memo(e=>{var s,o,i;return t.jsx("li",{className:f(a.suggestion,{[a.imgVertical]:e.suggestion.width<e.suggestion.height}),children:t.jsx(q,{to:`${m.homePage}photos/${e.suggestion.id}`,className:a.link,children:t.jsx("img",{className:a.img,src:e.suggestion.url,alt:(s=e.suggestion)!=null&&s.description?(o=e.suggestion)==null?void 0:o.description:(i=e.suggestion)==null?void 0:i.alt_description})})})}),G="_list_aofz9_1",H="_container_aofz9_14",c={list:G,container:H},I=n.memo(e=>{const{data:s,isLoading:o}=z(e.query);return t.jsx("ul",{className:c.list,children:o?t.jsx("p",{className:c.text,children:"Загрузка..."}):s!=null&&s.length?t.jsx("div",{className:c.container,children:s.map(i=>t.jsx(D,{suggestion:i},i.id))}):t.jsx("p",{className:c.text,children:"Ничего не найдено :("})})}),R="_section_1rj5z_1",J="_form_1rj5z_7",K="_inputContainer_1rj5z_17",M="_input_1rj5z_17",O="_inputErrorText_1rj5z_33",U="_inputErrorTextVisible_1rj5z_38",W="_button_1rj5z_41",r={section:R,form:J,inputContainer:K,input:M,inputErrorText:O,inputErrorTextVisible:U,button:W},Z=n.memo(e=>{var j,p;const{register:s,watch:o,handleSubmit:i,formState:{errors:u,isValid:g}}=v({mode:"onChange"}),{isAuth:h}=n.useContext(k),_=L(),d=$(),l=w((j=o("query"))==null?void 0:j.trim(),500),[y,x]=n.useState(!1),S=n.useCallback(b=>{h&&d(F(b.query)),_(`${m.homePage}${m.searchPage}?query=${b.query}`)},[d,h,_]),N=n.useCallback(()=>{setTimeout(()=>{x(!1)},300)},[]),T=n.useCallback(()=>{x(!0)},[]),{onChange:V,name:C,ref:E}=s("query",{required:{value:!0,message:"Поле обязательно должно быть заполнено"},minLength:{value:2,message:"Минимальное количество символов: 2"}});return t.jsxs("form",{className:r.form,onSubmit:i(S),children:[t.jsxs("label",{htmlFor:"search",className:r.inputContainer,children:[t.jsx("input",{id:"search",name:C,type:"text",ref:E,className:r.input,defaultValue:e.prevQuery,onBlur:N,onFocus:T,onChange:V,placeholder:"Для поиска фото введите ключевое слово(а)"}),t.jsx("span",{className:f(r.inputErrorText,{[r.inputErrorTextVisible]:!g}),children:(p=u.query)==null?void 0:p.message}),l&&y&&l.length>=2&&t.jsx(I,{query:l})]}),t.jsx("button",{type:"submit",className:r.button,disabled:!g,children:"Искать"})]})});export{Z as S};

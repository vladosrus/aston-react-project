import{r,A as N,j as t,L as P,h as S,i as v,P as F}from"./index-r8gq01n7.js";import{S as j}from"./section-U18E_bHD.js";import{u as A,L as B}from"./use-favorites-kTg6fbUL.js";import{S as C}from"./small_preloader-r2jI2VyM.js";import"./clsx-Zbgk8kpT.js";import"./use-typed-selector-cLSHM1Pf.js";const D="_article_u9d51_1",E="_img_u9d51_7",b="_descriptionList_u9d51_13",w="_descriptionListItem_u9d51_18",G="_category_u9d51_22",Q="_description_u9d51_13",R="_link_u9d51_32",i={article:D,img:E,descriptionList:b,descriptionListItem:w,category:G,description:Q,link:R},U=r.memo(o=>{var c,a,d,l,m,p,h,u,_,f,g,x,I;const{isFavorite:e,isLoading:s,handleFavoriteButtonClick:L}=A((c=o.photoInfo)==null?void 0:c.id),{isAuth:y}=r.useContext(N),k=[{category:"Создатель:",description:(a=o.photoInfo)==null?void 0:a.creator.name},{category:"Страна:",description:(d=o.photoInfo)==null?void 0:d.creator.country},{category:"Описание:",description:(((l=o.photoInfo)==null?void 0:l.description)||"")>(((m=o.photoInfo)==null?void 0:m.alt_description)||"")?(p=o.photoInfo)==null?void 0:p.description:(h=o.photoInfo)==null?void 0:h.alt_description},{category:"Профиль создателя в Unsplash:",description:t.jsx(P,{to:((u=o.photoInfo)==null?void 0:u.creator.profileLink)||"#",className:i.link,target:"_blank",rel:"noopener noreferrer",children:`@${(_=o.photoInfo)==null?void 0:_.creator.profileName}`})}];return t.jsxs("article",{className:i.article,children:[t.jsx("img",{className:i.img,src:(f=o.photoInfo)==null?void 0:f.url,alt:(g=o.photoInfo)!=null&&g.description?(x=o.photoInfo)==null?void 0:x.description:(I=o.photoInfo)==null?void 0:I.alt_description}),t.jsxs("ul",{className:i.descriptionList,children:[k.map(n=>t.jsxs("li",{className:i.descriptionListItem,children:[t.jsx("span",{className:i.category,children:n.category}),t.jsx("p",{className:i.description,children:n.description})]},n.category)),t.jsx("li",{className:i.descriptionListItem,children:y&&(s?t.jsx(C,{width:40}):t.jsx(B,{isFavorite:e,handleFavoriteButtonClick:L}))})]})]})}),M=r.memo(()=>{const{id:o}=S(),{data:e,isLoading:s}=v(o);return t.jsxs(t.Fragment,{children:[t.jsx(j,{type:"top"}),t.jsx(j,{type:"main",children:s?t.jsx(F,{}):t.jsx(U,{photoInfo:e})})]})});export{M as DetailsPage,M as default};

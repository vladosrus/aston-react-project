import{r as n,A as u,j as t,L as d,n as g,P as _,c}from"./index-69SyOyib.js";import{u as h,L as x}from"./use-favorites-fR3Q9KZ9.js";import{S as f}from"./small_preloader-2zN7z7DP.js";const j="_figure_3cmdt_1",L="_img_3cmdt_33",I="_figcaption_3cmdt_42",p="_infoButton_3cmdt_65",a={figure:j,img:L,figcaption:I,infoButton:p},r=n.memo(i=>{const{isAuth:o}=n.useContext(u),{isFavorite:s,isLoading:m,handleFavoriteButtonClick:l}=h(i.photoInfo.id);return t.jsxs("figure",{className:a.figure,children:[t.jsx("img",{className:a.img,src:i.photoInfo.url,alt:i.photoInfo.alt_description}),t.jsxs("figcaption",{className:a.figcaption,children:[t.jsx(d,{to:`/aston-react-project/photos/${i.photoInfo.id}`,className:a.infoButton,children:"Больше информации"}),o&&(m?t.jsx(f,{width:50}):t.jsx(x,{isFavorite:s,handleFavoriteButtonClick:l}))]})]})}),P="_list_ou4us_1",B="_listItem_ou4us_12",N="_listItemLarge_ou4us_19 _listItem_ou4us_12",e={list:P,listItem:B,listItemLarge:N},v=n.memo(i=>{const{data:o,isLoading:s}=g(i.id);return s?t.jsx(_,{}):o&&t.jsx("li",{className:c(e.listItem,{[e.listItemLarge]:o.width<o.height}),children:t.jsx(r,{photoInfo:o})},o.id)}),w=n.memo(i=>{var o;return t.jsx("ul",{className:e.list,children:i.photoList?i.photoList.map(s=>t.jsx("li",{className:c(e.listItem,{[e.listItemLarge]:s.width<s.height}),children:t.jsx(r,{photoInfo:s})},s.id)):(o=i.favoritesList)==null?void 0:o.map(s=>t.jsx(v,{id:s},s))})});export{w as P};

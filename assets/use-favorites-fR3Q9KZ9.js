import{r as i,j as u,c as d,g as k,d as v,o as B,q as x,s as _}from"./index-69SyOyib.js";const F="_likeButton_onjxr_1",f="_likeButtonActive_onjxr_19 _likeButton_onjxr_1",s={likeButton:F,likeButtonActive:f},p=i.memo(t=>u.jsx("button",{type:"button",className:d(s.likeButton,{[s.likeButtonActive]:t.isFavorite}),onClick:()=>t.handleFavoriteButtonClick()})),j=t=>{const o=k(),{favorites:n,isDeletedLoading:a,isAddedLoading:c}=v(B);let e=!1;t&&(e=n.includes(t));const l=e?a:c,r=i.useCallback(()=>{t&&o(e?x(t):_(t))},[e,o,t]);return{isFavorite:e,isLoading:l,handleFavoriteButtonClick:r}};export{p as L,j as u};

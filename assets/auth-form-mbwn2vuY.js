import{r as b,a as w,j as a,c as s,L as h}from"./index-shmuyxf9.js";import{u as D}from"./index.esm-EqQQDq-k.js";import{u as j}from"./use-auth-Kk4hgB02.js";import{S as N}from"./small_preloader-N9Sy36SS.js";const C="_form_kex1w_1",f="_title_kex1w_7",M="_titleDark_kex1w_13",E="_inputContainer_kex1w_16",v="_inputName_kex1w_23",S="_input_kex1w_16",V="_inputDark_kex1w_41",L="_errorInput_kex1w_45",F="_errorMessage_kex1w_49",I="_messageVisible_kex1w_57",y="_submitErrorMessage_kex1w_60 _errorMessage_kex1w_49",A="_button_kex1w_68",q="_buttonDark_kex1w_85",P="_buttonDisabled_kex1w_89",R="_captionContainer_kex1w_99",T="_caption_kex1w_99",z="_captionDark_kex1w_107",B="_link_kex1w_110",G="_linkDark_kex1w_118",e={form:C,title:f,titleDark:M,inputContainer:E,inputName:v,input:S,inputDark:V,errorInput:L,errorMessage:F,messageVisible:I,submitErrorMessage:y,button:A,buttonDark:q,buttonDisabled:P,captionContainer:R,caption:T,captionDark:z,link:B,linkDark:G},Q=b.memo(t=>{var c,u;const{theme:n}=w(),{register:i,handleSubmit:_,formState:{errors:r,isValid:o},reset:k}=D({mode:"onChange"}),{isLoginLoading:p,isRegistrationLoading:d,loginError:m,registrationError:l}=j(),x=g=>{t.onSubmit(g),k()};return a.jsxs("form",{className:e.form,onSubmit:_(x),noValidate:!0,children:[a.jsx("h2",{className:s(e.title,{[e.titleDark]:n==="dark"}),children:t.name}),a.jsxs("div",{className:e.inputContainer,children:[a.jsx("label",{className:e.inputName,htmlFor:"email",children:"E-mail"}),a.jsx("input",{...i("email",{required:"Это поле обязательно к заполнению",pattern:{value:/.+@.+\..+/,message:"Указан некорректный email"}}),type:"email",id:"email",autoComplete:"email",className:s(e.input,{[e.inputDark]:n==="dark"},{[e.errorInput]:r.email})}),a.jsx("span",{className:s(e.errorMessage,{[e.messageVisible]:r.email}),children:(c=r.email)==null?void 0:c.message})]}),a.jsxs("div",{className:e.inputContainer,children:[a.jsx("label",{className:e.inputName,htmlFor:"email",children:"Password"}),a.jsx("input",{...i("password",{required:"Это поле обязательно к заполнению",pattern:{value:/^(?!.*[А-Я а-я]).{8,50}/,message:"Указан некорректный пароль"},minLength:{value:8,message:"Минимальное количество символов - 8"},maxLength:{value:50,message:"Максимальное количество символов - 50"}}),className:s(e.input,{[e.inputDark]:n==="dark"},{[e.errorInput]:r.password}),type:"password",id:"password"}),a.jsx("span",{className:s(e.errorMessage,{[e.messageVisible]:r.password}),children:(u=r.password)==null?void 0:u.message})]}),a.jsx("p",{className:s(e.submitErrorMessage,{[e.messageVisible]:t.name==="Регистрация"?l:m}),children:t.name==="Регистрация"?l:m}),a.jsx("button",{type:"submit",disabled:!o,className:s(e.button,{[e.buttonDark]:n==="dark"},{[e.buttonDisabled]:!o}),children:p||d?a.jsx(N,{height:40}):t.name==="Регистрация"?"Зарегистрироваться":"Войти"}),a.jsx("div",{className:e.captionContainer,children:a.jsxs("p",{className:s(e.caption,{[e.captionDark]:n==="dark"}),children:[t.name==="Регистрация"?"Уже зарегистрированы? ":"Ещё не зарегистрированы? ",a.jsx(h,{to:t.name==="Регистрация"?"/aston-react-project/signin":"/aston-react-project/signup",className:s(e.link,{[e.linkDark]:n==="dark"}),children:t.name==="Регистрация"?"Войти":"Регистрация"})]})})]})});export{Q as A};

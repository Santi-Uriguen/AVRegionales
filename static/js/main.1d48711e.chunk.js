(this["webpackJsonpav-regionales"]=this["webpackJsonpav-regionales"]||[]).push([[0],{56:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var c=t(0),A=t.n(c),s=t(19),i=t.n(s),n=(t(56),t(33)),r=t.p+"static/media/MateBanner3.ecc513ee.png",o=t.p+"static/media/CucharaBanner1.36d7ed3b.png",l=t.p+"static/media/PinBanner3.2a4d3368.jpg",d=t(1);function m(){return Object(d.jsxs)(n.a,{className:"banner",children:[Object(d.jsx)(n.a.Item,{children:Object(d.jsx)("img",{className:"d-block w-100",src:r,alt:"Mate"})}),Object(d.jsx)(n.a.Item,{children:Object(d.jsx)("img",{className:"d-block w-100",src:o,alt:"Cucharita"})}),Object(d.jsx)(n.a.Item,{children:Object(d.jsx)("img",{className:"d-block w-100",src:l,alt:"Pins"})})]})}var j=t(25),g=t(22),b=t(34),u=t(27),V=t.p+"static/media/av.c5ad040d.svg";function h(){var e=Object(c.useState)("navBarBig"),a=Object(j.a)(e,2),t=a[0],A=a[1],s=function(){document.getElementById("infoSection").className="infoHide",document.getElementById("cardContainer").className="cardContainer",document.getElementById("contact").className="formSection"},i=function(e){var a=e.target.getAttribute("index"),t=document.getElementById(a).offsetTop;t-=75,window.scroll({top:t,behavior:"smooth"})};return Object(c.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>=100?A("navBarShort"):window.scrollY<100&&A("navBarBig")}))})),Object(d.jsxs)(b.a,{bg:"light",expand:"lg",className:"navBar "+t,children:[Object(d.jsxs)(b.a.Brand,{children:[Object(d.jsx)("img",{src:V,alt:"AV logo",index:"main",onClick:function(e){i(e),s()}}),Object(d.jsx)("h1",{className:"title",index:"main",onClick:function(e){i(e),s()},children:"AV Regionales"})]}),Object(d.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsxs)(b.a.Collapse,{id:"basic-navbar-nav",children:[Object(d.jsxs)(g.a,{className:"mr-auto",children:[Object(d.jsx)(g.a.Link,{index:"main",onClick:function(e){i(e),s()},children:"Inicio"}),Object(d.jsx)(g.a.Link,{index:"contact",onClick:function(e){s(),i(e)},children:"Contacto"}),Object(d.jsxs)(u.a,{title:"Productos",id:"basic-nav-dropdown",children:[Object(d.jsx)(u.a.Item,{index:"cucharas",onClick:function(e){s(),i(e)},children:"Cucharas"}),Object(d.jsx)(u.a.Item,{index:"mates",onClick:function(e){s(),i(e)},children:"Mates & bombillas"}),Object(d.jsx)(u.a.Item,{index:"pines",onClick:function(e){s(),i(e)},children:"Pines"}),Object(d.jsx)(u.a.Item,{index:"vasos",onClick:function(e){s(),i(e)},children:"Vasos"}),Object(d.jsx)(u.a.Item,{index:"empresariales",onClick:function(e){s(),i(e)},children:"Productos empresariales"})]})]}),Object(d.jsx)(g.a,{className:"quienesNav",children:Object(d.jsx)(g.a.Link,{onClick:function(){document.getElementById("infoSection").className="infoShow",document.getElementById("cardContainer").className="infoHide",document.getElementById("contact").className="infoHide",window.scroll({top:0,behavior:"smooth"})},children:"Qui\xe9nes somos"})})]})]})}function p(){return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)(h,{}),Object(d.jsx)(m,{})]})}var O=t(7),C=t(21),w=t(18);function f(e){return Object(d.jsx)("div",{className:"products "+e.className,id:e.id,children:e.srcArray.map((function(a,t){return Object(d.jsxs)(O.a,{className:"categoryCard",children:[Object(d.jsx)(O.a.Title,{children:e.srcArray[t].title}),Object(d.jsx)(O.a.Body,{children:a.products.map((function(e,a){return Object(d.jsxs)(O.a,{children:[Object(d.jsx)(O.a.Img,{variant:"top",src:Object.values(e.src)}),Object(d.jsxs)(O.a.Body,{children:[Object(d.jsx)(O.a.Title,{children:e.title}),Object(d.jsx)(w.a,{variant:"primary",children:"Comprar"})]})]},a)}))})]},t)}))})}function B(e){var a=Object(c.useState)("show"),t=Object(j.a)(a,2),A=t[0],s=t[1],i=Object(c.useState)("hide"),n=Object(j.a)(i,2),r=n[0],o=n[1],l=function(){s("show"===A?"hide":"show"),o("hide"===r?"show":"hide")};return Object(d.jsxs)(O.a,{className:"show"===A?"text-center ExpandedCard collapsed":"text-center ExpandedCard expanded",id:e.name,children:[Object(d.jsx)(O.a.Header,{className:A,children:e.title}),Object(d.jsxs)("div",{className:"cardBanner"+A,children:[Object(d.jsx)(C.a,{src:e.src[0],className:"bannerImg"}),Object(d.jsx)(C.a,{src:e.src[1],className:"bannerImg"}),Object(d.jsx)(C.a,{src:e.src[2],className:"bannerImg"})]}),Object(d.jsxs)(O.a.Body,{children:[Object(d.jsx)(f,{srcArray:e.srcArray,className:r}),Object(d.jsx)(w.a,{variant:"primary",onClick:l,className:"button"+A,children:"Expandir"}),Object(d.jsx)(w.a,{variant:"secondary",onClick:function(){l(),function(){var a=document.getElementById(e.name).offsetTop;a-=.3*a,window.scrollTo({top:a,behavior:"smooth"})}()},className:"button"+r,children:"Ocultar"})]})]})}var x=t.p+"static/media/Mate y bombilla 1.219701c4.png",Q=t.p+"static/media/Mate y bombilla 2.bbca9f60.png",D=t.p+"static/media/Mate y bombilla 3.8f8d69a8.png",v=t.p+"static/media/Mate y bombilla 4.15427156.png",M=t.p+"static/media/Mate y bombilla 5.b4796fba.png",E=t.p+"static/media/Mate y bombilla 6.367f8efb.png",I=t.p+"static/media/Mate y bombilla 7.8c78013c.png",P=t.p+"static/media/Mate y bombilla 8.d8c9187f.png",k=t.p+"static/media/Mate y bombilla 9.0dfc5fc5.png",N=t.p+"static/media/Mates 2.d215c027.png",y=t.p+"static/media/Mates 3.8e2a248b.png",G=t.p+"static/media/Mates 4.3b8a3e11.png",L=t.p+"static/media/cucharita 1.211d531e.jpg",H=t.p+"static/media/cucharita 2.a2ce750f.jpg",S=t.p+"static/media/cucharita 3.01236cc1.png",z=t.p+"static/media/cucharita 4.4f6c33a1.png",Y=t.p+"static/media/cucharita 5.b927aec3.png",U=t.p+"static/media/cucharita 6.d683f36e.png",J=t.p+"static/media/cucharita 7.c020fc69.png",q=t.p+"static/media/cucharita 8.af08ff13.png",F=t.p+"static/media/cucharita 9.23ead630.png",Z=t.p+"static/media/cucharita 10.f6a271a9.png",K=t.p+"static/media/Pin guitarra.eca663f2.png",T=t.p+"static/media/Pin Malvinas.5d3d1894.png",X=t.p+"static/media/Pins patrios.097e5048.png",R=t.p+"static/media/Pins Universidad.7e06621f.jpg",W=t.p+"static/media/PinBanner1.b8b4f28f.png",_=t.p+"static/media/PinBanner2.357c87e8.png",$=t.p+"static/media/MateBanner1.7c788c3f.png",ee=t.p+"static/media/MateBanner2.d0636d19.png",ae=t.p+"static/media/CucharaBanner2.d683f36e.png",te=t.p+"static/media/CucharaBanner3.359adf70.png",ce={cucharas:[{title:"Regionales",products:[{src:{CucharaUno:L},title:"Cucharas con logos de Mendoza"},{src:{CucharaDos:H},title:"cucharas con monumentos de Mendoza"},{src:{CucharaCuatro:z},title:"Cucharas con logos de Mendoza"},{src:{CucharaCinco:Y},title:"Cucharas con escudos de Mendoza"},{src:{CucharaSeis:U},title:"cucharas con monumentos de Mendoza"},{src:{CucharaSiete:J},title:"cucharas con monumentos de Mendoza"}]},{title:"Empresariales",products:[{src:{CucharaTres:S},title:"Cucharas Mendoza Rugby Club"},{src:{CucharaOcho:q},title:"Cucharas Tesla, Inc"},{src:{CucharaNueve:F},title:"Cucharas Globant"},{src:{CucharaDiez:Z},title:"Cucharas MercadoLibre"}]}],mates:[{title:"gen\xe9ricos",products:[{src:{mate2:x},title:"mate madera liso, claro"},{src:{mate3:Q},title:"Mate madera oscuro, con detalles"},{src:{mate4:D},title:"Mate madera claro, con detalles"},{src:{mate5:v},title:"Mate madera claro, con detalles"},{src:{mate6:M},title:"Mate madera claro, con detalles"},{src:{mate7:E},title:"Mates madera y acero, lisos"},{src:{mate8:I},title:"Mates madera claro, liso"},{src:{mate9:P},title:"Mate madera oscuro, con detalles"}]},{title:"f\xfatbol",products:[{src:{mate10:k},title:"Bokita"}]},{title:"regionales",products:[{src:{mate11:k},title:"Mate y bombilla de Argentina"},{src:{mate12:N},title:"Mate madera, Mendoza"},{src:{mate13:y},title:"Mate Ruta 40, Argentina"},{src:{mate14:G},title:"Mate Ruta 7, Mendoza"}]}],pins:[{title:"Gen\xe9ricos",products:[{src:{Pin3:X},title:"Pins patrios"}]},{title:"Patrios",products:[{src:{Pin1:K},title:"Pin guitarra de Argentina"},{src:{Pin2:T},title:"Pin Islas Malvinas"},{src:{Pin3:X},title:"Pins patrios"},{src:{Pin4:R},title:"Pins UNCuyo"}]},{title:"Privados",products:[{src:{Pin4:R},title:"Pins UNCuyo"}]},{title:"Musicales",products:[{src:{Pin1:K},title:"Pin guitarra de Argentina"}]}]},Ae=[o,ae,te],se=[$,ee,r],ie=[W,_,l];function ne(){return Object(d.jsxs)("section",{className:"cardContainer",id:"cardContainer",children:[Object(d.jsx)(B,{name:"cucharas",src:Ae,title:"Cucharas",text:"",srcArray:ce.cucharas}),Object(d.jsx)(B,{name:"mates",src:se,title:"Mates & bombillas",text:"",srcArray:ce.mates}),Object(d.jsx)(B,{name:"pines",src:ie,title:"Pines",text:"",srcArray:ce.pins}),Object(d.jsx)(B,{name:"vasos",src:"",title:"Vasos",text:"",srcArray:ce.cucharas}),Object(d.jsx)(B,{name:"empresariales",src:"",title:"Productos empresariales",text:"",srcArray:ce.cucharas})]})}var re=t(43),oe=t(47),le=t(11);function de(){var e=Object(c.useState)({message:"",Name:"",email:""}),a=Object(j.a)(e,2),t=a[0],A=a[1],s=function(e){A((function(a){return Object(oe.a)(Object(oe.a)({},a),{},Object(re.a)({},e.target.name,e.target.value))}))},i=function(e,a){window.emailjs.send("service_v1kasql",e,a).then((function(){console.log("Email successfully sent!")})).catch((function(e){return console.error("Oh well, you failed. Here some thoughts on the error that occured:",e)}))};return Object(d.jsx)("section",{className:"formSection",id:"contact",children:Object(d.jsxs)(le.a,{className:"Form",children:[Object(d.jsxs)(le.a.Group,{controlId:"formGroupEmail",className:"datosContacto",children:[Object(d.jsxs)("div",{className:"dataForm",children:[Object(d.jsx)(le.a.Label,{children:"Email"}),Object(d.jsx)(le.a.Control,{type:"email",placeholder:"ejemplo@ejemplo.com",required:!0,name:"email",onChange:s})]}),Object(d.jsxs)("div",{className:"dataForm",children:[Object(d.jsx)(le.a.Label,{children:"Nombre"}),Object(d.jsx)(le.a.Control,{type:"name",placeholder:"Juan Alvarez",name:"Name",onChange:s})]})]}),Object(d.jsxs)(le.a.Group,{className:"city",children:[Object(d.jsxs)(le.a.Group,{controlId:"formGridState",children:[Object(d.jsx)(le.a.Label,{children:"Pa\xeds"}),Object(d.jsxs)(le.a.Control,{as:"select",defaultValue:"Choose...",children:[Object(d.jsx)("option",{children:"Choose..."}),Object(d.jsx)("option",{children:"..."})]})]}),Object(d.jsxs)(le.a.Group,{controlId:"formGridCity",children:[Object(d.jsx)(le.a.Label,{children:"Provincia/Estado"}),Object(d.jsx)(le.a.Control,{})]}),Object(d.jsxs)(le.a.Group,{controlId:"formGridZip",children:[Object(d.jsx)(le.a.Label,{children:"C\xf3digo postal"}),Object(d.jsx)(le.a.Control,{})]})]}),Object(d.jsxs)(le.a.Group,{controlId:"ControlTextarea1",className:"textareaContainer",children:[Object(d.jsx)("label",{htmlFor:"textarea",children:"Ingrese el mensaje:"}),Object(d.jsx)("textarea",{type:"text",className:"textarea form-control",id:"textarea",required:!0,name:"message",onChange:s})]}),Object(d.jsx)("input",{type:"button",value:"Submit",onClick:function(e){i("template_tphavaf",{message_html:t.message,from_name:t.name,reply_to:t.email})}})]})})}var me=t(48),je=t(49),ge=t(32),be=t(51),ue=t(50),Ve=(A.a.Component,t.p+"static/media/whatsapp.a1c0a1e0.svg");function he(){return Object(d.jsx)("div",{className:"whatsapp",children:Object(d.jsx)("a",{href:"https://wa.me/5492615431092/?",children:Object(d.jsx)("img",{src:Ve,alt:"",className:"wpIcon"})})})}var pe=t.p+"static/media/taller1.b26fb8de.jpg",Oe=t.p+"static/media/taller2.2bf09479.jpg",Ce=t.p+"static/media/taller3.6b66c39c.jpg";function we(){return Object(d.jsx)("section",{className:"infoHide",id:"infoSection",children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(O.a.Header,{children:"Qui\xe9nes somos"}),Object(d.jsxs)(O.a.Body,{children:[Object(d.jsx)(O.a.Title,{children:"AV Regionales"}),Object(d.jsx)(O.a.Img,{variant:"top",src:""}),Object(d.jsx)(O.a.Text,{children:"Somos una empresa familiar radicada en Mendoza, Argentina, que trabaja desde **** con taller propio y manejada por sus due\xf1os."}),Object(d.jsx)(O.a.Text,{children:"Nuestros principios son la responsabilidad, compromismo..."}),Object(d.jsx)(O.a.Text,{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates dignissimos, molestias aliquam autem hic voluptatibus quas iusto sequi! Praesentium rerum culpa autem nam distinctio maxime provident blanditiis aut mollitia sapiente"}),Object(d.jsx)(O.a.Subtitle,{children:"Conoc\xe9 nuestro taller!"}),Object(d.jsxs)("div",{className:"imgContainer",children:[Object(d.jsxs)("div",{className:"minicard",children:[Object(d.jsx)(C.a,{src:pe,alt:"taller 1",fluid:!0}),Object(d.jsx)("p",{children:"Conjunto de maquinarias para aluminio"})]}),Object(d.jsxs)("div",{className:"minicard",children:[Object(d.jsx)(C.a,{src:Oe,alt:"taller 2",fluid:!0}),Object(d.jsx)("p",{children:"M\xe1quinas cortadoras"})]}),Object(d.jsxs)("div",{className:"minicard",children:[Object(d.jsx)(C.a,{src:Ce,alt:"taller 3",fluid:!0}),Object(d.jsx)("p",{children:"Angel trabajando"})]})]})]})]})})}function fe(){return Object(d.jsxs)("main",{className:"main",id:"main",children:[Object(d.jsx)(ne,{}),Object(d.jsx)(de,{}),Object(d.jsx)(we,{}),Object(d.jsx)(he,{})]})}var Be=t.p+"static/media/ig.3ffd3a72.png";function xe(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)(g.a,{children:Object(d.jsxs)(O.a,{children:[Object(d.jsxs)(O.a.Footer,{children:[Object(d.jsx)("div",{className:"link-container",children:Object(d.jsxs)(O.a.Link,{href:"https://goo.gl/maps/J4FKMVQH3Hmu6BbA8",children:["Ubicaci\xf3n:"," ",Object(d.jsx)("span",{className:"spanLink",children:"Base Marambio al 2000 - Maip\xfa, Mendoza"})]})}),Object(d.jsx)("div",{className:"link-container",children:Object(d.jsxs)(O.a.Link,{href:"",children:["Email:"," ",Object(d.jsx)("span",{className:"spanLink",children:"angeltomasvera@gmail.com"})]})}),Object(d.jsxs)("div",{className:"link-container",children:[Object(d.jsx)(O.a.Link,{href:"https://www.instagram.com/av.regionales/",className:"imgLink",children:Object(d.jsx)(O.a.Img,{src:Be,alt:"instagram logo"})}),Object(d.jsx)(O.a.Link,{href:"https://www.facebook.com/angeltomas.vera",className:"imgLink",children:Object(d.jsx)(O.a.Img,{src:"data:image/png;base64,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",alt:"facebook logo"})})]})]}),Object(d.jsx)(O.a.Title,{children:"Derechos reservados AV Regionales 2021"})]})})})}t(62),t(63),t(64);var Qe=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(p,{}),Object(d.jsx)(fe,{}),Object(d.jsx)(xe,{})]})},De=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,70)).then((function(a){var t=a.getCLS,c=a.getFID,A=a.getFCP,s=a.getLCP,i=a.getTTFB;t(e),c(e),A(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(A.a.StrictMode,{children:Object(d.jsx)(Qe,{})}),document.getElementById("root")),De()}},[[65,1,2]]]);
//# sourceMappingURL=main.1d48711e.chunk.js.map
(function(){"use strict";var e={709:function(e,a,l){var n=l(751),o=l(641);function s(e,a,l,n,s,i){const t=(0,o.g2)("CalculadoraTREA");return(0,o.uX)(),(0,o.Wv)(t)}var i=l(884),t=l(33);const r=e=>((0,o.Qi)("data-v-5aed0202"),e=e(),(0,o.jt)(),e),c=r((()=>(0,o.Lk)("div",{class:"card-mine"},[(0,o.Lk)("label",null,"Calculadora ganancia %TREA")],-1))),u={class:"content-mine"},d={class:"columns"},m={class:"column is-half"},p={class:"field mt-5"},v={for:"",class:"label-size"},f=r((()=>(0,o.Lk)("i",{class:"fas fa-info-circle"},null,-1))),b=[f],k={class:"help is-danger"},g={class:"mt-5"},L=r((()=>(0,o.Lk)("i",{class:"fas fa-info-circle"},null,-1))),h=[L],y={class:"control"},$={class:"help is-danger"},q={class:"mt-5"},E={for:""},T=r((()=>(0,o.Lk)("i",{class:"fas fa-info-circle"},null,-1))),C=[T],R={class:"control"},D={class:"help is-danger"},j={class:"control content-center mt-5"},w=r((()=>(0,o.Lk)("span",{class:"icon"},[(0,o.Lk)("i",{class:"fas fa-solid fa-rotate-right",title:"Reiniciar campos"})],-1))),A=[w],I={class:"column is-half"},O={class:"mt-5"},K={class:"message"},x=["innerHTML"],_={class:"box-border-result mt-5"},F={class:"box-result"},N=r((()=>(0,o.Lk)("label",{for:""},"Monto Total:",-1))),X={class:"mt-5"},J=r((()=>(0,o.Lk)("label",{for:""},"Ganancia total:",-1))),M={class:"mt-5"},U=r((()=>(0,o.Lk)("label",{for:""},"Ganancia mensual:",-1)));function z(e,a,l,s,i,r){return(0,o.uX)(),(0,o.CE)("div",null,[c,(0,o.Lk)("div",u,[(0,o.Lk)("div",d,[(0,o.Lk)("div",m,[(0,o.Lk)("div",p,[(0,o.Lk)("label",v,[(0,o.eW)("TREA %: "),(0,o.Lk)("span",{class:"icon",onClick:a[0]||(a[0]=e=>s.mostrarInfo(1))},b)]),(0,o.bo)((0,o.Lk)("input",{class:"input is-success is-large",type:"text",placeholder:"Ingrese trea, ej: 6.75","onUpdate:modelValue":a[1]||(a[1]=e=>s.v$.trea.$model=e),onKeydown:a[2]||(a[2]=(...e)=>s.checkDigitDecimal&&s.checkDigitDecimal(...e))},null,544),[[n.Jo,s.v$.trea.$model]]),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.v$.trea.$errors,((e,a)=>((0,o.uX)(),(0,o.CE)("div",{key:a},[(0,o.Lk)("p",k,(0,t.v_)(e.$message),1)])))),128))]),(0,o.Lk)("div",g,[(0,o.Lk)("label",null,[(0,o.eW)("Monto: "),(0,o.Lk)("span",{class:"icon",onClick:a[3]||(a[3]=e=>s.mostrarInfo(2))},h)]),(0,o.Lk)("div",y,[(0,o.bo)((0,o.Lk)("input",{class:"input is-success is-large",type:"text",placeholder:"Ingresa monto","onUpdate:modelValue":a[4]||(a[4]=e=>s.v$.monto.$model=e),onKeydown:a[5]||(a[5]=(...e)=>s.checkDigitDecimal&&s.checkDigitDecimal(...e))},null,544),[[n.Jo,s.v$.monto.$model]]),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.v$.monto.$errors,((e,a)=>((0,o.uX)(),(0,o.CE)("div",{key:a},[(0,o.Lk)("p",$,(0,t.v_)(e.$message),1)])))),128))])]),(0,o.Lk)("div",q,[(0,o.Lk)("label",E,[(0,o.eW)("Dias: "),(0,o.Lk)("span",{class:"icon",onClick:a[6]||(a[6]=e=>s.mostrarInfo(3))},C)]),(0,o.Lk)("div",R,[(0,o.bo)((0,o.Lk)("input",{class:"input is-success is-large",type:"text",placeholder:"Ingrese cantidad de dias","onUpdate:modelValue":a[7]||(a[7]=e=>s.v$.days.$model=e),onKeydown:a[8]||(a[8]=(...e)=>s.checkDigit&&s.checkDigit(...e))},null,544),[[n.Jo,s.v$.days.$model]]),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.v$.days.$errors,((e,a)=>((0,o.uX)(),(0,o.CE)("div",{key:a},[(0,o.Lk)("p",D,(0,t.v_)(e.$message),1)])))),128))])]),(0,o.Lk)("div",j,[(0,o.Lk)("button",{class:"button is-success is-medium mr-1",onClick:a[9]||(a[9]=(...e)=>s.calculateAtTheEnd&&s.calculateAtTheEnd(...e))},"Calcular ganancia"),(0,o.Lk)("button",{class:"button is-dark",onClick:a[10]||(a[10]=(...e)=>s.reboot&&s.reboot(...e))},A)])]),(0,o.Lk)("div",I,[(0,o.bo)((0,o.Lk)("div",O,[(0,o.Lk)("article",K,[(0,o.Lk)("div",{class:"message-body",innerHTML:s.message},null,8,x)])],512),[[n.aG,""!=s.message]]),(0,o.bo)((0,o.Lk)("div",_,[(0,o.Lk)("div",F,[(0,o.Lk)("div",null,[N,(0,o.bo)((0,o.Lk)("input",{class:"input is-success is-large input-result",readonly:"","onUpdate:modelValue":a[11]||(a[11]=e=>s.ganancia=e)},null,512),[[n.Jo,s.ganancia]])]),(0,o.Lk)("div",X,[J,(0,o.bo)((0,o.Lk)("input",{class:"input is-success is-large input-result",readonly:"","onUpdate:modelValue":a[12]||(a[12]=e=>s.ganancia=e)},null,512),[[n.Jo,s.ganancia]])]),(0,o.Lk)("div",M,[U,(0,o.bo)((0,o.Lk)("input",{class:"input is-success is-large input-result",readonly:"","onUpdate:modelValue":a[13]||(a[13]=e=>s.ganancia=e)},null,512),[[n.Jo,s.ganancia]])])])],512),[[n.aG,null!=s.ganancia]])])])])])}var V=l(639),G=l(953),H=l(855),P=l(992);const{createI18nMessage:W}=H,Q={en:{validations:{required:"The field {property} is required."}},es:{validations:{required:"El campo es obligatorio",decimal:"El campo debser un decimal",numeric:"El campo debe ser un número"}}},Y=(0,P.hU)({locale:"es",fallbackLocale:"en",messages:Q}),B=W({t:Y.global.t.bind(Y)}),S=B(H.mw);var Z={setup(){const e=(0,G.Kh)({trea:"",monto:"",days:""}),a={trea:{required:S,decimal:H._},monto:{required:S,decimal:H._},days:{required:S,numeric:H.sH}},l=(0,G.KR)(),n=(0,G.KR)(),o=(0,G.KR)(),s=(0,G.KR)(),i=(0,G.KR)("Importante la formula aplicada que se utiliza es la misma que se muestra en los documentos de ejemplos de cada entidad financiera peruana, que es la misma en todas las entidades, la misma que se probo en varios simuladores, en los que se vio una diferencia fue en el redondeo del segundo digito de los decimales.");async function t(){const e=await m.value.$validate();console.log(e,m.value),l.value=parseFloat(m.value.monto.$model),n.value=parseFloat(m.value.days.$model),s.value=parseFloat(m.value.trea.$model),console.log(l.value,n.value,s.value);let a=Math.pow((100+s.value)/100,n.value/360);console.log(a),o.value=(a-1)*l.value,o.value=isNaN(o.value)?0:o.value.toFixed(3),i.value=""}function r(e){switch(e){case 1:i.value="<b>TREA</b> Tasa de rendimiento efectivo anual, es la tasa que dispone cada entidad financiera, esta determina el rendimiento que se tendra como ganacia anual.<br> Cabe decir que la TREA para <b>cuentas de ahorros</b> no es <b>fija</b>, la entidad bancaria o financiera puede cambiarla según la coyuntura, mientras en un <b>deposito a plazo fijo </b> la tasa TREA no cambiara.";break;case 2:i.value="<b>Monto</b> dinero ha simular independiente de la moneda sea soles o dolares, entre mayor cantidad mayor la ganancia. <br>Es importante saber si la TREA aplicada es para cualquier monto ya que si leemos un <b>Hasta</b> en la TREA de la entidad como <q>Hasta 6.25% TREA</q> aplique a sumas fuertes de dinero y montos como <q>s/5000</q> solo ofrescan un TREA 2.0% ";break;case 3:i.value="<b>Dias</b> que se considera tener el monto en la cuenta de ahorros o deposito a plazo fijo.<br> Cabe decir que la mayoria de entidades para el deposito a plazo fijo considera los: <ul> <li>180 dias -> 6 meses</li> <li>360 dias -> 1 año y no 365 dias</li> </ul>";break;default:i.value=""}}function c(){o.value=null,m.value.monto.$model="",m.value.trea.$model="",m.value.days.$model="",i.value="Importante la formula aplicada que se utiliza es la misma que se muestra en los documentos de ejemplos de cada entidad financiera peruana, que es la misma en todas las entidades, la misma que se probo en varios simuladores, en los que se vio una diferencia fue en el redondeo del segundo digito de los decimales."}const u=e=>{1===e.key.length&&isNaN(Number(e.key))&&"."!=e.key&&e.preventDefault()},d=e=>{1===e.key.length&&isNaN(Number(e.key))&&e.preventDefault()},m=(0,V.fG)(a,e);return{state:e,v$:m,calculateAtTheEnd:t,mostrarInfo:r,reboot:c,monto:l,days:n,trea:s,ganancia:o,message:i,checkDigit:d,checkDigitDecimal:u}}},ee=l(262);const ae=(0,ee.A)(Z,[["render",z],["__scopeId","data-v-5aed0202"]]);var le=ae,ne=function(e,a,l,n){var o,s=arguments.length,i=s<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,l):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,a,l,n);else for(var t=e.length-1;t>=0;t--)(o=e[t])&&(i=(s<3?o(i):s>3?o(a,l,i):o(a,l))||i);return s>3&&i&&Object.defineProperty(a,l,i),i};let oe=class extends i.lD{};oe=ne([(0,i.JY)({components:{CalculadoraTREA:le}})],oe);var se=oe;const ie=(0,ee.A)(se,[["render",s]]);var te=ie;(0,n.Ef)(te).mount("#app")}},a={};function l(n){var o=a[n];if(void 0!==o)return o.exports;var s=a[n]={exports:{}};return e[n](s,s.exports,l),s.exports}l.m=e,function(){var e=[];l.O=function(a,n,o,s){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],s=e[u][2];for(var t=!0,r=0;r<n.length;r++)(!1&s||i>=s)&&Object.keys(l.O).every((function(e){return l.O[e](n[r])}))?n.splice(r--,1):(t=!1,s<i&&(i=s));if(t){e.splice(u--,1);var c=o();void 0!==c&&(a=c)}}return a}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,o,s]}}(),function(){l.d=function(e,a){for(var n in a)l.o(a,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={524:0};l.O.j=function(a){return 0===e[a]};var a=function(a,n){var o,s,i=n[0],t=n[1],r=n[2],c=0;if(i.some((function(a){return 0!==e[a]}))){for(o in t)l.o(t,o)&&(l.m[o]=t[o]);if(r)var u=r(l)}for(a&&a(n);c<i.length;c++)s=i[c],l.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return l.O(u)},n=self["webpackChunkcalculadora_trea"]=self["webpackChunkcalculadora_trea"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=l.O(void 0,[504],(function(){return l(709)}));n=l.O(n)})();
//# sourceMappingURL=app.daa2a6de.js.map
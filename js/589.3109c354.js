"use strict";(self["webpackChunkpaintbrush"]=self["webpackChunkpaintbrush"]||[]).push([[589],{5589:function(e,a,s){s.r(a),s.d(a,{default:function(){return R}});var t=s(3396);const r={key:0,id:"auth"},n={key:1,id:"auth"};function o(e,a,s,o,i,d){const l=(0,t.up)("v-auth"),p=(0,t.up)("v-reg");return"login"===e.$route.params.page?((0,t.wg)(),(0,t.iD)("div",r,[(0,t.Wm)(l)])):((0,t.wg)(),(0,t.iD)("div",n,[(0,t.Wm)(p)]))}s(7658);var i=s(7139),d=s(9242);const l=e=>((0,t.dD)("data-v-2fa3523e"),e=e(),(0,t.Cn)(),e),p=l((()=>(0,t._)("h1",null,"Авторизация",-1))),u={key:0,class:"error"},m=l((()=>(0,t._)("button",{type:"submit"},"",-1)));function h(e,a,s,r,n,o){return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.errors,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"error",key:e},(0,i.zw)(e),1)))),128)),""!==e.password&&""!==e.email&&e.error?((0,t.wg)(),(0,t.iD)("div",u,(0,i.zw)(e.error),1)):(0,t.kq)("",!0),(0,t._)("form",{id:"signin",onSubmit:a[3]||(a[3]=(0,d.iM)(((...a)=>e.HandleLogin&&e.HandleLogin(...a)),["prevent"])),autocomplete:"off"},[(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=a=>e.email=a),id:"email",name:"email",placeholder:"Почта"},null,512),[[d.nr,e.email]]),(0,t.wy)((0,t._)("input",{type:"password","onUpdate:modelValue":a[1]||(a[1]=a=>e.password=a),id:"pass",name:"password",placeholder:"Пароль"},null,512),[[d.nr,e.password]]),m,(0,t._)("p",null,[(0,t.Uk)("нет аккаунта? "),(0,t._)("a",{onClick:a[2]||(a[2]=a=>e.$router.push("/auth/registration"))},"Регистрация")])],32)],64)}var c=s(65),w=s(4277),g=(0,t.aZ)({name:"v-auth",data:()=>({email:"",password:"",errors:[]}),methods:{...(0,c.nv)({Login:"Login"}),HandleLogin:async function(e){let a={email:this.email,password:this.password};this.Login(a).then((e=>{if(200===e.status)switch(e.data.message){case"Неправильные данные входа":this.errors.includes("Неправильная почта или пароль")||this.errors.push("Неправильная почта или пароль");break;default:w.K.set("id",e.data.data._id),this.$store.commit("LogIn",e.data.data),this.$store.state.profile.user&&this.$router.replace("/profile")}else this.$store.commit("setError",e.response)}))}}}),f=s(89);const _=(0,f.Z)(g,[["render",h],["__scopeId","data-v-2fa3523e"]]);var v=_;const y=e=>((0,t.dD)("data-v-f8fb43d0"),e=e(),(0,t.Cn)(),e),k=y((()=>(0,t._)("h1",null,"Регистрация",-1))),b=y((()=>(0,t._)("button",{type:"submit"},"",-1)));function D(e,a,s,r,n,o){return(0,t.wg)(),(0,t.iD)(t.HY,null,[k,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.errors,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"error",key:e},(0,i.zw)(e),1)))),128)),(0,t._)("form",{id:"signin",onSubmit:a[5]||(a[5]=(0,d.iM)(((...a)=>e.HandleRegistration&&e.HandleRegistration(...a)),["prevent"])),autocomplete:"off"},[(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=a=>e.name=a),id:"user",name:"name",placeholder:"Имя"},null,512),[[d.nr,e.name]]),(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=a=>e.email=a),id:"user",name:"email",placeholder:"Почта"},null,512),[[d.nr,e.email]]),(0,t.wy)((0,t._)("input",{type:"password","onUpdate:modelValue":a[2]||(a[2]=a=>e.password=a),id:"pass",name:"password",placeholder:"Пароль"},null,512),[[d.nr,e.password]]),(0,t.wy)((0,t._)("input",{type:"password","onUpdate:modelValue":a[3]||(a[3]=a=>e.password_repeat=a),id:"pass",name:"password",placeholder:"Повторите пароль"},null,512),[[d.nr,e.password_repeat]]),b,(0,t._)("p",null,[(0,t.Uk)("уже зарегистрированы? "),(0,t._)("a",{onClick:a[4]||(a[4]=a=>e.$router.push("/auth/login"))},"Войти")])],32)],64)}var H=(0,t.aZ)({name:"v-reg",data:()=>({name:"",email:"",password:"",password_repeat:"",errors:[]}),methods:{...(0,c.nv)({Register:"Register"}),HandleRegistration:async function(e){let a={email:this.email,name:this.name,password:this.password};this.Register(a).then((e=>{if(200===e.status)switch(e.data.message){case"Такой пользователь уже существует":this.errors.includes("Такой пользователь уже существует")||this.errors.push("Такой пользователь уже существует");break;default:w.K.set("id",e?.data.data._id),this.$store.commit("LogIn",e.data.data),this.$store.state.profile.user&&this.$router.replace("/profile")}else this.errors.includes(e.response.code)||this.errors.push(e.response.code)}))}}});const $=(0,f.Z)(H,[["render",D],["__scopeId","data-v-f8fb43d0"]]);var L=$,U=(0,t.aZ)({name:"v-auth-page",components:{VAuth:v,VReg:L},data:()=>({})});const V=(0,f.Z)(U,[["render",o],["__scopeId","data-v-efc2b576"]]);var R=V}}]);
//# sourceMappingURL=589.3109c354.js.map
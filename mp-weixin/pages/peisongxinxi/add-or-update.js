(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/peisongxinxi/add-or-update"],{"19dc":function(e,n,i){"use strict";i.d(n,"b",(function(){return r})),i.d(n,"c",(function(){return t})),i.d(n,"a",(function(){return a}));var a={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"a05d"))}},r=function(){var e=this,n=e.$createElement;e._self._c},t=[]},"55ca":function(e,n,i){"use strict";var a=i("afe5"),r=i.n(a);r.a},"6ff4":function(e,n,i){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(i("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function t(e,n,i,a,r,t,u){try{var o=e[t](u),s=o.value}catch(c){return void i(c)}o.done?n(s):Promise.resolve(s).then(a,r)}function u(e){return function(){var n=this,i=arguments;return new Promise((function(a,r){var u=e.apply(n,i);function o(e){t(u,a,r,o,s,"next",e)}function s(e){t(u,a,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("a05d"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{cross:"",ruleForm:{kuaididanhao:"",kuaidimingcheng:"",tupian:"",yonghuzhanghao:"",yonghuxingming:"",yonghushouji:"",kuaidiweizhi:"",zhidingweizhi:"",peisongfei:"",jiequshijian:"",peisongzhanghao:"",peisongyuan:"",peisongyuanshouji:"",peisongwuliu:"",dingdanzhuangtai:"进行中",userid:""},dingdanzhuangtaiOptions:[],dingdanzhuangtaiIndex:0,user:{},ro:{kuaididanhao:!1,kuaidimingcheng:!1,tupian:!1,yonghuzhanghao:!1,yonghuxingming:!1,yonghushouji:!1,kuaidiweizhi:!1,zhidingweizhi:!1,peisongfei:!1,jiequshijian:!1,peisongzhanghao:!1,peisongyuan:!1,peisongyuanshouji:!1,peisongwuliu:!1,dingdanzhuangtai:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var i=this;return u(a.default.mark((function r(){var t,u,o,s;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i.ruleForm.jiequshijian=i.$utils.getCurDateTime(),t=e.getStorageSync("nowTable"),r.next=4,i.$api.session(t);case 4:if(u=r.sent,i.user=u.data,i.ruleForm.peisongzhanghao=i.user.peisongzhanghao,i.ro.peisongzhanghao=!0,i.ruleForm.peisongyuan=i.user.peisongyuan,i.ro.peisongyuan=!0,i.ruleForm.peisongyuanshouji=i.user.peisongyuanshouji,i.ro.peisongyuanshouji=!0,i.ro.dingdanzhuangtai=!0,i.dingdanzhuangtaiOptions="已完成,进行中".split(","),i.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(i.ruleForm.refid=n.refid,i.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=22;break}return i.ruleForm.id=n.id,r.next=20,i.$api.info("peisongxinxi",i.ruleForm.id);case 20:u=r.sent,i.ruleForm=u.data;case 22:if(i.cross=n.cross,!n.cross){r.next=94;break}o=e.getStorageSync("crossObj"),r.t0=a.default.keys(o);case 26:if((r.t1=r.t0()).done){r.next=94;break}if(s=r.t1.value,"kuaididanhao"!=s){r.next=32;break}return i.ruleForm.kuaididanhao=o[s],i.ro.kuaididanhao=!0,r.abrupt("continue",26);case 32:if("kuaidimingcheng"!=s){r.next=36;break}return i.ruleForm.kuaidimingcheng=o[s],i.ro.kuaidimingcheng=!0,r.abrupt("continue",26);case 36:if("tupian"!=s){r.next=40;break}return i.ruleForm.tupian=o[s],i.ro.tupian=!0,r.abrupt("continue",26);case 40:if("yonghuzhanghao"!=s){r.next=44;break}return i.ruleForm.yonghuzhanghao=o[s],i.ro.yonghuzhanghao=!0,r.abrupt("continue",26);case 44:if("yonghuxingming"!=s){r.next=48;break}return i.ruleForm.yonghuxingming=o[s],i.ro.yonghuxingming=!0,r.abrupt("continue",26);case 48:if("yonghushouji"!=s){r.next=52;break}return i.ruleForm.yonghushouji=o[s],i.ro.yonghushouji=!0,r.abrupt("continue",26);case 52:if("kuaidiweizhi"!=s){r.next=56;break}return i.ruleForm.kuaidiweizhi=o[s],i.ro.kuaidiweizhi=!0,r.abrupt("continue",26);case 56:if("zhidingweizhi"!=s){r.next=60;break}return i.ruleForm.zhidingweizhi=o[s],i.ro.zhidingweizhi=!0,r.abrupt("continue",26);case 60:if("peisongfei"!=s){r.next=64;break}return i.ruleForm.peisongfei=o[s],i.ro.peisongfei=!0,r.abrupt("continue",26);case 64:if("jiequshijian"!=s){r.next=68;break}return i.ruleForm.jiequshijian=o[s],i.ro.jiequshijian=!0,r.abrupt("continue",26);case 68:if("peisongzhanghao"!=s){r.next=72;break}return i.ruleForm.peisongzhanghao=o[s],i.ro.peisongzhanghao=!0,r.abrupt("continue",26);case 72:if("peisongyuan"!=s){r.next=76;break}return i.ruleForm.peisongyuan=o[s],i.ro.peisongyuan=!0,r.abrupt("continue",26);case 76:if("peisongyuanshouji"!=s){r.next=80;break}return i.ruleForm.peisongyuanshouji=o[s],i.ro.peisongyuanshouji=!0,r.abrupt("continue",26);case 80:if("peisongwuliu"!=s){r.next=84;break}return i.ruleForm.peisongwuliu=o[s],i.ro.peisongwuliu=!0,r.abrupt("continue",26);case 84:if("dingdanzhuangtai"!=s){r.next=88;break}return i.ruleForm.dingdanzhuangtai=o[s],i.ro.dingdanzhuangtai=!0,r.abrupt("continue",26);case 88:if("userid"!=s){r.next=92;break}return i.ruleForm.userid=o[s],i.ro.userid=!0,r.abrupt("continue",26);case 92:r.next=26;break;case 94:i.styleChange();case 95:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},jiequshijianConfirm:function(e){console.log(e),this.ruleForm.jiequshijian=e.result,this.$forceUpdate()},dingdanzhuangtaiChange:function(e){this.dingdanzhuangtaiIndex=e.target.value,this.ruleForm.dingdanzhuangtai=this.dingdanzhuangtaiOptions[this.dingdanzhuangtaiIndex]},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(a.default.mark((function i(){var r,t,u,o,s,c,g,d,h,f;return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!n.cross){i.next=16;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){i.next=16;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){i.next=12;break}for(g in c)g==o&&(c[g]=s);return d=e.getStorageSync("crossTable"),i.next=10,n.$api.update("".concat(d),c);case 10:i.next=16;break;case 12:r=Number(e.getStorageSync("userid")),t=c["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 16:if(!t||!r){i.next=38;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=t,h={page:1,limit:10,crossuserid:r,crossrefid:t},i.next=22,n.$api.list("peisongxinxi",h);case 22:if(f=i.sent,!(f.data.total>=u)){i.next=28;break}return n.$utils.msg(e.getStorageSync("tips")),i.abrupt("return",!1);case 28:if(!n.ruleForm.id){i.next=33;break}return i.next=31,n.$api.update("peisongxinxi",n.ruleForm);case 31:i.next=35;break;case 33:return i.next=35,n.$api.add("peisongxinxi",n.ruleForm);case 35:n.$utils.msgBack("提交成功");case 36:i.next=46;break;case 38:if(!n.ruleForm.id){i.next=43;break}return i.next=41,n.$api.update("peisongxinxi",n.ruleForm);case 41:i.next=45;break;case 43:return i.next=45,n.$api.add("peisongxinxi",n.ruleForm);case 45:n.$utils.msgBack("提交成功");case 46:case"end":return i.stop()}}),i)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,i=n.getFullYear(),a=n.getMonth()+1,r=n.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),a=a>9?a:"0"+a,r=r>9?r:"0"+r,"".concat(i,"-").concat(a,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,i("543d")["default"])},9592:function(e,n,i){"use strict";(function(e){i("43d0");a(i("66fd"));var n=a(i("dff7"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("543d")["createPage"])},afe5:function(e,n,i){},b1aa:function(e,n,i){"use strict";i.r(n);var a=i("6ff4"),r=i.n(a);for(var t in a)"default"!==t&&function(e){i.d(n,e,(function(){return a[e]}))}(t);n["default"]=r.a},dff7:function(e,n,i){"use strict";i.r(n);var a=i("19dc"),r=i("b1aa");for(var t in r)"default"!==t&&function(e){i.d(n,e,(function(){return r[e]}))}(t);i("55ca");var u,o=i("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"f28fbbc6",null,!1,a["a"],u);n["default"]=s.exports}},[["9592","common/runtime","common/vendor"]]]);
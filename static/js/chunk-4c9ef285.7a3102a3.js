(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c9ef285"],{3252:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("switch-roles",{on:{change:e.handleRolesChange}})],1)},o=[],i=n("8ee8"),l={name:"PagePermission",components:{SwitchRoles:i["a"]},methods:{handleRolesChange:function(){this.$router.push({path:"/permission/index?"+ +new Date})}}},r=l,a=n("4ac2"),c=Object(a["a"])(r,s,o,!1,null,null,null);t["default"]=c.exports},"8ee8":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{"margin-bottom":"15px"}},[e._v(" Your roles: "+e._s(e.roles)+" ")]),e._v(" Switch roles: "),n("el-radio-group",{model:{value:e.switchRoles,callback:function(t){e.switchRoles=t},expression:"switchRoles"}},[n("el-radio-button",{attrs:{label:"editor"}}),n("el-radio-button",{attrs:{label:"admin"}})],1)],1)},o=[],i={computed:{roles:function(){return this.$store.getters.roles},switchRoles:{get:function(){return this.roles[0]},set:function(e){var t=this;this.$store.dispatch("user/changeRoles",e).then((function(){t.$emit("change")}))}}}},l=i,r=n("4ac2"),a=Object(r["a"])(l,s,o,!1,null,null,null);t["a"]=a.exports}}]);
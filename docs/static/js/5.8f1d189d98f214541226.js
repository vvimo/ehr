webpackJsonp([5],{"8KYI":function(e,n){},Cig5:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={name:"rlzy",components:{lMain:t("jw7m").default},data:function(){return{menuMap:[],tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}},computed:{sidebar:function(){var e=this;return console.log(this.menuMap),this.$store.dispatch("GetNav",{serf:"rlzy"}).then(function(n){console.log(n),e.menuMap=n}).catch(function(){e.menuMap=[]}),console.log(this.menuMap),this.menuMap}}},s={render:function(){var e=this.$createElement;return(this._self._c||e)("l-main")},staticRenderFns:[]};var r=t("TYGc")(a,s,!1,function(e){t("8KYI")},null,null);n.default=r.exports}});
//# sourceMappingURL=5.8f1d189d98f214541226.js.map
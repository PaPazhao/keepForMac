webpackJsonp([3],{0:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t,a,n,r){var i={};return Object.keys(n).forEach(function(e){i[e]=n[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=a.slice().reverse().reduce(function(a,n){return n(e,t,a)||a},i),r&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(r):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}var l,u,c,f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(10),p=n(d),m=a(40),g=n(m),y=a(186),b=a(242),h=n(b),v=a(402),x=n(v),_=a(413),E=n(_),w=a(410),N=n(w);a(2);var k=a(549),z=n(k),j=a(411),O=(l=(0,h.default)(z.default),l((c=function(e){function t(e){r(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=N.default.storage.has("userInfo")?N.default.storage.get("userInfo"):{};return a.state={statistics:n.statistics||{},trainings:n.trainings||{},user:n.user||{}},a}return o(t,e),f(t,[{key:"componentWillMount",value:function(){var e=this;console.info(this.state),console.info(j.remote.getCurrentWindow()),j.remote.getCurrentWindow().on("focus",function(t){var a=N.default.storage.get("userInfo")||{};a.user&&a.user._id!==e.state.user._id&&e.setState({statistics:a.statistics,trainings:a.trainings,user:a.user})})}},{key:"componentWillUnmount",value:function(){this.state=null,N.default.storage.remove("userInfo")}},{key:"getCityAddress",value:function(e){var t=N.default.storage.get("cityJson").filter(function(t){return e==t.cityCode})[0];return t?t:{cityName:"银河,地球"}}},{key:"render",value:function(){return p.default.createElement("div",{styleName:"user-container"},p.default.createElement("section",{styleName:"user-back"},p.default.createElement("div",{hidden:this.state.user.backgroundAvatar,styleName:"back-cover",style:{backgroundImage:"url("+this.state.user.avatar+")"}}),p.default.createElement("div",{hidden:!this.state.user.backgroundAvatar,styleName:"back-avatar",style:{backgroundImage:"url("+this.state.user.backgroundAvatar+")"}}),p.default.createElement("div",{styleName:"user-avatar"},p.default.createElement("img",{src:this.state.user.avatar,alt:""})),p.default.createElement("div",{styleName:"user-info-content"},p.default.createElement("p",{styleName:"user-info-name"},p.default.createElement("span",null,this.state.user.username)),p.default.createElement("p",{styleName:"user-info-desc"},p.default.createElement("span",null,this.state.user.bio||"这个人很懒，啥都没写~")),p.default.createElement("p",{styleName:"user-info-other"},p.default.createElement("span",null,(0,E.default)(new Date(this.state.user.birthday)).format("YYYY-MM-DD"))," | ",p.default.createElement("span",null,this.getCityAddress(this.state.user.citycode||"").cityName)),p.default.createElement("p",{styleName:"user-info-config"},this.state.statistics.follow+"关注"," - ",this.state.statistics.followed+"粉丝"," - ",this.state.statistics.totalEntries+"个动态"," - ",this.state.statistics.liked+"人加油"))),p.default.createElement("section",{styleName:"user-training"},p.default.createElement("div",{styleName:"user-training-line"},"累计训练 ",p.default.createElement("div",{styleName:"user-training-data"},this.state.trainings.totalDuration," 分钟")),p.default.createElement("div",{styleName:"user-training-line"},"训练次数 ",p.default.createElement("div",{styleName:"user-training-data"},this.state.trainings.totalTraining," 次")),p.default.createElement("div",{styleName:"user-training-line"},"训练天数 ",p.default.createElement("div",{styleName:"user-training-data"},this.state.trainings.totalTrainingDay," 天")),p.default.createElement("div",{styleName:"user-training-line"},"最长天数 ",p.default.createElement("div",{styleName:"user-training-data"},this.state.trainings.maxCombo," 天")),p.default.createElement("div",{styleName:"user-training-line"},"连续训练 ",p.default.createElement("div",{styleName:"user-training-data"},this.state.trainings.currentCombo," 天")),p.default.createElement("div",{styleName:"user-training-line"},"累计消耗 ",p.default.createElement("div",{styleName:"user-training-data"},this.state.trainings.totalCalorie," 千卡")),p.default.createElement("div",{styleName:"both-line"},p.default.createElement(y.Link,{to:"",styleName:"line-btn"},"去Ta主页(暂未开发)"),p.default.createElement(y.Link,{to:"",styleName:"line-btn"},"关注Ta(暂未开发)"))))}}]),t}(d.Component),s(c.prototype,"componentWillMount",[x.default],Object.getOwnPropertyDescriptor(c.prototype,"componentWillMount"),c.prototype),s(c.prototype,"componentWillUnmount",[x.default],Object.getOwnPropertyDescriptor(c.prototype,"componentWillUnmount"),c.prototype),s(c.prototype,"getCityAddress",[x.default],Object.getOwnPropertyDescriptor(c.prototype,"getCityAddress"),c.prototype),u=c))||u),C=document.createElement("div");C.id="container",C.className="container",document.querySelector("body").appendChild(C),g.default.render(p.default.createElement(O,null),document.getElementById("container"))},549:function(e,t,a){var n=a(550);"string"==typeof n&&(n=[[e.id,n,""]]);a(9)(n,{});n.locals&&(e.exports=n.locals)},550:function(e,t,a){t=e.exports=a(4)(),t.push([e.id,"._2iSfP{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column}._2fJro{height:260px;background:#000;padding:20px 10px 0;text-align:center;position:relative;-webkit-app-region:drag}._2fJro,._25K5c,.xR6HH{width:100%;overflow:hidden}._25K5c,.xR6HH{position:absolute;top:0;left:0;height:100%;background:50%/cover no-repeat;transform:scale(1.01)}._25K5c{filter:blur(30px)}.xR6HH{opacity:.45}.a0fr5{position:relative;margin:auto;width:78px;height:78px;border:1px solid #fff;border-radius:50%;background:#584f5f;box-shadow:0 5px 15px rgba(0,0,0,.8);transition:all .35s;overflow:hidden}.a0fr5:hover{transform:scale(1.2);border-color:#00c78c}.a0fr5 img{width:100%;height:100%}.Fpgzu{padding:15px 0;text-align:center;position:relative;color:#fff}.Fpgzu p span{-webkit-app-region:no-drag;-webkit-user-select:auto}._3seF1{font-size:18px;margin-bottom:5px;text-shadow:0 0 2px rgba(0,0,0,.6),0 0 2px rgba(0,0,0,.6)}._2iUvc{max-height:60px;overflow:hidden;text-shadow:0 0 2px rgba(0,0,0,.6),0 0 2px rgba(0,0,0,.6)}._2ES3L,._2iUvc{font-size:12px;margin-bottom:10px}._2ES3L{color:#fff}._3QjzQ{font-size:12px;color:#00c78c;opacity:.6;transition:opacity .35s}._3QjzQ:hover{opacity:1}._1oAqh{background:#fff;padding:15px}._1gvj1{font-size:14px;color:#584f5f;display:flex;margin-bottom:12px}._10GQ5{flex:1;text-align:right}._3nixU{position:absolute;bottom:0;left:0;width:100%;display:flex;box-shadow:0 -1px 5px rgba(0,0,0,.8)}._2ylNR{flex:1;background:#584f5f;color:#fff;font-size:14px;text-align:center;padding:10px 0}._2ylNR:hover{color:#fff;transition:background .35s;background:#00c78c}._2ylNR:first-child{border-right:1px solid #eee}",""]),t.locals={"user-container":"_2iSfP","user-back":"_2fJro","back-cover":"_25K5c","back-avatar":"xR6HH","user-avatar":"a0fr5","user-info-content":"Fpgzu","user-info-name":"_3seF1","user-info-desc":"_2iUvc","user-info-other":"_2ES3L","user-info-config":"_3QjzQ","user-training":"_1oAqh","user-training-line":"_1gvj1","user-training-data":"_10GQ5","both-line":"_3nixU","line-btn":"_2ylNR"}}});
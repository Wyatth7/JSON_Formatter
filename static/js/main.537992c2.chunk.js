(this["webpackJsonpjson-converter"]=this["webpackJsonpjson-converter"]||[]).push([[0],{24:function(e,t,a){e.exports=a(43)},29:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(13),l=a.n(r),i=(a(29),a(9),a(3)),s=a(4),c=a(6),u=a(5),d=a(2),m=a(8),p=a(7),h=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={inputFieldValue:""},e.onChangeHandler=function(t){e.setState({inputFieldValue:t.target.value})},e.onSendItHandler=function(t){t.preventDefault(),e.props.change(e.state.inputFieldValue),e.props.error&&e.props.changeError()},e.onClearHandler=function(){e.props.clear()},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"Input equalHW padding",id:"Input"},o.a.createElement("form",{onSubmit:this.onSendItHandler},o.a.createElement("p",null,"JSON data"),o.a.createElement("textarea",{onChange:this.onChangeHandler,placeholder:"{ }",name:"jsonDataInput"}),o.a.createElement("button",{onClick:this.onSendItHandler,className:"btn"},"Send it")))}}]),a}(n.Component),f=a(23),v=a.n(f),b=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={clear:e.props.isInput,noText:"Your JSON will be here when you send it!",error:"There was an error within your JSON data."},e.copyToClipboardHandler=function(){v()(e.props.formatted),alert("Copied to clipboard")},e.onClearHandler=function(){e.props.clear()},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"Output padding"},o.a.createElement("div",{className:"OutputTextBox"},o.a.createElement("p",null,"Formatted data"),o.a.createElement("textarea",{value:this.props.formatted,readOnly:!0})),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{className:"btn buttons--copy",onClick:this.copyToClipboardHandler},"Copy"),o.a.createElement("button",{className:"btn buttons--clear",onClick:this.onClearHandler},"Clear")))}}]),a}(n.Component),E=function(e){var t=null;return t="image"===e.icon?p.c:p.d,o.a.createElement("a",{rel:"noopener noreferrer",href:e.href,target:"_blank"},o.a.createElement("div",{className:"ToolBox"},o.a.createElement("div",null,o.a.createElement(m.a,{className:"icon",icon:t,size:"4x"}),o.a.createElement("h2",null,e.title),o.a.createElement("p",null,e.text))))},N=[","],g=["[","{"],C=["]","}"],S=[].concat(g,C,N),w=[],k="",y=function(e){e.split("").forEach((function(e){T(e),A(e),O(e),H(e)})),console.log(k)},T=function(e){"{"!==e&&"["!==e||I(g,e,!0)},O=function(e){I(N,e,!1)},H=function(e){I(C,e,!1)},I=function(e,t,a){a&&w.push(" ");var n=e.indexOf(t);if(-1===n)return null;var o="";if("}"===t||"]"===t){var r=w;r.pop(),o="\n".concat(r.join("")).concat(t)}else{var l=e[n];o="".concat(l,"\n").concat(w.join(""))}k+=o},A=function(e){-1===S.indexOf(e)&&(k+="".concat(e))},j=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).openNavModal=function(){n.setState({showVerticalNav:!0},(function(){n.windowOffset=window.scrollY,document.body.setAttribute("style","position: fixed; top: -".concat(n.windowOffset,"px; left: 0; right:0;"))}))},n.closeNavModal=function(){n.setState({showVerticalNav:!1},(function(){document.body.setAttribute("style",""),window.scrollTo(0,n.windowOffset)}))},n.closeNavModalAndScroll=function(){n.setState({showVerticalNav:!1},(function(){document.body.setAttribute("style","")}))},n.scrollToAboutHandler=function(){n.closeNavModalAndScroll(),d.scroller.scrollTo("scrollToAbout",{duration:1500,delay:0,smooth:"easeInOutQuint",containerID:"aboutContainer",offset:0})},n.scrollToToolsHandler=function(){n.closeNavModalAndScroll(),d.scroller.scrollTo("scrollToTools",{duration:1500,delay:0,smooth:"eastInOutQuint",containerID:"toolsContainer",offset:0})},n.onInputChangeHandler=function(e){n.setState({isInput:!0,input:e})},n.onClearHandler=function(){n.setState({formattedString:"",input:"",isInput:!1})},n.submitHandler=function(){if(n.setState({submited:!0}),!1!==function(e){try{return JSON.parse(e),!0}catch(t){return!1}}(n.state.input)){var e=function(e){y(e);var t=k;return k="",t}(n.state.input);n.setState({formattedString:e})}else n.setState({error:!0,formattedString:"There was an error in your JSON Data"})},n.onChangeErrorStateHandler=function(e){n.setState({error:!1})},n.state={showVerticalNav:!1,responsiveClass:"responsive",input:"",formattedString:"",submited:!1,isInput:!1,isCleared:!1,error:!1},n.windowOffset=0,n}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.input!==this.state.input&&""!==this.state.input&&this.submitHandler()}},{key:"render",value:function(){var e=null;e=this.state.showVerticalNav?this.state.responsiveClass:null;var t=null;return t=this.state.showVerticalNav?o.a.createElement("div",{className:"mobile-nav"},o.a.createElement(d.Link,{onClick:this.scrollToAboutHandler,className:"links--about ".concat(e),to:"scrollToAbout"},"About"),o.a.createElement(d.Link,{onClick:this.scrollToAboutHandler,className:"links--tools ".concat(e),to:"moreTools"},"More Tools"),o.a.createElement("button",{onClick:this.closeNavModal,className:"links--close"},"Close")):null,o.a.createElement("div",{id:"converterID",className:"Converter"},o.a.createElement("div",{className:"Nav padding"},o.a.createElement("div",{className:"Nav--logo",onClick:function(){d.animateScroll.scrollToTop()}},o.a.createElement(m.a,{icon:p.a,size:"3x"}),o.a.createElement("h1",null,"JSON Formatter")),o.a.createElement("div",{className:"Nav--links"},o.a.createElement(d.Link,{className:"links--about",onClick:this.scrollToAboutHandler,to:"about"},"About"),o.a.createElement(d.Link,{className:"links--tools",onClick:this.scrollToToolsHandler,to:"moreTools"},"More Tools"),o.a.createElement("div",{onClick:this.openNavModal,className:"links--burger"},o.a.createElement(m.a,{icon:p.b,size:"3x"})))),t,o.a.createElement("div",{className:"Converter--content",id:"mainContent"},o.a.createElement(h,{btnStyle:{marginLeft:"1rem"},submited:this.submitHandler,change:this.onInputChangeHandler,clear:this.onClearHandler,error:this.state.error,changeError:this.onChangeErrorStateHandler}),""===this.state.formattedString?null:o.a.createElement(b,{clear:this.onClearHandler,error:this.state.error,isInput:this.state.isInput,formatted:this.state.formattedString}),o.a.createElement(d.Element,{id:"aboutContainer",name:"scrollToAbout"},o.a.createElement("div",{className:"padding"},o.a.createElement("div",{className:"about-section",id:"about"},o.a.createElement("h1",null,"About"),o.a.createElement("div",{className:"line-break"}),o.a.createElement("p",null,"JSON Validator and Formatter was created to ease the process of formatting long, time-wasting strings of JSON data.")))),o.a.createElement(d.Element,{id:"toolsContainer",name:"scrollToTools"},o.a.createElement("div",{className:"tools-section padding",id:"moreTools"},o.a.createElement("div",{className:"padding"},o.a.createElement("h1",null,"More Tools"),o.a.createElement("div",{className:"line-break"}),o.a.createElement("h3",null,"Was your problem solved?"),o.a.createElement("p",null,"If you answered yes, check out our other time saving, problem solving tools.")),o.a.createElement("div",{className:"tool-links"},o.a.createElement("div",null,o.a.createElement(E,{href:"https://curringo.herokuapp.com/",icon:"money",title:"Curringo",text:"Convert over 30 global currencies."})),o.a.createElement("div",null,o.a.createElement(E,{href:"https://filestop.herokuapp.com/",icon:"image",title:"File Stop",text:"Upload, edit, and download your favorite pictures."})))))))}}]),a}(n.Component);var x=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){}},[[24,1,2]]]);
//# sourceMappingURL=main.537992c2.chunk.js.map
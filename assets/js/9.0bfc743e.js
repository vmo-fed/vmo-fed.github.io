(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{177:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("传统的前端框架比如Vue和React都有一套自己的通信机制，父子通信使用props，兄弟组件通信使用event bus，背后的实现原理就是发布订阅模式，所以我们可以使用上一节的小demo实现一个简单的event bus。")]),t._m(1),a("p",[t._v("组件A和组件B为兄弟组件，且不是page（页面级别的组件，或者container），就是单纯的组件，我们在A中定义了一个方法，在B组件中调用这个方法，这个过程可以模拟一个在B组件中异步调用组件A的一个状态，代码如下：")]),t._m(2),t._m(3),t._m(4),a("p",[t._v("var定义的变量会在打包的过程中被挂载到window上，相当于")]),t._m(5),a("p",[t._v("同理使用let定义也是不可以的。")]),a("p",[a("a",{attrs:{href:"https://codesandbox.io/s/o77xm2pj76",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线DEMO"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"订阅发布模式实现事件总线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#订阅发布模式实现事件总线","aria-hidden":"true"}},[this._v("#")]),this._v(" 订阅发布模式实现事件总线")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"模拟一个使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模拟一个使用场景","aria-hidden":"true"}},[this._v("#")]),this._v(" 模拟一个使用场景")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// pattern.js")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" eventObj "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    store"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    on"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 注册")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    emit"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 订阅")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("map")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("callback")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" eventObj"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 如果没有用打包工具起项目，记得添加在package.json里babel-cli")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// A 组件")]),t._v("\n  eventObj"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'milkTea'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" customer"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" milkName "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 买奶茶啦")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("customer"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v(" 需要一杯 ")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("milkName"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// B 组件")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    eventObj"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("emit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'milkTea'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("customer"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'BR'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" milkName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'烧仙草'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这样我们就可以在B组件中异步调用A组件，似乎一切很完美，然后报错了，提示 "),s("code",[this._v("store is not defined")]),this._v("，原因是const定义的变量在打包的时候会被挂在局部作用域中，全局是无法访问到的，为了让代码run起来，我们需要把pattern.js中的代码做修改：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// pattern.js")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" eventObj "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    store"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    on"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 注册")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    emit"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 订阅")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("map")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("callback")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" eventObj"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eventObj "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ···\n    window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eventObj"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  ···\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=o.exports}}]);
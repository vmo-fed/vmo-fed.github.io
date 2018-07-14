(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{150:function(e,t,s){e.exports=s.p+"assets/img/error.723d46a5.png"},152:function(e,t,s){"use strict";s.r(t);var l=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"局部包和全局包的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#局部包和全局包的区别","aria-hidden":"true"}},[this._v("#")]),this._v(" 局部包和全局包的区别")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("如果你希望使用require时请用局部包")]),t("li",[this._v("如果你希望在命令行去运行的话请使用全局包")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("#!/bin/bash\necho hello world\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("chmod 777 ./hello\n./hello # hello world\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("当然你发现删除!/bin/bash后，./hello依然可以打印出hello world，那是因为它默认是bash")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("console.log('hello world');\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("node app.js # hello world\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("#!/usr/local/bin/node\nconsole.log('hello world');\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("chmod 777 ./app.js\n./app.js # hello world\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("你也可以把app.js改为app然后./app运行看是否达到预期的结果？")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(150),alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# 在任何目录下执行下面代码\napp.js # hello world\n")])])])}],a=s(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._m(1),s("blockquote",[s("p",[e._v("来自"),s("a",{attrs:{href:"https://stackoverflow.com/questions/29530459/what-is-the-difference-between-local-and-global-module-in-node-js-when-to-use-l",target:"_blank",rel:"noopener noreferrer"}},[e._v("What is the difference between local and global module in Node.js? When to use local and global module?"),s("OutboundLink")],1)])]),s("p",[e._v("先看一个shell的例子，创建一个名为hello的文件内容如下")]),e._m(2),s("p",[e._v("#!指定了程序是用哪个解释器来执行的，这里是bash，所以这里我们可以直接执行它")]),e._m(3),e._m(4),s("p",[e._v("回到nodejs，创建一个名为app.js的文件，内容如下：")]),e._m(5),s("p",[e._v("直接使用node来运行")]),e._m(6),s("p",[e._v("这些看起来都很熟悉，那我们改下头部内容，将which node的内容粘贴进去，前面记得加上#!")]),e._m(7),s("p",[e._v("此时可以和上面shell一样的做法来run起来")]),e._m(8),e._m(9),s("p",[e._v("当我们删除首行的#!/usr/local/bin/node，再次执行./app.js会提示")]),e._m(10),s("p",[e._v("这是因为没有指定需要node的解释器来执行，shell只能用默认的bash来执行它，当然会报错了")]),s("p",[e._v("我们将包含有#!的app.js拷贝到/usr/local/bin下面")]),e._m(11),s("p",[e._v("由此来看在node中，全局安装的包其实就是在头部指定了是node环境，然后把它copy到了/usr/local/bin下，这样我们就可以使用命令行在任何目录下去执行它了。")]),s("p",[e._v("而局部包是我们希望引入到js工程中去的（require），所以头部无需指定node环境。")]),s("p",[e._v("当然我们也可以全局包安装到某个工程里（如果全局和本地工程适用此npm 包的版本不用），然后在npm script中去使用，由于npm script中是会先从工程的node_module去找对应的包，所以npm run xxx是指定的局部包的版本，而不是全局。")])])},l,!1,null,null,null);t.default=n.exports}}]);
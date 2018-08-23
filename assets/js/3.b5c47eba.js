(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{155:function(e,t,s){e.exports=s.p+"assets/img/1.1454384b.png"},163:function(e,t,s){"use strict";s.r(t);var n=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"快速使用本地的node-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速使用本地的node-module","aria-hidden":"true"}},[this._v("#")]),this._v(" 快速使用本地的node module")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"方法一：npm-install-path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法一：npm-install-path","aria-hidden":"true"}},[this._v("#")]),this._v(" 方法一：npm install /path")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm init -y\nnpm install ../greeting-module -S\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(155),alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("node app.js # hello world\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[e._v("module"),s("span",{attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[e._v("exports")]),e._v(" "),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{attrs:{class:"token keyword"}},[e._v("function")]),s("span",{attrs:{class:"token punctuation"}},[e._v("(")]),e._v("name"),s("span",{attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{attrs:{class:"token string"}},[e._v("'hi '")]),e._v(" "),s("span",{attrs:{class:"token operator"}},[e._v("+")]),e._v(" name"),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm uninstall ../greeting-module\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"方法二：npm-link"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法二：npm-link","aria-hidden":"true"}},[this._v("#")]),this._v(" 方法二：npm link")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm link\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm link greeting-module\nnode app.js # hello world\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("node hello.js # hi world\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("如果greeting-module依赖其它的本地module，和上面提到的一样，需要到那个module目录npm link，然后到greeting-module目录npm link 那个module即可")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm unlink greeting-module\n")])])])}],a=s(0),l=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),s("p",[e._v("在之前的文章中有讲过"),s("router-link",{attrs:{to:"/node/how-to-write-a-npm-module/"}},[e._v("如何写一个npm module")]),e._v("，我们需要账号然后发布到npm上，如果我们仅仅需要使用本地的node module直接进行开发改如何做呢？这里有两种方案：")],1),s("blockquote",[s("p",[e._v("为了方便我们已经在"),s("a",{attrs:{href:"https://github.com/vmo-fed/practice.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("github"),s("OutboundLink")],1),e._v("上写了些简单的代码，clone下来并进入到npm-link工程")])]),e._m(1),s("p",[e._v("进入到myApp目录")]),e._m(2),s("p",[e._v("一切顺利的话你可以在package.json中看到")]),e._m(3),s("p",[e._v("在shell中执行")]),e._m(4),s("p",[e._v("此时你修改下greeting-module中的hello.js")]),e._m(5),s("p",[e._v("再次运行node app.js你会得到hi world。")]),s("p",[e._v("当然你想删除此node module的话用法和删除npm包一样")]),e._m(6),e._m(7),s("p",[e._v("进入到greeting-module目录")]),e._m(8),s("p",[e._v("在log中会提示node_modules全局包生成了greeting-module，并指向了当前的这个greeting-module，我们简称global->local")]),s("p",[e._v("进入到myApp目录")]),e._m(9),s("p",[e._v("在log中提示myApp中的node_modules生成了greeting-module，指向了全局包的greeting-module，我们这里简称myApp->global->local。")]),s("p",[e._v("这里我们可以注意到myApp中的greeting-module其实是global及local的引用，修改任意一个都将会改变myApp中的greeting-module")]),s("p",[e._v("我用到了nvm，进入到 /Users/guoyaqi/.nvm/versions/node/v9.0.0/lib/node_modules/greeting-module目录下，修改代码如上hello.js的内容")]),e._m(10),e._m(11),s("p",[e._v("如果你希望删除此包")]),e._m(12)])},n,!1,null,null,null);t.default=l.exports}}]);
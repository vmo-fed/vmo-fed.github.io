(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{219:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"快速进入刚创建的目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速进入刚创建的目录","aria-hidden":"true"}},[a._v("#")]),a._v(" 快速进入刚创建的目录")]),s("p",[a._v("在开发中经常会创建一个目录并进入到此目录中，我一般使用")]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mkdir my-directory\ncd my-directory\n")])])]),s("p",[a._v("如果使用一条命令则")]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mkdir my-directory && cd my-directory\n# 或者\nmkdir my-directory;cd my-directory\n")])])]),s("p",[a._v("看起来也ok，但如果能再减少一些命令，那我们的开发效率会更高！这里介绍三种方式")]),s("h3",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用$_")]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mkdir my-directory && cd $_\n")])])]),s("h3",{attrs:{id:"使用shell-script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用shell-script","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用shell script")]),s("p",[a._v("创建mkdirandcd.sh如下内容")]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# mkdirandcd.sh\nmkdir $1\ncd $1\n")])])]),s("p",[a._v("给此文件加权限并执行下面命令")]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(". ./mkdirandcd.sh my-directory\n")])])]),s("h3",{attrs:{id:"使用函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用函数","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用函数")]),s("p",[a._v("在.bashrc中添加")]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("function mkdirandcd(){ mkdir $1 && cd $1 }\n")])])]),s("p",[a._v("并使其生效")]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("source ~/.bashrc\nmkdirandcd my-directory\n")])])])])}],!1,null,null,null);t.default=r.exports}}]);
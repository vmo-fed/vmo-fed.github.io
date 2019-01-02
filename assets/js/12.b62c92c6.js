(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{172:function(t,e,s){t.exports=s.p+"assets/img/1.e32ea8ed.png"},173:function(t,e,s){t.exports=s.p+"assets/img/2.89e277d3.png"},204:function(t,e,s){"use strict";s.r(e);var i=[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"git教程五：-push代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git教程五：-push代码","aria-hidden":"true"}},[this._v("#")]),this._v(" git教程五： push代码")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我们前四节的操作都是在本地电脑，如果我们需要其他人看见我们的代码，需要一个远程仓库，这里我们用github，我们在它上面创建一个项目，叫做gitDemo，我们发现URL有两种形式：https和ssh形式\n"),e("img",{attrs:{src:s(173),alt:"img"}}),e("img",{attrs:{src:s(172),alt:"img"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"关联本地项目和远程仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关联本地项目和远程仓库","aria-hidden":"true"}},[this._v("#")]),this._v(" 关联本地项目和远程仓库")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("code",[this._v("git remote add origin https://github.com/null-br/gitDemo.git")])]),e("li",[this._v("输入username")]),e("li",[this._v("输入password")]),e("li",[e("code",[this._v("git push --set-upstream origin master")]),this._v("(首次提交需要用这个命令，以后提交可以直接"),e("code",[this._v("git push")]),this._v(")")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"从远程仓库拉代码到本地"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从远程仓库拉代码到本地","aria-hidden":"true"}},[this._v("#")]),this._v(" 从远程仓库拉代码到本地")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("code",[this._v("git clone https://github.com/null-br/gitDemo.git")])]),e("li",[this._v("输入username")]),e("li",[this._v("输入password")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"关联本地项目和远程仓库-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关联本地项目和远程仓库-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 关联本地项目和远程仓库")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("git remote add origin git@github.com:null-br/gitDemo.git")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ cat ~/.ssh/id_rsa.pub\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"5"}},[e("li",[this._v("添加这个公钥到github\n点击https://github.com/settings/keys")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"克隆远程仓库拉代码到本地"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#克隆远程仓库拉代码到本地","aria-hidden":"true"}},[this._v("#")]),this._v(" 克隆远程仓库拉代码到本地")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("code",[this._v("git clone git@github.com:null-br/gitDemo.git")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("ps："),e("code",[this._v("git remote -v")]),this._v("查看远程git仓库的信息")])}],r=s(0),a=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._m(1),s("p",[t._v("一：使用http")]),t._m(2),t._m(3),t._m(4),t._m(5),s("p",[t._v("二：使用ssh")]),t._m(6),s("ol",[t._m(7),s("li",[s("code",[t._v("git push --set-upstream origin master")]),t._v("(首次提交需要用这个命令，以后提交可以直接"),s("code",[t._v("git push")]),t._v(")\n使用ssh要先配ssh key，ssh key相当于一个凭证，告诉github你的身份。从而不用每次都输入账户和密码"),s("a",{attrs:{href:"https://help.github.com/articles/connecting-to-github-with-ssh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ssh参考资料"),s("OutboundLink")],1)]),s("li",[t._v("生成ssh key：")])]),t._m(8),s("p",[t._v("然后一路回车\n4. 查看ssh key")]),t._m(9),t._m(10),s("p",[t._v("完成～")]),t._m(11),t._m(12),t._m(13)])},i,!1,null,null,null);e.default=a.exports}}]);
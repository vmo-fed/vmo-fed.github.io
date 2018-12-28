(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{191:function(t,s,a){t.exports=a.p+"assets/img/6.e4ce1b20.png"},192:function(t,s,a){t.exports=a.p+"assets/img/5.64d2cc07.png"},193:function(t,s,a){t.exports=a.p+"assets/img/4.9c9377b0.png"},194:function(t,s,a){t.exports=a.p+"assets/img/7.41cf075c.png"},195:function(t,s,a){t.exports=a.p+"assets/img/3.41869b55.png"},196:function(t,s,a){t.exports=a.p+"assets/img/2.515049cc.png"},197:function(t,s,a){t.exports=a.p+"assets/img/1.c917da1b.png"},209:function(t,s,a){"use strict";a.r(s);var e=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("h3",{attrs:{id:"git教程一：新建git以及提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git教程一：新建git以及提交","aria-hidden":"true"}},[t._v("#")]),t._v(" git教程一：新建git以及提交")]),e("h4",{attrs:{id:"创建一个git项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建一个git项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建一个git项目")]),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ mkdir gitDemo\n$ cd gitDemo\n$ git init\n")])])]),e("p",[t._v("会在gitDemo下创建一个.git文件，\n"),e("img",{attrs:{src:a(197),alt:"img"}})]),e("h4",{attrs:{id:"添加文件并推文件到仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加文件并推文件到仓库","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加文件并推文件到仓库")]),e("p",[t._v("首先，我们要明白git是有三个区，分别为工作区，暂存区和版本")]),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ touch 1.txt\n")])])]),e("p",[t._v("添加内容"),e("code",[t._v("this is 1")]),t._v("，此时1.txt还在我们本地，这个区我们称为工作区")]),e("p",[t._v("git status是查看文件状态的，1.txt变成红色\n"),e("img",{attrs:{src:a(196),alt:"img"}})]),e("p",[t._v("接下来提交到暂存区")]),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ git add 1.txt\n$ git status\n")])])]),e("p",[t._v("1.txt变成绿色，表示\n"),e("img",{attrs:{src:a(195),alt:"img"}})]),e("p",[t._v("接下来提交到版本")]),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ git commit -m 'init 1.txt'\n$ git status\n")])])]),e("p",[e("img",{attrs:{src:a(194),alt:"img"}})]),e("p",[t._v("逆向操作，从版本到暂存区，使用")]),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ git reset HEAD 1.txt\n$ git status\n")])])]),e("p",[t._v("1.txt变成红色,表示回到工作区\n"),e("img",{attrs:{src:a(193),alt:"img"}}),t._v("\n从工作区撤销更改，使用")]),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ git checkout 1.txt\n$ git status\n")])])]),e("p",[e("img",{attrs:{src:a(192),alt:"img"}}),t._v("\n我们发现1.txt中增加的2已经没有了，回到了第一次提交的状态")]),e("p",[t._v("版本是什么状态呢？执行git log如下\n"),e("img",{attrs:{src:a(191),alt:"img"}}),t._v("\n5066b3dfdb08e43d3e56cc7ca9658e5a13597d69就是版本号\n版本是.git文件，不要修改这个文件。\n(HEAD -> master)HEAD是指针，指向master，master是git为我们创建的分支。\n我们提交到版本，还没有推到远程。但是我们发现自己提交了一条错误的修改到版本，必须撤销这次修改，\n使用"),e("code",[t._v("git reset --hard HEAD^")]),t._v("表示回到前一次提交\n使用"),e("code",[t._v("git reset --hard xxx")]),t._v("表示回到版本号为xxx的这次提交\n执行git log发现日志最新的就是xxx这次版本的提交。")]),e("p",[t._v("git diff可以用来帮我们看修改内容")]),e("p",[t._v("tips：如果一个文件不是第一次add，可以使用"),e("code",[t._v("git commit -a -m 'add 3 to 1.txt'")]),t._v("，将add 和commit命令合并，直接将文件提交到版本")]),e("p",[t._v("思考：为什么我们需要三个区，为什么不能直接从工作区到版本。\n我们可以将工作区理解成本地开发环境，暂存区是测试环境，版本是生产环境，有些文件只想在本地并不想直接发生产，所以我们可以将需要提交的文件放到测试环境，测试成功后将代码放在生产环境。一句话总结：工作区可以随便修改，暂存区放我们只想提交到版本的文件。")]),e("p",[t._v("不想提交到git的文件还可以使用.gitignore文件。")]),e("p",[t._v("如果我们一不小心commit的时候提交的文案写错了，我们可以执行"),e("code",[t._v("git commit --amend")]),t._v("修改")])])}],i=a(0),g=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},e,!1,null,null,null);s.default=g.exports}}]);
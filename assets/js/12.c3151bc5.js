(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{170:function(t,e,a){t.exports=a.p+"assets/img/8.790e9f7a.png"},171:function(t,e,a){t.exports=a.p+"assets/img/7.b2fc855f.png"},172:function(t,e,a){t.exports=a.p+"assets/img/6.4b8b24f2.png"},173:function(t,e,a){t.exports=a.p+"assets/img/5.8984275c.png"},174:function(t,e,a){t.exports=a.p+"assets/img/4.cbc3b29c.png"},175:function(t,e,a){t.exports=a.p+"assets/img/3.b827839e.png"},176:function(t,e,a){t.exports=a.p+"assets/img/2.70cd95cc.png"},177:function(t,e,a){t.exports=a.p+"assets/img/1.26798b2f.png"},199:function(t,e,a){"use strict";a.r(e);var s=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h3",{attrs:{id:"git教程三：合并分支的两种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git教程三：合并分支的两种方式","aria-hidden":"true"}},[t._v("#")]),t._v(" git教程三：合并分支的两种方式")]),s("p",[t._v("实际开发中我们可能是多人协作，每个人都在自己的分支上开发，最后合并到master分支，合并分支有下面2种方式：merge和rebase\n新建一个文件为1.txt，内容为")]),s("div",{staticClass:"language-Shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("this is 1.txt\ncontainer\n")])])]),s("h4",{attrs:{id:"git-merge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-merge","aria-hidden":"true"}},[t._v("#")]),t._v(" git merge")]),s("p",[t._v("创建一个新的分支为header，修改1.txt为")]),s("div",{staticClass:"language-Shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("this is 1.txt\ncontainer\nheader\n")])])]),s("p",[t._v("然后执行下面的命令")]),s("div",{staticClass:"language-Shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ git add 1.txt\n$ git commit -m 'add header'\n$ git checkout master // 切到master分支\n")])])]),s("p",[t._v("修改1.txt内容")]),s("div",{staticClass:"language-Shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("this is 1.txt\ncontainer1\n")])])]),s("div",{staticClass:"language-Shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ git add 1.txt\n$ git commit -m 'modify 1.txt'\n$ git merge header // 合并分支header到master\n")])])]),s("p",[s("img",{attrs:{src:a(177),alt:"img"}}),t._v("\n这个告诉我们1.txt文件有冲突，我们需要手动解决冲突\n然后执行git status，提示如下：\n有两种选择：\n（1）"),s("code",[t._v("git merge --abort")]),t._v("\n（2）"),s("code",[t._v("git commit")]),s("img",{attrs:{src:a(176),alt:"img"}}),t._v("\n我们可以执行"),s("code",[t._v("git merge --abort")]),t._v("放弃这次合并，也可以执行commit提交这次merge\n合并完成")]),s("p",[t._v("执行"),s("code",[t._v("git log")]),t._v("，我们可以看见header分支存在的记录以及合并记录")]),s("p",[t._v("最后我们删除这个header分支："),s("code",[t._v("git branch -D header")]),s("img",{attrs:{src:a(175),alt:"img"}})]),s("h4",{attrs:{id:"git-rebase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase","aria-hidden":"true"}},[t._v("#")]),t._v(" git rebase")]),s("p",[t._v("创建一个新的分支为footer，前面的步骤和merge一样\n合并的时候用"),s("code",[t._v("git rebase header")]),t._v("，结果如下\n"),s("img",{attrs:{src:a(174),alt:"img"}}),s("code",[t._v("git rebase --skip")]),t._v(": 舍弃master分支更改，合并后的内容和footer分支完全一样\n"),s("code",[t._v("git rebase --abort")]),t._v(": 舍弃footer分支更改，合并后的内容和master分支完全一样")]),s("p",[t._v("我们手动解决冲突，解决之后使用"),s("code",[t._v("git add 1.txt")]),t._v("提交修改到暂存区，然后执行"),s("code",[t._v("git rebase --continue")]),s("img",{attrs:{src:a(173),alt:"img"}}),t._v("\n此时合并完成\n执行"),s("code",[t._v("git log")]),t._v("如下\n"),s("img",{attrs:{src:a(172),alt:"img"}})]),s("h4",{attrs:{id:"merge-vs-rebase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#merge-vs-rebase","aria-hidden":"true"}},[t._v("#")]),t._v(" merge vs rebase")]),s("p",[t._v("#####1. 步骤：\nmerge 需要3步：add header，modify 1.txt， merge\nrebase需要2步：add footer, modify 1.txt\n#####2. 执行git命令\nmerge 需要git add , git commit\nrebase需要git add , git rebase --continue\n#####3. 适用场景\nmerge会保留合并记录，会切一个分支出来，适用于功能性需求\nrabase不会保留合并记录，看起来像是在master分支上继续开发一样，适用于fix bug\n"),s("img",{attrs:{src:a(171),alt:"img"}}),s("img",{attrs:{src:a(170),alt:"img"}})]),s("p",[t._v("总结：\n查看所有分支："),s("code",[t._v("git branch --all / git branch")]),t._v("\n新建xxx分支："),s("code",[t._v("git branch xxx")]),t._v("\n切换xxx分支："),s("code",[t._v("git checkout xxx")]),t._v("\n新建并切换xxx分支(上面两个命令合并)："),s("code",[t._v("git checkout -b xxx")]),t._v("\n删除xxx分支："),s("code",[t._v("git branch -D xxx")]),t._v("，若要删除xxx分支，必须先切换到其他分支才可以删除\n"),s("code",[t._v("git merge")]),t._v("会保留merge记录以及新建的分支，适用于功能性修改")])])}],r=a(0),i=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},s,!1,null,null,null);e.default=i.exports}}]);
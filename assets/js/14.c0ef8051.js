(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{486:function(s,t,e){"use strict";e.r(t);var a=e(31),v=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),e("p",[s._v("本文主要讲解使用 VuePress 构建的博客如何部署到 GitHub Pages。")])]),s._v(" "),e("p",[s._v("为什么直接就开始部署呢？")]),s._v(" "),e("p",[s._v("因为现在需要配置的代码非常少，很清晰。如果等到后面开始学习部署的话，你就会发现配置非常多，多到有点分不清了。")]),s._v(" "),e("h2",{attrs:{id:"配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),e("p",[s._v("讲部署前要先学习下配置文件，因为需要在配置文件中添加部署的相关配置。")]),s._v(" "),e("p",[s._v("需要在 "),e("code",[s._v("docs")]),s._v(" 目录下新建 "),e("code",[s._v(".vuepress")]),s._v(" 目录，然后在 "),e("code",[s._v(".vuepress")]),s._v(" 目录下添加 "),e("code",[s._v("config.js")]),s._v(" 文件。")]),s._v(" "),e("p",[s._v("文件的配置如下。")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("module.exports = {\n    title: '二默',\n    description: '二默的个人博客'\n}\n")])])]),e("p",[s._v("此时网站的首页应该是下面这个样子。")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://blog-to-use.oss-cn-beijing.aliyuncs.com/2022/03/base-config.jpg",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"设置-base-属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置-base-属性"}},[s._v("#")]),s._v(" 设置 base 属性")]),s._v(" "),e("p",[s._v("首先需要在 "),e("code",[s._v("docs/.vuepress/config.js")]),s._v(" 中设置正确的 "),e("code",[s._v("base")]),s._v("。")]),s._v(" "),e("p",[s._v("如果你打算发布到 "),e("code",[s._v("https://<USERNAME>.github.io/")]),s._v("，则可以省略这一步，因为 "),e("code",[s._v("base")]),s._v(' 默认即是 "/"。')]),s._v(" "),e("p",[s._v("如果你打算发布到 "),e("code",[s._v("https://<USERNAME>.github.io/<REPO>/")]),s._v("，也就是说你的仓库在 "),e("code",[s._v("https://github.com/<USERNAME>/<REPO>")]),s._v("，则将 "),e("code",[s._v("base")]),s._v(" 设置为 "),e("code",[s._v("/<REPO>/")]),s._v("。")]),s._v(" "),e("p",[s._v("本次以第二种方法演示，在 "),e("code",[s._v("docs/.vuepress/config.js")]),s._v(" 添加 "),e("code",[s._v("base")]),s._v(" 属性。")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('base: "/ermo"\n')])])]),e("h2",{attrs:{id:"添加-deploy-sh-部署文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加-deploy-sh-部署文件"}},[s._v("#")]),s._v(" 添加 deploy.sh 部署文件")]),s._v(" "),e("p",[s._v("在项目的根目录中添加 "),e("code",[s._v("deploy.sh")]),s._v(" 文件，并加入以下内容。")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#!/usr/bin/env sh\n\n# 确保脚本抛出遇到的错误\nset -e\n\n# 生成静态文件\nnpm run docs:build\n\n# 进入生成的文件夹\ncd docs/.vuepress/dist\n\n# 如果是发布到自定义域名\necho 'www.ermo.cc' > CNAME\n\ngit init\ngit add -A\ngit commit -m 'deploy'\n\n# 如果发布到 https://<USERNAME>.github.io\n# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master\n\n# 如果发布到 https://<USERNAME>.github.io/<REPO>\n# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages\ngit push -f git@github.com:ermocc/ermo.git master:gh-pages\n\ncd -\n")])])])])}),[],!1,null,null,null);t.default=v.exports}}]);
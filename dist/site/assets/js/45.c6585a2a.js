(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{181:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("经历过自定义配置过webpack的人都知道，webpack的各种配置是一个难点。好在现在工程都在推崇零配置打包工具，Parcel快速涨星就能知道大家对零配置的迫切。好在webpack开发团队顺应潮流，最新的webpack4很大改变就是其配置变得简单的多。")]),t._v(" "),a("p",[t._v("网上有很多webpack配置教程结构相差很大，容易让人感到迷惑和不解。官方的"),a("a",{attrs:{href:"https://github.com/webpack/webpack/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack changelog"),a("OutboundLink")],1),t._v("内容较多，不适合逐条查看。但从中也可以找到比较重要的"),a("a",{attrs:{href:"https://github.com/webpack/webpack/issues/6064",target:"_blank",rel:"noopener noreferrer"}},[t._v("wepack3到webpack4大版本升级日志"),a("OutboundLink")],1),t._v("。现在跟随笔者，看下webpack1到webpack4进行了哪些重要配置改变。")]),t._v(" "),a("h2",{attrs:{id:"rules-vs-loaders-in-webpack-what-s-the-difference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rules-vs-loaders-in-webpack-what-s-the-difference","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://stackoverflow.com/questions/43002099/rules-vs-loaders-in-webpack-whats-the-difference",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rules vs Loaders in Webpack - What's the Difference?"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v('question: Loaders is used in Webpack 1, and Rules in Webpack 2. They say that "Loaders" in the future it will be deprecated in favour of module.rules.')]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._m(4),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/43002099/rules-vs-loaders-in-webpack-whats-the-difference",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rules vs Loaders in Webpack - What's the Difference?"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://webpack.js.org/migrate/3/#module-loaders-is-now-module-rules",target:"_blank",rel:"noopener noreferrer"}},[t._v("To v2 or v3 from v1"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://webpack.js.org/migrate/4/#node-js-v4",target:"_blank",rel:"noopener noreferrer"}},[t._v("To v4 from v3"),a("OutboundLink")],1)])])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"webpack升级史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack升级史","aria-hidden":"true"}},[this._v("#")]),this._v(" Webpack升级史")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Sample for "),s("code",[this._v("loaders")]),this._v(" to "),s("code",[this._v("rules")]),this._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Wepack 1.x")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    module"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        loaders"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.css$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"style-loader!css-loader!postcss-loader"')]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    postcss"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("precss"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoprefixer"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Wepack 4.x in webpack.config.js")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    module"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.css$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),a("span",{attrs:{class:"token string"}},[t._v("'style-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{attrs:{class:"token string"}},[t._v("'css-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'postcss-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                            ident"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'postcss'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                                "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'precss'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("options"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'autoprefixer'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("options"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                            "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考文章")])}],!1,null,null,null);e.options.__file="Webpack升级史 .md";s.default=e.exports}}]);
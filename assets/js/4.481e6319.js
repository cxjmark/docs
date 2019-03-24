(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{163:function(a,t,e){"use strict";e.r(t);var r=e(0),s=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"插件使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 插件使用")]),a._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token comment"}},[a._v("// 安装")]),a._v("\nyarn add react"),e("span",{attrs:{class:"token operator"}},[a._v("-")]),a._v("cropper"),e("span",{attrs:{class:"token operator"}},[a._v("-")]),a._v("image\n"),e("span",{attrs:{class:"token comment"}},[a._v("// 或者")]),a._v("\nnpm install react"),e("span",{attrs:{class:"token operator"}},[a._v("-")]),a._v("cropper"),e("span",{attrs:{class:"token operator"}},[a._v("-")]),a._v("image "),e("span",{attrs:{class:"token operator"}},[a._v("--")]),a._v("save"),e("span",{attrs:{class:"token operator"}},[a._v("-")]),a._v("dev\n")])])]),e("h2",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[a._v("import")]),a._v(" React"),e("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" Component "),e("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),e("span",{attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),e("span",{attrs:{class:"token string"}},[a._v("'react'")]),a._v("\n"),e("span",{attrs:{class:"token keyword"}},[a._v("import")]),a._v(" ReactCropperImage "),e("span",{attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),e("span",{attrs:{class:"token string"}},[a._v("'react-cropper-image'")]),a._v("\n"),e("span",{attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),e("span",{attrs:{class:"token class-name"}},[a._v("Example")]),a._v(" "),e("span",{attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),e("span",{attrs:{class:"token class-name"}},[a._v("Component")]),a._v(" "),e("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{attrs:{class:"token function"}},[a._v("render")]),e("span",{attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n      "),e("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("ReactCropperImage "),e("span",{attrs:{class:"token operator"}},[a._v("/")]),e("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),e("span",{attrs:{class:"token keyword"}},[a._v("default")]),a._v(" Example\n")])])]),e("h2",{attrs:{id:"基本配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 基本配置")]),a._v(" "),e("h3",{attrs:{id:"viewmode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#viewmode","aria-hidden":"true"}},[a._v("#")]),a._v(" viewMode")]),a._v(" "),e("ul",[e("li",[a._v("类型："),e("code",[a._v("Number")])]),a._v(" "),e("li",[a._v("默认值："),e("code",[a._v("0")])])]),a._v(" "),e("p",[a._v("裁剪器的视图模式")]),a._v(" "),e("ol",{attrs:{start:"0"}},[e("li",[a._v("图片可以缩放")]),a._v(" "),e("li",[a._v("图片缩放不能小于裁剪框")]),a._v(" "),e("li",[a._v("图片可只能放大")]),a._v(" "),e("li",[a._v("图片可只能放大且平铺容器")])]),a._v(" "),e("h3",{attrs:{id:"aspectratio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aspectratio","aria-hidden":"true"}},[a._v("#")]),a._v(" aspectRatio")]),a._v(" "),e("ul",[e("li",[a._v("类型："),e("code",[a._v("Number")])]),a._v(" "),e("li",[a._v("默认值："),e("code",[a._v("NaN")])])]),a._v(" "),e("p",[a._v("裁剪框的纵横比\n比如 16 / 9")]),a._v(" "),e("h3",{attrs:{id:"data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data","aria-hidden":"true"}},[a._v("#")]),a._v(" data")]),a._v(" "),e("ul",[e("li",[a._v("类型："),e("code",[a._v("Object")])]),a._v(" "),e("li",[a._v("默认值："),e("code",[a._v("null")])])]),a._v(" "),e("p",[a._v("具有先前裁剪结果数据的对象")]),a._v(" "),e("h3",{attrs:{id:"preview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preview","aria-hidden":"true"}},[a._v("#")]),a._v(" preview")]),a._v(" "),e("ul",[e("li",[a._v("类型："),e("code",[a._v("String")])]),a._v(" "),e("li",[a._v("默认值："),e("code",[a._v("''")])])]),a._v(" "),e("p",[a._v("用于添加额外容器以进行预览的选择器")]),a._v(" "),e("h3",{attrs:{id:"responsive"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#responsive","aria-hidden":"true"}},[a._v("#")]),a._v(" responsive")]),a._v(" "),e("ul",[e("li",[a._v("类型："),e("code",[a._v("Boolean")])]),a._v(" "),e("li",[a._v("默认值："),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("调整窗口大小时重新渲染裁剪器")]),a._v(" "),e("h3",{attrs:{id:"restore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#restore","aria-hidden":"true"}},[a._v("#")]),a._v(" restore")]),a._v(" "),e("ul",[e("li",[a._v("类型："),e("code",[a._v("Boolean")])]),a._v(" "),e("li",[a._v("默认值："),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("调整窗口大小后恢复裁剪区域")]),a._v(" "),e("h3",{attrs:{id:"checkcrossorigin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#checkcrossorigin","aria-hidden":"true"}},[a._v("#")]),a._v(" checkCrossOrigin")]),a._v(" "),e("ul",[e("li",[a._v("类型："),e("code",[a._v("Boolean")])]),a._v(" "),e("li",[a._v("默认值："),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("检查当前图像是否是跨原始图像")]),a._v(" "),e("h3",{attrs:{id:"modal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modal","aria-hidden":"true"}},[a._v("#")]),a._v(" modal")]),a._v(" "),e("ul",[e("li",[a._v("类型："),e("code",[a._v("Boolean")])]),a._v(" "),e("li",[a._v("默认值："),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("显示黑色模态")]),a._v(" "),e("h3",{attrs:{id:"guides"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#guides","aria-hidden":"true"}},[a._v("#")]),a._v(" guides")]),a._v(" "),e("ul",[e("li",[a._v("类型："),e("code",[a._v("Boolean")])]),a._v(" "),e("li",[a._v("默认值："),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("显示虚线以进行指导")]),a._v(" "),e("h3",{attrs:{id:"center"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#center","aria-hidden":"true"}},[a._v("#")]),a._v(" center")]),a._v(" "),e("ul",[e("li",[a._v("类型："),e("code",[a._v("Boolean")])]),a._v(" "),e("li",[a._v("默认值："),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("显示指导的中心指示器")]),a._v(" "),e("h3",{attrs:{id:"highlight"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#highlight","aria-hidden":"true"}},[a._v("#")]),a._v(" highlight")]),a._v(" "),e("ul",[e("li",[a._v("类型："),e("code",[a._v("Boolean")])]),a._v(" "),e("li",[a._v("默认值："),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("显示白色模式以突出显示裁剪框")]),a._v(" "),e("h3",{attrs:{id:"background"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#background","aria-hidden":"true"}},[a._v("#")]),a._v(" background")]),a._v(" "),e("ul",[e("li",[a._v("类型："),e("code",[a._v("Boolean")])]),a._v(" "),e("li",[a._v("默认值："),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("显示网格背景")]),a._v(" "),e("h3",{attrs:{id:"autocrop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#autocrop","aria-hidden":"true"}},[a._v("#")]),a._v(" autoCrop")]),a._v(" "),e("ul",[e("li",[a._v("类型："),e("code",[a._v("Boolean")])]),a._v(" "),e("li",[a._v("默认值："),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("启用初始化时自动裁剪图像")]),a._v(" "),e("h3",{attrs:{id:"autocroparea"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#autocroparea","aria-hidden":"true"}},[a._v("#")]),a._v(" autoCropArea")]),a._v(" "),e("ul",[e("li",[a._v("类型："),e("code",[a._v("Number")])]),a._v(" "),e("li",[a._v("默认值："),e("code",[a._v("0.8")])])]),a._v(" "),e("p",[a._v("初始化时定义自动裁剪区域的百分比")]),a._v(" "),e("h3",{attrs:{id:"movable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#movable","aria-hidden":"true"}},[a._v("#")]),a._v(" movable")]),a._v(" "),e("ul",[e("li",[a._v("类型："),e("code",[a._v("Boolean")])]),a._v(" "),e("li",[a._v("默认值："),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("启用移动图像")]),a._v(" "),e("h3",{attrs:{id:"rotatable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rotatable","aria-hidden":"true"}},[a._v("#")]),a._v(" rotatable")]),a._v(" "),e("ul",[e("li",[a._v("类型："),e("code",[a._v("Boolean")])]),a._v(" "),e("li",[a._v("默认值："),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("启用旋转图像")]),a._v(" "),e("h3",{attrs:{id:"scalable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scalable","aria-hidden":"true"}},[a._v("#")]),a._v(" scalable")]),a._v(" "),e("ul",[e("li",[a._v("类型："),e("code",[a._v("Boolean")])]),a._v(" "),e("li",[a._v("默认值："),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("启用缩放图像")]),a._v(" "),e("h3",{attrs:{id:"zoomable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zoomable","aria-hidden":"true"}},[a._v("#")]),a._v(" zoomable")]),a._v(" "),e("ul",[e("li",[a._v("类型："),e("code",[a._v("Boolean")])]),a._v(" "),e("li",[a._v("默认值："),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("启用缩放图像")]),a._v(" "),e("h3",{attrs:{id:"zoomontouch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zoomontouch","aria-hidden":"true"}},[a._v("#")]),a._v(" zoomOnTouch")]),a._v(" "),e("ul",[e("li",[a._v("类型："),e("code",[a._v("Boolean")])]),a._v(" "),e("li",[a._v("默认值："),e("code",[a._v("true")])])]),a._v(" "),e("h2",{attrs:{id:"使用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方法","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),e("h3",{attrs:{id:"ready"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ready","aria-hidden":"true"}},[a._v("#")]),a._v(" ready")]),a._v(" "),e("h3",{attrs:{id:"cropstart"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cropstart","aria-hidden":"true"}},[a._v("#")]),a._v(" cropstart")]),a._v(" "),e("h3",{attrs:{id:"cropmove"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cropmove","aria-hidden":"true"}},[a._v("#")]),a._v(" cropmove")]),a._v(" "),e("h3",{attrs:{id:"cropend"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cropend","aria-hidden":"true"}},[a._v("#")]),a._v(" cropend")]),a._v(" "),e("h3",{attrs:{id:"crop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crop","aria-hidden":"true"}},[a._v("#")]),a._v(" crop")]),a._v(" "),e("h3",{attrs:{id:"zoom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zoom","aria-hidden":"true"}},[a._v("#")]),a._v(" zoom")])])}],!1,null,null,null);s.options.__file="README.md";t.default=s.exports}}]);
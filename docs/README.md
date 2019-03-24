---
sidebarDepth: 2
---

# 插件使用

## 安装

```js
// 安装
yarn add react-cropper-image
// 或者
npm install react-cropper-image --save-dev
```

## 示例
```js
import React, { Component } from 'react'
import ReactCropperImage from 'react-cropper-image'
class Example extends Component {
  render() {
    return (
      <ReactCropperImage />
    )
  }
}
export default Example
```

## 基本配置

### viewMode

* 类型：`Number`
* 默认值：`0`

裁剪器的视图模式

0. 图片可以缩放
1. 图片缩放不能小于裁剪框
2. 图片可只能放大
3. 图片可只能放大且平铺容器


### aspectRatio
* 类型：`Number`
* 默认值：`NaN`

裁剪框的纵横比
比如 16 / 9

### data

* 类型：`Object`
* 默认值：`null`

具有先前裁剪结果数据的对象

### preview

* 类型：`String`
* 默认值：`''`

用于添加额外容器以进行预览的选择器

### responsive

* 类型：`Boolean`
* 默认值：`true`

调整窗口大小时重新渲染裁剪器


### restore

* 类型：`Boolean`
* 默认值：`true`

调整窗口大小后恢复裁剪区域

### checkCrossOrigin

* 类型：`Boolean`
* 默认值：`true`


检查当前图像是否是跨原始图像

### modal

* 类型：`Boolean`
* 默认值：`true`

显示黑色模态

### guides
* 类型：`Boolean`
* 默认值：`true`

显示虚线以进行指导

### center

* 类型：`Boolean`
* 默认值：`true`

显示指导的中心指示器

### highlight

* 类型：`Boolean`
* 默认值：`true`

显示白色模式以突出显示裁剪框

### background

* 类型：`Boolean`
* 默认值：`true`

显示网格背景

### autoCrop
* 类型：`Boolean`
* 默认值：`true`

启用初始化时自动裁剪图像

### autoCropArea
* 类型：`Number`
* 默认值：`0.8`

初始化时定义自动裁剪区域的百分比

### movable
* 类型：`Boolean`
* 默认值：`true`

启用移动图像

### rotatable
* 类型：`Boolean`
* 默认值：`true`

启用旋转图像

### scalable
* 类型：`Boolean`
* 默认值：`true`

启用缩放图像

### zoomable
* 类型：`Boolean`
* 默认值：`true`

启用缩放图像

### zoomOnTouch
* 类型：`Boolean`
* 默认值：`true`


## 使用方法

### ready

### cropstart

### cropmove

### cropend

### crop

### zoom



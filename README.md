# hg-vcomponents
Hanger's vue-components.

## Installation
```
npm install hg-vcomponents
```

## Import
```
import 'hg-vcomponents/dist/hg-vcomponents.min.css';
import { Loading, SolidArrow... } from 'hg-vcomponents';
```

## Content
[SlidDelete 滑动删除组件](./src/components/SlidDelete)

[Hint 透明提示组件](./src/components/Hint)

[Loading 加载状态组件](./src/components/Loading)

[FixedTitle 表头固定组件](./src/components/FixedTitle)

[ToTop 页面置顶组件](./src/components/ToTop)

[HollowArrow 空心箭头组件](./src/components/HollowArrow)

[SolidArrow 实心箭头组件](./src/components/SolidArrow)

[Round 圆形组件](./src/components/Round)

[ProgressBar 进度条组件](./src/components/ProgressBar)

[OmitText 文本省略组件](./src/components/OmitText)

[Banner 横幅组件](./src/components/Banner)

[MultTextInput 多项文本输入组件](./src/components/MultTextInput)

## Demo
下载该项目，在文件根目录下依次输入命令行：
```
npm install
npm run dev
```
然后在浏览器里输入`http://localhost:8089`，即可看到组件 demo。

## Changelog
### 2018.5.3
> v0.1.7 * 表头固定组件添加 scrollTop 和 top 属性

### 2018.4.21
> v0.1.6 * 添加滑动删除组件的删除按钮自定义

### 2018.4.17
> v0.1.4 * 取消圆形组件、空心和实心箭头组件的绝对定位设置

> v0.1.3 * 修改进度条组件高度设置，并去除多余样式

### 2018.3.26
> v0.1.1 * 添加横幅组件

### 2018.3.11
> v0.1.0 * 添加圆形组件、空心和实心箭头组件的激活状态

### 2018.2.28
> v0.0.30 * 创建文本省略组件

### 2018.2.26
> v0.0.29 * 删除原箭头组件，创建空心箭头和实心箭头组件

### 2018.2.9
> v0.0.28 * 创建 README.md、进度条和圆形组件

### 2018.1.14
> v0.0.27 * 创建箭头组件

### 2018.1.10
> v0.0.25 * 初始化项目，创建滑动删除、透明提示、加载状态、表头固定、页面置顶组件
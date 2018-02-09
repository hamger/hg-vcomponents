## Introduce
圆形组件用于绘制页面中的圆形，通过设置背景色为`transparent`可以变为圆环，本身采用绝对定位，所以需要规定外部参考元素。

## Usage
```
<template>
  <div>
    <round></round>
  </div>
</template>
<script>
import { Round } from 'hg-vcomponents';
export default {
  ...
  components: {
    Round
  },
  ...
};
</script>
```
具体使用可参考[该文件](../../examples/round.vue)。

## Options
配置项 | 值类型 | 描述
--- | --- | ---
size | Number | 规定圆形大小，默认`20px`
bdSize | String | 规定圆形边框粗细，默认`1px`
bgColor | String | 规定圆形背景颜色，默认`#2a8ee3`
bdColor | String | 规定圆形边框颜色，默认`#2a8ee3`
bdType | String | 规定边框类型，默认`solid`
top | String | 规定圆形上距离，默认`0px`，设置`bottom`会取消`top`设置
left | String | 规定圆形左距离，默认`0px`，设置`right`会取消`left`设置
bottom | String | 规定圆形下距离，默认`undefined`
right | String | 规定圆形右距离，默认`undefined`
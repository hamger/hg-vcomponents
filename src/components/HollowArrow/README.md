## Introduce
空心箭头组件用于绘制页面中空心的小箭头，本身采用绝对定位，所以需要规定外部参照系。

## Usage
```
<template>
  <div>
    <hollow-arrow
      @click.native="active = !active"
      :active="active"
      :top="'390px@380px'"
      :left="'90px@80px'"
      :direction="'left'"
      :color="'pink@#ff607c'"
      :size="'18px@36px'"
      :bdSize="'4px@8px'"
      >
    </hollow-arrow>
  </div>
</template>
<script>
import { HollowArrow } from 'hg-vcomponents';
export default {
  ...
  components: {
    HollowArrow
  },
  ...
};
</script>
```
具体使用可参考[该文件](../../examples/arrows.vue)。

## Options
配置项 | 值类型 | 描述
--- | --- | ---
size | String | 规定箭头大小，默认`10px`
bdSize | String | 规定箭头粗细，默认`1px`
color | String | 规定箭头颜色，默认`#666`
direction | `left|top|right|bottom` | 规定箭头指向，默认`right`
top | String | 规定箭头上距离，默认`0px`，设置`bottom`会取消`top`设置
left | String | 规定箭头左距离，默认`0px`，设置`right`会取消`left`设置
bottom | String | 规定箭头下距离，默认`undefined`
right | String | 规定箭头右距离，默认`undefined`
active | Boolean | 规定箭头组件是否处于激活状态，若处于激活状态，会渲染`@`后的样式（若`@`后没有内容，则不改变样式），默认`false`
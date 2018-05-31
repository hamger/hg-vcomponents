## Introduce
空心箭头组件用于绘制页面中空心的小箭头。

## Usage
```
<template>
  <div>
    <hollow-arrow
      @click.native="active = !active"
      :active="active"
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
direction | `left` `top` `right` `bottom` | 规定箭头指向，默认`right`
active | Boolean | 规定箭头组件是否处于激活状态，若处于激活状态，会渲染`@`后的样式（若`@`后没有内容，则不改变样式），默认`false`
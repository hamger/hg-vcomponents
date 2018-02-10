## Introduce
箭头组件用于绘制页面中的实心或空心的小箭头，本身采用绝对定位，所以需要规定外部参考元素。

## Usage
```
<template>
  <div>
    <arrows :size="18"
      :top="'50px'"
      :left="'100px'"
      :direction="'top'"
      :type="'solid'"
      :color="'pink'"
    ></arrows>
  </div>
</template>
<script>
import { Arrows } from 'hg-vcomponents';
export default {
  ...
  components: {
    Arrows
  },
  ...
};
</script>
```
具体使用可参考[该文件](../../examples/arrows.vue)。

## Options
配置项 | 值类型 | 描述
--- | --- | ---
size | Number | 规定箭头大小，默认`10`(px)
borderSize | String | 规定空心箭头粗细，默认`1px`
color | String | 规定箭头颜色，默认`#666`
top | String | 规定箭头上距离，默认`0px`，设置`bottom`会取消`top`设置
left | String | 规定箭头左距离，默认`0px`，设置`right`会取消`left`设置
bottom | String | 规定箭头下距离，默认`undefined`
right | String | 规定箭头右距离，默认`undefined`
direction | `left`\|`top`\|`right`\|`bottom` | 规定箭头指向，默认`left`
type | `hollow`\|`solid` | 规定箭头实心或空心，默认`hollow`(空心)

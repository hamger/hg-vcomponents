## Introduce
画廊组件用于以画廊的形式展示图片。

## Usage
```
<template>
  <div>
    <gallery></gallery>
  </div>
</template>
<script>
import { Gallery } from 'hg-vcomponents';
export default {
  ...
  components: {
    Gallery
  },
  ...
};
</script>
```
具体使用可参考[该文件](../../examples/gallery.vue)。

## Options
配置项 | 值类型 | 描述
--- | --- | ---
visible | Boolean | 是否显示
imgList | Array | 图片地址的字符串
initIndex | Number | 初始显示的图片索引
closeCallback | Fuction | 关闭的回调函数，需要在这里变更 visible 的值
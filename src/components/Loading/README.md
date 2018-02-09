## Introduce
加载状态组件用于页面加载时显示。

## Usage
```
<template>
  <div>
    <loading></loading>
  </div>
</template>
<script>
import { Loading } from 'hg-vcomponents';
export default {
  ...
  components: {
    Loading
  }
  ...
};
</script>
```
具体使用可参考[该文件](../../examples/loading.vue)。

## Options
配置项 | 值类型 | 描述
--- | --- | ---
color | String | 加载环颜色，默认`#2a8ee3`
diam | Number | 圆直径(px)，默认`50`
size | Number | 圆环粗细(px)，默认`3`
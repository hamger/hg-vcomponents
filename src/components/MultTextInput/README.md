## Introduce
透明提示组件用于显示的半透明提示框，提示内容可自定义，用函数控制其显示时间。

## Usage
```
<template>
  <div>
    <hint></hint>
  </div>
</template>
<script>
import { Hint } from 'hg-vcomponents';
export default {
  ...
  components: {
    Hint
  },
  ...
};
</script>
```
具体使用可参考[该文件](../../examples/hint.vue)。

## Options
配置项 | 值类型 | 描述
--- | --- | ---
height | Number | 提示框高度，默认`108`(px)
width | Number | 提示框宽度，默认`140`(px)
bgColor | String | 提示框背景色，默认`rgba(70, 70, 70, 0.5)`
radius | String | 提示框圆角，默认`6px`
`<slot></slot>` | HTML | 提示内容，默认为‘修改成功’
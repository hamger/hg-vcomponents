## Introduce
页面置顶组件用于返回页面顶部，当然也可以设置定位的位置，通过修改定位可以改造成置底功能的按钮。

## Usage
```
<template>
  <div>
    <to-top :scrollTop="500"></to-top>
  </div>
</template>
<script>
import { ToTop } from 'hg-vcomponents';
export default {
  ...
  components: {
    ToTop
  },
  ...
};
</script>
```
具体使用可参考[该文件](../../examples/fixedtitle.vue)。

## Options
配置项 | 值类型 | 描述
--- | --- | ---
scrollTop | Number | 规定滚动到什么位置时显示按钮，默认`667`(px)
position | Number | 规定最终定位的位置，默认`0`(px)
bottom | String | 规定按钮距离底部的位置，默认`20px`
right | String | 规定按钮距离右边的位置，默认`20px`
height | String | 规定按钮高度，默认`30px`
width | String | 规定按钮宽度，默认`30px`
borderRadius | String | 规定按钮圆角，默认`6px`
`<slot></slot>` | HTML | 按钮内部显示内容，选填
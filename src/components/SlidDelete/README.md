## Introduce
滑动删除组件用于移动端左滑出现删除按钮。

## Usage
```
<template>
  <div>
    <slid-delete :height="'50px'" :delWidth="60" @deteleClicked="delCelue(item)">
      <div>{{item.content}}</div>
    </slid-delete>
  </div>
</template>
<script>
import { SlidDelete } from 'hg-vcomponents';
export default {
  ...
  components: {
    SlidDelete
  },
  ...
};
</script>
```
具体使用可参考[该文件](../../examples/sliddelete.vue)。

## Options
配置项 | 值类型 | 描述
--- | --- | ---
height | String | 元素高度
delWidth | Number | 删除按钮宽度
deteleClicked | Function | 点击删除后回调
`<slot name="delete-btn"></slot>` | HTML | `delete-btn`具名插槽规定删除按钮的样式，选填
## Introduce
表头固定组件用于表头需要固定在某处的情况，需要在`slot`中插入表头的`html`，插槽中的内容是独立与原表头的。

## Usage
```
<template>
  <div id="list">
    <fixed-title :top="top">
      <ul>
        <li>
          <p>name</p>
          <p>sex</p>
          <p>age</p>
        </li>
      </ul>
    </fixed-title>
    <ul>
      <li id="listTitle">
        <p>name</p>
        <p>sex</p>
        <p>age</p>
      </li>
      <li v-for="item in data">
        <p>{{item.name}}</p>
        <p>{{item.sex}}</p>
        <p>{{item.age}}</p>
      </li>
    </ul>
  </div>
<script>
import { FixedTitle } from 'hg-vcomponents';
export default {
  ...
  components: {
    FixedTitle
  },
  ...
};
</script>
```
具体使用可参考[该文件](../../examples/fixedtitle.vue)。

## Options
配置项 | 值类型 | 描述
--- | --- | ---
top | Number | 固定位置距页面顶部的高度(px)，默认`0`
`<slot></slot>` | HTML | 表头内容，必填
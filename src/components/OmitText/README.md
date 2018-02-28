## Introduce
文本省略组件用于省略显示的过多的文本内容，并提供展开收起内容的功能。

## Usage
```
<template>
  <div>
    <omit-text :text="data"></omit-text>
  </div>
</template>
<script>
import { OmitText } from 'hg-vcomponents';
export default {
  ...
  components: {
    OmitText
  },
  ...
};
</script>
```
具体使用可参考[该文件](../../examples/omittext.vue)。

## Options
配置项 | 值类型 | 描述
--- | --- | ---
text | String | 需要省略显示的文本内容
limit | Number | 规定隐藏超过多少字符长度后的文本，默认`70`
color | String | 展开/收起 按钮的颜色，默认`#4a9fef`
showTip | String | 展开按钮文本，默认`展开`
hideTip | String | 收起按钮文本，默认`收起`
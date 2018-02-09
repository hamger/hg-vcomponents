## Introduce
进度条组件用于显示横置的长方形进度条。

## Usage
```
<template>
  <div>
    <div class="box">
      <progress-bar></progress-bar>
    </div>
  </div>
</template>
<script>
import { ProgressBar } from 'hg-vcomponents';
export default {
  ...
  components: {
    ProgressBar
  },
  ...
};
</script>
```
具体使用可参考[该文件](../../examples/progressbar.vue)。

## Options
配置项 | 值类型 | 描述
--- | --- | ---
height | String | 进度条高度，默认`20px`
width | String | 进度条宽度，默认`100%`
unfinishColor | String | 未完成进度条颜色，默认`#f1f1f1`
finishColor | String | 完成进度条颜色，默认`#2a8ee3`
finishWidth | String | 完成进度条长度，默认`40%`
radius | String | 进度条圆角，默认`undefined`
## Introduce
多项文本输入组件用于输入多项文本的情况。

## Usage
```
<template>
  <div>
    <mult-text-input :data="demo" @cancel="cancel" @sure="getResult"></mult-text-input>
  </div>
</template>
<script>
import { MultTextInput } from '@/components';

export default {
  data () {
    return {
      demo: ['red', 'blue', 'yellow']
    };
  },
  components: {
    MultTextInput
  },
  methods: {
    getResult (res) {
      console.log(res);
    },
    cancel () {
      console.log('cancel');
    }
  }
};
</script>
```
具体使用可参考[该文件](../../examples/multtextinput.vue)。

## Options
配置项 | 值类型 | 描述
--- | --- | ---
data | Array | 初始显示的数据
sure | Function | 确定按钮的回调
cancel | Function | 取消按钮回调

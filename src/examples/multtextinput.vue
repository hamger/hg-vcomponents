<template>
  <div class="wrap">
    <h4>多项文本输入组件</h4>
    <mult-text-input class="box" :data="demo" @cancel="cancel" @sure="getResult"></mult-text-input>
  </div>
</template>

<script>
import { MultTextInput } from '@/components';

export default {
  name: 'el-hint',
  data () {
    return {
      demo: ['red', 'blue', 'yellow'],
      demoText: '',
      isInput: false,
    };
  },
  components: {
    MultTextInput
  },
  methods: {
    delItem (index) {
      this.demo.splice(index, 1);
      return false;
    },
    addItem () {
      if (this.demoText.trim() === '') {
        alert('输入不能为空');
        return;
      }
      this.demo.push(this.demoText);
      this.demoText = '';
    },
    getResult (res) {
      console.log(res[0]);
    },
    cancel () {
      console.log('cancel');
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  h4 {
    text-align: center;
    padding: 20px 0;
  }
  padding: 0 15px;
  .box {
    margin: 20px auto;
    width: 50%
  }
}
</style>

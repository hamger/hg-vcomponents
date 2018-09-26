<template>
  <div class="wrap">
    <h4>多项文本输入组件</h4>
    <mult-text-input class="box" :data="demo" @sure="getResult"></mult-text-input>
    <!-- <div id='demo-box' @click="isInput = true">
      <ul>
        <li v-for="(item, index) in demo" :key="index">
          {{item}}
          <span @click="delItem(index)" class="remove">×</span>
        </li>
      </ul>
      <input @keyup.enter="addItem" v-show="isInput" type="text" v-model="demoText" id="demo-input">
    </div>
    <button @click="addItem" class="sure">+</button> -->
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
      console.log(res);
    }
  }
};
</script>

<style lang="scss" scoped>
#demo-box {
  width: 50%;
  overflow: hidden;
  position: relative;
  margin: 15px;
  ul {
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0 5px;
    display: inline-block;
    overflow: hidden;
    padding-left: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
    li {
      background-color: #e4e4e4;
      border: 1px solid #aaa;
      border-radius: 4px;
      cursor: pointer;
      float: left;
      margin-right: 5px;
      margin-top: 5px;
      padding: 0 5px;
      list-style: none;
    }
  }
  input {
    width: 7em;
    background: transparent;
    border: none;
    outline: 0;
    box-shadow: none;
    -webkit-appearance: textfield;
    box-sizing: border-box;
    border: none;
    font-size: 100%;
    margin-top: 5px;
    padding: 0;
    .remove {
      background-color: #e4e4e4;
      border: 1px solid #aaa;
      border-radius: 4px;
      cursor: default;
      float: left;
      margin-right: 5px;
      margin-top: 5px;
      padding: 0 5px;
    }
  }
  .sure {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    line-height: 18px;
    font-size: 14px;
    border-radius: 4px;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #dcdfe6;
    text-align: center;
    outline: 0;
    margin: 0;
  }
}

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

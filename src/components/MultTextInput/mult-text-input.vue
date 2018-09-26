<template>
<div class='mult-text-wrap'>
  <div>
    <div class='mult-text-input' @click="isInput = true">
      <ul>
        <li v-for="(item, index) in data" :key="index">
          {{item}}
          <span @click="delItem(index)" class="remove">×</span>
        </li>
      </ul>
      <input @keyup.enter="addItem" v-show="isInput" type="text" v-model="curText" class="mult-text-input">
    </div>
    <div @click="addItem" class="mult-text-add">+</div>
  </div>
  <div>
    <button class="mult-text-cancel" @click="cancel2">取消</button>
    <button class="mult-text-sure" @click="sure2">确定</button>
  </div>
</div>
</template>
<script>
const events = {
  sure: 'sure',
  cancel: 'cancel',
};

export default {
  name: 'mult-text-input',
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      curText: '',
      isInput: false,
    };
  },
  methods: {
    delItem (index) {
      this.data.splice(index, 1);
      return false;
    },
    addItem () {
      if (this.curText.trim() === '') {
        alert('输入不能为空');
        return;
      }
      this.data.push(this.curText);
      this.curText = '';
    },
    sure2 () {
      this.$emit(events.sure, this.data);
    },
    cancel2 () {
      this.$emit(events.cancel);
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss"  scoped>
.mult-text-wrap {
  & > div:first-child {
    position: relative;
    margin-bottom: 20px;
    .mult-text-input {
      border-radius: 4px;
      width: calc(100% - 40px);
      overflow: hidden;
      border: 1px solid #dcdfe6;
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
          .remove {
            cursor: pointer;
          }
        }
      }
      input {
        width: 7em;
        background: transparent;
        border: none;
        // outline: 0;
        box-shadow: none;
        -webkit-appearance: textfield;
        box-sizing: border-box;
        border: none;
        font-size: 100%;
        margin-top: 5px;
        padding: 0;
      }
    }
    .mult-text-add {
      cursor: pointer;
      position: absolute;
      top: 6px;
      right: 0px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      line-height: 22px;
      font-size: 18px;
      color: #444;
      border: 1px solid #777;
      text-align: center;
    }
  }
  & > div:last-child {
    width: 147px;
    margin: 10px auto;
    button {
      padding: 5px 10px;
      font-size: 14px;
      border-radius: 4px;
      outline: 0;
      cursor: pointer;
      border: 1px solid #dcdfe6;
      text-align: center;
      margin: 0 10px;
    }
    .mult-text-cancel {
      color: #444;
      background-color: #fff;
    }
    .mult-text-sure {
      color: #fff;
      background-color: #409eff;
    }
  }
}
</style>
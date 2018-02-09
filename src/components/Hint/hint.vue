<template>
  <div class="hg-hint-wrap" :style="{
    height: height + 'px',
    width: width + 'px',
    'margin-top': -1 * height/2 + 'px',
    'margin-left': -1 * width/2 + 'px',
    'border-radius': radius,
    'background-color': bgColor
  }">
    <slot>
      <div class="hg-hint-content">
        <span><em></em></span>
        <p>修改成功</p>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'hint'
};
</script>

<script>
export default {
  name: 'hint',
  props: {
    height: {
      type: Number,
      default: 108
    },
    width: {
      type: Number,
      default: 140
    },
    bgColor: {
      type: String,
      default: 'rgba(70, 70, 70, 0.5)'
    },
    radius: {
      type: String,
      default: '6px'
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss"  scoped>
.hg-hint-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10000000;
  text-align: center;
  .hg-hint-content {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -37px;
    margin-left: -32px;
    span {
      position: relative;
      display: inline-block;
      height: 40px;
      width: 40px;
      border-radius: 40px;
      border: 2px solid #fff;
      em {
        display: inline-block;
        height: 17px;
        width: 10px;
        border-right: 2px solid #fff;
        border-bottom: 2px solid #fff;
        position: absolute;
        top: 9px;
        left: 14px;
        transform: rotate(45deg);
      }
    }
    p {
      padding-top: 5px;
      color: #fff;
    }
  }
}
</style>
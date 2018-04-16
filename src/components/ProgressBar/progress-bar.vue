<template>
  <div class="hg-progress-bar-wrap" :style="{
    width: width,
    'background-color': unfinishColor,
    'border-radius': radius
  }">
    <div class="hg-progress-bar-inner" :style="{
      height: height,
      width: finishWidth,
      'background-color': finishColor
    }"></div>
  </div>
</template>

<script>
export default {
  name: 'progress-bar',
  props: {
    height: {
      type: String,
      default: '20px'
    },
    width: {
      type: String,
      default: '100%'
    },
    unfinishColor: {
      type: String,
      default: '#f1f1f1'
    },
    finishColor: {
      type: String,
      default: '#2a8ee3'
    },
    finishWidth: {
      type: String,
      default: '40%'
    },
    radius: {
      type: String,
      default: undefined
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.hg-progress-bar-wrap {
  overflow: hidden;
}
</style>
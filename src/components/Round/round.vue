<template>
  <div class="hg-round" :style="{
    height: size,
    width: size,
    'background-color': bgColor,
    border: `${bdSize} ${bdType} ${bdColor}`,
    top: bottom ? undefined : top,
    left: right ? undefined : left,
    right: right,
    bottom: bottom
  }">
  </div>
</template>

<script>
export default {
  name: 'round',
  props: {
    size: {
      type: String,
      default: '20px'
    },
    bgColor: {
      type: String,
      default: '#2a8ee3'
    },
    bdColor: {
      type: String,
      default: '#2a8ee3'
    },
    bdSize: {
      type: String,
      default: '1px'
    },
    bdType: {
      type: String,
      default: 'solid'
    },
    top: {
      type: String,
      default: '0px'
    },
    left: {
      type: String,
      default: '0px'
    },
    right: {
      type: String,
      default: undefined
    },
    bottom: {
      type: String,
      default: undefined
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.hg-round {
  position: absolute;
  border-radius: 50%;
}
</style>
<template>
    <div class="hollow-arrow" :style="{
      height: size,
      width: size,
      'border-top': `${topBdSize} solid ${color}`,
      'border-left': `${leftBdSize} solid ${color}`,
      'border-bottom': `${bottomBdSize} solid ${color}`,
      'border-right': `${rightBdSize} solid ${color}`,
      top: (bottom || bottom === 0) ? undefined : top,
      left: (right || right === 0) ? undefined : left,
      right: right,
      bottom: bottom
    }"></div>
</template>

<script>
export default {
  name: 'hollow-arrow',
  props: {
    size: {
      type: String,
      default: '10px'
    },
    bdSize: {
      type: String,
      default: '1px'
    },
    color: {
      type: String,
      default: '#666'
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
    },
    direction: {
      type: String,
      default: 'right'
    }
  },
  computed: {
    leftBdSize () {
      if (this.direction === 'right' || this.direction === 'top') return 0;
      else return this.bdSize;
    },
    rightBdSize () {
      if (this.direction === 'left' || this.direction === 'bottom') return 0;
      else return this.bdSize;
    },
    topBdSize () {
      if (this.direction === 'right' || this.direction === 'bottom') return 0;
      else return this.bdSize;
    },
    bottomBdSize () {
      if (this.direction === 'left' || this.direction === 'top') return 0;
      else return this.bdSize;
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss"  scoped>
  .hollow-arrow {
    position: absolute;
    background-color:  transparent;
    transform: rotate(-45deg);
  }
</style>
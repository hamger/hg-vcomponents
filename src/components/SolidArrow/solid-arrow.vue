<template>
    <div class="solid-arrow" :style="{
      'border-top': `${size} solid ${topBdColor}`,
      'border-left': `${size} solid ${leftBdColor}`,
      'border-bottom': `${size} solid ${bottomBdColor}`,
      'border-right': `${size} solid ${rightBdColor}`,
      top: (bottom || bottom === 0)? undefined : top,
      left: (right || right === 0) ? undefined : left,
      right: right,
      bottom: bottom
    }"></div>
</template>

<script>
export default {
  name: 'solid-arrow',
  props: {
    size: {
      type: String,
      default: '8px'
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
    leftBdColor () {
      if (this.direction === 'right') return this.color;
      else return 'transparent';
    },
    rightBdColor () {
      if (this.direction === 'left') return this.color;
      else return 'transparent';
    },
    topBdColor () {
      if (this.direction === 'bottom') return this.color;
      else return 'transparent';
    },
    bottomBdColor () {
      if (this.direction === 'top') return this.color;
      else return 'transparent';
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss"  scoped>
  .solid-arrow {
    width: 0;
    height: 0;
    position: absolute;
  }
</style>
<template>
  <div class="arrows-wrap" :style="{
    width: `${wrapWidth}px`,
    height: `${wrapHeight}px`,
    top: bottom ? undefined : top,
    left: right ? undefined : left,
    right: right,
    bottom: bottom
  }">  
    <span :style="{
      width: `${size}px`,
      height: `${size}px`,
      'border-top': `${borderTop} solid ${color}`,
      'border-left': `${borderLeft} solid ${color}`,
      'border-bottom': `${borderBottom} solid ${color}`,
      'border-right': `${borderRight} solid ${color}`,
      'background-color': type === 'solid' ? color : 'transparent',
      left: `${arrowsLeft}px`,
      top: `${arrowsTop}px`
    }"></span>
  </div>
</template>

<script>
export default {
  name: 'arrows',
  props: {
    size: {
      type: Number,
      default: 10
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
      default: 'left'
    },
    type: {
      type: String,
      default: 'hollow'
    }
  },
  computed: {
    borderLeft () {
      if (this.direction === 'right' || this.direction === 'top') return 0;
      else return this.bdSize;
    },
    borderRight () {
      if (this.direction === 'left' || this.direction === 'bottom') return 0;
      else return this.bdSize;
    },
    borderTop () {
      if (this.direction === 'right' || this.direction === 'bottom') return 0;
      else return this.bdSize;
    },
    borderBottom () {
      if (this.direction === 'left' || this.direction === 'top') return 0;
      else return this.bdSize;
    },
    wrapWidth () {
      if (this.direction === 'bottom' || this.direction === 'top') return this.size * 1.5;
      else return this.size * 1.5 / 2;
    },
    wrapHeight () {
      if (this.direction === 'right' || this.direction === 'left') return this.size * 1.5;
      else return this.size * 1.5 / 2;
    },
    arrowsTop () {
      if (this.direction === 'bottom') return -1 * this.size / 2;
      else return this.size / 1.4142 - this.size / 2;
    },
    arrowsLeft () {
      if (this.direction === 'right') return -1 * this.size / 2;
      else return this.size / 1.4142 - this.size / 2;
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss"  scoped>
  .arrows-wrap {
    position: absolute;
    overflow: hidden;
    span {
      content: '';
      position: absolute;
      transform: rotate(-45deg);
    }
  }
</style>
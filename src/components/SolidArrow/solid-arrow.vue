<template>
    <div class="solid-arrow" :style="{
      'border-top': `${getStyle(size)} solid ${topBdColor}`,
      'border-left': `${getStyle(size)} solid ${leftBdColor}`,
      'border-bottom': `${getStyle(size)} solid ${bottomBdColor}`,
      'border-right': `${getStyle(size)} solid ${rightBdColor}`,
      top: bottom ? undefined : getStyle(top),
      left: right ? undefined : getStyle(left),
      right: getStyle(right),
      bottom: getStyle(bottom)
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
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    leftBdColor () {
      if (this.direction === 'right') return this.getStyle(this.color);
      else return 'transparent';
    },
    rightBdColor () {
      if (this.direction === 'left') return this.getStyle(this.color);
      else return 'transparent';
    },
    topBdColor () {
      if (this.direction === 'bottom') return this.getStyle(this.color);
      else return 'transparent';
    },
    bottomBdColor () {
      if (this.direction === 'top') return this.getStyle(this.color);
      else return 'transparent';
    }
  },
  methods: {
    getStyle (str) {
      if (!str) return str
      if (this.active) return str.split('@')[1] || str.split('@')[0]
      else return str.split('@')[0]
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
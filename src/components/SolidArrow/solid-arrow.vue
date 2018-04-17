<template>
    <div class="solid-arrow" :style="{
      'border-top': `${getStyle(size)} solid ${topBdColor}`,
      'border-left': `${getStyle(size)} solid ${leftBdColor}`,
      'border-bottom': `${getStyle(size)} solid ${bottomBdColor}`,
      'border-right': `${getStyle(size)} solid ${rightBdColor}`
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
  }
</style>
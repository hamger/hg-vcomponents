<template>
    <div class="hollow-arrow" :style="{
      height: getStyle(size),
      width: getStyle(size),
      'border-top': `${topBdSize} solid ${getStyle(color)}`,
      'border-left': `${leftBdSize} solid ${getStyle(color)}`,
      'border-bottom': `${bottomBdSize} solid ${getStyle(color)}`,
      'border-right': `${rightBdSize} solid ${getStyle(color)}`
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
    leftBdSize () {
      if (this.direction === 'right' || this.direction === 'top') return 0;
      else return this.getStyle(this.bdSize);
    },
    rightBdSize () {
      if (this.direction === 'left' || this.direction === 'bottom') return 0;
      else return this.getStyle(this.bdSize);
    },
    topBdSize () {
      if (this.direction === 'right' || this.direction === 'bottom') return 0;
      else return this.getStyle(this.bdSize);
    },
    bottomBdSize () {
      if (this.direction === 'left' || this.direction === 'top') return 0;
      else return this.getStyle(this.bdSize);
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
  .hollow-arrow {
    background-color:  transparent;
    transform: rotate(-45deg);
  }
</style>
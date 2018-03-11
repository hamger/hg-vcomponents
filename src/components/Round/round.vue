<template>
  <div class="hg-round" :style="{
    height: getStyle(size),
    width: getStyle(size),
    'background-color': getStyle(bgColor),
    border: `${getStyle(bdSize)} solid ${getStyle(bdColor)}`,
    top: bottom ? undefined : getStyle(top),
    left: right ? undefined : getStyle(left),
    right: getStyle(right),
    bottom: getStyle(bottom)
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
    active: {
      type: Boolean,
      default: false
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

<style lang="scss" rel="stylesheet/scss" scoped>
.hg-round {
  position: absolute;
  border-radius: 50%;
}
</style>
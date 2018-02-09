<template>
  <div class="hg-loading-wrapper">
    <div class="hg-cssload-container" 
      :style="{
        height: diam + size * 2 + 'px'
      }">
      <div class="hg-cssload-speeding-wheel"
        :style="{
          width: `${diam}px`,
          height: `${diam}px`,
          border: `${size}px solid ${color}`,
          'border-left-color': 'transparent',
          'border-right-color': 'transparent'
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    color: {
      type: String,
      default: '#2a8ee3'
    },
    diam: {
      type: Number,
      default: 50
    },
    size: {
      type: Number,
      default: 3
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss"  scoped>
.hg-loading-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: #fff;
}

.hg-cssload-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: auto;
  text-align: center;
}

.hg-cssload-speeding-wheel {
  margin: 0 auto;
  border-radius: 50%;
  animation: cssload-spin 575ms infinite linear;
}

@keyframes cssload-spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
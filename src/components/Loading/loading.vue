<template>
  <div class="hg-loading-wrapper">
    <div class="hg-cssload-container">
      <div class="hg-cssload-speeding-wheel"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading'
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
  height: 49px;
  margin: auto;
  text-align: center;
}

.hg-cssload-speeding-wheel {
  width: 49px;
  height: 49px;
  margin: 0 auto;
  border: 3px solid #2a8ee3;
  border-radius: 50%;
  border-left-color: transparent;
  border-right-color: transparent;
  animation: cssload-spin 575ms infinite linear;
}

@keyframes cssload-spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
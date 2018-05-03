<template>
  <div id="hg-fixed-title" :style="{
    top: top
  }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'fixed-title',
  props: {
    top: {
      type: String,
      default: '0px'
    },
    scrollTop: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    let fixedTitle = document.getElementById('hg-fixed-title');
    window.addEventListener('scroll', (e) => {
      // 兼容各浏览器，获取屏幕scrollTop
      let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      if (scrollTop > this.scrollTop) fixedTitle.style.display = 'block';
      else fixedTitle.style.display = 'none';
    });
  }
};
</script>
<style lang="scss" rel="stylesheet/scss"  scoped>
#hg-fixed-title {
  display: none;
  position: fixed;
  left: 0;
  z-index: 99;
  width: 100%;
}
</style>
<template>
  <div id="hg-to-top" @click="toTop" :style="{
    height: height,
    width: width,
    'border-radius': borderRadius,
    bottom: bottom,
    right: right
  }">
    <slot>
      <span class="hg-to-top-arrows"></span>
    </slot>  
  </div>
</template>

<script>
export default {
  name: 'to-top',
  data () {
    return {};
  },
  props: {
    position: {
      type: Number,
      default: 0
    },
    scrollTop: {
      type: Number,
      default: 667
    },
    bottom: {
      type: String,
      default: '20px'
    },
    right: {
      type: String,
      default: '20px'
    },
    height: {
      type: String,
      default: '30px'
    },
    width: {
      type: String,
      default: '30px'
    },
    borderRadius: {
      type: String,
      default: '6px'
    }
  },
  methods: {
    toTop () {
      window.scroll(0, this.position);
    }
  },
  mounted () {
    let toTopBtn = document.getElementById('hg-to-top');
    window.addEventListener('scroll', (e) => {
      let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      if (scrollTop > this.scrollTop) {
        toTopBtn.style.display = 'block';
      } else {
        toTopBtn.style.display = 'none';
      }
    });
  }
};
</script>

<style lang="scss" rel="stylesheet/scss"  scoped>
  #hg-to-top {
    display: none;
    position: fixed;
    background-color: rgba(70, 70, 70, 0.5);
    z-index: 99;
    .hg-to-top-arrows {
      display: inline-block;
      height: 12px;
      width: 12px;
      border-left: 2px solid #fff;
      border-top: 2px solid #fff;
      position: absolute;
      top: 12px;
      left: 8px;
      transform: rotate(45deg);
    }
  }
</style>
<template>
  <div v-show="visible" class="hg-gallery-wrap">
    <div class="slides" :style="{
      width: slideWidth * imgList.length + 'px',
    }">
      <div
        @click="close"
        class="slide"
        v-for="(item, index) in imgList"
        :key="index"
        :style="{
          width: slideWidth + 'px',
          left: -1 * index * slideWidth + 'px',
          transform: `translate(${index === activeIdx ? 0 : (index < activeIdx ? -1 * slideWidth : slideWidth)}px, 0px) translateZ(0px)`
        }"
      >
        <img @click.stop="() => {}" :src="item" />
      </div>
    </div>
    <div class="hg-gallery-controls">
      <div @click="toPrev" class="prev">‹</div>
      <div @click="toNext" class="next">›</div>
      <div @click="close" class="close">×</div>
      <div class="indicator">
        <div
          v-for="(item, index) in imgList"
          :key="index"
          :class="{dot: true, active: activeIdx === index}"
          @click="activeIdx = index"
          :style="{
            backgroundImage: `url(${item})`
        }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gallery",
  data() {
    return {
      screenWidth: document.body.clientWidth,
      slideWidth: 0,
      activeIdx: 0
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    imgList: {
      type: Array,
      default: []
    },
    initIndex: {
      type: Number,
      default: 0
    },
    closeCallback: {
      type: Function,
      default: () => {}
    }
  },
  watch: {
    initIndex: function(val) {
      this.activeIdx = val;
    }
  },
  methods: {
    toPrev() {
      if (this.activeIdx === 0) {
        this.activeIdx = this.imgList.length - 1;
      } else {
        this.activeIdx = this.activeIdx - 1;
      }
    },
    toNext() {
      if (this.activeIdx === this.imgList.length - 1) {
        this.activeIdx = 0;
      } else {
        this.activeIdx = this.activeIdx + 1;
      }
    },
    close() {
      this.closeCallback();
    }
  },
  mounted() {
    this.slideWidth = document.body.clientWidth;
    window.onresize = () => {
      this.slideWidth = document.body.clientWidth;
    };
  }
};
</script>

<style lang="scss" rel="stylesheet/scss"  scoped>
.hg-gallery-wrap {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999999;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.9);
  touch-action: none;
  direction: ltr;
  .slides {
    position: relative;
    height: 100%;
    overflow: hidden;
    .slide {
      transition-duration: 400ms;
      position: relative;
      float: left;
      height: 100%;
      text-align: center;
      transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        margin: auto;
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        opacity: 1;
        user-select: none;
        border-radius: 5px;
      }
    }
  }
  .hg-gallery-controls {
    .prev,
    .next {
      position: absolute;
      top: 50%;
      width: 40px;
      height: 40px;
      margin-top: -23px;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 60px;
      font-weight: 100;
      line-height: 30px;
      color: #fff;
      text-decoration: none;
      text-shadow: 0 0 2px #000;
      text-align: center;
      background: rgba(0, 0, 0, 0.5);
      box-sizing: content-box;
      border: 3px solid #fff;
      border-radius: 23px;
      opacity: 0.5;
      cursor: pointer;
      user-select: none;
    }
    .prev:hover,
    .next:hover,
    .close:hover {
      color: #fff;
      opacity: 1;
    }
    .prev {
      left: 15px;
    }
    .next {
      right: 15px;
    }
    .close {
      user-select: none;
      padding: 15px;
      right: 15px;
      left: auto;
      margin: -15px;
      font-size: 30px;
      text-decoration: none;
      cursor: pointer;
      position: absolute;
      top: 15px;
      line-height: 30px;
      color: #fff;
      text-shadow: 0 0 2px #000;
      opacity: 0.8;
    }
    .indicator {
      position: absolute;
      right: 15px;
      left: 15px;
      bottom: 15px;
      margin: 0 40px;
      padding: 0;
      list-style: none;
      text-align: center;
      line-height: 10px;
      user-select: none;
      .dot {
        display: inline-block;
        overflow: hidden;
        width: 9px;
        height: 9px;
        margin: 6px 3px 0;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        border: 1px solid transparent;
        background: center no-repeat rgba(255, 255, 255, 0.25);
        border-radius: 100%;
        opacity: 0.5;
        cursor: pointer;
      }
      .active,
      .dot:hover {
        background-color: #fff;
        border-color: #fff;
        opacity: 1;
      }
    }
  }
}
</style>
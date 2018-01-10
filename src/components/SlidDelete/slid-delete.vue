<template>
  <div class="lefdel-wrapper" :style="{
    height: height
  }">
    <div class="move"
    @touchstart="_touchstart"
    @touchmove="_touchmove"
    @touchend="_touchend"
    :style="`transform:translate3d(${disX}px, 0, 0)`">
    <slot></slot>
    </div>
    <div class="delete" :style="{
      width: delWidth + 'px'
    }" @click="_delete"><span>删除</span></div>
  </div>
</template>

<script>
export default {
  name: 'slid-delete',
  props: {
    height: {
      type: String,
      default: '70px'
    },
    delWidth: {
      type: Number,
      default: 70
    }
  },
  data () {
    return {
      startX: 0,
      disX: 0,
      leftSlide: 1
    };
  },
  methods: {
    _touchstart (e) {
      this.startX = e.touches[0].clientX;
      if (this.disX === 0) this.leftSlide = 1;
      if (this.disX === -1 * this.delWidth) this.leftSlide = 0;
    },
    _touchmove (e) {
      let moveX = e.touches[0].clientX;
      let disX = moveX - this.startX;
      if (this.leftSlide) {
        if (disX < -1 * this.delWidth) disX = -1 * this.delWidth;
        if (disX > 0) disX = 0;
        this.disX = disX;
      } else {
        if (disX < 0) disX = 0;
        if (disX > this.delWidth) disX = this.delWidth;
        this.disX = -1 * this.delWidth + disX;
      }
    },
    _touchend (e) {
      // 获取 touchend 时的位置不能使用 e.touches[0]
      let moveX = e.changedTouches[0].clientX - this.startX;
      if (this.leftSlide) {
        if (Math.abs(moveX) >= 0.5 * this.delWidth) this.disX = -1 * this.delWidth;
        else this.disX = 0;
      } else {
        if (Math.abs(moveX) >= 0.5 * this.delWidth) this.disX = 0;
        else this.disX = -1 * this.delWidth;
      }
    },
    _delete () {
      this.$emit('deteleClicked');
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss"  scoped>
  $redFont: #ff3631;
  
  .lefdel-wrapper {
    position: relative;
    width: 100%;
    .move {
      position: absolute;
      width: 100%;
      height: 100%;
      background: #fff;
      z-index: 1;
    }
    .delete {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      background: $redFont;
      text-align: center;
      color: #fff;
    }
  }
  
</style>
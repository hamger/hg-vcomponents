<template>
  <div class="leftdel-wrapper" :style="{
    height: height
  }">
    <div class="leftdel-move"
    @touchstart="_touchstart"
    @touchmove="_touchmove"
    @touchend="_touchend"
    :style="`transform:translate3d(${disX}px, 0, 0)`">
      <slot></slot>
    </div>
    <div class="leftdel-delete" :style="{
      width: delWidth + 'px'
    }" @click="_delete">
      <slot name="delete-btn">
        <div class="leftdel-default-text">删除</div>
      </slot>
    </div>
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
  
  .leftdel-wrapper {
    position: relative;
    .leftdel-move {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #fff;
      z-index: 1;
    }
    .leftdel-delete {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      overflow: hidden;
      .leftdel-default-text {
        display: flex;
        color: #fff;
        height: 100%;
        width: 100%;
        background: $redFont;
        text-align: center;
        justify-content: center;
        align-items: center;
      } 
    }
  }
  
</style>
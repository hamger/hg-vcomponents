<template>
    <div class="view">
      <div ref="wrap" class="wrap"
        @touchstart="_touchstart"
        @touchmove="_touchmove"
        @touchend="_touchend"
        :style="{
          transform: `translate3d(${disX}px, 0, 0)`
        }">
        <slot name="item"></slot>
      </div>
      <ul v-if="showPoint" class="point">
        <li v-for="(p, index) in new Array(itemAmount)"
          :style="{'background-color': index === itemIndex ? 'rgba(240, 240, 240, 0.9)' : ''}"></li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    showPoint: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      startX: 0,
      curPos: 0,
      disX: 0,
      itemWidth: 0,
      itemAmount: 0,
      itemIndex: 0
    };
  },
  methods: {
    _touchstart (e) {
      this.startX = e.touches[0].clientX;
      this.curPos = this.disX;
    },
    _touchmove (e) {
      let moveX = e.touches[0].clientX - this.startX;
      if (moveX > 0 && this.disX >= 0) {
        this.disX = 0;
      } else if (moveX < 0 && this.disX <= -1 * this.itemWidth * (this.itemAmount - 1)) {
        this.disX = -1 * this.itemWidth * (this.itemAmount - 1);
      } else {
        this.disX = this.curPos + moveX;
      }
    },
    _touchend (e) {
      this.itemIndex = -1 * Math.round(this.disX / this.itemWidth);
      this.disX = -1 * this.itemIndex * this.itemWidth;
    }
  },
  mounted () {
    this.itemAmount = this.$slots.item.length;
    this.itemWidth = this.$slots.item[0].elm.offsetWidth;
  }
};
</script>

<style lang="scss" rel="stylesheet/scss"  scoped>
  .view {
    position: relative;
    overflow: hidden;
    font-size: 0;
    .wrap {
      white-space: nowrap;
      width: auto;
      transition: transform 0.2s ease-out;
      & > div {
        display: inline-block;
      }
    }
    .point {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      bottom: 8px;
      text-align: center;
      & > li {
        display:inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin: 0 3px;
        background-color: rgba(240, 240, 240, 0.4);
      }
    }
  }
</style>
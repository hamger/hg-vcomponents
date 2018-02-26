<template>
  <div>
    <div class="el-arrows">
      <div>
        <h4>空心箭头组件</h4>
        <hollow-arrow
          :top="'90px'"
          :left="'90px'">
        </hollow-arrow>
        <hollow-arrow
          :top="'190px'"
          :left="'90px'"
          :direction="'top'"
          :color="'#fff100'"
          :size="'20px'"
          :bdSize="'3px'"
          >
        </hollow-arrow>
        <hollow-arrow
          :top="'290px'"
          :left="'90px'"
          :direction="'bottom'"
          :color="'blue'"
          :size="'15px'"
          >
        </hollow-arrow>
        <hollow-arrow
          :top="'390px'"
          :left="'90px'"
          :direction="'left'"
          :color="'pink'"
          :size="'18px'"
          :bdSize="'4px'"
          >
        </hollow-arrow>
      </div>
      <div>
        <h4>实心箭头组件</h4>
        <solid-arrow
          :top="'90px'"
          :left="'90px'">
        </solid-arrow>
        <solid-arrow
          :top="'190px'"
          :left="'90px'"
          :direction="'top'"
          :color="'red'"
          :size="'10px'"
          >
        </solid-arrow>
        <solid-arrow
          :top="'290px'"
          :left="'90px'"
          :direction="'bottom'"
          :color="'#5ccf57'"
          :size="'15px'"
          >
        </solid-arrow>
        <solid-arrow
          :top="'390px'"
          :left="'90px'"
          :direction="'left'"
          :color="'#ea64ff'"
          :size="'12px'"
          >
        </solid-arrow>
      </div>
    </div>
  </div>
</template>

<script>
import { HollowArrow, SolidArrow } from '@/components';

export default {
  name: 'el-arrows',
  data () {
    return {};
  },
  components: {
    HollowArrow,
    SolidArrow
  }
};
</script>

<style lang="scss" scoped>
  .el-arrows {
    margin-top: 20px;
    text-align: center;
    display: flex;
    & > div {
      flex: 1;
      height: 500px;
      position: relative;
    }
    & > div:first-child {
      border-right: 1px solid #ccc;
    }
  }
</style>

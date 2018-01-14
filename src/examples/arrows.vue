<template>
  <div>
    <div class="el-arrows">
      <div>这是一个箭头组件</div>
      <arrows :size="18"
        :top="'50px'"
        :left="'100px'"
        :direction="'top'"
        :type="'solid'"
        :color="'pink'"
      ></arrows>
      <arrows :size="28"
        :top="'150px'"
        :left="'100px'"
        :direction="'left'"
        :type="'solid'"
        :color="'green'"
      ></arrows>
      <arrows :size="22"
        :top="'250px'"
        :left="'100px'"
        :direction="'right'"
        :type="'solid'"
      ></arrows>
      <arrows :size="18"
        :top="'350px'"
        :left="'100px'"
        :direction="'bottom'"
        :type="'solid'"
        :color="'#27f7de'"
      ></arrows>
      <arrows :size="18"
        :top="'50px'"
        :left="'250px'"
        :direction="'top'"
        :borderSize="'2px'"
        :color="'#b0d433'"
      ></arrows>
      <arrows :size="18"
        :top="'150px'"
        :left="'250px'"
        :direction="'left'"
        :borderSize="'2px'"
      ></arrows>
      <arrows :size="18"
        :top="'250px'"
        :left="'250px'"
        :direction="'right'"
        :color="'#0a02dc'"
      ></arrows>
      <arrows :size="18"
        :top="'350px'"
        :left="'250px'"
        :direction="'bottom'"
        :color="'#e64949'"
      ></arrows>
    </div>
  </div>
</template>

<script>
import { Arrows } from '@/components';

export default {
  name: 'el-arrows',
  data () {
    return {};
  },
  components: {
    Arrows
  }
};
</script>

<style lang="scss" scoped>
  .el-arrows {
    margin-top: 20px;
    height: 600px;
    text-align: center;
    position: relative;
  }
</style>

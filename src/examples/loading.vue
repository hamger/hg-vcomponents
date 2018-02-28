<template>
  <div class="wrap">
    <h4>加载状态组件</h4>
    <div>
      <loading></loading>
    </div>
  </div>
</template>

<script>
import { Loading } from '@/components';

export default {
  name: 'el-loading',
  data () {
    return {
      data: {}
    };
  },
  components: {
    Loading
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  h4 {
    text-align: center;
    padding: 20px 0;
  }
  & > div {
    position: relative;
    height: 600px;
  }
}
</style>

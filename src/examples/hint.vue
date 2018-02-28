<template>
  <div class="wrap">
    <h4>透明提示组件</h4>
    <hint>
      <!-- <div class="content">
        <img src="/static/success.png" width="40" height="40">
        <p>修改成功</p>
      </div> -->
    </hint>
  </div>
</template>

<script>
import { Hint } from '@/components';

export default {
  name: 'el-hint',
  data () {
    return {
      data: {}
    };
  },
  components: {
    Hint
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  h4 {
    text-align: center;
    padding: 20px 0;
  }
  padding:0 15px;
}
</style>

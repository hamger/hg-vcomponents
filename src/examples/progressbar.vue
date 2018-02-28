<template>
  <div class="wrap">
    <h4>进度条组件</h4>
    <div class="box">
      <progress-bar></progress-bar>
    </div>
    <div class="box">
      <progress-bar :height="'30px'" :finishColor="'#66dd6d'" finishWidth="20%"></progress-bar>
    </div>
    <div class="box">
      <progress-bar radius="8px" :unfinishColor="'#99ff6d'" finishWidth="70%"></progress-bar>
    </div>
  </div>
</template>

<script>
import { ProgressBar } from '@/components';

export default {
  name: 'el-progress-bar',
  data () {
    return {
      data: {}
    };
  },
  components: {
    ProgressBar
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  h4 {
    text-align: center;
    padding: 20px 0;
  }
  padding: 0 15px;
  .box {
    padding:20px 0;
  }
  .box:nth-child(1) {
    width: 80%;
  }
}
</style>

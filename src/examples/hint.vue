<template>
  <div id="sliddelete">
    <v-hint>
      <!-- <div class="content">
        <img src="/static/success.png" width="40" height="40">
        <p>修改成功</p>
      </div> -->
    </v-hint>
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
    'v-hint': Hint
  }
};
</script>

<style lang="scss" scoped>
  .content {
    padding: 16px 0;
    color: #fff;
    img {
      padding-bottom: 10px;
    }
  }
</style>

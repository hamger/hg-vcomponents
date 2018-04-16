<template>
  <div class="wrap">
    <h4>文本省略组件</h4>
    <omit-text :text="content" :limit="69"></omit-text>
  </div>
</template>

<script>
// import { OmitText } from '@/components';
import { OmitText } from 'hg-vcomponents';

export default {
  name: 'el-omit-text',
  data () {
    return {
      content: '本次募集配套资金将用于以下募集资金投资项目：(1)全媒体云平台项目;(2)互联网电视及网络视频项目;(3)新媒体购物平台建设项目;(4)版权在线交易平台项目;(5)扩大电影电视剧制作产能;(6)优质版权内容购买项目;(7)补充流动资金;(8)支付东方希杰原有股东现金对价。'
    };
  },
  components: {
    OmitText
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

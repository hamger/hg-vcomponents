<template>
  <div>
    <h4 class="title">横幅组件</h4>
    <banner>
      <div @click="toAd(0)" slot="item" class="item"><img src="http://olislpb6q.bkt.clouddn.com/bizhi1.jpg"></div>
      <div @click="toAd(1)" slot="item" class="item"><img src="http://olislpb6q.bkt.clouddn.com/bizhi2.jpg"></div>
      <div @click="toAd(2)" slot="item" class="item"><img src="http://olislpb6q.bkt.clouddn.com/bizhi4.jpg"></div>
    </banner>
  </div>
</template>

<script>
import { Banner } from '@/components';
// import { Banner } from '../../dist/hg-vcomponents.min.js';

export default {
  name: 'el-banner',
  data () {
    return {};
  },
  components: {
    Banner
  },
  methods: {
    toAd (index) {
      // alert('go to Ad ' + index);
    }
  }
};
</script>

<style lang="scss" scoped>
h4.title {
  text-align: center;
  padding: 20px 0;
}

.item {
  img {
    height: 190px;
    width: 100%;
  }
}

</style>

<template>
  <div class="wrap">
    <h4>圆形组件</h4>
    <div>
      <round @click.native="active = !active" 
        :active="active"
        :bgColor="'#2a8ee3@#2F5'"
        style="margin:10px;">
      </round>
      <round 
        :size="'30px@50px'" 
        @click.native="active2 = !active2" 
        :active="active2" 
        :bdColor="'#ed6858'" 
        :bgColor="'#fff@#093'" 
        :bdSize="'3px@6px'"
        style="position:absolute;left:200px;">
      </round>
      <round :size="'40px'"
        @click.native="active3 = !active3"
        :active="active3"  
        :bgColor="'#fb81fd'"
        :bdColor="'rgba(249,206,247,0.6)@rgba(23,44,233,0.5)'"
        :bdSize="'10px'"
        style="position:absolute;left:100px;top:100px;">
      </round>
      <round :size="'50px@90px'" 
        @click.native="active4 = !active4"
        :active="active4"
        :bgColor="'#6a7de2'"
        :bdColor="'#aeeb23'"
        :bdSize="'5px'"
        style="position:absolute;left:200px;top:200px;">
      </round>
      <round :size="'10px'"
        @click.native="active5 = !active5"
        :active="active5"
        :bgColor="'#666@#0080ff'"
        :bdColor="'#999@#99e4ff'"
        :bdSize="'5px'"
        style="position:absolute;right:30px;bottom:10px;">
      </round>
    </div>
  </div>
</template>

<script>
import { Round } from '@/components';
// import { Round } from '../../dist/hg-vcomponents.min.js';

export default {
  name: 'el-round',
  data () {
    return {
      active: false,
      active2: false,
      active3: false,
      active4: false,
      active5: false
    };
  },
  components: {
    Round
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  padding:0 15px;
  h4 {
    text-align: center;
    padding: 20px 0;
  }
  & > div {
    height: 340px;
    position: relative;
  }
}
</style>

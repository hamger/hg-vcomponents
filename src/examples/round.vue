<template>
  <div class="wrap">
    <h4>圆形组件</h4>
    <div>
      <round @click.native="active = !active" 
        :active="active"
        :bgColor="'#2a8ee3@#2F5'">
      </round>
      <round 
        :size="'30px@50px'" 
        @click.native="active2 = !active2" 
        :active="active2" 
        :bdColor="'#ed6858'" 
        :bgColor="'#fff@#093'" 
        :bdSize="'3px@6px'" 
        :left="'100px@90px'">
      </round>
      <round :size="'40px'"
        @click.native="active3 = !active3"
        :active="active3"  
        :bgColor="'#fb81fd'"
        :bdColor="'#ef2ce6'"
        :bdSize="'3px'"
        :top="'100px@150px'"
        :left="'100px@150px'">
      </round>
      <round :size="'50px@90px'" 
        @click.native="active4 = !active4"
        :active="active4"
        :bgColor="'#6a7de2'"
        :bdColor="'#aeeb23'"
        :bdSize="'5px'"
        :top="'200px@180px'" 
        :left="'200px@180px'">
      </round>
      <round :size="'10px'"
        @click.native="active5 = !active5"
        :active="active5"
        :bgColor="'#666@#0080ff'"
        :bdColor="'#999@#99e4ff'"
        :bdSize="'5px'"
        :bottom="'-330px'"
        :right="'10px'">
      </round>
    </div>
  </div>
</template>

<script>
// import { Round } from '@/components';
import { Round } from 'hg-vcomponents';

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
    position: relative;
  }
}
</style>

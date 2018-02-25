<template>
  <div class="wrap">
    <round></round>
    <round :size="'30px'" :bdColor="'#ed6858'" :bgColor="'#fff'" :bdSize="'3px'" :left="'100px'"></round>
    <round :size="'40px'" :bdColor="'#ef2ce6'" :bdSize="'3px'" :top="'100px'" :left="'100px'"></round>
    <round :size="'50px'" :bgColor="'#6a7de2'" :bdColor="'#aeeb23'" :bdType="'dashed'" :bdSize="'5px'" :top="'200px'" :left="'200px'"></round>
    <round :size="'10px'" :bgColor="'#0080ff'" :bdColor="'#99e4ff'" :bdSize="'5px'" :top="'300px'" :left="'200px'"></round>
  </div>
</template>

<script>
import { Round } from '@/components';

export default {
  name: 'el-round',
  data () {
    return {
      data: {}
    };
  },
  components: {
    Round
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  margin: 15px;
  position: relative;
}
</style>

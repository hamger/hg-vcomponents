<template>
  <div id="wrap">
    <loading></loading>
  </div>
</template>

<script>
import { Loading } from '@/components';

export default {
  name: 'hint',
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
</style>

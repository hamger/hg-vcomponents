<template>
  <div class="wrap">
    <h4>画廊组件</h4>
    <button v-for="(item, index) in imgList" :key="index" @click="() => preImg(index)">
      图片{{index + 1}}预览
    </button>
    <gallery :visible="visible" :initIndex="initIndex" :imgList="imgList" :closeCallback="closeCallback"></gallery>
  </div>
</template>

<script>
import { Gallery } from "@/components";
// import { Gallery } from '../../dist/hg-vcomponents.min.js';

export default {
  name: "el-gallery",
  data() {
    return {
      imgList: [
        "//daily-academy.oss-cn-hangzhou.aliyuncs.com/hupanWeb/homepage/img/banner_1.jpg",
        "//daily-academy.oss-cn-hangzhou.aliyuncs.com/hupanWeb/homepage/img/banner_2.jpg",
        "//daily-academy.oss-cn-hangzhou.aliyuncs.com/hupanWeb/homepage/img/banner_5.jpg",
        "//daily-academy.oss-cn-hangzhou.aliyuncs.com/hupanWeb/homepage/img/banner_4.jpg",
        "//daily-academy.oss-cn-hangzhou.aliyuncs.com/hupanWeb/homepage/img/banner8.jpg",
        "//daily-academy.oss-cn-hangzhou.aliyuncs.com/hupanWeb/homepage/img/banner9.jpg",
        "//daily-academy.oss-cn-hangzhou.aliyuncs.com/hupanWeb/homepage/img/banner10.jpg"
      ],
      visible: false,
      initIndex: 0,
    };
  },
  methods: {
    preImg (idx) {
      this.initIndex = idx
      this.visible = true
    },
    closeCallback() {
      this.visible = false;
    }
  },
  components: {
    Gallery
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  h4 {
    text-align: center;
    padding: 20px 0;
  }
  padding: 0 15px;
  button {
    padding: 10px;
    margin: 10px;
  }
}
</style>

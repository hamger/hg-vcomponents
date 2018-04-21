<template>
  <div>
    <h4 class="title">滑动删除组件</h4>
    <ul class="silddelete">
      <li class="silddelete-li" v-for="item in data" v-if="item.show">
        <slid-delete :height="'50px'" :delWidth="60" @deteleClicked="delCelue(item)">
          <div class="silddelete-content">{{item.content}}</div>
          <div class="topic" slot="delete-btn">
            <img src="http://olislpb6q.bkt.clouddn.com/hg-head.png">
          </div>
        </slid-delete>
      </li>
    </ul>
  </div>
</template>

<script>
import { SlidDelete } from '@/components';
// import { SlidDelete } from 'hg-vcomponents';

export default {
  name: 'el-sliddelete',
  data () {
    return {
      data: [{
        show: true,
        content: '飞流直下三千尺'
      }, {
        show: true,
        content: '疑是银河落九天'
      }, {
        show: true,
        content: '欲把西湖比西子'
      }, {
        show: true,
        content: '淡妆浓抹总相宜'
      }]
    };
  },
  components: {
    SlidDelete
  },
  methods: {
    delCelue (item) {
      item.show = false;
    }
  }
};
</script>

<style lang="scss" scoped>
h4.title {
  text-align: center;
  padding: 20px 0;
}
.silddelete {
  line-height: 50px;
  color: #2c3e50;
  text-align: center;
  .silddelete-li {
    .silddelete-content {
      background-color: #F2F2F2;
      border-bottom: 1px solid #b2d2f1;
    }
  }
}
.topic {
  background-color: red;
  text-align: center;
  color: #fff;
  img {
    overflow: hidden;
    width:100%;
    height:100%;
  }
}
</style>

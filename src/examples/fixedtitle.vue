<template>
  <div id="list">
    <h4>表头固定组件<br>页面置顶组件<br></h4>
    <fixed-title :scrollTop="scrollTop">
      <ul>
        <li>
          <p>name</p>
          <p>sex</p>
          <p>age</p>
        </li>
      </ul>
    </fixed-title>
    <ul>
      <li id="listTitle">
        <p>name</p>
        <p>sex</p>
        <p>age</p>
      </li>
      <li v-for="item in data">
        <p>{{item.name}}</p>
        <p>{{item.sex}}</p>
        <p>{{item.age}}</p>
      </li>
    </ul>
    <to-top :scrollTop="500"></to-top>
  </div>
</template>

<script>
import { FixedTitle, ToTop } from '@/components';
// import { FixedTitle, ToTop } from 'hg-vcomponents';

export default {
  name: 'el-fixedtitle',
  data () {
    return {
      scrollTop: 0,
      data: [
        {name: 'Hanger', age: 23, sex: 'male'},
        {name: 'Alex', age: 20, sex: 'female'},
        {name: 'Hanger', age: 23, sex: 'male'},
        {name: 'Alex', age: 20, sex: 'female'},
        {name: 'Hanger', age: 23, sex: 'male'},
        {name: 'Alex', age: 20, sex: 'female'},
        {name: 'Hanger', age: 23, sex: 'male'},
        {name: 'Alex', age: 20, sex: 'female'},
        {name: 'Hanger', age: 23, sex: 'male'},
        {name: 'Alex', age: 20, sex: 'female'},
        {name: 'Hanger', age: 23, sex: 'male'},
        {name: 'Alex', age: 20, sex: 'female'},
        {name: 'Hanger', age: 23, sex: 'male'},
        {name: 'Alex', age: 20, sex: 'female'},
        {name: 'Hanger', age: 23, sex: 'male'},
        {name: 'Alex', age: 20, sex: 'female'},
        {name: 'Hanger', age: 23, sex: 'male'},
        {name: 'Alex', age: 20, sex: 'female'},
        {name: 'Hanger', age: 23, sex: 'male'},
        {name: 'Alex', age: 20, sex: 'female'},
        {name: 'Hanger', age: 23, sex: 'male'},
        {name: 'Alex', age: 20, sex: 'female'},
        {name: 'Hanger', age: 23, sex: 'male'},
        {name: 'Alex', age: 20, sex: 'female'}
      ]
    };
  },
  components: {
    FixedTitle,
    ToTop
  },
  methods: {},
  mounted () {
    this.$nextTick(() => {
      this.scrollTop = document.getElementById('listTitle').offsetTop;
      console.log(this.scrollTop);
    });
  }
};
</script>

<style lang="scss" scoped>
#list {
  color: #2c3e50;
  text-align: center;
  h4 {
    text-align: center;
    padding: 20px 0;
  }
  ul {
    li {
      display: flex;
      border: 1px solid #f1f1f1;
      p {
        height: 70px;
        line-height: 70px;
        flex: 1;
      }
    }
    li:first-child {
      background-color: #f1f1f1;
    }
  }
}
</style>

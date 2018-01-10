import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/examples/index.vue';
import SlidDelete from '@/examples/slidDelete.vue';
import Hint from '@/examples/hint.vue';
import Loading from '@/examples/loading.vue';
import FixedTitle from '@/examples/fixedtitle.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/slidDelete',
      name: 'slidDelete',
      component: SlidDelete
    },
    {
      path: '/hint',
      name: 'hint',
      component: Hint
    },
    {
      path: '/loading',
      name: 'loading',
      component: Loading
    },
    {
      path: '/fixedtitle',
      name: 'fixedtitle',
      component: FixedTitle
    }
  ]
});

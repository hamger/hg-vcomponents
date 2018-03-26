import Vue from 'vue';
import Router from 'vue-router';
const Index = () => import('@/examples/index.vue');
const SlidDelete = () => import('@/examples/sliddelete.vue');
const Hint = () => import('@/examples/hint.vue');
const Loading = () => import('@/examples/loading.vue');
const FixedTitle = () => import('@/examples/fixedtitle.vue');
const Arrows = () => import('@/examples/arrows.vue');
const ProgressBar = () => import('@/examples/progressbar.vue');
const Round = () => import('@/examples/round.vue');
const OmitText = () => import('@/examples/omittext.vue');
const Banner = () => import('@/examples/banner.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/sliddelete',
      name: 'sliddelete',
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
    },
    {
      path: '/arrows',
      name: 'arrows',
      component: Arrows
    },
    {
      path: '/progressbar',
      name: 'progressbar',
      component: ProgressBar
    },
    {
      path: '/round',
      name: 'round',
      component: Round
    },
    {
      path: '/omittext',
      name: 'omittext',
      component: OmitText
    },
    {
      path: '/banner',
      name: 'banner',
      component: Banner
    }
  ]
});

import bbbb from './src/bbbb';

/* istanbul ignore next */
bbbb.install = function (Vue) {
  Vue.component(bbbb.name, bbbb);
};

export default bbbb;
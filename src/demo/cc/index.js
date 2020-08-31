import cc from './src/cc';

/* istanbul ignore next */
cc.install = function (Vue) {
  Vue.component(cc.name, cc);
};

export default cc;
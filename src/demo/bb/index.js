import bb from './src/bb';

/* istanbul ignore next */
bb.install = function (Vue) {
  Vue.component(bb.name, bb);
};

export default bb;
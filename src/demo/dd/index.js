import dd from './src/dd';

/* istanbul ignore next */
dd.install = function (Vue) {
  Vue.component(dd.name, dd);
};

export default dd;
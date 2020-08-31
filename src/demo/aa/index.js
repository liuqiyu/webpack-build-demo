import aa from './src/aa';

/* istanbul ignore next */
aa.install = function (Vue) {
  Vue.component(aa.name, aa);
};

export default aa;
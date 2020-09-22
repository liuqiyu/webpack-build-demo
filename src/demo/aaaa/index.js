import aaaa from './src/aaaa';

/* istanbul ignore next */
aaaa.install = function (Vue) {
  Vue.component(aaaa.name, aaaa);
};

export default aaaa;
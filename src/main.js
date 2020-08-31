import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { aa, bb } from 'asp-demo-ui'

Vue.use(aa)
Vue.use(bb)


// import {
//   Input
// } from 'public/lib/element-ui.common.js'
// Vue.use(Input);

// import aaaa from 'element-ui'
// Vue.use(aaaa);

// import { Button, Select } from 'element-ui';

// Vue.use(Button)
// Vue.use(Select)

// Vue.component(aa.name, aa);
// Vue.component(bb.name, bb);

new Vue({
  render: h => h(App),
}).$mount('#app')

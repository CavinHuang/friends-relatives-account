import Vue from 'vue'
import App from './App.vue'
import uView from "uview-ui";
import mixins from '@/mixins'

Vue.use(uView);

Vue.config.productionTip = false

Vue.mixin(mixins)

new App().$mount()

import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import router from './router'
import mixins from './mixins/mixins'
import store from './store'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const app = createApp(App)
app.mixin(mixins)
app.use( VueSplide )
app.use(store)
app.use(router)
app.mount('#app')

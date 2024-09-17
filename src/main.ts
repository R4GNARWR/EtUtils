import { createApp } from 'vue'
import App from './App.vue'
import vMaskPhone from './directives/vMaskPhone';
import router from './router';

const app = createApp(App);

app.directive('mask-phone', vMaskPhone);

app.use(router);
app.mount('#app')

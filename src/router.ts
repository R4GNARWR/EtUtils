import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue';
import Components from './views/Components.vue';
import Directives from './views/Directives.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/components', component: Components },
  { path: '/directives', component: Directives },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes: routes,
})

export default router;
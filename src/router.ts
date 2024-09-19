import { createMemoryHistory, createRouter } from 'vue-router'

import Directives from './views/Directives.vue';
import Methods from './views/Methods.vue';
import Home from './views/Home.vue';
import Components from './views/Components.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/components', component: Components },
  { path: '/directives', component: Directives },
  { path: '/methods', component: Methods },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes: routes,
})

export default router;
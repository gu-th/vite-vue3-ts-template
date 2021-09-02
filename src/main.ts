import { createApp } from 'vue';
import router from './router/index';

import './res/scss/reset.css'
import './res/scss/common.scss'

import {
  // create naive ui
  create,
  // component
  NButton,
} from 'naive-ui';
import App from './App.vue';
import store from './store';

const naive = create({
  components: [NButton],
});

const app = createApp(App);
app.use(naive);
app.use(router);
app.use(store);

app.mount('#app');

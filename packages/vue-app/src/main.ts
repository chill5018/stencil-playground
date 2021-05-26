import { createApp } from 'vue';
import App from './App.vue';
import { applyPolyfills, defineCustomElements } from 'stencil-demo/loader';

const app = createApp(App);

applyPolyfills().then(() => {
  defineCustomElements().then(() => {
    app.mount('#app');
  })
})



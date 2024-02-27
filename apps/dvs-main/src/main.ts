import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import WujieVue  from "wujie-vue3";
import { RouteLocationRaw } from 'vue-router';
import router from './router'

const { setupApp,preloadApp,bus } = WujieVue;

const subMap: Record<string, string> = {
  "//localhost:1110/": "/dvs-basic/",
  "//localhost:120/": "/dvs-ncdp/"
};


const props = {
  jump: (location: RouteLocationRaw) => {
    router.push(location);
  }
};

Object.keys(subMap).forEach((element: any) => {
  console.log(element, "key")
  setupApp({
    name: element.key,
    url: element.key,
    props
  });
});

const app = createApp(App);
app.use(WujieVue);
app.use(router);
app.mount('#app')

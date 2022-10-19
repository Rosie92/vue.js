import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import * as constants from "constants";

const app=createApp(App)
    app.config.globalProperties.$axios=axios // axios를 global설정. 전역에서 사용하도록 <- this.axios
    app.use(store).use(router).mount('#app')
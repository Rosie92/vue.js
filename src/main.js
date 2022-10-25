import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/router'
import { store } from './store/store'
import axios from "axios";
/*import * as constants from "constants";*/

const app = createApp(App)
// axios를 global설정. 전역에서 사용하도록 <- this.axios
    app.config.globalProperties.$axios = axios;
    app.use(store).
        use(router).
        mount('#app');
    /*app.config.globalProperties.$baseUrl = 'http://183.111.234.51:9001';*/

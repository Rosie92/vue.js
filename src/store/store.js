import { createStore } from 'vuex'
import Language from "@/store/modules/Language";
import StorePractice from "@/store/modules/StorePractice";
// dependencies 추가 "vuex-persistedstate": "^4.1.0"
import createPersistedState from 'vuex-persistedstate';

export const store = createStore({
  modules: {
    Language,
    StorePractice
  },
  plugins: [
    // 웹페이지 새로고침시 vuex state 값 초기화 현상 방지
    createPersistedState({
      storage: window.sessionStorage,
      paths: ['Language'],
    }),
  ],
});
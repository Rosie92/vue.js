import { createStore } from 'vuex'
import Language from "@/store/modules/Language";
import Practice from "@/store/modules/Practice";
// dependencies 추가 "vuex-persistedstate": "^4.1.0"
import createPersistedState from 'vuex-persistedstate';

export const store = createStore({
  modules: {
    Language,
    Practice
  },
  plugins: [
    // 웹페이지 새로고침시 vuex state 값 초기화 현상 방지
    createPersistedState({
      storage: window.sessionStorage,
      paths: ['Language', 'Practice'],
    }),
  ],
});
/* export default createStore({
  state: { // 내 상태값, 변경 & 고정 용이
  },
  getters: { // state가 변경되었어도 기존 값을 가져옴
  },
  mutations: { // state의 상태 값 변경을 담당
  },
  actions: {  // mutations을 실행하여 값을 가져옴
  }
}) */
export const state = { // 내 상태값, 변경 & 고정 용이
    language: 'kr',
};

export const getters = { // state가 변경되었어도 기존 값을 가져옴
    getDefaultLanguage(state) {
        return state.status;
    },
};

export const mutations = { // state의 상태 값 변경을 담당
    setLanguage(state, payload) {
        state.language = payload;
    },
};

export const actions = {  // mutations을 실행하여 값을 가져옴
    settingLanguage({ commit }, payload) {
        commit('setLanguage', payload);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};
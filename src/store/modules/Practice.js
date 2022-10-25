export const state = {
    // 내 상태값, 변경 & 고정 용이
    info: {
        name: '조정규',
        age: '31'
    }
};

export const getters = { // state가 변경되었어도 기존 값을 가져옴
    getDefaultInfo(state) {
        return state.info;
    }
};

export const mutations = {
    // state의 상태 값 변경을 담당, 순차적인 로직들만 선언, 동기 처리
    // commit('함수명', 전달인자) 으로 실행 가능
    setInfo(state, newInfo) {
        state.info = newInfo;  /* state.info.name = newInfo.name;
                                  state.info.age  = newInfo.age; */
    }
};

export const actions = {
    // mutations을 실행하여 값을 가져옴, mutations와 달리 비순차적 또는 비동기 처리 로직들을 선언
    // dispatch('함수명', 전달인자) 로 실행 가능
    settingInfo({commit}, newInfo) {
        commit('setInfo', newInfo);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};
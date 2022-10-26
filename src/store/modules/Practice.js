export const state = {
    // 내 상태값, 변경 & 고정 용이
    info: {
        name: '조정규',
        age: '31'
    }
};

export const getters = {
    // 각 컴포넌트의 계산된 속성 (computed)의 공통 속성으로 정의
    // 여러 컴포넌트에서 동일한 computed가 사용될 경우 이 곳에 정의해서 공통으로 사용
    // getters는 사용자가 어떤식으로 사용하냐에 따라서 역할이 바뀔 수도 있음
    // this.$store.getters['경로명/함수명'];
    getStateInfo(state) {
        return state.info;
    },
    getDefaultStateInfo(state) {
        return state.info = {name: '조정규', age: '31'};
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
    // mutations를 실행하여 값을 가져옴, mutations와 달리 비순차적 또는 비동기 처리 로직들을 선언
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
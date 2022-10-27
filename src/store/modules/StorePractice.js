/* Vuex : Vue 개발에서 상태를 관리해주는 기능을 제공,
     어플리케이션의 모든 컴포넌트들에 대한 중앙 집중식 저장소의 역할 및 관리를 담당.

     🧾 상태관리 패턴 + 라이브러리, Vue의 공식툴이며 ES2015 문법을 기준으로 함
     🧾 Promise를 지원하지만, 혹시 지원하지 못하는 브라우저를 생각해야 한다면 es6-promise도 설치해줘야 함

     Vuex가 없을 경우 컴포넌트간의 데이터(상태)를 주고 받기 위해 props, Emit event, EventBus 활용 등 복잡해짐

     데이터를 store라는 곳을 통해서 관리하고 프로젝트에 존재하는 모든 컴포넌트들이 이 store를 사용 */

export const state = {
    /* 공통으로 참조하기 위한 변수를 정의, 프로젝트의 모든 곳에서 이를 참조 & 사용
        component의 computed 영역 내에서 접근
        기본 접근 방법 : this.$store.state.[items] */
    info: {
        name: '조정규',
        age: '31'
    }
};

export const getters = {
    /* 각 컴포넌트의 계산된 속성 (computed)의 공통 속성으로 정의
        여러 컴포넌트에서 동일한 computed가 사용될 경우 이 곳에 정의해서 공통으로 사용
        getters는 사용자가 어떤식으로 사용하냐에 따라서 역할이 바뀔 수도 있음.
        component의 computed 영역 내에서 접근
        this.$store.getters['경로명/함수명']; */
    getStateInfo(state) {
        return state.info;
    },
    getDefaultStateInfo(state) {
        return state.info = {name: '조정규', age: '31'};
    }
};

export const mutations = {
    /* state의 상태 값 변경을 담당, 순차적인 로직들만 선언, 동기 처리
        component의 Methods 영역 내에서 접근
        commit('함수명', 전달인자) 으로 실행 가능
        기본 접근 방법 : this.$store.commit('경로명/함수명') */
    setInfoName(state, newName) { // mutations
        state.info.name = newName;
    },
    setInfo(state, newInfo) { // actions -> mutations
        state.info = newInfo;  /* state.info.name = newInfo.name;
                                  state.info.age  = newInfo.age; */
    }
};

export const actions = {
    /* mutations를 실행하여 값을 가져옴, mutations와 달리 비순차적 또는 비동기 처리 로직들을 선언
        component의 Methods 영역 내에서 접근
        dispatch('함수명', 전달인자) 로 실행 가능 */
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
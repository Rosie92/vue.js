// store(Vuex)에 관한 주석들은 StorePractice.js 파일 확인
export const state = {
    yoasobi: {
        produce: 'ayase',
        vocal: 'ikura',
        song: [
            'into the night',
            'blue',
            'monster'
        ]
    }
};

export const getters = {
};

export const mutations = {
};

export const actions = {
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};
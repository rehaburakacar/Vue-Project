import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
// import { reject, resolve } from 'core-js/fn/promise';

Vue.use(Vuex);



const state = {
    message : 'berat@mail.com',
    username : '123456'
};
const getters = {
    welcomeStateMessages(state) {
        return `${state.message} ${state.username}`
    }
}
const mutations = {}
const actions = {
    LOGIN: function alert ({commit}, payload) {
        if(payload.email == "berat@mail.com" && payload.password == "123456") {
            return "işlem başarılı"
        }
    }
}



const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;
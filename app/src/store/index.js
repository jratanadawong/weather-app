import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityId: 6167865,
    city: "toronto",
    forecastType: "current",
  },
  mutations,
  actions: {
  },
  modules: {
  }
})

import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations';
import { actions } from './actions';
import { defaultState } from './defaultState';

Vue.use(Vuex);

console.log('defaultState: ', defaultState);

const state = { ...defaultState };

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
  }
})

import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

const state = {
  count: 0,
  status: '',
  infos: null,
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
});

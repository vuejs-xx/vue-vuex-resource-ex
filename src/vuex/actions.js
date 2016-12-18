import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const fetchPosts = ({ commit }) => {
  commit('FETCH_POSTS_REQUEST');
  return Vue.http.get('http://www.apifree.net/weathercity.xml').then((res) => {
    commit('FETCH_POSTS_SUCCESS', res.data);
  }).catch((res) => {
    commit('FETCH_POSTS_FAILURE', res);
    return Promise.reject();
  });
};

export const increasement = ({ commit }) => commit('increase');

export const decreasement = ({ commit }) => commit('decrease');

/* eslint-disable */

import api from '../api';

import {
  LOGIN, REGISTER, LOGOUT
} from "./actions.type";
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from "./mutations.type";
import LocalStorage from "@/services/storage";

const state = {
  token: '',
  user: {},
  isAuthenticated: false
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  async [LOGIN](context, credentials) {
    const data = await api.post('/auth/login', { ...credentials })
    context.commit(SET_AUTH, data);
  },

  async [REGISTER](context, credentials) {
    return await api.post('/auth/register', { ...credentials });
  },

  async [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
}

const mutations = {
  [SET_AUTH](state, data) {
    const { access_token, ...user } = data;
    LocalStorage.setItem('token', access_token);

    state.token = access_token;
    state.user = user;
    state.isAuthenticated = true;
    state.errors = {};
  },
  [PURGE_AUTH](state) {
    LocalStorage.removeItem('token');
    state.isAuthenticated = false;
    state.token = '';
    state.user = {};
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
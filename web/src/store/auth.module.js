/* eslint-disable */

import api from '../api';

import {
  LOGIN, REGISTER, LOGOUT
} from "./actions.type";
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from "./mutations.type";
import LocalStorage from "@/services/storage";

const state = {
  errors: null,
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
    try {
      const data = await api.post('/auth/login', { ...credentials })
      context.commit(SET_AUTH, data);
    } catch (err) {
      context.commit(SET_ERROR, err)
    }
  },

  async [REGISTER](context, credentials) {
    try {
      const data = await api.post('/auth/register', { ...credentials });
    } catch (err) {
      context.commit(SET_ERROR, err);
    }
  },

  async [LOGOUT](context) {
    try {
      context.commit(PURGE_AUTH);
    } catch (err) {
      context.commit(SET_ERROR, err);
    }
  },
}

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
    LocalStorage.removeItem('token');
  },
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
    state.errors = {};
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
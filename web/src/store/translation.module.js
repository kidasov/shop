import { SEARCH_TRANSLATION } from './actions.type';
import { SEARCH_TRANSLATION_MUTATION, SET_ERROR } from './mutations.type';
import api from '../api';

const state = {
  words: [],
  translations: []
};

const getters = {
  words(state) {
    return state.words;
  },
  translations(state) {
    return state.translations;
  }
};

const actions = {
  async [SEARCH_TRANSLATION](context, data) {
    console.log('trying to get translation', data);
    const params = new URLSearchParams(data);
    try {
      const response = await api.get(`/translations/translate${params}`);
      return response;
    } catch (err) {
      context.commit(SET_ERROR, err);
    }
  }
}

const mutations = {
  [SEARCH_TRANSLATION_MUTATION](state, translations) {
    state.translations = translations;
  }
}

export default {
  state,
  actions,
  getters,
  mutations
};
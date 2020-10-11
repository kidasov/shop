import { ADD_TRANSLATION, SEARCH_TRANSLATION } from './actions.type';
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
  },
  firstTranslation(state) {
    return state.translations ? state.translations[0] : null;
  }
};

const actions = {
  async [SEARCH_TRANSLATION](context, data) {
    const params = new URLSearchParams(data);
    try {
      const response = await api.get(`/translations/translate?${params}`);
      context.commit(SEARCH_TRANSLATION_MUTATION, response);
      return response;
    } catch (err) {
      context.commit(SET_ERROR, err);
    }
  },

  async [ADD_TRANSLATION](context, data) {
    try {
      const translation = await api.post('/translations/add', {...data});
      console.log('translation added', translation);
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
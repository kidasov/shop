import { SEARCH_TRANSLATION } from './actions.type';
import { SEARCH_TRANSLATION_MUTATION } from './mutations.type';

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
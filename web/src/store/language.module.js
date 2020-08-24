import api from '../api';
import { ADD_LANGUAGE, GET_LANGUAGES, SELECT_FROM_LANGUAGE, SELECT_TO_LANGUAGE } from './actions.type';
import { ADD_LANGUAGE_MUTATION, SET_LANGUAGES_MUTATION, SET_ERROR, SELECT_FROM_LANGUAGE_MUTATION, SELECT_TO_LANGUAGE_MUTATION  } from './mutations.type';

const state = {
  languages: [],
  selectedFromLanguage: {},
  selectedToLanguage: {}
};

const getters = {
  languages(state) {
    return state.languages.filter(language => language.id !== state.selectedFromLanguage.id && language.id !== state.selectedToLanguage);
  },
  selectedFromLanguage(state) {
    return state.selectedFromLanguage;
  },
  selectedToLanguage(state) {
    return state.selectedToLanguage;
  }
};

const actions = {
  async [ADD_LANGUAGE](context, data) {
    try {
      const response = await api.post('/languages', { ...data })
      return response;
    } catch (err) {
      context.commit(SET_ERROR, err);
    }
  },
  async [GET_LANGUAGES](context, data) {
    try {
      const response = await api.get('/languages', { ...data })
      context.commit(SET_LANGUAGES_MUTATION, response);
    } catch (err) {
      context.commit(SET_ERROR, err);
    }
  },
  [SELECT_FROM_LANGUAGE](context, language) {
    context.commit(SELECT_FROM_LANGUAGE_MUTATION, language);
  },
  [SELECT_TO_LANGUAGE](context, language) {
    context.commit(SELECT_TO_LANGUAGE_MUTATION, language);
  }
}

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [ADD_LANGUAGE_MUTATION](state, language) {
    state.languages.push(language);
  },
  [SET_LANGUAGES_MUTATION](state, languages) {
    state.languages = languages;
  },
  [SELECT_FROM_LANGUAGE_MUTATION](state, language) {
    state.selectedFromLanguage = language;
    if (language.id === state.selectedToLanguage.id) {
      state.selectedToLanguage = {};
    }
  },
  [SELECT_TO_LANGUAGE_MUTATION](state, language) {
    state.selectedToLanguage = language;
    if (language.id === state.selectedFromLanguage.id) {
      state.selectedFromLanguage = {};
    }
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
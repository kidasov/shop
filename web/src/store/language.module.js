import api from '../api';
import { ADD_LANGUAGE, GET_LANGUAGES } from './actions.type';
import { ADD_LANGUAGE_MUTATION, SET_LANGUAGES_MUTATION, SET_ERROR  } from './mutations.type';

const state = {
  languages: []
};

const getters = {
  languages(state) {
    console.log('state', state);
    return state.languages;
  }
};

const actions = {
  async [ADD_LANGUAGE](context, data) {
    try {
      const response = await api.post('/languages', { ...data })
      console.log('data', response);
      return response;
    } catch (err) {
      context.commit(SET_ERROR, err);
    }
  },
  async [GET_LANGUAGES](context, data) {
    try {
      const response = await api.get('/languages', { ...data })
      console.log('data', response);
      context.commit(SET_LANGUAGES_MUTATION, response);
    } catch (err) {
      context.commit(SET_ERROR, err);
    }
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
};

export default {
  state,
  actions,
  mutations,
  getters
};
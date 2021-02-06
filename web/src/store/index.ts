import Vuex from "vuex";

import auth from './auth.module';
import language from './language.module';
import translation from './translation.module';

export default Vuex.createStore({
  modules: {
    auth,
    language,
    translation
  }
});
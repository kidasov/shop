<template>
    <section>
      <div>Hello my world!</div>
      <form @submit.prevent="handleAddLanguage(language)">
        <fieldset class="form-group">
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder="Language"
            v-model="language"
          />
        </fieldset>
        <button class="btn btn-lg btn-primary pull-xs-right">
          Add language
        </button>
      </form>

      <div class="content">
        <div class="left">
          <LanguageBar :selected="selectedFromLanguage" @onSelectLanguage="handSelectFromLanguage" :languages="languages"></LanguageBar>
          <Input @onChange="handleSearchTranslation" />
        </div>
        <div class="right">
          <LanguageBar :selected="selectedToLanguage"   @onSelectLanguage="handleSelectToLanguage" :languages="languages"></LanguageBar>
        </div>
        <div style="margin-top: 20px;">
          <SearchableSelect :items="languages" :selected="selectedFromLanguage" @onSelect="handSelectFromLanguage"></SearchableSelect>
        </div>
      </div>
    </section>
</template>

<script>
import LanguageBar from "./components/LanguageBar";
import Input from "./components/Input";
import SearchableSelect from "../../components/SearchableSelect";
import { ADD_LANGUAGE, GET_LANGUAGES, SELECT_FROM_LANGUAGE, SELECT_TO_LANGUAGE, SEARCH_TRANSLATION } from "@/store/actions.type";

export default {
  name: "Dictionary",
  components: {
    LanguageBar,
    Input,
    SearchableSelect
  },
  

  data() {
    return {
      language: null,
    }
  },

  computed: {
    languages() {
      return this.$store.getters.languages;
    },
    selectedFromLanguage() {
      return this.$store.getters.selectedFromLanguage;
    },
    selectedToLanguage() {
      return this.$store.getters.selectedToLanguage;
    },
  },

  created() {
    this.$store.dispatch(GET_LANGUAGES);
  },

  methods: {
    async handleAddLanguage(name) {
      await this.$store.dispatch(ADD_LANGUAGE, { name });
      await this.$store.dispatch(GET_LANGUAGES);
    },

    handSelectFromLanguage(language) {
      console.log('first selected language', language);
      this.$store.dispatch(SELECT_FROM_LANGUAGE, language);
    },

    handleSelectToLanguage(language) {
      console.log('second selected language', language);
      this.$store.dispatch(SELECT_TO_LANGUAGE, language);
    },

    handleSearchTranslation(word) {
      this.$store.dispatch(SEARCH_TRANSLATION, word);
      console.log('word', word);
    }
  }
}
</script>

<style scoped>
  .content {
    display: grid;
    max-width: 800px;
    grid-template-columns: 600px 600px;
  }

  .left {
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);
  }

  .right {
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);
  }
</style>
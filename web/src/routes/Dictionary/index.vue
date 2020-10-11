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
      <div class="left-select">
        <div class="select-wrapper">
          <SearchableSelect
            :items="languages"
            :selected="selectedFromLanguage"
            @onSelect="handSelectFromLanguage"
          >
          </SearchableSelect>
        </div>
      </div>
      <div class="left-input">
        <Input v-bind:editable="true" @onChange="handleSearchTranslation" />
      </div>
      <div class="right-select">
        <div class="select-wrapper">
          <SearchableSelect
            :items="languages"
            :selected="selectedToLanguage"
            @onSelect="handleSelectToLanguage"
          >
          </SearchableSelect>
        </div>
      </div>
      <div class="right-input">
        <Input v-bind:editable="editableTranslationInput" :value="translation" placeholder="Translation" ref="translationInput" @onChange="handleSetTranslation" />
      </div>
      <div class="right-buttons">
        <table>
          <tbody>
            <tr v-for="translation in translations" :key="translation.id">
              <td>{{translation.secondWord.text}}</td>
              <td>{{translation.firstWord.text}}</td>
            </tr>
          </tbody>
        </table>
        <Button name="Add translation" v-if="showAddTranslationButton" @onClick="handleAddTranslation"></Button>
      </div>
    </div>
  </section>
</template>

<script>
import Input from "./components/Input";
import SearchableSelect from "../../components/SearchableSelect";
import Button from "../../components/Button";
import {
  ADD_LANGUAGE,
  GET_LANGUAGES,
  SELECT_FROM_LANGUAGE,
  SELECT_TO_LANGUAGE,
  SEARCH_TRANSLATION,
  ADD_TRANSLATION
} from "@/store/actions.type";

export default {
  name: "Dictionary",
  components: {
    Input,
    Button,
    SearchableSelect,
  },

  data() {
    return {
      language: null,
      showAddTranslationButton: false,
      editableTranslationInput: false,
      word: '',
      translationWord: '',
      translation: ''
    };
  },

  computed: {
    languages() {
      return this.$store.getters.languages;
    },
    translations() {
      return this.$store.getters.translations;
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
      this.$store.dispatch(SELECT_FROM_LANGUAGE, language);
    },

    handleSelectToLanguage(language) {
      this.$store.dispatch(SELECT_TO_LANGUAGE, language);
    },

    async handleSearchTranslation(word) {
      this.word = word;
      const translations = this.$store.dispatch(SEARCH_TRANSLATION, {
        fromName: this.selectedFromLanguage.name,
        toName: this.selectedToLanguage.name,
        fromId: this.selectedFromLanguage.id,
        toId: this.selectedToLanguage.id,
        word
      });

      if (!translations.length) {
        this.showAddTranslationButton = true;
      }

      console.log('translation', translations);
    },

    handleAddTranslation() {
      if (!this.translationWord) {
        this.editableTranslationInput = true;
        this.$refs.translationInput.focus();
      } else {
        this.$store.dispatch(ADD_TRANSLATION, {
          fromText: this.word,
          toText: this.translationWord,
          fromId: this.selectedFromLanguage.id,
          toId: this.selectedToLanguage.id,
          fromName: this.selectedFromLanguage.name,
          toName: this.selectedToLanguage.name
        })
      }
    },

    handleSetTranslation(translationWord) {
      this.translationWord = translationWord;
    }
  },
};
</script>

<style scoped>
.content {
  display: grid;
  max-width: 800px;
  grid-template-columns: 600px 600px 600px;
  grid-template-rows: 1fr 1fr 1fr;
}

.content > div {
  padding: 16px;
}

.left-select {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  position: relative;
  z-index: 1;
}

.left-input {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.right-select {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  position: relative;
  z-index: 1;
}

.right-input {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.right-buttons {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
}

.select-wrapper {
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>

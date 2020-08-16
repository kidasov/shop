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
        <Input editable="true" @onChange="handleSearchTranslation" />
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
        <Input placeholder="Translation" @onChange="handleSearchTranslation" />
      </div>
      <div class="right-button">
        <Button></Button>
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
    };
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
      this.$store.dispatch(SELECT_FROM_LANGUAGE, language);
    },

    handleSelectToLanguage(language) {
      this.$store.dispatch(SELECT_TO_LANGUAGE, language);
    },

    handleSearchTranslation(word) {
      this.$store.dispatch(SEARCH_TRANSLATION, word);
    },
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

.right-button {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
}

.select-wrapper {
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>

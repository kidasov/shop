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
    <ul id="example-2">
      <li v-bind:key="index" v-for="(item, index) in languages">
        {{ item.name }}
      </li>
    </ul>
  </section>
</template>

<script>
import { ADD_LANGUAGE, GET_LANGUAGES } from "@/store/actions.type";

export default {
  name: "Dictionary",

  data() {
    return {
      language: null,
    }
  },

  computed: {
    languages() {
      return this.$store.getters.languages;
    }
  },

  created() {
    this.$store.dispatch(GET_LANGUAGES);
  },

  methods: {
    async handleAddLanguage(name) {
      await this.$store.dispatch(ADD_LANGUAGE, { name });
      await this.$store.dispatch(GET_LANGUAGES);
    },

  }
}
</script>
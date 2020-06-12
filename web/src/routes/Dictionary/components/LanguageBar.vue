<template>
  <div>
    <div class="buttons-container">
      <LanguageButton v-bind:checked="selected ? language.id === selected.id : false" @onSelectLanguage="handleSelectLanguage"  v-bind:key="language.id" v-for="language in languages" v-bind:language="language">
      </LanguageButton>
    </div>
  </div>
</template>

<script>
import LanguageButton from "./LanguageButton";

export default {
  name: 'LanguageBar',
  components: {
    LanguageButton
  },
  props: {
    languages: [],
    selected: Object
  },
  methods: {
    handleSelectLanguage(language) {
      this.$emit('onSelectLanguage', language);
    }
  }
}
</script>

<style scoped>
  .buttons-container {
    display: flex;
    overflow: auto;
  }
</style>
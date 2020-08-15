<template>
  <div>
    <div class="buttons-container">
      
    </div>
  </div>
</template>

<script>

export default {
  name: 'LanguageBar',
  props: {
    languages: Array,
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
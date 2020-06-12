<template>
  <div role="button"
    v-on:click="handlePress(language)"
    class="button"
    :class="[
      checked ? 'checked' : 'unchecked'
    ]"
  >
    {{language.name}}
    <span clas="language-selector"></span>
  </div>
</template>

<script>
export default {
  name: 'LanguageButton',
  props: {
    onPress: () => {},
    checked: Boolean,
    language: Object
  },
  methods: {
    handlePress(language) {
      this.$emit('onSelectLanguage', language);
    }
  }
}
</script>

<style scoped>
  .button {
    border: none;
    color: rgba(0,0,0,0.54);
    font-size: 14px;
    font-weight: 500;
    line-height: 48px;
    text-transform: uppercase;
    padding: 0 24px;
  }

  .checked {
    content: "";
    width: 100%;
    height: 43px;
    border-bottom: solid 3px #4284f3;
    animation: border-grow .3s cubic-bezier(0.4,0,0.4,1) 0s;
  }
</style>
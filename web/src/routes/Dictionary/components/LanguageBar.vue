<template>
  <div class="content">
    <div class="buttons-container">
      <LanguageButton v-bind:key="language.id" v-for="language in languages" v-bind:name="language.name">
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
    languages: []
  }
}
</script>
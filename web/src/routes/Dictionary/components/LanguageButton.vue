<template>
  <div role="button"
    class="button"
    :class="[
      checked ? 'checked' : 'unchecked'
    ]"
  >
    {{name}}
    <span clas="language-selector"></span>
  </div>
</template>

<script>
export default {
  name: 'LanguageButton',
  props: {
    onPress: () => {},
    name: String,
    checked: Boolean
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
  }

  .checked::after {
    position: absolute;
    top: 0;
    left: 0;
    content: 0;
    width: 100%;
    height: 43px;
    border-bottom: solid 3px #4284f3;
    animation: border-grow .3s cubic-bezier(0.4,0,0.4,1) 0s;
  }
</style>
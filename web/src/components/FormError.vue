<template>
  <div class="form__error__container">
    <span><alert-circle-icon :size="16" fillColor="#d93025" /></span>
    <span class="form__error__message">{{message}}</span>
  </div>
</template>

<script>
  import AlertCircleIcon from "vue3-material-design-icons/AlertCircle.vue";

  export default {
    name: "FormError",

    props: {
      message: String
    },

    components: {
      AlertCircleIcon
    }
  }
</script>

<style scoped>
  .form__error__container {
    display: flex;
    align-items: center;
  }

  .form__error__message {
    color: #d93025;
    font-size: 12px;
    margin-left: 4px;
    margin-bottom: 2px;
  }
</style>
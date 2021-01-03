<template>
  <section class="form__container">
    <div class="form__header">
      <slot name="header"></slot>
    </div>
    <div class="form__body">
      <slot name="body"></slot>
    </div>
    <div class="form__footer">
      <slot name="footer"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "Form",
};
</script>

<style scoped>
.form__container {
  display: grid;
  grid-template-columns: 40px auto 40px; 
  grid-template-rows: 40px repeat(3, auto) 40px;
  width: 450px;
  height: auto;
  min-height: 500px;
  border-radius: 4px;
  border: 1px solid #dadce0;
}

.form__header {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
}

.form__body {
  grid-row: 3 / 4;
  grid-column: 2 / 3;
}

.form__footer {
  grid-row: 4 / 5;
  grid-column: 2 / 3;
}
</style>

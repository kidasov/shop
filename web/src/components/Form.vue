<template>
  <div class="form__container__wrapper">
    <div class="form__backdrop"></div>
    <section class="form__container">
      <div v-if="closeable" class="form__close">
        <div class="form__close__btn" @click="handleOnClose()">
          <close-icon />
        </div>
      </div>
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
  </div>
</template>

<script>
import CloseIcon from "vue3-material-design-icons/Close.vue";

export default {
  name: "Form",

  components: { CloseIcon },

  props: {
    closeable: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    handleOnClose() {
      this.$emit("onClose");
    },
  },
};
</script>

<style scoped>
.form__container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: grid;
  grid-template-columns: 40px auto 40px;
  grid-template-rows: 40px repeat(3, auto) 40px;
  width: 450px;
  height: auto;
  min-height: 500px;
  border-radius: 4px;
  border: 1px solid #dadce0;
  box-sizing: border-box;
  background: #fff;
}

.form__close {
  display: flex;
  grid-row: 1 / 2;
  grid-column: 3 / 4;
  justify-content: flex-end;
  align-items: center;
}

.form__close__btn {
  position: relative;
  cursor: pointer;
  right: 8px;
  top: 4px;
}

.form__header {
  display: flex;
  justify-content: center;
  grid-row: 2 / 3;
  grid-column: 2 / 3;
}

.form__body {
  display: flex;
  grid-row: 3 / 4;
  grid-column: 2 / 3;
}

.form__footer {
  display: flex;
  justify-content: center;
  grid-row: 4 / 5;
  grid-column: 2 / 3;
}

.form__container__wrapper {
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  top: 0;
  left: 0;
  z-index: 200;
}

.form__backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.64;
  background-color: #000;
}
</style>

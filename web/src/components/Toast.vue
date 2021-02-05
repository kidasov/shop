<template>
  <transition
    name="toast-transition"
    appear
    appear-class="toast__appear"
    appear-to-class="toast__appear__to"
    appear-active-class="toast__appear__active"
  >
    <div v-bind:class="containerClasses" @click="handleOnClose()">
      <div class="toast__content">
        <div class="toast__close">
          <div class="toast__close_btn">
            <close-icon size="12" fillColor="#fff" />
          </div>
        </div>
        <div class="toast__header">
          <span class="toast__text">{{ title }}</span>
        </div>
        <div class="toast__message">
          <span class="toast__text">{{ message }}</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import CloseIcon from "vue-material-design-icons/Close.vue";

export default {
  name: "Toast",

  components: { CloseIcon },

  props: {
    title: {
      type: String,
    },
    message: {
      type: String,
    },
    type: {
      type: String,
      defaultValue: "success"
    },
  },

  methods: {
    handleOnClose() {
      this.$emit("onClose");
    },
  },

  computed: {
    containerClasses() {
      return {
        [`toast__container__${this.type}`]: true,
        "toast__container": true,
      }
    }
  }
};
</script>

<style scoped>
.toast__container {
  display: inline-block;
  min-width: 325px;
  background-color: #28a745;
  cursor: pointer;
}

.toast__content {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-template-rows: repeat(2, 1fr);
  padding: 8px 15px;
}

.toast__close {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
}

.toast__header {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  text-align: left;
}

.toast__message {
  grid-row: 2 / 3;
  grid-column: 1 / 3;
  text-align: left;
}

.toast__text {
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
}

.toast__header > .toast__text {
  font-weight: 700;
}

.toast__appear {
  opacity: 0;
}

.toast__appear__active {
  transition: opacity 0.3s ease-in;
}

.toast-transition-leave-active {
  opacity: 0;
  transform: translateY(50%);
  transition: all 0.3s ease-in;
}

.toast__container__success {
  background-color: #81c784;
  border-left: 8px solid #388e3c;
}

.toast__container__error {
  background-color: #e57373;
  border-left: 8px solid #d32f2f;
}

.toast__container__info {
  background-color: #64b5f6;
  border-left: 8px solid #1976d2;
}

.toast__container__warning {
  background-color: #ffb74d;
  border-left: 8px solid #f57c00;
}
</style>

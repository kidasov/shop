<template>
  <div class="input__container">
    <div class="input__content">
      <div class="input__field__container">
        <input
          v-bind:class="inputClasses" v-bind="inputProps"
          v-bind:value="value"
          v-on:input="$emit('input', $event.target.value)"
          v-on:focus="handleOnFocus(true)"
          v-on:blur="handleOnFocus(false)"
        />
        <div v-bind:class="placeholderClasses">
          {{ placeholder }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",

  props: {
    inputProps: Object,
    placeholder: String,
    value: String,
    error: Boolean
  },

  data() {
    return {
      focused: false,
      placeholderFocused: false,
      placeholderFocusedWithText: !!this.value
    }
  },

  computed: {
    placeholderClasses() {
      return {
        placeholder: true,
        'placeholder-focused': this.placeholderFocused,
        'placeholder-focused-with-text': this.placeholderFocusedWithText
      }
    },
    inputClasses() {
      return {
        input: true,
        error: this.error,
      }
    }
  },

  methods: {
    handleOnFocus(focused) {
      this.focused = focused;
      if (!this.focused) {
        if (this.value) {
          this.placeholderFocusedWithText = true;
        } else {
          this.placeholderFocusedWithText = false;
        }
        this.placeholderFocused = false;
      } else {
        this.placeholderFocused = true;
      }
    }
  }
};
</script>

<style scoped>
.input__container {
  height: 56px;
}

.input__field__container {
  position: relative;
  display: flex;
  flex: 1;
  min-width: 0%;
}

.input__content {
  display: flex;
  position: relative;
}

.input {
  display: block;
  box-sizing: content-box;
  border-radius: 4px;
  color: #202124;
  font-size: 16px;
  height: 28px;
  margin: 1px 1px 0 1px;
  padding: 13px 15px;
  z-index: 1;
  border: 1px solid #dadce0;
  flex-shrink: 1;
  background-color: transparent;
  display: block;
  line-height: 24px;
  min-width: 0%;
  outline: none;
  width: 100%;
}

.placeholder {
  transform-origin: bottom left;
  font-size: 16px;
  pointer-events: none;
  position: absolute;
  background: #fff;
  bottom: 17px;
  box-sizing: border-box;
  color: #80868b;
  font-size: 16px;
  font-weight: 400;
  left: 8px;
  max-width: calc(100% - (2 * 8px));
  overflow: hidden;
  padding: 0 8px;
  text-overflow: ellipsis;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  width: auto;
  z-index: 1;
}

input:not([disabled]) ~ .placeholder-focused {
  transform: scale(0.75) translateY(-40px);
  color: #1a73e8;
}

input:not([disabled]) ~ .placeholder-focused-with-text {
  transform: scale(0.75) translateY(-40px);
}

input:not([disabled]):focus {
  border: 2px solid #1a73e8;
}

.error {
  border: 1px solid #d93025;
}

</style>

<template>
  <div class="input-wrap">
    <textarea
      class="content"
      v-if="editable"
      :value="value"
      @input="handleChange($event.target.value)"
      rows="1"
      ref="input"
      autocapitalize="off"
      autocorrect="off"
    >
    </textarea>
    <div v-else class="content placeholder">
      <span class="placeholder-text">{{ placeholder }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",

  props: {
    placeholder: String,
    editable: Boolean,
  },

  data() {
    return {
      value: "",
    };
  },

  methods: {
    handleChange(value) {
      this.value = value;
      this.$emit("onChange", value);
    },

    focus() {
      this.$refs.input.focus();
    },
  },
};
</script>

<style scoped>
.input-wrap {
  min-height: 72px;
  cursor: text;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  position: relative;
}

.content {
  overflow: auto hidden;
  box-sizing: border-box;
  padding-bottom: 18px;
  padding-right: 54px;
  min-height: 140px;
  padding-top: 20px;
  font-size: 24px;
  line-height: 32px;
  padding-left: 28px;
  width: 100%;
  border: 0;
}

textarea:focus {
  border-bottom: 0;
  outline: none !important;
}

.placeholder-text {
  color: #878787;
  font-size: 24px;
  line-height: 32px;
  position: absolute;
  left: 28px;
}
</style>

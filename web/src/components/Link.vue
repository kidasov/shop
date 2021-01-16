<template>
  <div class="link__container">
    <button type="button" @click="handleClick">{{ placeholder }}</button>
  </div>
</template>

<script>
export default {
  name: "Link",

  props: {
    placeholder: String,
  },

  methods: {
    handleClick() {
      this.$emit("onClick");
    }
  }
};
</script>

<style scoped>
  .link__container > button {
    border-radius: 4px;
    display: inline-block;
    font-weight: 500;
    letter-spacing: 0.25px;
    outline: 0;
    position: relative;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    text-align: left;
    border: 0;
    color: #1a73e8;
    font-size: 14px;
  }
</style>
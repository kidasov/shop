<template>
  <div class="button" role="button" @click="handleClick">
    <span class="text">
      {{name}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Button',

  props: {
    name: String
  },

  methods: {
    handleClick() {
      this.$emit('onClick');
    },
  },
};
</script>

<style scoped>
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4285f4;
    border-radius: 4px;
    cursor: pointer;
    padding: 12px 40px;
  }

  .text {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.25px;
    line-height: 26px;
  }
</style>

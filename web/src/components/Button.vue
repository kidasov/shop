<template>
  <div class="button" role="button" @click="handleClick">
    <div class="text">
      {{name}}
    </div>
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
    background-color: #4285f4;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
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

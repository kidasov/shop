<template>
  <div class="input-wrap">
    <input type="text" :placeholder=placeholder @input="handleChange($event.target.value)" />
    <Button name="Add word" @onClick="handleClick"></Button>
  </div>
</template>

<script>
  import Button from "@/components/Button";

  export default {
    name: "AddTranslationInput",
    components: {
      Button
    },

    props: {
      placeholder: String
    },

    data() {
      return {
        value: ''
      }
    },

    methods: {
      handleChange(value) {
        this.value = value;
      },
      handleClick() {
        this.$emit("onClick", this.value);
      }
    }
  }
</script>

<style scoped>
  .input-wrap {
    display: flex;
    justify-content: center;
  }

  input {
    box-sizing: border-box;
    padding-bottom: 18px;
    padding-right: 28px;
    padding-top: 20px;
    font-size: 24px;
    line-height: 32px;
    padding-left: 28px;
    margin-right: 10px;
  }

</style>


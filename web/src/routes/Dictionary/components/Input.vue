<template>
  <div class="input-wrap">
    <textarea :value="value" @input="handleChange($event.target.value)" rows="1" autocapitalize="off" autocorrect="off">
    </textarea>

  </div>
</template>


<script>
export default {
  name: 'Input',

  methods: {
    handleChange(message) {
      this.$emit('onChange', message);
    } 
  }
}
</script>

<style scoped>
  .input-wrap {
    min-height: 72px;
    cursor: text;
  }

  textarea {
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

</style>
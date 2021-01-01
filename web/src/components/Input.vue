<template>
  <div class="container">
    <div class="content">
      <div class="input-container">
        <input class="input-wrapper input" v-bind="inputProps" />
        <div class="placeholder">
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
  },
};
</script>

<style scoped>
.container {
  height: 56px;
}

.input-container {
  position: relative;
  display: flex;
  flex-shring: 1;
  min-width: 0%;
}

.content {
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
  border: 1px solid;
  flex-shrink: 1;
  background-color: transparent;
  display: block;
  line-height: 24px;
  min-width: 0%;
  outline: none;
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

input:not([disabled]):focus ~ .placeholder {
  transform: scale(0.75) translateY(-39px);
}
</style>

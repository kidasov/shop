<template>
  <div>
    <div
      :class="opened ? 'visible' : 'invisible'"
      class="navigation"
    >
      <div class="header">
        <div class="title-container">
          <div class="title">
            <span>Dictionary</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['opened'],

  data() {
    return {
      show: false,
    };
  },

  methods: {
    inside() {
      this.show = true;
    },
    outside() {
      this.show = false;
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
}

.navigation {
  width: 280px;
  background-color: #fff;
  bottom: 0;
  color: #000;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  left: 0;
  z-index: 990;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.28);
}

.visible {
  transform: translateX(0);
}

.invisible {
  transform: translateX(-280px);
}

.header {
  border-bottom: 1px rgba(0,0,0,0.12) solid;
}

.title-container {
  padding: 20px 8px 20px 24px;
  top: 2px;
  height: 48px;
  min-height: 28px;
  display: table-cell;
  vertical-align: middle;
}

.title {
  position: relative;
}

.title > span {
  color: #5f6368;
  opacity: 1;
  font-size: 22px;
  line-height: 24px;
  top: 2px;
}
</style>

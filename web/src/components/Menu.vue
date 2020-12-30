<template>
  <div>
    <div
      :class="opened ? 'visible' : 'invisible'"
      class="navigation"
    >
      <span>{{opened}}</span>
      <span>Menu</span>
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
      console.log('outside click', this.show);
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
  z-index: 990;
  display: -webkit-flex;
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
</style>

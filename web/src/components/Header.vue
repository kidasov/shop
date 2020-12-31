<template>
  <header>
    <div class="container">
      <div class="content">
        <div class="menu-button" @click="handlePressMenu">
          <div>
          <menu-icon :size="24" />
          </div>
        </div>
        <div
          v-click-outside="handlePressMenuOutside"
          @click="handlePressMenuInside"
        >
          <Menu :opened="isMenuOpened" />
        </div>
        <div class="title">
          <span>Personal Dictionary</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Menu from "./Menu";
import MenuIcon from "vue-material-design-icons/Menu.vue";

export default {
  name: "Header",

  components: {
    Menu,
    MenuIcon,
  },

  data() {
    return {
      isMenuOpened: true,
    };
  },

  computed: {
    isOpened() {
      return this.isMenuOpened;
    },
  },

  methods: {
    handlePressMenu(e) {
      this.isMenuOpened = !this.isMenuOpened;
      e.stopPropagation();
    },
    handlePressMenuInside() {
      this.isMenuOpened = true;
    },
    handlePressMenuOutside() {
      this.isMenuOpened = false;
    },
  }
};
</script>

<style scoped>
  header {
    display: block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }

  .container {
    min-width: 0;
    padding: 8px;
  }

  .content {
    flex: 1 1 auto;
    overflow: hidden;
    padding-right: 30px;
    box-sizing: border-box;
    height: 48px;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .menu-button {
    margin: 0 4px;
    padding: 12px;
    overflow: hidden;
    vertical-align: middle;
    cursor: pointer;
    flex: 0 0 auto;
    border-radius: 50%;
  }

  .menu-button > div {
    width: 24px;
    height: 24px;
  }

  .menu-button:focus, .menu-button:hover {
    background-color: rgba(60, 64, 67, 0.1);
    outline: none;
  }

  .title > span {
    font-size: 22px;
    line-height: 24px;
    position: relative;
    top: -1.5px;
    vertical-align: middle;
    color: #5f6368;
    opacity: 1;
  }
</style>


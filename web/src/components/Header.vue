<template>
  <header class="header">
    <menu-icon @click="handlePressMenu" />
    <div
      v-click-outside="handlePressMenuOutside"
      @click="handlePressMenuInside"
    >
      <Menu :opened="isMenuOpened" />
    </div>
    <div>Best web page</div>
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

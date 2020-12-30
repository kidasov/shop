<template>
  <div id="app">
    <header>
      <menu-icon @click="handlePressMenu" />
      <div
        v-click-outside="handlePressMenuOutside"
        @click="handlePressMenuInside"
       >
        <Menu :opened="isMenuOpened"/>
      </div>
      <div>Best web page</div>
    </header>
    <router-view></router-view>
    <div v-if="isAuthenticated">
      <router-link to="/dictionary" >
        You are logged in as {{currentUser.name}} {{currentUser.email}} ! Go to dictionary
      </router-link>
      <div>
        <button @click="handleLogout">
          <span>Logout</span>
        </button>
      </div>
    </div>    
  </div>
</template>

<script>
import { LOGOUT } from "@/store/actions.type";
import Menu from "./components/Menu";
import MenuIcon from 'vue-material-design-icons/Menu.vue';


export default {
  name: 'App',
  components: {
    Menu,
    MenuIcon
  },
  
  data() {
    return {
      isMenuOpened: true
    }
  },

  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },

    currentUser() {
      return this.$store.getters.currentUser;
    },

    isOpened() {
      return this.isMenuOpened;
    }
  },

  methods: {
    handleLogout() {
      this.$store.dispatch(LOGOUT);
    },
    handlePressMenu(e) {
      console.log('click menu icon', e)
      this.isMenuOpened = !this.isMenuOpened;
      e.stopPropagation();
    },
    handlePressMenuInside() {
      this.isMenuOpened = true;
    },
    handlePressMenuOutside() {
      this.isMenuOpened = false;
    },
  },


  directives: {
    "click-outside": {
      bind: function(el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== "function") {
          const compName = vNode.context.name;
          let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`;
          if (compName) {
            warn += `Found in component '${compName}'`;
          }

          console.warn(warn);
        }
        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble;
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e);
          }
        };
        el.__vueClickOutside__ = handler;

        // add Event Listeners
        document.addEventListener("click", handler);
      },

      unbind: function(el) {
        // Remove Event Listeners
        document.removeEventListener("click", el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      },
    },
  },
}
</script>

<style>
html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

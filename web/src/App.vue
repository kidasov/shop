<template>
  <div id="app">
    <Header/>
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

import Header from './components/Header';


export default {
  name: 'App',
  components: {
    Header
  },

  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },

    currentUser() {
      return this.$store.getters.currentUser;
    }
  },

  methods: {
    handleLogout() {
      this.$store.dispatch(LOGOUT);
    }
  }
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
}
</style>

<template>
  <div id="app">
    <Header/>
    <Input :inputProps="inputProps" placeholder="Username" v-model="inputValue" />
    <Button name="Register" @onClick="handleRegister()"></Button>
    <FormError message="Could not find your account" />
    <Toast @onClose="handleOnToastClose()" v-if="showToast" type="warning" title="Title" message="I am a simple toast"/>
    <Toast @onClose="handleOnToastClose()" v-if="showToast" type="info" title="Title" message="I am a simple toast"/>
    <Toast @onClose="handleOnToastClose()" v-if="showToast" type="error" title="Title" message="I am a simple toast"/>
    <Toast @onClose="handleOnToastClose()" v-if="showToast" type="success" title="Title" message="I am a simple toast"/>
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

import { FormError, Header, Input, Button, Toast } from './components';

export default {
  name: 'App',
  components: {
    Header,
    Input,
    Button,
    FormError,
    Toast
  },

  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },

    currentUser() {
      return this.$store.getters.currentUser;
    },

    inputProps() {
      return {
        type: "text",
      }
    }
  },

  data() {
    return {
      inputValue: 'Hello',
      showToast: true,
    };
  },

  methods: {
    handleLogout() {
      this.$store.dispatch(LOGOUT);
    },
    handleRegister() {
      console.log('Handle register');
    },
    handleOnToastClose() {
      this.showToast = false;
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

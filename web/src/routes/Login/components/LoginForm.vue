<template>
  <Form>
    <template v-slot:header>
      <div><span>Login</span></div>
    </template>
    <template v-slot:body>
      <div><span>Body</span></div>
      <form @submit.prevent="handleLogin(username, password)">
        <fieldset class="form-group">
          <Input type="text" v-model="email" placeholder="Email" />
        </fieldset>
        <fieldset class="form-group">
          <Input type="password" v-model="password" placeholder="Password" />
        </fieldset>
        <button>
          Sign in
        </button>
      </form>
    </template>
    <template v-slot:footer>
      <div><span>Footer</span></div>
    </template>
  </Form>
</template>

<script>
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import { LOGIN } from "@/store/actions.type";

export default {
  name: "LoginForm",

  components: {
    Form,
    Input,
  },

  data() {
    return {
      username: null,
      password: null,
      email: null,
    };
  },
  methods: {
    handleLogin() {
      console.log("login");
      this.$store
        .dispatch(LOGIN, { username: this.email, password: this.password })
        .then((res) => console.log("Res", res));
    },
  },
};
</script>

<style scoped>
fieldset {
  border: none;
}
</style>

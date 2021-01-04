<style scoped>
.header {
  font-weight: bold;
  color: rosybrown;
}
</style>

<template>
  <div>
    <LoginForm v-if="showForm" @onClose="handleOnClose()" />

    <section>
      <form @submit.prevent="handleRegister">
        <div>Register</div>
        <fieldset class="form-group">
          <input
            type="text"
            v-model="registerUsername"
            placeholder="Username"
          />
        </fieldset>
        <fieldset class="form-group">
          <input type="text" v-model="registerEmail" placeholder="Email" />
        </fieldset>
        <fieldset class="form-group">
          <input
            type="password"
            v-model="registerPassword"
            placeholder="Password"
          />
        </fieldset>
        <button>
          Register
        </button>
      </form>
    </section>
  </div>
</template>

<script>
import { LOGIN, REGISTER } from "@/store/actions.type";
import LoginForm from "./components/LoginForm";

export default {
  name: "Login",

  components: {
    LoginForm
  },

  data() {
    return {
      username: null,
      password: null,
      email: null,
      registerUsername: null,
      registerEmail: null,
      registerPassword: null,
      showForm: true
    };
  },
  methods: {
    handleSubmit() {
      this.$store
        .dispatch(LOGIN, { username: this.email, password: this.password })
        .then((res) => console.log("Res", res));
    },

    handleRegister() {
      console.log(
        "message",
        this.registerUsername,
        this.registerPassword,
        this.registerEmail
      );
      this.$store
        .dispatch(REGISTER, {
          name: this.registerUsername,
          password: this.registerPassword,
          email: this.registerEmail,
        })
        .then((res) => console.log("Res", res));
    },

    handleOnClose() {
      this.showForm = false;
    }
  },
};
</script>

<style scoped>
fieldset {
  border: 0;
}
</style>

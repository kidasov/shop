<style scoped>
.header {
  font-weight: bold;
  color: rosybrown;
}
</style>

<template>
  <div class="container">
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

    <section>
      <form @submit.prevent="handleSubmit(username, password)">
        <div>Login</div>
        <fieldset class="form-group">
          <input type="text" v-model="email" placeholder="Email" />
        </fieldset>
        <fieldset class="form-group">
          <input type="password" v-model="password" placeholder="Password" />
        </fieldset>
        <button>
          Sign in
        </button>
      </form>
    </section>
  </div>
</template>

<script>
import { LOGIN, REGISTER } from "@/store/actions.type";

export default {
  name: "Login",

  data() {
    return {
      username: null,
      password: null,
      email: null,
      registerUsername: null,
      registerEmail: null,
      registerPassword: null,
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
  },
};
</script>

<style scoped>
fieldset {
  border: 0;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
}
</style>

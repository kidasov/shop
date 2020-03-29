<style scoped>
  .header {
    font-weight: bold;
    color: rosybrown;
  }
</style>

<template>
  <section>
    <form @submit.prevent="handleSubmit(email, password)">
      <fieldset class="form-group">
        <input
          class="form-control form-control-lg"
          type="text"
          v-model="email"
          placeholder="Email"
        />
      </fieldset>
      <fieldset class="form-group">
        <input
          class="form-control form-control-lg"
          type="password"
          v-model="password"
          placeholder="Password"
        />
      </fieldset>
      <button class="btn btn-lg btn-primary pull-xs-right">
        Sign in
      </button>
    </form>
  </section>
</template>

<script>
import { LOGIN } from "@/store/actions.type";

export default {
  name: "Login",

  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    handleSubmit(email, password) {
      this.$store.dispatch(LOGIN, { email, password }).then(res => console.log("Res", res));
    }
  }
}
</script>
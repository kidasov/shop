<template>
  <Form @onClose="handleOnClose()">
    <template v-slot:header>
      <div>
        <h1><span>Login</span></h1>
      </div>
    </template>
    <template v-slot:body>
      <form @submit.prevent="handleLogin(username, password)">
        <div class="login__form__inputs">
          <fieldset class="form-group">
            <Input
              type="text"
              v-model="email"
              placeholder="Email"
              v-bind:error="!!error.statusText"
            />
          </fieldset>
          <fieldset class="form-group">
            <Input
              type="password"
              v-model="password"
              placeholder="Password"
              v-bind:error="!!error.statusText"
            />
          </fieldset>
          <div class="login__form__error">
            <FormError v-if="error.statusText" :message="error.statusText" />
          </div>
        </div>
        <div class="login__form__submit__btn">
          <Button
            name="Sign In"
            @onClick="handleLogin(username, password)"
          ></Button>
        </div>
      </form>
    </template>
    <template v-slot:footer>
      <div class="login__form__register__btn">
        <Link
          placeholder="Create account"
          @onClick="handleOnCreateAccountClick()"
        />
      </div>
    </template>
  </Form>
</template>

<script>
import { Button, Form, FormError, Input, Link } from "../../../components";
import { LOGIN } from "@/store/actions.type";

export default {
  name: "LoginForm",

  components: {
    Form,
    FormError,
    Input,
    Button,
    Link,
  },

  data() {
    return {
      username: null,
      password: null,
      email: null,
      error: {},
    };
  },
  methods: {
    async handleLogin() {
      try {
        await this.$store.dispatch(LOGIN, {
          username: this.email,
          password: this.password,
        });
      } catch (error) {
        this.error = error;
      }
    },

    handleOnClose() {
      this.$emit("onClose");
    },
    handleOnCreateAccountClick() {
      this.$emit("onCreateAccountClick");
    },
  },
};
</script>

<style scoped>
fieldset {
  border: none;
}
.login__form__submit__btn {
  margin-top: auto;
}

form {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.form-group {
  padding: 12px 0;
}

.login__form__register__btn {
  margin-top: 8px;
}

.login__form__error {
  position: absolute;
}

.login__form__inputs {
  position: relative;
}
</style>

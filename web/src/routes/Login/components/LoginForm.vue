<template>
  <Form @onClose="handleOnClose()">
    <template v-slot:header>
      <div>
        <h1><span>Login</span></h1>
      </div>
    </template>
    <template v-slot:body>
      <form @submit.prevent="handleLogin(username, password)">
        <fieldset class="form-group">
          <Input type="text" v-model="email" placeholder="Email" />
        </fieldset>
        <fieldset class="form-group">
          <Input type="password" v-model="password" placeholder="Password" />
        </fieldset>
        <div class="login__form__submit__btn">
          <Button name="Sign In" @onclick="handleLogin(username, password)"></Button>
        </div>
      </form>
    </template>
    <template v-slot:footer>
      <div class="login__form__register__btn">
        <Link placeholder="Create account"/>
      </div>
    </template>
  </Form>
</template>

<script>
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Link from "../../../components/Link";
import { LOGIN } from "@/store/actions.type";

export default {
  name: "LoginForm",

  components: {
    Form,
    Input,
    Button,
    Link
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
      this.$store
        .dispatch(LOGIN, { username: this.email, password: this.password })
        .then((res) => console.log("Res", res));
    },

    handleOnClose() {
      this.$emit("onClose");
    }
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
</style>

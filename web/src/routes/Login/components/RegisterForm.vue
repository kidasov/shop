<template>
  <Form @onClose="handleOnClose()">
    <template v-slot:header>
      <div>
        <h1><span>Register</span></h1>
      </div>
    </template>
    <template v-slot:body>
      <form @submit.prevent="handleRegister(username, password)">
        <fieldset class="form-group">
          <Input type="text" v-model="username" placeholder="Username" />
        </fieldset>
        <fieldset class="form-group">
          <Input type="text" v-model="email" placeholder="Email" />
        </fieldset>
        <fieldset class="form-group">
          <Input type="password" v-model="password" placeholder="Password" />
        </fieldset>
        <div class="register__form__submit__btn">
          <Button
            name="Register"
            @onClick="handleRegister(username, password)"
          ></Button>
        </div>
      </form>
    </template>
    <template v-slot:footer>
      <div class="register__form__login__btn">
        <Link
          placeholder="Already have account?"
          @onClick="handleOnCreateAcoountClick()"
        />
      </div>
    </template>
  </Form>
</template>

<script>
import { Button, Form, Input, Link } from "../../../components";
import { REGISTER } from "@/store/actions.type";

export default {
  name: "RegisterForm",

  components: {
    Form,
    Input,
    Button,
    Link,
  },

  data() {
    return {
      username: null,
      password: null,
      email: null,
      onCreateAccountClick: () => {},
    };
  },
  methods: {
    handleRegister() {
      this.$store
        .dispatch(REGISTER, {
          name: this.name,
          password: this.password,
          email: this.email,
        })
        .then((res) => console.log(res));
    },
    handleOnClose() {
      this.$emit("onClose");
    },
    handleOnCreateAcoountClick() {
      this.$emit("onCreateAccountClick");
    },
  },
};
</script>

<style scoped>
fieldset {
  border: none;
}
.register__form__submit__btn {
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

.register__form__login__btn {
  margin-top: 8px;
}
</style>

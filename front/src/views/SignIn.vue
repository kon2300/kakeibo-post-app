<template>
  <div class="content">
    <p class="is-size-2 has-text-centered">ログイン画面</p>

    <div class="box m-5 has-background-success-light">
      <div class="columns is-centered">
        <img alt="Vue logo" src="@/assets/logo.png">
      </div>

      <div class="columns is-centered">
        <div class="label">
          Email:
          <AppInputForm
            class="column"
            type="email"
            placeholder="ex: XXX@example.com"
          />
        </div>
      </div>

      <div class="columns is-centered">
        <div class="label">
          Password:
          <AppInputForm class="column"
          type="password"
          />
        </div>
      </div>

      <div class="columns is-centered">
        <AppButton :btn-text="'メールアドレスでログインする'" />
      </div>
    </div>

    <div class="columns is-centered">
      <router-link to="/">
        <AppButton :btn-text="'新規登録の方はこちら'" />
      </router-link>
      <AppButton @click="changeSImodalState" :btn-text="'既存のアカウントでログインする'" />
    </div>

    <AppModalSignIn />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import AppInputForm from "@/components/AppInputForm";
import AppButton from "@/components/AppButton";
import AppModalSignIn from "@/components/AppModalSignIn";

export default {
  name: "SignIn",
  components: {
    AppInputForm,
    AppButton,
    AppModalSignIn,
  },
  setup() {
    const store = useStore()

    return {
      changeSImodalState: () => store.commit('changeSImodalState')
    }
  }
};
</script>

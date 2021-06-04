<template>
  <div class="content">
    <p class="is-size-2 has-text-centered">新規登録画面</p>

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
        <AppButton :btn-text="'メールアドレスで登録する'" />
      </div>
    </div>

    <div class="columns is-centered">
      <router-link to="/SignIn">
        <AppButton :btn-text="'登録済の方はこちら'" />      
      </router-link>
      <AppButton @click="changeSUmodalState" :btn-text="'既存のアカウントで登録する'" />
    </div>
    
      <AppModalSignUp />

  </div>
</template>

<script>
import { useStore } from 'vuex';
import AppInputForm from '@/components/AppInputForm';
import AppButton from '@/components/AppButton';
import AppModalSignUp from '@/components/AppModalSignUp';

export default {
  name: "SignUp",
  components: {
    AppInputForm,
    AppButton,
    AppModalSignUp
  },
  setup() {
    const store = useStore()

    return {
      changeSUmodalState: () => store.commit('changeSUmodalState')
    }
  },
};
</script>

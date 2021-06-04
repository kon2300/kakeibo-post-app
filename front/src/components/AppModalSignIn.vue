<template>
  <div class="modal" :class="{'is-active':getSImodalState}">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box m-3 p-0">
        <p class="message-header">ログインアカウントを選んでください</p>
        <div class="columns is-centered">
          <AppButton
            :btn-text="'Githubアカウントでログイン'"
          />
        </div>

        <div class="columns is-centered">
          <AppButton 
            :btn-text="'Googleアカウントでログイン'"
          />
          <AppButton 
            :btn-text="'Twitterアカウントでログイン'"
          />
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="changeSImodalState"></button>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import AppButton from '@/components/AppButton'

export default {
  name: 'AppModalSignIn',
  components: {
    AppButton
  },
  setup() {
    const store = useStore()

    return {
      changeSImodalState: () => store.commit('changeSImodalState'),
      getSImodalState: computed(() => store.getters.getSImodalState)
    }
  }
}
</script>

<style>

</style>
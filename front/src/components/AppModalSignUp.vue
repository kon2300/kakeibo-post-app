<template>
  <div class="modal" :class="{'is-active':getSUmodalState}">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box m-3 p-0">
        <p class="message-header">登録するアカウントを選んでください</p>
        <div class="columns is-centered">
          <AppButton
            :btn-text="'Githubアカウントで登録'"
          />
        </div>

        <div class="columns is-centered">
          <AppButton 
            :btn-text="'Googleアカウントで登録'"
          />
          <AppButton 
            :btn-text="'Twitterアカウントで登録'"
          />
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="changeSUmodalState"></button>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import AppButton from '@/components/AppButton'

export default {
  name: 'AppModalSignUp',
  components: {
    AppButton
  },
  setup() {
    const store = useStore()

    return {
      changeSUmodalState: () => store.commit('changeSUmodalState'),
      getSUmodalState: computed(() => store.getters.getSUmodalState)
    }
  }
}
</script>

<style>

</style>
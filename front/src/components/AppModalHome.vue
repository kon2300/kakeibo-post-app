<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box m-3 p-0">
        <div class="columns is-centered">
          <router-link to="/PostEntry">
            <AppButton :btn-text="'家計簿を投稿する'"/>
          </router-link>
        </div>

        <div class="columns is-centered">
          <router-link to="/EverybodyPosts">
            <AppButton :btn-text="'他の人の家計簿をみる'" />
          </router-link>
          <router-link to="/MyPosts">
            <AppButton :btn-text="'今までの自分の投稿をみる'" />
          </router-link>
        </div>
        
        <div class="columns is-centered">
          <router-link to="/MyHome">
            <AppButton :btn-text="'ホームに戻る'" />
          </router-link>
          <!-- 未実装 -->
          <AppButton :btn-text="'ログアウト'" />
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'

export default {
  name: 'AppModalHome',
  components: {
    AppButton
  }
}
</script>

<style>

</style>
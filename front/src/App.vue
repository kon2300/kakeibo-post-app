<template>
  <div class="app">
    <section class="hero is-primary mb-5 ">
      <div class="hero-body has-text-centered p-4">
        <p class="title is-size-1">
          <router-link to="/">THE LIVING</router-link>
        </p>
        <p class="subtitle">
          ~家計簿公開アプリ~
        </p>
      </div>
    </section>
    
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
    
    <div class="footer mt-5 p-4">
      <p class="title is-size-3">
        THE LIVING
      </p>
      <p class="subtitle">
         ©2021 kon
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  setup() {
    
  },
}
</script>
<style>
</style>
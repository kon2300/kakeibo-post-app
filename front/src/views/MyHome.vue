<template>
  <div class="content">
    <p class="is-size-2 has-text-centered">MyHome</p>

    <div class="tile is-ancestor m-3">
      <div class="tile is-8">
        <div class="tile box">
          <div class="tile is-parent">
            <article class="tile is-child notification">

            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification">

            </article>
          </div>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile
          is-child
          box"
        >
          <div class="content">
            <AppInputForm />
            <router-link to="/PostEntry">
              <AppButton :btnText="'今月の家計簿を投稿する'"/>
            </router-link>
            <router-link to="/EverybodyPosts">
              <AppButton :btnText="'他の人の家計簿をみる'"/>
            </router-link>
            <router-link to="/MyPosts">
              <AppButton :btnText="'今までの自分の投稿をみる'"/>
            </router-link>
          </div>
        </article>
      </div>
    </div>
  <AppModalHome />
  </div>
</template>

<script>
import AppInputForm from "@/components/AppInputForm";
import AppButton from "@/components/AppButton";
import AppModalHome from "@/components/AppModalHome";

export default {
  name: "MyHome",
  components: {
    AppInputForm,
    AppButton,
    AppModalHome
  }
};
</script>

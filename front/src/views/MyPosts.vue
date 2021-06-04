<template>
  <div class="content">
    <p class="is-size-2 has-text-centered">自分過去の投稿</p>
    <div class="box m-5 has-background-success-light">

      <div class="columns is-centered">
        <div class="label">
          投稿内容:
          <AppInputForm
            class="column"
            disabled
            placeholder="内容"
          />
        </div>
      </div>

      <div class="columns is-centered">
        <div class="label">
          投稿内容:
          <AppInputForm
            class="column"
            disabled
            placeholder="内容"
          />
        </div>
      </div>

      <div class="columns is-centered">
        <AppButton :btn-text="'投稿を削除する'" />
      </div>
    </div>

  </div>
</template>

<script>
// import AppInputForm from "@/components/AppInputForm";
import AppButton from "@/components/AppButton";
import AppInputForm from "@/components/AppInputForm";

export default {
  name: "MyPosts",
  components: {
    // AppInputForm,
    AppButton,
    AppInputForm
  }
};
</script>

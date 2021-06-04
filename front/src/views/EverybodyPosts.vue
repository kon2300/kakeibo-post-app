<template>
  <div class="content">
    <p class="is-size-2 has-text-centered">みんなの家計簿</p>
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
          <AppInputForm class="column"
            disabled
            placeholder="内容"
          />
        </div>
      </div>

      <div class="columns is-centered">
        <AppButton :btn-text="'イイね'" />
      </div>
    </div>


  <AppModalPostSerch />
  </div>
</template>

<script>
import AppInputForm from "@/components/AppInputForm";
import AppButton from "@/components/AppButton";
import AppModalPostSerch from "@/components/AppModalPostSerch";

export default {
  name: "EverybodyPosts",
  components: {
    AppInputForm,
    AppButton,
    AppModalPostSerch
  }
};
</script>

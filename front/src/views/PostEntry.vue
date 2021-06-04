<template>
  <div class="content">
    <p class="is-size-2 has-text-centered">投稿内容を入力してください</p>

    <div class="box m-5 has-background-success-light">

      <div class="columns is-centered">
        <div class="label">
          食費:
          <AppInputForm
            class="column"
            type="number"
          />
        </div>
      </div>

      <div class="columns is-centered">
        <div class="label">
          日用雑貨費:
          <AppInputForm
            class="column"
            type="number"
          />
        </div>
      </div>

      <div class="columns is-centered">
        <div class="label">
          居住費:
          <AppInputForm
            class="column"
            type="number"
          />
        </div>
      </div>

      <div class="columns is-centered">
        <div class="label">
          水道・光熱費:
          <AppInputForm
            class="column"
            type="number"
          />
        </div>
      </div>

      <div class="columns is-centered">
        <div class="label">
          通信費:
          <AppInputForm
            class="column"
            type="number"
          />
        </div>
      </div>

      <div class="columns is-centered">
        <div class="label">
          教育・教養費:
          <AppInputForm
            class="column"
            type="number"
          />
        </div>
      </div>

      <div class="columns is-centered">
        <div class="label">
          医療・保険費:
          <AppInputForm
            class="column"
            type="number"
          />
        </div>
      </div>

      <div class="columns is-centered">
        <div class="label">
          交際費:
          <AppInputForm
            class="column"
            type="number"
          />
        </div>
      </div>

      <div class="columns is-centered">
        <div class="label">
          美容・娯楽・衣服費:
          <AppInputForm
            class="column"
            type="number"
          />
        </div>
      </div>

      <div class="columns is-centered">
        <div class="label">
          コメント:
          <AppTextareaForm />
        </div>
      </div>

      <div class="columns is-centered">
        <router-link to="/MyHome">
          <AppButton :btn-text="'投稿内容を確認する'" />
        </router-link>
      </div>

    </div>

  </div>
</template>

<script>
import AppInputForm from "@/components/AppInputForm";
import AppButton from "@/components/AppButton";
import AppTextareaForm from "@/components/AppTextareaForm";

export default {
  name: "PostEntry",
  components: {
    AppInputForm,
    AppButton,
    AppTextareaForm
  },
};
</script>

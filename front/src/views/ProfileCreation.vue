<template>
  <div class="content">
    <p class="is-size-2 has-text-centered">プロフィールを作成してください</p>

    <div class="box m-5 has-background-success-light">
      <div class="columns is-centered">
        <img alt="Vue logo" src="@/assets/logo.png">
      </div>

      <div class="columns is-centered">
        <div class="label">
          お名前:
          <AppInputForm
            class="column"
            placeholder="お名前を入力してください"
          />
        </div>
      </div>

      <div class="columns is-centered">
        <div class="label">
          家族構成:
          <AppSelectFormLivePerson />
        </div>
      </div>

      <div class="columns is-centered">
        <div class="label">
          年齢:
          <AppSelectFormAge />
        </div>
      </div>

      <div class="columns is-centered">
        <div class="label">
          世帯年収:
          <AppSelectFormIncome />
        </div>
      </div>

      <div class="columns is-centered">
        <AppButton :btn-text="'プロフィールを作成する'" />
      </div>
    </div>

    <div class="columns is-centered">
      <AppButton
        :btn-text="'最初の画面に戻る'"
      />
    </div>

  </div>
</template>

<script>
import AppInputForm from "@/components/AppInputForm";
import AppButton from "@/components/AppButton";
import AppSelectFormLivePerson from "@/components/AppSelectFormLivePerson";
import AppSelectFormAge from "@/components/AppSelectFormAge";
import AppSelectFormIncome from "@/components/AppSelectFormIncome";

export default {
  name: "ProfileCreation",
  components: {
    AppInputForm,
    AppButton,
    AppSelectFormLivePerson,
    AppSelectFormAge,
    AppSelectFormIncome
  }
};
</script>

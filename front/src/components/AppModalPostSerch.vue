<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box m-3 p-0 message is-info">
        <p class="message-header">検索条件を選んでください</p>

        <div class="message-body">

          <div class="columns">
            <div class="label column is-size-4 has-text-right">
            年齢:
            </div>    
              <AppSelectFormAge
                class="column"
              />
          </div>

          <div class="columns">
            <div class="label column is-size-4 has-text-right">
            家族構成:
            </div>    
              <AppSelectFormLivePerson
                class="column"
              />
          </div>

          <div class="columns">
            <div class="label column is-size-4 has-text-right">
            年収:
            </div>    
              <AppSelectFormIncome
                class="column"
              />
          </div>

          <div class="columns is-centered">
            <AppButton :btn-text="'検索する'" />
          </div>

        </div>

        <div class="columns is-centered">
          <AppButton :btn-text="'イイねランキングをみる'" />
        </div>

      </div>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
import AppSelectFormAge from '@/components/AppSelectFormAge'
import AppSelectFormIncome from '@/components/AppSelectFormIncome'
import AppSelectFormLivePerson from '@/components/AppSelectFormLivePerson'

export default {
  name: 'AppModalPostSerch',
  components: {
    AppButton,
    AppSelectFormAge,
    AppSelectFormIncome,
    AppSelectFormLivePerson
  }
}
</script>

<style>

</style>
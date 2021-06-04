<template>
<button class="button is-rounded m-3">
  {{ btnText }}
</button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnText: {
      type: String,
      required: true
    } 
  }
}
</script>

<style>

</style>
<template>
  <div class="control">
    <div class="select">
      <select name="liveperson">
        <option v-for="n in 15" :key="n.id">{{ `${n}人` }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSelectFormLivePerson'
}
</script>

<style>

</style>
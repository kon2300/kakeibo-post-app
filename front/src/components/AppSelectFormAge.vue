<template>
  <div class="control">
    <div class="select">
      <select name="age">
        <option v-for="n in 100" :key="n.id">{{ `${n + 20}歳` }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSelectFormAge'
}
</script>

<style>

</style>
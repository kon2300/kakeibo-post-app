<template>
  <div class="control">
    <div class="select">
      <select name="income">
        <option v-for="n in 1000" :key="n.id">{{ `${n}万円` }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSelectFormIncome'
}
</script>

<style>

</style>
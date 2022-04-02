<template>
  <select
    id="selector"
    @input="$emit('update', $event.target.value)"
  >
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>
<script>
export default {
  name: 'Selector',
  props: ['options', "modelValue"],
  emits: ['update'],
}
</script>
<style lang="scss">
</style>
<template>
  <div class="custom-select">
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
  </div>
</template>
<script>
export default {
  name: 'Selector',
  props: ['options', "modelValue"],
  emits: ['update'],
}
</script>
<style lang="scss" scoped>
  .custom-select {
    position: relative;
    select {
      appearance: none;
      outline: 0;
      border: 0;
      box-shadow: none;
      display: flex;
      background-color: lightgrey;
      text-decoration: underline;
      font-weight: bold;
      font-size: 1.25em;
      cursor: pointer;
    }
  }
</style>
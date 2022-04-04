<template>
  <Selector
    class="city-selector"
    id="city"
    :options="options"
    v-model="modelValue"
    @update="updateCity"
  />
</template>
<script>
import Selector from '../../ui/Selector';

export default {
  name: 'CitySelector',
  components: {
    Selector,
  },
  methods: {
    updateCity(city) {
      this.$store.dispatch('updateCity', city);
      this.modelValue = city;
    },
  },
  data() {
    return {
      modelValue: "Toronto",
      // can be moved to constants somewhere at some point
      options: [
        {
          value: "toronto",
          label: "Toronto",
        },
        {
          value: "ottawa",
          label: "Ottawa",
        },
        {
          value: "tokyo",
          label: "Tokyo",
        },
      ],
    }
  },
}
</script>
<style lang="scss">
  .city-selector {
    width: 10em;
    display: flex;
    justify-content: flex-end;
  }
</style>
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
      console.log("Updating!");
      console.log("modelValue: ", this.modelValue);
      console.log("city: ", city);
      this.modelValue = city;
    }
  },
  data() {
    return {
      modelValue: "6167865",
      // Move these options to enum later
      options: [
        {
          value: "6167865",
          label: "Toronto",
          default: true,
        },
        {
          value: "6094817",
          label: "Ottawa",
        },
        {
          value: "1850147",
          label: "Tokyo",
        },
      ],
    }
  },
}
</script>
<style lang="scss">
</style>
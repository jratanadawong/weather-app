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
  mounted() {
    console.log('this.$store.city on mount: ', this.$store.city);
  },
  methods: {
    updateCity(city) {
      this.$store.commit('setCity', city);
      console.log("this.$store.city: ", this.$store.city);
      this.modelValue = city;
    },
  },
  data() {
    return {
      modelValue: "Toronto",
      // Move these options to enum later
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
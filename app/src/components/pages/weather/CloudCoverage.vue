<template>
  <div class="weather-wrapper cloud-coverage-container">
    <img class="weather-icon" :src="icon" />
    <span class="coverage-description">{{ coverage.description }}</span>
  </div>
</template>

<script>
export default {
  name: 'CloudCoverage',
  props: ['coverage'],
  computed: {
    // Generate the weather icon from the API
    icon() {
      return `http://openweathermap.org/img/wn/${this.$props?.coverage?.icon}@2x.png`;
    },
  },
  data: () => {
    return {
    }
  },
  components: {
  },
};
</script>
<style lang="scss">
  .cloud-coverage-container {
    .weather-icon {
      height: 4.25em;
      width: 4.25em;
    }
    .coverage-description {
      font-size: .75em;
      font-style: italic;
      text-transform: capitalize;
    }
  }
</style>
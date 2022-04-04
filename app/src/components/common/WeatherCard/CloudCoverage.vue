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
      // I don't want to host the icons myself, and this is the lowest level component that'll use this
      // icon, so it's going to use a static URL. If I used this in more than one place I'd use a const to
      // determine the image path
      return `http://openweathermap.org/img/wn/${this.$props?.coverage?.icon}@2x.png`;
    },
  },
};
</script>
<style lang="scss">
  .cloud-coverage-container {
    max-width: 50%;
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
<template>
  <span class="weather-details">Details</span>
</template>
<script>
export default {
  name: 'WeatherDetails',
  props: ['weather'],
};
</script>
<style lang="scss">
  .weather-details {
    font-size: .75em;
    background-color: lightgrey;
    font-weight: bold;
    padding: .5em 0;
    width: 100%;
    cursor: pointer;
    &:hover {
      background-color: darkgrey;
    }
  }
</style>
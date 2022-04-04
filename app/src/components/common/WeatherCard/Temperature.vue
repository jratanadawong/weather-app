<template>
  <div class="weather-wrapper temperature-container">
  <div class="temperature-reading">
    <span class="temperature-number">
      {{ celsius }}
    </span>
    <span class="temperature-metric">°C</span>
    </div>
  </div>
</template>

<script>
import { convertKelvinToC } from '../../../helpers';
export default {
  name: 'Temperature',
  props: ['temperature'],
  computed: {
    celsius() {
      // Convert to celsius and round
      return Math.round(convertKelvinToC(this.$props.temperature));
    }
  },
};
</script>
<style lang="scss">
  .temperature-container {
    max-width:50%;
    .temperature-reading {
      display: flex;
      flex-flow: row;
      justify-content: start;
      .temperature-number {
        font-size: 5em;
      }
      .temperature-metric {
        margin-top: 1em;
      }
    }
  }
</style>
<template>
  <div class="weather-container">
    <span class="forecast-date">
      {{ forecastDate }}
    </span>
    <div class="weather-subcontainer">
      <Temperature :temperature="weather.main.temp" />
      <CloudCoverage :coverage="weather.weather[0]" />
    </div>
    <span class="weather-details">View details</span>
  </div>
</template>

<script>
import CloudCoverage from './CloudCoverage';
import Temperature from './Temperature';
import WindSpeed from './WindSpeed';
import { getDay } from '../../../helpers';

export default {
  name: 'WeatherContainer',
  components: {
    CloudCoverage,
    Temperature,
  },
  props: ['weather'],
  computed: {
    forecastDate() {
      return getDay(this.$props.weather.dt);
    },
  },
  data() {
    return {
    }
  }
};
</script>
<style lang="scss">
  .weather-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    padding: .5em;
    // remove before submitting -- used for examining styling quickly
    border: 1px solid black;
    .forecast-date {
      font-weight: bold;
      font-size: 1.25em;
    }
    .weather-subcontainer {
      display: flex;
      flex-flow: row wrap;
    }
    .weather-details {
      font-size: .75em;
      background-color: lightgrey;
      font-weight: bold;
      padding: .5em 0;
      width: 100%;
      cursor: pointer;
    }
  }
  .weather-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
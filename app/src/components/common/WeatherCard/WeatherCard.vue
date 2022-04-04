<template>
  <div class="weather-card">
    <div class="forecast-day">
      {{ forecastDay }}
    </div>
    <div class="forecast-date">
      {{ forecastDate }}
    </div>
    <div class="weather-subcontainer">
      <Temperature :temperature="temperature" />
      <CloudCoverage :coverage="coverage" />
    </div>
    <WeatherDetails :weather="weather" />
  </div>
</template>

<script>
import CloudCoverage from './CloudCoverage';
import Temperature from './Temperature';
import WeatherDetails from './WeatherDetails';
import { getDay, formatDateTime } from '../../../helpers';

export default {
  name: 'WeatherCard',
  components: {
    CloudCoverage,
    Temperature,
    WeatherDetails,
  },
  props: ['weather'],
  computed: {
    forecastDay() {
      return getDay(this.$props.weather.dt * 1000);
    },
    forecastDate(date) {
      return formatDateTime(this.$props.weather.dt * 1000);
    },
    temperature() {
      return this.$props.weather.main.temp;
    },
    coverage() {
      // why are these formatted differently in the API?
      return this.$props.weather.weather[0] || this.$props.weather.weather;
    },
  },
};
</script>
<style lang="scss">
  .weather-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 11.5em;
    height: min-content;
    padding: .5em;
    background-color: white;
    .forecast-day {
      font-weight: bold;
      font-size: 1.25em;
    }
    .forecast-date {
      font-size: .75em;
    }
    .weather-subcontainer {
      display: flex;
      flex-flow: row wrap;
      width: 100%;
      justify-content: center;
    }
  }
  .weather-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
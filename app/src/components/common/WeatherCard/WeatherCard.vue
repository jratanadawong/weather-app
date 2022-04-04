<template>
  <div class="weather-card">
    <span class="forecast-day">
      {{ forecastDay }}
    </span>
    <span class="forecast-date">
      {{ forecastDate }}
    </span>
    <div class="weather-subcontainer">
      <Temperature :temperature="weather.main.temp" />
      <CloudCoverage :coverage="weather.weather[0]" />
    </div>
    <WeatherDetails :weather="weather" />
  </div>
</template>

<script>
import CloudCoverage from './CloudCoverage';
import Temperature from './Temperature';
import WindSpeed from './WindSpeed';
import WeatherDetails from './WeatherDetails';
import { getDay, formatDateTime } from '../../../helpers';

export default {
  name: 'WeatherCard',
  components: {
    CloudCoverage,
    Temperature,
    WeatherDetails,
  },
  mounted() {
    console.log("weather card: ", this.$props.weather);
  },
  props: ['weather'],
  computed: {
    forecastDay() {
      return getDay(this.$props?.weather?.dt || this.$props.weather);
    },
    forecastDate(date) {
      return formatDateTime(this.$props.weather.dt * 1000);
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
    padding: .5em;
    border: 5px solid black;
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
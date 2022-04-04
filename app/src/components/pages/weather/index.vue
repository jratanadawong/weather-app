<template>
  <div class="weather-page-container">
    <Header :city="city" />
    <div class="weather-page-wrapper">
      <span class="last-updated-at">
        Last updated: {{ lastUpdated }}
      </span>
      <div class="weather-card-container">
        <template v-if="isForecast === false">
          <WeatherContainer
            :key="apiEndpoint"
            :weather="weather"
          />
          <div @click="toggleForecast">See Forecast</div>
        </template>
        <template v-else-if="isForecast === true">
          <WeatherContainer
            v-for="forecast in weather.list"
            :key="apiEndpoint"
            :weather="forecast"
          />
        </template>
      </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapMutations, mapState } from 'vuex';
import WeatherContainer from '../../common/WeatherCard';
import Header from '../../layout/Header';

export default {
  name: 'Weather',
  mounted() {
    this.updateLastUpdated();
    this.getWeather();
  },
  methods: {
    ...mapMutations(['viewForecast', 'updateLastUpdated']),
    getWeather() {
      console.log('apiEndpoint: ', this.apiEndpoint);
      axios.get(this.apiEndpoint)
        .then((res) => {
          console.log("res.data: ", res.data);
          this.weather = res.data;
        })
        .catch((err) => {
          console.log('error: ', err);
        });
    },
    toggleForecast() {
      this.isForecast = true;
      this.updateLastUpdated();
      this.viewForecast();
    }
  },
  watch: {
    apiEndpoint(oldVal, newVal) {
      if (oldVal !== newVal) { this.getWeather() }
    }
  },
  computed: {
    ...mapState(['city', 'forecastType', 'lastUpdated']),
    apiEndpoint() {
      return `http://localhost:3080/api/weather/${this.city}/${this.forecastType}`;
    },
  },
  data: () => {
    return {
      weather: { dt: 0 },
      isForecast: false,
    }
  },
  components: {
    WeatherContainer,
    Header,
  },
};
</script>
<style lang="scss">
  .weather-page-wrapper {
    width: 95vw;
    padding-top: .5em;
    margin: 0 2.5vw;
    height: calc(100vh - 5.5em);
    .weather-card-container {
      display: flex;
      flex-flow: row wrap;
      gap: 1em;
      align-items: center;
    }
  }
  .last-updated-at {
    display: flex;
    width: 100%;
    align-items: start;
    font-size: .75em;
    padding-bottom: 2em;
  }
</style>

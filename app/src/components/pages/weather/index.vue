<template>
  <div class="weather-page-container">
    <Header :city="city" />
    <div class="weather-page-wrapper">
      <span class="last-updated-at">
        Last updated: {{ lastUpdated }}
      </span>
      <div class="weather-card-container" :class="{'single': !isForecast}">
        <WeatherContainer
          :key="weather.dt"
          :weather="weather"
        />
        <div class="forecast-button" @click="toggleForecast" v-if="!isForecast">
          See Forecast
        </div>
        <template v-if="isForecast">
          <WeatherContainer
            v-for="forecast in weather"
            :key="forecast.dt"
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
    // Potential issue: data will grab the closest approximate time for the following 5 days, but may break somewhere
    // Potential solution: display morning/afternoon/evening/night OR filter through options more robustly
    deduplicateWeather(weather) {
      const filteredList = weather?.list.filter((value, index, arr) => ((index + 1) % 8 == 0));
      return filteredList;
    },
    getWeather() {
      axios.get(this.apiEndpoint)
        .then((res) => {
          // deduplicate the weather for multiple entries in a given day
          if (this.isForecast) {
            this.weather = [
              this.weather,
              ...this.deduplicateWeather(res.data)
            ]
          } else {
            this.weather = res.data;
          }
        })
        .catch((err) => {
          console.log('error: ', err);
        });
    },
    toggleForecast() {
      this.updateLastUpdated();
      this.viewForecast();
    }
  },
  watch: {
    apiEndpoint(oldVal, newVal) {
      // When the endpoint changes (because the city or forecast type changed), update the weather
      if (oldVal !== newVal) { this.getWeather() }
    }
  },
  computed: {
    ...mapState(['city', 'forecastType', 'lastUpdated']),
    // dynamically generate the API endpoint
    apiEndpoint() {
      return `http://localhost:3080/api/weather/${this.city}/${this.forecastType}`;
    },
    // the forecastType is used to generate the API url string, so this essentializes it to a boolean for rendering
    isForecast() {
      console.log('isForecast: ', this.forecastType === "forecast");
      return this.forecastType === "forecast";
    },
  },
  data: () => {
    return {
      // default value to ensure that the page renders
      weather: { dt: 1649000000 },
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
      justify-content: center;
      transition: all 0.4s ease-in-out;
      &.single {
        justify-content: flex-start;
      }
    }
    .forecast-button {
      align-items: center;
      height: 100%;
      cursor: pointer;
      margin: auto 0;
      &:hover {
        text-decoration: underline;
      }
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

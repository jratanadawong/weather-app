<template>
  <div class="weather-page-container">
    <Header :city="city" />
    <div class="weather-page-wrapper">
      <span class="last-updated-at">
        Last updated: {{ lastUpdated }}
      </span>
      <div
        class="weather-card-container"
        :class="{'single': !isForecast}"
        v-if="weather.main || weather.length > 0"
      >
        <WeatherCard
          :key="weather.dt"
          :weather="weather"
        />
        <div class="forecast-button" @click="toggleForecast" v-if="!isForecast">
          See Forecast
        </div>
        <template v-if="isForecast">
          <WeatherCard
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
import WeatherCard from '../../common/WeatherCard';
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
    // formats the current weather to move the nested weather value to align better with the data that forecasts returns, because for some reason the current weather is an array?
    formatCurrentWeather(weather) {
      return {
        ...weather,
        weather: weather.weather[0],
      }
    },
    // Hits our API to get the weather data
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
            this.weather = this.formatCurrentWeather(res.data);
          }
        })
        .catch((err) => {
          console.log('error: ', err);
        });
    },
    // When forecast is updated, update the lastUpdated date, and hide the forecast button
    toggleForecast() {
      this.updateLastUpdated();
      this.viewForecast();
    }
  },
  watch: {
    apiEndpoint(oldVal, newVal) {
      // Update the weather when the endpoint changes (because the city or forecast type changed)
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
    WeatherCard,
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

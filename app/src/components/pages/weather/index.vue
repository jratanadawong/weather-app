<template>
  <div class="weather-page-container">
    <Header :city="city" />
    <div class="weather-page-wrapper">
      <span class="last-updated-at">
        Last updated: {{ lastUpdate }}
      </span>
      <WeatherContainer :key="apiEndpoint" :weather="weather" />
      <div>See Forecast</div>
      </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import WeatherContainer from '../../common/WeatherCard';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

export default {
  name: 'Weather',
  mounted() {
    this.getWeather();
  },
  methods: {
    getWeather() {
      console.log('apiEndpoint: ', this.apiEndpoint);
      axios.get(this.apiEndpoint)
        .then((res) => {
          this.weather = res.data;
        })
        .catch((err) => {
          console.log('error: ', err);
        });
    },
  },
  watch: {
    apiEndpoint(oldVal, newVal) {
      console.log('oldVal: ', oldVal);
      console.log('newVal: ', newVal);
      if (oldVal !== newVal) { this.getWeather() }
    }
  },
  computed: {
    ...mapState(['city']),
    apiEndpoint() {
      console.log("store value");
      console.log(this.city);
      return `http://localhost:3080/api/weather/${this.city}/current`;
    },
  },
  data: () => {
    return {
      lastUpdate: new Date().toLocaleDateString("en-US", {hour: "numeric", minute: "numeric", second: "numeric"}),
      weather: { dt: 0 },
    }
  },
  components: {
    WeatherContainer,
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
  .weather-page-wrapper {
    width: 95vw;
    padding-top: .5em;
    margin: 0 2.5vw;
  }
  .last-updated-at {
    display: flex;
    width: 100%;
    align-items: start;
    font-size: .75em;
    padding-bottom: 2em;
  }
</style>

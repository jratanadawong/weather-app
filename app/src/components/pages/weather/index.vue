<template>
  <div class="weather-page-container">
    <Header :city="city" />
    <div class="weather-page-wrapper">
      <span class="last-updated-at">
        Last updated: {{ lastUpdate }}
      </span>
      <WeatherContainer :weather="weather" />
      <div>See Forecast</div>
      </div>
    <Footer />
  </div>
</template>

<script>
import WeatherContainer from './WeatherContainer';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

export default {
  name: 'Weather',
  data: () => {
    return {
      lastUpdate: new Date().toLocaleDateString("en-US", {hour: "numeric", minute: "numeric", second: "numeric"}),
      city: 'Toronto',
      weather: {
        "coord": {
          "lon":-79.4163,
          "lat":43.7001,
        },
        "weather": [{
          "id":803,
          "main":"Clouds",
          "description":"broken clouds",
          "icon":"04d"
        }],
        "base":"stations",
        "main":{
          "temp":289.37,
          "feels_like":288.59,
          "temp_min":288.33,
          "temp_max":290.97,
          "pressure":989,
          "humidity":59
        },
        "visibility":10000,
        "wind":{
          "speed":6.26,
          "deg":263,
          "gust":14.75
        },
        "clouds":{
          "all":67
        },
        "dt":1648861509,
        "sys":{
          "type":2,
          "id":2043365,
          "country":"CA",
          "sunrise":1648724451,
          "sunset":1648770147
        },
        "timezone":-14400,
        "id":6167865,
        "name":"Toronto",
        "cod":200
      }
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

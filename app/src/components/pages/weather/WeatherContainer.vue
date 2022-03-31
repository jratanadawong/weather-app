<template>
  <div class="weather-container">
  <span class="last-updated-at">
    Last updated: {{ lastUpdate }}
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

export default {
  name: 'WeatherContainer',
  components: {
    CloudCoverage,
    Temperature,
  },
  props: ['weather'],
  data() {
    return {
      lastUpdate: new Date().toLocaleDateString("en-US", {hour: "numeric", minute: "numeric", second: "numeric"}),
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
    .last-updated-at {
      display: flex;
      width: 100%;
      align-items: start;
      font-size: .75em;
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
    }
  }
  .weather-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
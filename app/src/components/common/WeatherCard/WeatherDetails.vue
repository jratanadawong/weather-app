<template>
  <div class="weather-details" :class="{'active': viewDetails}">
    <div class="weather-details-info" v-show="viewDetails">
      <div class="weather-detail-item">
        <span>High:</span>
        <span>{{Math.round(this.convertKelvinToC(weather.main.temp_max))}}°C</span>
      </div>
      <div class="weather-detail-item">
        <span>Low:</span>
        <span>{{Math.round(this.convertKelvinToC(weather.main.temp_min))}}°C</span>
      </div>
      <div class="weather-detail-item">
        <span>Precipitation:</span>
        <span>{{weather.pop * 100 || 0}}%</span>
      </div>
      <div class="weather-detail-item">
        <span>Wind:</span>
        <span>{{`${this.weather.wind.speed}m/s`}}</span>
      </div>
    </div>
    <div
      class="weather-details-button"
      @click="toggleDetails"
    >
      Details
      <span class="arrow-container" :class="{'active': viewDetails}">
        <span class="arrow" />
      </span>
    </div>
  </div>
</template>
<script>
import TransitionExpand from '../../ui/transitions/Expand';
import { convertKelvinToC } from '../../../helpers';

export default {
  name: 'WeatherDetails',
  props: ['weather'],
  components: {
    TransitionExpand,
  },
  data() {
    return {
      viewDetails: false,
    }
  },
  methods: {
    toggleDetails() { this.viewDetails = !this.viewDetails },
    convertKelvinToC,
  },
};
</script>
<style lang="scss">
  .weather-details {
    width: 100%;
    transition: 0.25s ease;
    .weather-detail-item {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      font-size: .85em;
    }
    .weather-details-button {
      font-size: .75em;
      background-color: lightgrey;
      font-weight: bold;
      padding: .25em 0;
      cursor: pointer;
      &:hover {
        background-color: darkgrey;
      }
      .arrow-container {
        padding-left: .5em;
        .arrow {
          width: 0; 
          height: 0; 
          border-left: .5em solid transparent;
          border-right: .5em solid transparent;
          border-top: .75em solid black;
          display: inline-block;
          text-align: center;
          transition: 0.25s ease;
        }
      }
    }
    &.active{
      .weather-details-button {
        margin-top: .5em;
      }
      .arrow {
        transform: rotate(180deg);
      }
    }
  }
</style>
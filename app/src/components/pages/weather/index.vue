<template>
  <div class="weather-container">
    <Header />
    <div>City Selector</div>
    <div>Cloud Coverage</div>
    <div>Temperature</div>
    <div>Wind Speed</div>
    <div>See Forecast</div>
    <Footer />
  </div>
</template>

<script>
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

export default {
  name: 'Weather',
  components: {
    Header,
    Footer,
  },
};
</script>

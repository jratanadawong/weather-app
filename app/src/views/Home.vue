<template>
  <div class="home">
    <Weather />
  </div>
</template>

<script>
import Weather from '../components/pages/weather';
export default {
  name: 'Home',
  components: {
    Weather,
  }
}
</script>
<style lang="scss">
  .home {
    padding: 0;
    margin: 0;
  }
</style>

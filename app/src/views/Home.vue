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

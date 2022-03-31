<template>
  <div class="weather-wrapper wind-speed-container">
    {{ wind.speed }}<br>
    Wind Speed
  </div>
</template>

<script>
export default {
  name: 'WindSpeed',
  props: ['wind'],
  data: () => {
    return {
    }
  },
};
</script>
<style lang="scss">
</style>
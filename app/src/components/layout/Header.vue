<template>
  <div class="header">
    <div class="header-container">
      <h1>Weather Forecast</h1>
      <Selector />
    </div>
  </div>
</template>

<script>
import Selector from '../ui/Selector';

export default {
  name: 'Header',
  props: ['city'],
  components: {
    Selector,
  }
}
</script>
<style lang="scss">
.header {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100vw;
  height: 5em;
  background-color: lightgrey;
  padding: 0 2.5vw;
  .header-container {
    display: flex;
    width: 95vw;
    height: 100%;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
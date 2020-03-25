<template>
  <div id="app">
    <vwiWarning />
  </div>
</template>

<script>
import vwiWarning from './components/vwiWarning.vue'

export default {
  name: 'App',
  components: {
    vwiWarning
  }
}
</script>

<style>
html, body {
  margin: 0;
}
</style>

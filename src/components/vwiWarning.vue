<template>
  <div class="vwi__content">
    <h1 class="vwi__msg">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'vwiWarning',
  data() {
    return {
      msg: 'IEは使えません'
    }
  }
}
</script>

<style>
.vwi__content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  height: 100vh;
  background: gray;
}
.vwi__msg {
  margin: 0;
  text-align: center;
}
</style>

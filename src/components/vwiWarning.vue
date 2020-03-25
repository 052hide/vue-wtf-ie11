<template>
  <div v-if="isIE" class="vwi__content">
    <h1 class="vwi__msg">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'vwiWarning',
  data() {
    return {
      isIE: false,
      msg: 'IEは使えません'
    }
  },
  created() {
    if (process.env.browser) {
      const userAgent = window.navigator.userAgent.toLowerCase()
      if (userAgent === 'msie' || userAgent === 'trident') {
        this.isIE = true
      }
    }
  }
}
</script>

<style>
.vwi__content {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  opacity: 0.8;
  background: #000;
  color: #fff;
}
.vwi__msg {
  margin: 0;
  text-align: center;
}
</style>

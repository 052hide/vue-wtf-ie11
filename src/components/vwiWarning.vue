<template>
  <div v-if="isIE" class="vwi-warning">
    <p class="vwi-warning__msg">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'vwiWarning',
  props: {
    msg: {
      type: String,
      default: 'Your browser is not supported.'
    },
  },
  data() {
    return {
      isIE: false,
    }
  },
  created() {
    if (process.env.browser) {
      if (window.navigator.userAgent) {
        const userAgent = window.navigator.userAgent.toLowerCase()
        if (userAgent === 'msie' || userAgent === 'trident') {
          this.isIE = true
        }
      }
    }
  }
}
</script>

<style scoped>
.vwi-warning {
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
.vwi-warning__msg {
  margin: 0;
  text-align: center;
}
</style>

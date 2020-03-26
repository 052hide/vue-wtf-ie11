<template>
  <div v-if="isIE" class="vwi-slot">
    <div :style="styles" class="vwi-slot__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'vwiSlot',
  props: {
    maxWidth: {
      type: String,
      default: 'none'
    }
  },
  data() {
    return {
      isIE: false,
    }
  },
  computed: {
    styles() {
      return {
        '--content-max-width': this.maxWidth
      }
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
  },
}
</script>

<style scoped>
.vwi-slot {
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
  background: #fff;
}
.vwi-slot__content {
  --content-max-width: none;
  margin: 0;
  width: 100%;
  max-width: var(--content-max-width);
}
</style>

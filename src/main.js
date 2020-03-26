import vwiWarning from './components/vwiWarning.vue'

const VueWtfIe11 = {
  install(Vue) {
    const components = {
      vwiWarning,
    }
    for(const [name, c] of Object.entries(components)) {
        Vue.component(name, c)
    }
  },
}

export default VueWtfIe11

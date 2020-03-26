import vwiWarning from './components/vwiWarning.vue'
import vwiSlot from './components/vwiSlot.vue'

const VueWtfIe11 = {
  install(Vue) {
    const components = {
      vwiWarning,
      vwiSlot
    }
    for(const [name, c] of Object.entries(components)) {
        Vue.component(name, c)
    }
  },
}

export default VueWtfIe11

# vue-wtf-ie11

## Components
vwiWarning
- props

|  name  |  type   |  default  |
| ------ | ------- | --------- |
|  msg   |  string | Your browser is not supported. |


## Usage

### Nuxt
~/plugins/vueWtfIe11.js:

```javascript
import Vue from 'vue'
import VueWtfIe11 from 'vue-wtf-ie11'
import 'vue-wtf-ie11/dist/vue-wtf-ie11.css'

Vue.use(VueWtfIe11)
```

~/nuxt.config.js

```javascript
export default {
  ...
  plugins: [
    '~/plugins/vueWtfIe11',
    ...
  ],
  ...
}

Vue.use(VueWtfIe11)
```

~/*.vue

```html
<template>
  <div>
    <vwiWarning msg="IEでは使えません" />
  </div>
</template>
```

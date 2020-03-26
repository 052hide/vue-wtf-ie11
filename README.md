# vue-wtf-ie11

## Components
vwiWarning
- slot: no

- props

|  name  |  type   |  default  |
| ------ | ------- | --------- |
|  msg   |  string | Your browser is not supported. |

---
vwiWarning
- slot: yes

- props

|  name     |  type   |  default  |
| --------- | ------- | --------- |
|  maxWidth |  string |  none     |

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
    <vwiWarning msg="Please use Microsoft Edge." />
    <vwiSlot maxWidth="768px">
      <p>Please use <a href="https://www.microsoft.com/en-us/edge/">Microsoft Edge.</a></p>
    </vwiSlot>
  </div>
</template>
```

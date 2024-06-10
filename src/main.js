import 'vuetify/styles'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import { mdi } from 'vuetify/lib/iconsets/mdi.mjs'
import 'vuetify/dist/vuetify.min.css';


import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components

const vuetify = createVuetify({
  components,
  directives,
  mdi,
})

const app = createApp(App)

app.use(router)
app.use(vuetify); // Use Vuetify

app.mount('#app')

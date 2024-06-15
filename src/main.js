import 'vuetify/styles'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import { mdi } from 'vuetify/lib/iconsets/mdi.mjs'
import 'vuetify/dist/vuetify.min.css';
import MasonryWall from '@yeger/vue-masonry-wall'


import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
  components,
  directives,
  mdi,
})

const app = createApp(App)

app.use(router)
app.use(vuetify);
app.use(MasonryWall)

app.mount('#app')
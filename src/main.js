import Vue from 'vue'
import App from './App.vue'


import GSignInButton from 'vue-google-signin-button'
import * as VueGoogleMaps from 'vue2-google-maps'
import store from './store/store'
import router from './router'

Vue.use(GSignInButton)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAOV56wCVW8jARBFtSBrjcnzyARJK_rTvg',
    libraries: 'places'
  },
  installComponents: true,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

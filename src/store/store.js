import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Fingerprint2 from 'fingerprintjs2'
 
Vue.use(axios)

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cliendId: '',
        fingerpring: '',
        fpComponents: [],
        user_id: ''
    },
    mutations: {
        updateUserId (state, value) {
            state.user_id = value
        },

        createFingerpring (state) {
            if (state.fingerpring != '') {
                return
            } else {
                Fingerprint2.getV18(function (result, components) {
                    state.fingerpring = result
                    state.fpComponents = components
                  })
            }
          }
    }
})
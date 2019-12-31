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
        fpComponents: []
    },
    mutations: {
        getClientId (state) {
            axios.get('https://alv-backend-test.herokuapp.com/v1/subscribers').then((response)=>{
                state.settings = response.data;
            }).catch((response)=>{
                response;
            })
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
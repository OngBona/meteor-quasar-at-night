import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 1,
    },
    mutations: {
        increment(state,value) {
            state.count=value
        } 
    },
    actions: {
        incrementAction (context,value) {
            value++;
          context.commit('increment',value)
        }
      }
})
export default store
import Vue from 'vue'
import Vuex from 'vuex'

import { fetchList } from '../api'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state: {
            good: [],
            ask: [],
            share: []
        },

        actions: {
            fetchItems: function ({commit}, key = "good") {
                return fetchList(key).then( res => {
                    if(res.success){
                        commit('addItems', {
                            key,
                            items: res.data
                        })
                    }
                })
            }
        },

        mutations: {
            addItems: function (state, payload) {
                const {key, items} = payload;
                state[key].push(...items);
            }
        }
    })
}

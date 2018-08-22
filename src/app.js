import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import { createStore } from './store'
import { createRouter } from './router'

import App from './components/App.vue'

Vue.mixin({
    beforeMount () {
        const { asyncData } = this.$options
        if (asyncData) {
            asyncData({
                store: this.$store,
                route: this.$route
            })
        }
    }
})

export function createApp() {

    const store = createStore()
    const router = createRouter()

    sync(store, router)

    const app =  new Vue({
        store,
        router,
        render: h => h(App)
    })

    return {
        app,
        store,
        router
    }
}

import Vue from 'vue'
import App from './components/App.vue'

export function createApp() {
    return new Vue({
        render: h => h(App)
    })
}

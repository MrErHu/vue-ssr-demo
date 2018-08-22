import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: "history",
        routes: [{
            path: '/good',
            component: () => import('../components/TopicListCopy.vue')
        },{
            path: '/:id',
            component: () => import('../components/TopicList.vue')
        }]
    })
}

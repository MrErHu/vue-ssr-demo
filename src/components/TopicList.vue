<template>
    <div>
        <div v-for="item in items">
            <span>{{ item.title }}</span>
            <button @click="openTopic(item.id)">打开</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "topic-list",

        beforeRouteUpdate: function (to, from, next) {
            this.$options.asyncData({
                store: this.$store,
                route: to
            });
            next()
        },

        asyncData: function ({ store, route}) {
            if(store.state[route.params.id].length <=0){
                return store.dispatch("fetchItems", route.params.id)
            }else {
                return Promise.resolve()
            }
        },

        computed: {
            items: function () {
                return this.$store.state[this.$route.params.id];
            }
        },

        methods: {
            openTopic: function (id) {
                window.open(`https://cnodejs.org/topic/${id}`)
            }
        }
    }
</script>

<style scoped>

</style>

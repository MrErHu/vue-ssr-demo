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
        name: "topic-list-copy",

        asyncData: function ({ store }) {
            if(store.state["good"].length <= 0){
                return store.dispatch("fetchItems")
            }else {
                return Promise.resolve()
            }
        },

        computed: {
            items: function () {
                return this.$store.state["good"];
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

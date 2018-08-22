<template>
    <div id="app">
        <div>
            <router-link to="/good">Good</router-link>
            <router-link to="/share">Share</router-link>
            <router-link to="/ask">Ask</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "app"
    }
</script>

<style scoped>

</style>

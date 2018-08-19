<template>
    <div>
        <div>当前位置: About</div>
        <router-link to="/">前往Home</router-link>
        <button @click="directHome">按钮: 前往Home</button>
    </div>
</template>

<script>
    export default {
        name: "about",
        methods: {
            directHome: function () {
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>

</style>

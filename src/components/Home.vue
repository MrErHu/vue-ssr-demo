<template>
    <div>
        <div>当前位置: Home</div>
        <router-link to="/about">链接:前往About</router-link>
        <button @click="directAbout">按钮: 前往About</button>
    </div>
</template>

<script>
    export default {
        name: "home",
        methods: {
            directAbout: function () {
                this.$router.push('/about');
            }
        }
    }
</script>

<style scoped>

</style>

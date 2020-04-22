<template>
    <div class="home">
        <h1>首页</h1>
        <page-list></page-list>
    </div>
</template>

<script>
    import PageList from "./components/PageList";
    export default {
        name: "Home",
        components: {PageList}
    }
</script>

<style scoped>
</style>
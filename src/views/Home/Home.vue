<template>
    <div class="home">
        <nav-bar class="nav"><div slot="center">MyNote</div></nav-bar>
        <page-list></page-list>
    </div>
</template>

<script>
    import PageList from "./components/PageList";
    import NavBar from "../../components/NavBar";
    export default {
        name: "Home",
        components: {PageList,NavBar}
    }
</script>

<style scoped>
    .nav{
        font-weight: bold;
    }
</style>
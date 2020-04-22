<template>
    <div>
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">新随笔</el-menu-item>
            <el-menu-item index="3">联系</el-menu-item>
            <el-menu-item index="4">管理</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data(){
            return{
                activeIndex:'1'
            }
        },
        methods:{
            handleSelect(key) {
                console.log(key)
                if (key === '1'){
                    this.$router.push('/')
                }else if (key === '2'){
                    this.$router.push('/newblog')
                }else if (key === '3'){
                    this.$router.push('/contact')
                }else if (key === '4'){
                    this.$router.push('/manage')
                }
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <el-collapse v-for="(page,index) in pageList" v-model="activeName" accordion>
            <el-collapse-item :title="page.pagesTitle" :name="index">
                <div class="content">
                    <div class="text">{{page.pagesContent}}</div>
                    <div class="time">{{page.time}}</div>
                    <el-button icon="el-icon-delete" size="mini" circle class="del" @click="del(index)" ></el-button>
                </div>
            </el-collapse-item>
        </el-collapse>
        <el-button icon="el-icon-edit" circle type="success" class="add" @click="add"></el-button>
    </div>
</template>

<script>
    export default {
        name: "PageList",
        data(){
            return{
                activeName:'1',
            }
        },
        computed:{
            pageList(){
                return this.$store.state.pages
            }
        },
        methods:{
            del(index){
                this.$store.dispatch('del',index).then(res =>{
                    this.$message({
                        message:res,
                        center:true,
                        offset:200,
                        showClose:true,
                        duration:2000,
                        type: 'success'
                    })
                })
            },
            add(){
                this.$router.push('/newblog')
            }
        }
    }
</script>

<style scoped>

    .content{
        position: relative;
    }
    .text{
        margin-bottom: 10px;
    }
    .time{
        font-size: 12px;
    }
    .del{
        position: absolute;
        right: 0px;
        bottom: 0px;
    }
    .add{
        position: fixed;
        right: 10px;
        bottom: 10px;
    }
</style>
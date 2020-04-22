<template>
    <div>
        <el-collapse v-for="(page,index) in pages" v-model="activeName" accordion>
            <el-collapse-item :title="page.pagesTitle" :name="index">
                <div class="content">
                    <div class="text">{{page.pagesContent}}</div>
                    <div class="time">{{page.time}}</div>
                    <el-button icon="el-icon-delete" size="mini" circle class="del" @click="del(index)"></el-button>
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
                pages:[
                    {
                        pagesTitle: '一致性 Consistency',
                        pagesContent:'与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；',
                        time:'2020/4/22'
                    },
                    {
                        pagesTitle: '反馈 Feedback',
                        pagesContent:'控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；',
                        time:'2020/4/22'
                    },
                    {
                        pagesTitle: '效率 Efficiency',
                        pagesContent:'简化流程：设计简洁直观的操作流程；',
                        time:'2020/4/22'
                    },
                    {
                        pagesTitle: '可控 Controllability',
                        pagesContent:'用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；',
                        time:'2020/4/22'
                    },
                ],


            }
        },
        methods:{
            del(index){
                this.pages.splice(index,1)
            },
            add(){
                this.$router.push('/newblog')
                this.pages.push()
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
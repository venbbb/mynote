<template>
    <div>
        <nav-bar class="nav">
            <div slot="center">MyNote</div>
            <div slot="left" @click="back"><i class="el-icon-arrow-left"></i></div>
        </nav-bar>
        <el-form :model="page">
            <el-form-item label="标题">
                <el-input size="mini" v-model="page.pagesTitle"></el-input>
            </el-form-item>
            <el-form-item label="内容">
                <el-input type="textarea" size="medium" v-model="page.pagesContent"></el-input>
            </el-form-item>
            <div style="text-align: center;margin-top: 50px">
                <el-button type="success" @click.once='add'>添加</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
    import NavBar from "../../components/NavBar";
    import {formatDate} from "../../util/util";

    export default {
        name: "NewBlog",
        components:{
            NavBar
        },
        data(){
          return{
              page:{
                  pagesTitle:'',
                  pagesContent:'',
                  time:''
              }
          }
        },
        methods:{
            add(){
                let obj = this.page
                let date = formatDate(new Date(),'yyyy-MM-dd')
                obj.time = date
                console.log(obj)

                this.$store.dispatch('addToList',obj).then(res =>{
                    this.$message({
                        message:res,
                        center:true,
                        offset:200,
                        showClose:true,
                        duration:2000,
                        type: 'success'
                    })
                })
                let that = this
                setTimeout(function () {
                    that.$router.replace('/')
                },2000)
            },
            back(){
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
    .nav{
        font-weight: bold;
    }
</style>
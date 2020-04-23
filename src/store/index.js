import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
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
        ]
    },
    actions:{
        addToList(content, payload){
            return new Promise((resolve,reject) =>{
                content.state.pages.push(payload)
                    resolve('添加成功')
            })
        },
        del(content, payload){
            return new Promise((resolve,reject) =>{
                content.state.pages.splice(payload,1)
                resolve('删除成功')
            })
        }
    }
})

export default store
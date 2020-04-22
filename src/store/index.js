import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    sate:{
        page:{}
    },
    actions:{
        addToList(content, payload){
            return new Promise((resolve,reject) =>{
                content.state.page = payload
                    resolve('添加成功')
            })
        },
    }
})

export default store
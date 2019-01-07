import moment from "moment";

import Message from '@/components/message'


import * as constant from './constant'

const base = {
    install(Vue,options){

        Vue.timeFormat = Vue.prototype.$timeFormat = ()=>{
         
          
        }

        Vue.prototype.$message = Message.install
    }
}


export default base
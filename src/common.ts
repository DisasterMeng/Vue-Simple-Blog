import Message from '@/components/message'

import {VueConstructor,ComponentOptions} from 'vue'

const common = {
    install(Vue:VueConstructor,options:any){

        Vue.prototype.$message = Message.install
    }
}


export default common
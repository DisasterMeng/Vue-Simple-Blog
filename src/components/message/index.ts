import Vue from 'vue'
import Message from './Message.vue'

const messageBox = Vue.extend(Message)

const Msg = {
  install(options: any, type: string) {

    if (options === undefined || options === null) {
      options = {
        content: ''
      }
    } else if (typeof options === 'string' || typeof options === 'number') {
      options = {
        content: options
      }
      if (type != undefined && options != null) {
        options.type = type
      }
    }

    let instance = new messageBox({
      data: options
    }).$mount()

    document.body.appendChild(instance.$el)

    Vue.nextTick(() => {
      instance.visible = true
    })
  }
}


export default Msg
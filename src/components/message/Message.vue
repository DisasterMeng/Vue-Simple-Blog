<template>
  <transition  name="slide-fade">
    <div class="message" :class="type" v-if="visible">
      <i class="icon-type iconfont" :class="'icon-'+type"></i>
      <div class="content">{{content}}
        <i v-if="hasClose" class="btn-close iconfont icon-close" @click="visible=false"></i>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "MyMessage",
  data() {
    return {
      content: '',
      time: 3000,
      visible: false,
      type: 'info',//'success','warning','error'
      hasClose: false,
    }
  },
  mounted() {
    this.close()
  },
  methods: {
    close() {
      window.setTimeout(() => {
        this.visible = false
      }, this.time);
    }
  }
}
</script>


<style lang="stylus" scoped>
.message
  position fixed
  left 50%
  transform translateX(-50%)
  top 40px

  background-color #fff
  padding 8px
  

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: top .3s ease-in-out;
}
.slide-fade-leave-active {
  transition: top .3s ease-in-out;
}
.slide-fade-enter, .slide-fade-leave-to{
  top: -20px
  opacity: 0;
}
</style>

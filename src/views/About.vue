<template>
    <div class="about">
            <article  class="article"  v-html="about.content">
    </article>
    </div>
</template>


<script>

import {fetchAboutApi} from '../api/api'
export default {
    name:'about',
    data:()=>({
        about:{}
    }),
    methods:{
        fetchAbout(){
            fetchAboutApi().then(res=>{
                this.about = res.data
            })
        }
    },
    created(){
        this.fetchAbout()
    }
}
</script>



<style lang="stylus" scoped>
.about
    margin 64px 0 80px
    padding 80px 100px 80px 
    background-color white
    color #333
    font-size 16px
    line-height 30px


@media screen and (max-width: 600px)
  .about
    padding 20px 20px 20px
    margin 20px 0
</style>



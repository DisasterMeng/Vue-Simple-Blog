<template>
    <div class="picture">
        <h1>My Picture</h1>

        <div class="picture-container">
            <img v-for="picture in pictures.results" :key="picture.id" :src="picture.image" alt="">
        </div>
        <footer class="blog-list f-cf">
            <a v-if="pictures.previous" class="f-fl" :href="`/pictures/${params.page-1}`">⟵上一页</a>
            <a v-if="pictures.next" class="f-fr" :href="`/pictures/${params.page+1}`">下一页⟶</a>
        </footer>
    </div>
</template>


<script>

import {fetchPicturesApi} from '../api/api'
export default {
    name:'picture',
    data:()=>({
        pictures:{}
    }),
    computed:{
    params:function(){
      
      return {
      page:Number(this.$route.params.page)
    }
    }
  },
    methods:{
        fetchPictures(){
            fetchPicturesApi(this.params).then(res=>{
                this.pictures = res.data
            })
        }
    },
    created(){
        this.fetchPictures()
    }
}
</script>


<style lang="stylus" scoped>
.picture
    margin 64px 0 80px
    padding 80px 100px 80px 
    background-color white
    color #333
    font-size 16px
    line-height 30px

    h1
        font-size 26px
        font-weight bold
    .picture-container
        margin 15px 0px
        img
            width 48%
            height auto
            padding 1%


@media screen and (max-width: 600px)
  .picture
    padding 20px 20px 20px
    margin 20px 0
    .picture-container
        margin 15px 0px
        img
            width 100%
            height auto
            padding 1%
</style>



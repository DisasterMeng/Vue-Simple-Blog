<template>
    <div class="category">
        <div class="category-item" v-for="(item, index) in categorys" :key="index">
            <p class="title">{{item.name}}</p>
            <ul>
                <li v-for="(blog, index) in item.blogs" :key="index"><a :href="`/detail/${blog.id}`">{{blog.title}}</a></li>
            </ul>
        </div>
    </div>
</template>


<script>

import {fetchCategorysApi} from '../api/api'
export default {
    name:'category',
    data:()=>({
        categorys:[]
    }),
    methods:{
        fetchCategorys(){
            fetchCategorysApi().then(res=>{
                this.categorys = res.data
            })
        }
    },
    created(){
        this.fetchCategorys()
    }
}
</script>



<style lang="stylus" scoped>
.category
    margin 64px 0 80px
    padding 80px 100px 80px 
    background-color white
    color #333
    font-size 16px
    line-height 30px
    .category-item
        margin-bottom 16px
        .title
            font-size 26px
            font-weight bold
        ul
            margin 15px 30px
        li
            padding-left 20px
            position relative
            &::before
                content ''
                position absolute
                left 0
                top 15px
                margin-top -3px
                width 6px
                height 6px
                border-radius 100%
                background-color #444

@media screen and (max-width: 600px)
  .category
    padding 20px 20px 20px
    margin 20px 0
        
</style>



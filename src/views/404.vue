<template lang="pug">
    div.container
        h1 迷路了
        p 你需要一个GPS
        button(@click="$router.push({path:'/'})") 回到主页
</template>


<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'

@Component
export default class NoFound extends Vue{

}
</script>

<style lang="stylus" scoped>

.el-main
    h1
        font-size 40px
    p
        margin-top 10px
        font-size 20px
    .el-button
        margin-top 5px
</style>

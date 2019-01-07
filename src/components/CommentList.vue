<template>
  <div class="comment-list">
    <p class="comment-count">{{comment.data.count}}条评论</p>
    <div class="comment-item" v-for="(item,index) in comment.data.results" :key="item.id">
      <!-- 评论的一些信息     -->
      <div class="item-header">
        <img :src="item.user.icon" alt="">
        <div class="item-text">
          <p class="item-title">{{item.user.username}}</p>
          <p class="item-sub">{{item.descendants_count+1}}楼 · {{item.submit_date}}</p>
        </div>
      </div>
      <!-- 评论内容     -->
      <div class="item-content">
        <p>{{item.comment}}</p>
        <span class="reply" @click="showReply(index)">回复</span>
      </div>
      <!-- 二级内容     -->
      <div class="sub-comment">
        <!-- 二级内容列表     -->
        <div class="sub-comment-content" v-for="su in item.descendants" :key="su.id">
          <div class="sub-text">
            <span>{{su.user.username}}</span>:&nbsp;<span>@{{su.parent_user.username}}</span> &nbsp;&nbsp; <span>{{su.comment}}</span>
          </div>
          <div class="sub-time">
            <span>{{su.submit_date}}</span>
          </div>
        </div>
        <!-- 回复组件     -->
        <div class="reply-container" v-if="item.is_add">
          <p>添加新评论</p>
          <div class="textarea">
            <textarea rows="6" v-model="item.sub_content" />
          </div>

          <div class="comment-bottomtool-container">
                <span class="markdown-hint">Support Markdown</span>
                <span @click="sendComment(index,item.object_pk,item.id)">发表</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
import { fetchAddCommentApi } from '../api/api'
export default {
  name: "comment-list",
  data: () => ({

  }),
  props: {
    comment: Object
  },
  methods: {
    showReply(index) {
      this.comment.data.results[index].is_add = !this.comment.data.results[index].is_add
    },
    sendComment(index, id,parent) {
      
      const data = {
        object_pk:id,
        parent: parent,
        comment: this.comment.data.results[index].sub_content
      }

      fetchAddCommentApi(data).then(res => {
        this.comment.data.results[index].sub_content = ""
        this.$parent.fetchBlogComments()
        this.$message("评论成功")
      })
    }
  }
}
</script>



<style lang="stylus" scoped>
.comment-list
  margin-top 40px
  .comment-count
    font-size 20px
    font-weight bold
  .comment-item
    border-style solid
    border-color rgb(169, 169, 169)
    border-width 1px 0px 0px 0px
    padding-top 18px
    margin-top 35px
  .item-header
    display flex
    align-items center
    img
      width 30px
      height 30px
      border-radius 15px
    .item-text
      margin-left 10px
      font-size 15px
      line-height 20px
    .item-title
      font-weight bold
  .item-content
    margin-top 10px
    font-size 19pxpx
    .reply
      font-size 10px
      cursor pointer
  .sub-comment
    margin-top 10px
    padding-left 20px
    border-style solid
    border-color rgb(169, 169, 169)
    border-width 0px 0px 0px 1px
    .sub-comment-content
      .sub-text
        font-size 15px
      .sub-time
        font-size 10px
    .reply-container
      margin-top 10px
      .textarea
        border 1px solid rgb(169, 169, 169)
        padding 8px 8px 0px 8px
        textarea
          font-size 15px
          width 100%
          border none
      .comment-bottomtool-container
        border-width 0px 1px 1px 1px
        border-style solid
        border-color rgb(169, 169, 169)
        display flex
        justify-content space-between
        .markdown-hint
          border none
        span
          border-width 0px 0px 0px 1px
          border-style solid
          border-color rgb(169, 169, 169)
          padding-left 8px
          padding-right 8px
          font-size 15px
          cursor pointer
</style>


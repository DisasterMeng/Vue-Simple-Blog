<template lang="pug">
	div.comment
		div.comment-top-tool-container
			div.preview
				span(:class="check=='content'?'check':''" @click="tabClick('content')") 内容
				span(:class="check=='preview'?'check':''" @click="tabClick('preview')") 预览
			div.third
				img(@click="githubLogin" src="../assets/imgs/ic_github.svg" alt="")
		div.textarea
			textarea(v-show="check=='content'" @input="change" rows="8" v-model="content" :readonly="option.readonly" :placeholder="option.placeholder")
			article.article(v-show="check=='preview'" v-html="html")
		div.comment-bottom-tool-container
			span.markdown-hint Support Markdown       	
			span(@click="sendComment") 发表

</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import { fetchMdToHtmlApi, fetchGithubLoginUrl, fetchAddCommentApi } from '../api'


interface info {
	icon:string
}

@Component
export default class Comment extends Vue {

	check: string = "content"
	content: string = ""
	html: string = ""

	@Prop()
	blogId: string = ''
	@Prop()
	myInfo:any ={}

	get option() {
		if (this.myInfo.icon) {
			return {
				placeholder: "评价内容",
				readonly: false
			}
		} else {
			return {
				placeholder: "未登录",
				readonly: true
			}
		}
	}

	tabClick(name: string) {
		this.check = name
	}

	change() {
		fetchMdToHtmlApi({
			content: this.content
		}).then(res => {
			this.html = res.data
		})
	}


	githubLogin() {
		const url = fetchGithubLoginUrl({ current: window.location.href })
		window.location.href = url
	}

	sendComment() {
		const data = {
			object_pk: this.blogId,
			comment: this.content
		}
		fetchAddCommentApi(data).then(res => {
			this.content = ""
			this.$parent.$emit('fetchComment')
			this.$message("评论成功")

		})
	}
}
</script>


<style lang="stylus" scoped>
.comment
	.comment-top-tool-container
		border-width 1px 1px 0px 1px
		border-style solid
		border-color rgb(169, 169, 169)
		display flex
		justify-content space-between
		align-items center

		.preview
			display flex

			span
				padding-left 8px
				padding-right 8px
				border-width 0px 1px 0px 0px
				border-style solid
				border-color rgb(169, 169, 169)

			.check
				color #000
				font-weight bold

		.third
			display flex
			align-items center
			padding 0px 5px 0px 0px

			img
				cursor pointer
				width 16px
				height 16px

	.textarea
		border 1px solid rgb(169, 169, 169)
		padding 8px 8px 0px 8px

		textarea
			font-size 15px
			width 100%
			border none

		article
			height 161px

	.comment-bottom-tool-container
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


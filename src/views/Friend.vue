<template lang="pug">
	div.friend(v-loading='loading')
		h1 My Friends
		ul.ul-friend
			li(v-for="(item, index) in friends", :key="index")
				a(:href="item.link", target="_blank") {{item.name}}
		
		p 以上排名不分先后，有需要交换友链的朋友，可以发送邮件到121116111@qq.com，需要以下信息：
		ul.ul-hint
			li 名字（必须）
			li 链接（必须）
			li 描述（非必须)
			li 图片（非必须）
</template>



<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { fetchFriendsApi } from '../api'

@Component
export default class Friend extends Vue {
	friends: object[] = []
	loading:boolean = false

	fetchFriends() {
		this.loading = true
		fetchFriendsApi().then(res => {
			this.friends = res.data
			this.loading = false
		})
	}

	created() {
		this.fetchFriends()
	}
}
</script>


<style lang="stylus" scoped>
.friend
	margin 64px 0 80px
	padding 80px 100px 80px
	background-color white
	color #333
	font-size 16px
	line-height 30px

	h1
		font-size 26px
		font-weight bold

	.ul-friend
		margin 15px 0px

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

	.ul-hint
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
				width 3px
				height 3px
				border-radius 100%
				background-color #444

@media screen and (max-width: 600px)
	.friend
		padding 20px 20px 20px
		margin 20px 0
</style>



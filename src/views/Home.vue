<template lang="pug">
	div#container
		nav#nav
			header.header
				a(href="/") sujian
			
			div.nav-container
				div.links
					a(href="https://github.com/sujianqingfeng", target="_black") 
						img(src="../assets/imgs/ic_github.svg", alt="")
					a(href="https://www.jianshu.com/u/debdd7d8eb03", target="_black") 
						img(src="../assets/imgs/ic_jianshu.svg", alt="")
					a(href="https://www.jianshu.com/u/debdd7d8eb03", target="_black")
						img(src="../assets/imgs/ic_qq.svg", alt="")
				
				div.menu
					ul
						li 
							a(href="/") Home
						li
							a(href="/category") Category
						li
							a(href="/friends") Friends
						li
							a(href="/pictures/1") Pictures
						li
							a(href="/about") About

		div.main
			router-view(:myInfo='myInfo')

		footer#footer
			| 121116111@qq.com · 蜀ICP备19009034号

			span All rights reserved @Su Jian 
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { fetchMyInfoApi } from '../api'

@Component
export default class Home extends Vue {
	myInfo: object = {}

	fetchMyInfo() {
		fetchMyInfoApi().then(res => {
			this.myInfo = res.data
		}).catch(err => {
		})
	}

	created() {
		this.fetchMyInfo()
	}
}
</script>


<style lang="stylus" scoped>
@import '../assets/styles/const'

#container
	max-width 980px
	margin 90px auto 75px
	padding 0 15px

	#nav
		margin-bottom 64px

		.header
			a
				font-family 'Dancing'
				font-size 50px
				line-height 53px
				color #333

	.nav-container
		margin-top 10px
		display flex
		flex-wrap wrap
		justify-content space-between

		.links
			display flex
			align-items center
			justify-content center

			a
				display flex
				align-items center
				justify-content center

				img
					width 16px
					margin-right 15px
					cursor pointer

		.menu
			// text-align right
			ul
				display flex
				height 100%
				padding-left 0px
				align-items center
				justify-content center

				li
					display flex
					font-size 20px
					align-items center
					justify-content center
					height 100%
					padding-left 10px
					padding-right 10px
					font-weight bold
					position relative

					&:hover:after
						opacity 1
						transform scaleX(1)
						transition 0.2s ease-in-out

					&:after
						content ''
						position absolute
						left 15%
						bottom -8px
						width 70%
						color #333
						opacity 0
						border-bottom 2px solid #333
						transform scaleX(0)

					&.check
						border-bottom 2px solid #333
						color #333

	#main, #footer
		margin-top 80px
		font-size 14px
		line-height 22px
		opacity 0.8
		color #333

		// img
		// height 20px
		// width 70px
		span
			float right

@media screen and (max-width: 600px)
	#container
		margin-top 20px
		margin-bottom 20px

		#nav
			text-align center
			margin-bottom 10px

		.nav-container
			justify-content space-around
			flex-direction column

			.menu
				text-align center

				ul
					display flex
					justify-content center
					flex-wrap wrap

					li
						margin-top 10px

		#main
			margin-top 20px

		#footer
			margin-top 20px
			text-align center

			span
				display block
				float none
</style>
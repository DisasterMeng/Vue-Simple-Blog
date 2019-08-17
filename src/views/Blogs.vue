<template lang="pug">
	div.blogs(v-loading='loading')

		div.blog-card(v-for="(item, index) in blogs.results", :key="index")
			div.img-container
				img(:src="item.summary_img" alt="")
			
			div.text-container
				a(:href="`/detail/${item.id}`") {{item.title}}
				section {{item.desc}}
				p.sub-text {{item.created}} · {{item.category}} · {{item.page_view}}
			
		
		footer.blog-list.f-cf
			a.f-fl(v-if="blogs.previous", :href="`/blogs/${params.page-1}`") ⟵上一页
			a.f-fr(v-if="blogs.next", :href="`/blogs/${params.page+1}`") 下一页⟶
</template>



<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { fetchBlogsApi } from '../api'

@Component
export default class Blog extends Vue {
	blogs: Object[] = []
	loading: boolean = false

	get params() {
		return {
			page: Number(this.$route.params.page)
		}
	}
	fetchBlogs() {
		this.loading =true
		fetchBlogsApi(this.params).then(res => {
			this.blogs = res.data
			this.loading =false
		})
	}
	created() {
		this.fetchBlogs()
	}
}
</script>


<style lang="stylus" scoped>
.blogs
	min-height 400px
	.blog-card
		display flex
		justify-content space-between
		align-items center
		padding 80px 100px
		margin 40px 0
		background-color white
		color #333

		.img-container
			flex 3
			margin-right 40px
			background-color #f8f8f8

			img
				width 100%
				height 100%

		.text-container
			flex 4

			a
				font-weight 600
				font-size 28px
				line-height 40px

			section
				font-size 16px
				line-height 30px
				margin-top 20px
				margin-bottom 15px

			p
				font-size 16px
				line-height 30px
				opacity 0.5

@media screen and (max-width: 600px)
	.blogs
		.blog-card
			height 100%
			flex-direction column
			padding 20px
			margin 10px 0

			.img-container
				flex 1
				margin-left 0
				margin-right 0
				margin-bottom 20px
				width 100%

			.text-container
				flex 1
</style>






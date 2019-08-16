<template>

	<div class="blogs">

		<div class="blog-card" v-for="(item, index) in blogs.results" :key="index">
			<div class="img-container">

				<img :src="item.summary_img" alt="">
			</div>
			<div class="text-container">
				<a :href="`/detail/${item.id}`">{{item.title}}</a>
				<section>{{item.desc}}
				</section>
				<p class="sub-text">{{item.created}} · {{item.category}} · {{item.page_view}}</p>
			</div>
		</div>
		<footer class="blog-list f-cf">
			<a v-if="blogs.previous" class="f-fl" :href="`/blogs/${params.page-1}`">⟵上一页</a>
			<a v-if="blogs.next" class="f-fr" :href="`/blogs/${params.page+1}`">下一页⟶</a>
		</footer>
	</div>
</template>



<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { fetchBlogsApi } from '../api'

@Component
export default class Blog extends Vue {
	blogs: Object[] = []

	get params() {
		return {
			page: Number(this.$route.params.page)
		}
	}
	fetchBlogs() {
		fetchBlogsApi(this.params).then(res => {
			this.blogs = res.data
		})
	}
	created() {
		this.fetchBlogs()
	}
}
</script>


<style lang="stylus" scoped>
.blogs
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






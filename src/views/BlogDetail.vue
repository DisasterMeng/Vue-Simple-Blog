<template>
	<div class="blog-detail-container">

		<h2 class="title">{{blog.title}}</h2>
		<p class="sub">{{blog.created}} · {{blog.category}} · {{blog.page_view}} </p>
		<article class="article" v-html="blog.content">

		</article>

		<div class="blog-end">
			<p>--&nbsp;&nbsp;本文结束 &nbsp; 感谢阅读&nbsp;&nbsp;--</p>
		</div>

		<div class="license-container">
			<p><strong>本文作者:&nbsp;</strong>素笺</p>
			<p><strong>本文链接:&nbsp;</strong>{{currentUrl}}</p>
			<p><strong>版权声明:&nbsp;</strong>自由转载-非商用-禁止演绎-保持署名 (CC BY-NC-ND 4.0)</p>
			<p><strong>发表日期:&nbsp;</strong>{{time}}</p>
		</div>

		<footer v-if="blog.pre_blog||blog.next_blog" class="blog-footer f-cf">
			<a v-if="blog.pre_blog" class="f-fl" :href="`/Detail/${blog.pre_blog.id}`">⟵{{blog.pre_blog.title}}</a>
			<a v-if="blog.next_blog" class="f-fr" :href="`/Detail/${blog.next_blog.id}`">{{blog.next_blog.title}}⟶</a>
		</footer>

		<div class="comment-container">
			<comment my-info="$attrs.myInfo" :blog-id="blog.id" />
		</div>

		<comment-list :comment="comment" />

	</div>
</template>


<script lang="ts">

import { Vue, Component ,Emit} from 'vue-property-decorator'
import Comment from '../components/Comment.vue'
import CommentList from '../components/CommentList.vue'
import { fetchBlogDetailApi, fetchBlogCommentApi } from '../api'
import dayjs from 'dayjs'

@Component({
	components: {
		Comment,
		CommentList
	}
})
export default class BlogDetail extends Vue {
	blog: object = {}
	comment: object = {
		data: {
			results: []
		}
	}
	currentUrl: string = ''
	time: string = ''


	fetchBlogDetail() {
		const id = this.$route.params.id
		fetchBlogDetailApi(id).then(res => {
			this.blog = res.data
		})
	}

	@Emit('fetchComment')
	fetchBlogComments() {
		const id = this.$route.params.id
		fetchBlogCommentApi(id).then(res => {
			this.comment = res
		})
	}

	created() {
		this.fetchBlogDetail()
		this.fetchBlogComments()

		this.currentUrl = window.location.href
		this.time = dayjs().format('YYYY-MM-DD')
	}
}


</script>



<style lang="stylus" scoped>
.blog-detail-container
	margin 64px 0 80px
	padding 80px 100px 80px
	background-color white
	color #333
	font-size 16px
	line-height 30px

	.title
		font-size 28px
		line-height 40px
		margin-bottom 10px
		font-weight 600

	.sub
		opacity 0.5
		margin-bottom 20px

	#article
		padding-bottom 64px

	.blog-end
		text-align center
		margin 30px 20px 30px 20px

	.license-container
		background-color #f5f7fa
		padding 20px
		font-size 15px

		strong
			font-weight bold

	footer
		padding 20px 0
		border-top solid 1px #eee

	.comment-container
		margin-top 30px

@media screen and (max-width: 600px)
	.blog-detail-container
		padding 20px 20px 0
		margin 20px 0
</style>


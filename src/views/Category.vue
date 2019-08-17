<template lang="pug">
	div.category(v-loading='loading')
		div.category-item(v-for="(item, index) in categories" :key="index")
			p.title {{item.name}}
			ul
				li(v-for="(blog, index) in item.blogs", :key="index")
					a(:href="`/detail/${blog.id}`") {{blog.title}}
</template>


<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { fetchCategoriesApi } from '../api'

@Component
export default class Category extends Vue {
	categories: object[] = []
	loading:boolean =false

	fetchCategories() {
		this.loading = true
		fetchCategoriesApi().then(res => {
			this.categories = res.data
			this.loading = false
		})
	}

	created() {
		this.fetchCategories()
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



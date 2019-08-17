<template lang="pug">
	div.about(v-loading='loading')
		article.article(v-html="about.content")
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { fetchAboutApi } from '../api'

@Component
export default class About extends Vue {
	about: object = {}
	loading:boolean = false

	fetchAbout() {
		this.loading = true
		fetchAboutApi().then(res => {
			this.about = res.data
			this.loading = false
		})
	}

	created() {
		this.fetchAbout()
	}
}
</script>



<style lang="stylus" scoped>
.about
	margin 64px 0 80px
	padding 80px 100px 80px
	background-color white
	color #333
	font-size 16px
	line-height 30px

@media screen and (max-width: 600px)
	.about
		padding 20px 20px 20px
		margin 20px 0
</style>



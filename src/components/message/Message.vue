<template lang="pug">
	transition(name='slide-fade')
		div.message(:class='type', v-if='visible')
			i.icon-type.iconfont(:class='"icon-"+type')
			div.content 
				| {{content}}
				i.btn-close.iconfont.icon-close(v-if='hasClose', @click="visible=false")
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'


@Component
export default class Message extends Vue {
	content: string = ''
	time: number = 3000
	visible: boolean = false
	type: string = 'info' //'success','warning','error'
	hasClose: boolean = false



	close(): void {
		const that = this
		window.setTimeout(() => {
			that.visible = false
		}, that.time)
	}

	mounted() {
		this.close()
	}
}
</script>


<style lang="stylus" scoped>
.message
	position fixed
	left 50%
	transform translateX(-50%)
	top 40px
	background-color #fff
	padding 8px

.slide-fade-enter-active
	transition top 0.3s ease-in-out

.slide-fade-leave-active
	transition top 0.3s ease-in-out

.slide-fade-enter, .slide-fade-leave-to
	top -20px
	opacity 0
</style>

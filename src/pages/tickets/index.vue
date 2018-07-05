<template>
	<div>
		<div>
			<tab :line-width="1">
				<tab-item selected>正在热映</tab-item>
				<tab-item>即将上映</tab-item>
			</tab>
		</div>
		<p v-for="i in 100">{{i}}<br></p>
	</div>
</template>

<script>
	import { Tab, TabItem, Sticky } from 'vux'
	export default {
		components: {
			Tab,
			TabItem,
			Sticky
		},
		data () {
			return {
				showSpace: false,
				disabled: typeof navigator !== 'undefined' && /iphone/i.test(navigator.userAgent) && /ucbrowser/i.test(navigator.userAgent)
			}
		},
		methods: {
			spaceChange () {
				this.showSpace = !this.showSpace
				this.$nextTick(() => {
					this.$refs.sticky.bindSticky()
				})
			}
		}
	}
</script>
<style scoped>
	.space-btn {
		padding: 5px 0;
		margin: 10px;
		text-align: center;
		border: 1px red solid;
	}
	.space {
		padding: 30px 0;
		margin: 10px;
		text-align: center;
		border: 1px green solid;
	}
</style>

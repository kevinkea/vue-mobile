<template>
	<div>
		<tab :line-width=2 active-color='#fc378c' v-model="index">
			<tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
		</tab>
		<swiper v-model="index" :show-dots="false">
			<swiper-item v-for="(item, index) in list2" :key="index">
				<div class="tab-swiper vux-center">{{item}} Container</div>
			</swiper-item>
		</swiper>
	</div>
</template>
<script>
	import { Tab, TabItem, Divider, Swiper, SwiperItem } from 'vux'
	const list = () => ['推荐', '看片', '影单', '小视频', '影评']
	export default {
		components: {
			Tab,
			TabItem,
			Divider,
			Swiper,
			SwiperItem
		},
		data () {
			return {
				list2: list(),
				demo2: '美食',
				index: 0,
			}
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
/*@import '../../../src/styles/1px.less';*/
/*@import '../../../styles/center.less';*/
.box {
	padding: 15px;
}
.active-6-1 {
	color: rgb(252, 55, 140) !important;
	border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
	color: #04be02 !important;
	border-color: #04be02 !important;
}
.active-6-3 {
	color: rgb(55, 174, 252) !important;
	border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
	background-color: #fff;
	height: 100px;
}
</style>

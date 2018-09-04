<template>
	<div>
		<sticky :check-sticky-support="false">
			<tab :line-width=2 v-model="index">
				<tab-item class="vux-center" :selected="first === item" v-for="(item, index) in list"  @on-item-click="onItemClick" :key="index">{{item}}</tab-item>
			</tab>
		</sticky>
		<keep-alive>
			<component :is="current"></component>
		</keep-alive>
		<!--<swiper v-model="index" :show-dots="false" height="1080px">-->
			<!--<swiper-item v-for="(item, index) in list" :key="index">-->
				<!--<div class="tab-swiper vux-center">{{item}} Container</div>-->
			<!--</swiper-item>-->
		<!--</swiper>-->
	</div>
</template>
<script>

	// 导入子组件
	import recommend from '@/components/Recommend';
	import clist from '@/components/List';
	import cview from '@/components/View';
	import cvideo from '@/components/Video';
	import comment from '@/components/Comment';

	import { Sticky, Tab, TabItem, Divider, Swiper, SwiperItem } from 'vux'
	const list = () => ['推荐', '看片', '影单', '小视频', '影评']
	export default {
		components: {
			recommend,
			comment,
			clist,
			cview,
			cvideo,
			Sticky,
			Tab,
			TabItem,
			Divider,
			Swiper,
			SwiperItem
		},
		data () {
			return {
				list: list(),
				datalist:[],
				swiptList:[],
				salesList:[],
				first: '推荐',
				index: 0,
				current:recommend,
				height:''
			}
		},
		mounted(){
			//this.getData()
		},
		created(){

		},
		methods: {
			onItemClick (index) {
				console.log('on item click:', index)
				if(index === 0){
					this.current = recommend
				}else if(index === 1){
					this.current = cview
				}else if(index === 2){
					this.current = clist
				}else if(index === 3){
					this.current = cvideo
				}else if(index === 4){
					this.current = comment
				}
			}
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
	height: 100%;
}
</style>

<template>
	<div>
		<sticky :check-sticky-support="false" :offset="46">
			<tab :line-width=1 v-model="index">
				<tab-item :selected="first === item" v-for="(item, index) in tablist" :key="index">{{item}}</tab-item>
			</tab>
		</sticky>

		<!--<div v-for="(tab, i) in list"  :key="i" v-show="i == num">-->
			<!--<template v-for="(item,index) in tab" >-->
			<!--<item :item="item" :key="index" />-->
			<!--</template>-->
		<!--</div>-->

		<swiper v-model="index" :show-dots="false"  :style="'height:'+this.height+'px;'" height="100%">
			<swiper-item v-for="(tab, index) in list" :key="index" >
				<template v-for="(item,index) in tab">
					<item :item="item" :key="index" />
				</template>
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
	import Item from './item'

	import {indexfilm} from '@/api/mov'
	import { Tab, TabItem, Panel, Swiper, SwiperItem, Sticky } from 'vux'
	// const tabList = () => ['正在热映', '正在上映']
	export default {
		components: {
			Tab,
			TabItem,
			Swiper,
			SwiperItem,
			Panel,
			Item,
			Sticky
		},
		data () {
			return {
				first:'正在热映',
				tablist:['正在热映', '正在上映'],
				hotList: [],
				comingList: [],
				list: [],
				loading: true,
				num:0,
				city:4777,
				index: 0,
				height:18,
				disabled: typeof navigator !== 'undefined' && /iphone/i.test(navigator.userAgent) && /ucbrowser/i.test(navigator.userAgent)
			}
		},
		created(){
			// this.$refs.sw.style.height = 1000 +'px';
		},
		mounted(){
			this.getData()
		},
		methods: {
			getData(){
				this.$axios.get("../../../static/mov.js",{id:1}).then(response => {
					this.hotList = response.data.movies
					this.height = this.hotList.length * 100
					this.list.push(this.hotList)
					console.log(this.height)
				}).catch(function(err) {
					console.log(err)
				})

				this.$axios.get("../../../static/filmcoming.js",{id:1}).then(response => {
					this.comingList = response.data.movies
					this.height = this.comingList.length * 18.1
					this.list.push(this.comingList)
					console.log(this.list)
				}).catch(function(err) {
					console.log(err)
				})
				console.log(this.list);
				// indexfilm().then(response => {
				// 	this.hotList = response.data.movies
				// 	console.log(this.hotList);
				// }).catch(function(response) {
				// 	console.log(response)
				// })
			},
			tabclick: function (index) {
				console.log(index)
				this.num = index;
				console.log(this.num)
			}
		}
	}
</script>
<style >
	.vux-swiper {
		overflow: hidden;
		position: relative;
		height: 2000px;
	}
</style>

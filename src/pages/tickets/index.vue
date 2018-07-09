<template>
	<div>
		<tab :line-width="1" v-model="index">
			<tab-item selected>正在热映</tab-item>
			<tab-item>即将上映</tab-item>
		</tab>
		<swiper v-model="index" :show-dots="false" :style="'height:'+this.height+'px;'">
			<swiper-item v-for="(tab, index) in list" :key="index" >
				<template v-for="(item,index) in tab">
					<item :item="item" :key="index" />
				</template>
				<!--<panel  :footer="footer" :list="list" :type="type"></panel>-->
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
	import Item from './item'

	import {indexfilm} from '@/api/mov'
	import { Tab, TabItem, Panel, Swiper, SwiperItem } from 'vux'
	const list = () => ['热映', '上映']
	export default {
		components: {
			Tab,
			TabItem,
			Swiper,
			SwiperItem,
			Panel,
			Item
		},
		data () {
			return {
				hotList: [],
				comingList: [],
				list: [],
				loading: true,
				page:1,
				city:4777,
				index: 0,
				height:1800,
				disabled: typeof navigator !== 'undefined' && /iphone/i.test(navigator.userAgent) && /ucbrowser/i.test(navigator.userAgent)
			}
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

				// indexfilm().then(response => {
				// 	this.hotList = response.data.movies
				// 	console.log(this.hotList);
				// }).catch(function(response) {
				// 	console.log(response)
				// })
			}
		}
	}
</script>
<style >
	.vux-slider > .vux-swiper{
		position: relative;
	}
</style>

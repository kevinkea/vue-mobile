<template>
	<div>
		<group >
			<cell :title="'正在售票'" is-link></cell>
			<scroller lock-y :scrollbar-x=false>
				<div class="box1" :style="{width: salewidth}">
					<div class="box1-item" v-for="(item, index) in salesList.list" :key="index">
						<img slot="icon" :src="'http://movie.miguvideo.com/publish/i_www'+item.imgSrc">
						<!--<span slot="label">{{ item.name }}</span>-->
					</div>
				</div>
			</scroller>
		</group>
		<group >
			<cell :title="'即将上映'" is-link></cell>
			<scroller lock-y :scrollbar-x=false>
				<div class="box1"  :style="{width: willwidth}">
					<div class="box1-item" v-for="(item, index) in willList.list" :key="index">
						<img slot="icon" :src="'http://movie.miguvideo.com/publish/i_www'+item.imgSrc">
						<!--<span slot="label">{{ item.name }}</span>-->
					</div>
				</div>
			</scroller>
		</group>
	</div>
</template>

<script>
	import Item from '../pages/find/item'
	import { Swiper, SwiperItem, Scroller, Panel, Cell, Grid, GridItem, Group, GroupTitle } from 'vux'

	export default {
		components: {
			Grid,
			GridItem,
			GroupTitle,
			Swiper,
			SwiperItem,
			Group,
			Scroller,
			Panel,
			Cell,
			Item
		},
		data() {
			return {
				salewidth:'1755px',
				willwidth:'3640px',
				commonList: [],
				swiptList: [],
				salesList: [],
				willList: [],
				infoList: [],
				talkList: [],
				datalist: []
			}
		},
		mounted() {
			this.getData()
		},
		methods: {
			onItemClick() {
				console.log('on item click')
			},
			getData(){
				this.$axios.get("../../../static/film_recommend.js").then(response => {
					this.datalist = response.data

					this.swiptList = this.datalist[0]
					this.salesList = this.datalist[1]
					this.willList = this.datalist[2]
					// this.salewidth = this.salesList.list.length * 135
					// this.willwidth = this.willList.list.length * 135
					console.log(this.salewidth)
					console.log(this.willwidth)
				}).catch(function(err) {
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped>
	.text-scroll p{
		font-size: 12px;
		text-align: center;
		line-height: 30px;
	}
	.box1 {
		height: 180px;
		position: relative;
		/*width: 3800px;*/
		padding-bottom: 30px;
	}
	.box1-item img{
		width: 118px;
		height: 175px;
		background-color: #ccc;
		display:inline-block;
		margin-left: 15px;
		float: left;
		text-align: center;
		line-height: 180px;
	}
	.box1-item:first-child {
		margin-left: 0;
	}
	.swiper-img img {
		width: 100%;
	}
</style>

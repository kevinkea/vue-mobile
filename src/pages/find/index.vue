<template>
	<div>
		<swiper loop auto height="160px">
			<swiper-item class="swiper-img" v-for="(item, index) in swiptList.list" :key="index">
				<img :src="'http://movie.miguvideo.com/publish/i_www'+item.imgSrc">
			</swiper-item>
		</swiper>
		<grid :show-vertical-dividers="false" >
			<grid-item v-for="(item, index) in enterList.list" :key="index">
				<img slot="icon" :src="'http://movie.miguvideo.com/publish/i_www'+item.imgSrc">
				<span slot="label">{{ item.name }}</span>
			</grid-item>
		</grid>
		<group >
			<cell :title="'商城'" is-link></cell>
			<scroller lock-y :scrollbar-x=false>
				<div class="box1">
					<div class="box1-item" v-for="(item, index) in productList.list" :key="index">
						<img slot="icon" :src="'http://movie.miguvideo.com/publish/i_www'+item.imgSrc">
						<!--<span slot="label">{{ item.name }}</span>-->
					</div>
				</div>
			</scroller>
		</group>
		<group >
			<cell :title="'资讯'" is-link></cell>
			<template v-for="(item,index) in infoList.list">
				<item :item="item" :key="index" />
			</template>
		</group>
	</div>
</template>

<script>
	import Item from './item'
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
		data(){
			return{
				commonList:[],
				swiptList:[],
				enterList:[],
				productList:[],
				infoList:[],
				talkList:[],
				allData:[]
			}
		},
		mounted(){
			this.getSwiperList()
		},
		methods: {
			onItemClick () {
				console.log('on item click')
			},
			getSwiperList() {
				this.$axios.get("../../../static/find_index.js").then(response => {
					this.allData = response.data
					this.swiptList = this.allData[0]
					this.enterList = this.allData[1]
					this.productList = this.allData[2]
					this.commonList = this.allData[3].list
					this.talkList = this.commonList[0].picList
					this.infoList = this.talkList[0]
					console.log(this.talkList)
				}).catch(function(err) {
					console.log(err)
				})
			}

		}
	}
</script>

<style scoped>
	.copyright {
		font-size: 12px;
		color: #ccc;
		text-align: center;
	}
	.text-scroll {
		border: 1px solid #ddd;
		border-left: none;
		border-right: none;
	}
	.text-scroll p{
		font-size: 12px;
		text-align: center;
		line-height: 30px;
	}
	.black {
		background-color: #000;
	}
	.title{
		line-height: 100px;
		text-align: center;
		color: #fff;
	}
	.animated {
		animation-duration: 1s;
		animation-fill-mode: both;
	}
	.vux-indicator.custom-bottom {
		bottom: 30px;
	}
	@-webkit-keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translate3d(0, 100%, 0);
		}
		100% {
			opacity: 1;
			transform: none;
		}
	}
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translate3d(0, 100%, 0);
		}
		100% {
			opacity: 1;
			transform: none;
		}
	}
	.box1 {
		height: 100px;
		position: relative;
		width: 900px;
		padding-bottom: 30px;
	}
	.box1-item img{
		width: 200px;
		height: 100px;
		background-color: #ccc;
		display:inline-block;
		margin-left: 15px;
		float: left;
		text-align: center;
		line-height: 100px;
	}
	.box1-item:first-child {
		margin-left: 0;
	}
	.box2-wrap {
		height: 300px;
		overflow: hidden;
	}
	.fadeInUp {
		animation-name: fadeInUp;
	}
	.swiper-img img {
		width: 100%;
	}
	.grid-center {
		display: block;
		text-align: center;
		color: #666;
	}
	.weui-grids {
		background-color: #fff;
	}
</style>

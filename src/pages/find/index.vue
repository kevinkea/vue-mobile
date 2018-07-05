<template>
	<div>
		<swiper loop auto :list="demo07_list" :index="demo07_index" @on-index-change="demo07_onIndexChange"></swiper>
		<grid :show-vertical-dividers="false">
			<grid-item v-for="i in 5" :key="i">
				<img slot="icon" src="../../assets/icon/play-his.png">
				<span slot="label">{{ i }}</span>
			</grid-item>
		</grid>
	</div>
</template>

<script>
	import { Swiper, SwiperItem, Grid, GridItem, GroupTitle } from 'vux'

	const baseList = [{
		url: 'javascript:',
		img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
		title: '送你一朵fua'
	}, {
		url: 'javascript:',
		img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
		title: '送你一辆车'
	}, {
		url: 'javascript:',
		img: 'https://static.vux.li/demo/5.jpg', // 404
		title: '送你一次旅行',
		fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
	}]

	const only2ClickList = baseList.slice(0, 2).map(item => {
		item.url = 'http://m.baidu.com'
		return item
	})

	export default {
		components: {
			Grid,
			GridItem,
			GroupTitle,
			Swiper,
			SwiperItem
		},
		methods: {
			onItemClick () {
				console.log('on item click')
			},
			demo07_onIndexChange (index) {
				this.demo07_index = index
			}
		},
		data(){
			return{
				demo07_index: 0,
				demo07_list: only2ClickList
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
	.fadeInUp {
		animation-name: fadeInUp;
	}
	.swiper-demo-img img {
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

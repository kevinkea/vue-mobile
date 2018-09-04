<template>
	<div>
		<swiper loop auto height="160px">
			<swiper-item class="swiper-img" v-for="(item, index) in swiptList.list" :key="index">
				<img :src="'http://movie.miguvideo.com/publish/i_www'+item.imgSrc">
			</swiper-item>
		</swiper>
		<group >
			<cell :title="'小编推荐'" is-link></cell>
			<ul class="vertical-pic clearfix">
				<li v-for="(item, index) in editList.list" :key="index">
					<div class="content-pic">
						<img class="lazy" :src="'http://movie.miguvideo.com'+item.imgSrcV" >
						<!--<span class="bottom-tag font-16 deep-red">{{item.miguScore}}</span>-->
					</div>
					<div class="content-intro">
						<p class="font-14 grey">{{item.name}}</p>
						<p class="font-13 light-grey">{{item.LONG_NAME}}</p>
					</div>
				</li>
			</ul>

		</group>
		<group >
			<cell :title="'上影节独家线上展映'" is-link></cell>
			<scroller lock-y :scrollbar-x=false>
				<div class="box1"  :style="{width: willwidth}">
					<div class="box1-item" v-for="(item, index) in onshowList.list" :key="index">
						<img slot="icon" :src="'http://movie.miguvideo.com'+item.imgSrcV">
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
				willwidth:'2700px',
				datalist: [],
				swiptList: [],
				editList: [],
				onshowList: [],
				infoList: [],
				talkList: [],
				allData: []
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
				this.$axios.get("../../../static/film_viewdata.js").then(response => {
					this.datalist = response.data
					console.log(this.datalist);
					this.swiptList = this.datalist[0]
					this.editList = this.datalist[1]
					this.onshowList = this.datalist[2]
					this.salewidth = this.editList.list.length * 135
					this.willwidth = this.onshowList.list.length * 135
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

	.module .module-con {
		width: 100%;
		height: auto;
	}
	.vertical-pic li {
		width: 31%;
		float: left;
		padding-bottom: 5px;
		margin-left: 2%;
	}
	.clearfix:after {
		display: table;
		content: " ";
		clear: both;
	}
	.vertical-pic li .content-intro p {
		line-height: 1.7em;
		padding-left: 12px;
		padding-right: 12px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.content-pic {
		position: relative;
	}
	a, a:hover {
		color: #000;
		text-decoration: none;
	}
	.grey {
		color: #666;
	}
	.font-14 {
		font-size: 14px !important;
	}
	ul {
		list-style: none;
	}
	ul {
		display: block;
		/*list-style-type: disc;*/
		-webkit-margin-before: 1em;
		-webkit-margin-after: 1em;
		-webkit-margin-start: 0px;
		-webkit-margin-end: 0px;
		-webkit-padding-start: 40px;
	}
	ul, li {
		margin: 0;
		padding: 0;
	}
	.vertical-pic li .content-pic img {
		width: 100%;
		height: 175px;
	}

	.vertical-pic li .content-intro p {
		line-height: 1.7em;
		padding-left: 12px;
		padding-right: 12px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.light-grey {
		color: #999;
	}
	.font-13 {
		font-size: 13px !important;
	}
	.content-pic .bottom-tag {
		position: absolute;
		right: 0px;
		bottom: 5px;
		background: rgba(1,1,5,0.5);
		text-align: right;
		padding: 0px 8px;
	}

	.deep-red {
		color: #F74444;
	}
	.font-16 {
		font-size: 16px !important;
	}
	img {
		border: 0;
	}

</style>

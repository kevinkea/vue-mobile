<template>
	<div class="page-wraper">
		<div class="page-head clearfix">
			<div class="movie-pic-wrap">
				<img :src="'http://movie.miguvideo.com/' + list.imgSrc1" id="bigMovPic" width="100%" height="220px">
				<i class="icon icon-back-pre" onclick="history.go(-1);"></i>
				<!--<i class='icon icon-share'></i>-->
				<div class="shadow-box-one"></div>
			</div>
			<div class="movie-info-wrap">
				<div class="movie-info clearfix">
					<div class="pull-left">
						<img :src="'http://movie.miguvideo.com/' + list.imgSrc" id="movPic" height="143px">
					</div>
					<div class="mivie-info-list width-60">
						<div style="height: 75px;padding-top: 20px;">
							<p id="movName" class="mov-name">{{list.name}}</p>
							<p class="icon-star-wrap">
								<span id="thisMovStar">
									<i class="icon-smaller" :style = "backgroundDiv"></i>
									<i class="icon-smaller" :style = "backgroundDiv"></i>
									<i class="icon-smaller" :style = "backgroundDiv"></i>
									<i class="icon-smaller" :style = "backgroundDiv"></i>
									<i class="icon-smaller" :style = "backgroundDiv"></i>
								</span>
								<span id="thisMovScore">{{list.score}}</span>
							</p>
						</div>
						<div style="height: 68px">
							<p class="movie-text-list margin-top-5" id="thisMovType">{{list.DetailType}}</p>
							<p class="movie-text-list margin-top-5" id="thisMovRegion">{{list.region}}</p>
							<p class="movie-text-list margin-top-5"><span id="thisMovTime">{{list.time}}</span></p>
						</div>
					</div>
				</div>
				<p id="describe" class="movie-desc">{{list.describe}}</p>
				<div class="text-center">
					<span id="showDec" class="icon-small icon-chevron-down"></span>
				</div>
			</div>
		</div>
		<div class="page-body">
			<group >
				<cell :title="'演职人员'" is-link></cell>
				<scroller lock-y :scrollbar-x=false>
					<div class="actor">
						<div class="actor-item" v-for="(item, index) in list.personnel" :key="index">
							<img slot="icon" :src="'http://movie.miguvideo.com'+item.imgSrc">
							<!--<span>{{ item.name }}</span>-->
						</div>
					</div>
				</scroller>
			</group>
			<group >
				<cell :title="'视频和剧照'" is-link></cell>
				<scroller lock-y :scrollbar-x=false>
					<div class="poster">
						<div class="poster-item" v-for="(item, index) in list.poster" :key="index">
							<img slot="icon" :src="'http://movie.miguvideo.com'+item.bigimg">
							<span slot="label">{{ item.name }}</span>
						</div>
					</div>
				</scroller>
			</group>
			<group >
				<cell :title="'热门影评'" is-link></cell>
				<ul class="comment-list" id="hotCommList">
					<li>
						<div class="user-info clearfix">
							<span class="pull-left">
								<img src="../../assets/icon/defaultPhoto.png">
							</span>
							<span class="pull-left font-14 margin-left-5">猴头虫</span>
							<span class="pull-left margin-left-5 stars-wrap">
								<i class="icon-smaller" :style = "backgroundDiv"></i>
								<i class="icon-smaller" :style = "backgroundDiv"></i>
								<i class="icon-smaller" :style = "backgroundDiv"></i>
								<i class="icon-smaller" :style = "backgroundDiv"></i>
								<i class="icon-smaller" :style = "backgroundDiv"></i>
							</span>
							<span class="pull-right light-grey font-12">来自豆瓣</span>
						</div>
						<div>
							<p class="comment-title">难得题材的难得好片子</p><p class="comment-con">...</p>
						</div>
						<div class="commen-record clearfix">
							<span class="light-grey pull-left">2018-06-29 11:37:29</span>
							<span class="pull-right">
								<i class="icon-smaller ipraise" :style = "praiseDiv"></i>
								<span class="praise-num">6</span>
								<i class="icon-smaller" :style = "commentDiv"></i>
								<span>0</span>
							</span>
						</div>
					</li>
				</ul>
			</group>
			<group >
				<cell :title="'推荐影片'" is-link></cell>
				<scroller lock-y :scrollbar-x=false>
					<div class="recommend">
						<div class="recommend-item" v-for="(item, index) in reList" :key="index">
							<img slot="icon" :src="'http://movie.miguvideo.com'+item.imgSrc">
							<!--<span slot="label">{{ item.name }}</span>-->
						</div>
					</div>
				</scroller>
			</group>
		</div>
		<!--<div class="page-bottom">-->
			<!--<div class="pos-fixed">-->
				<!--<ul class="clearfix" id="button">-->
					<!--<li class="bot-list clearfix width-25" id="collect">-->
						<!--<i class="icon-small icon-star-empty-grey ver-mid-down"></i>-->
						<!--<span>&nbsp;收藏</span>-->
					<!--</li>-->
					<!--<li class="bot-list clearfix width-25" id="editComm">-->
						<!--<i class="icon-small icon-edit1 ver-mid-down"></i>-->
						<!--<span>&nbsp;写影评</span>-->
					<!--</li>-->
					<!--<li class="bot-list bg-yellow display-none width-50" style="padding: 15px 0px 10px; display: list-item;" id="buyTicket">-->
						<!--选座购票-->
					<!--</li>-->
					<!--<li class="bot-list width-25 bg-red display-none" style="padding: 15px 0 10px" id="playOnling">-->
						<!--在线观看-->
					<!--</li>-->
					<!--<li class="bot-list width-50 bg-grey display-none" style="padding: 15px 0 10px" id="waitPlease">-->
						<!--敬请期待-->
					<!--</li>-->
				<!--</ul>-->
			<!--</div>-->
		<!--</div>-->
	</div>
</template>

<script>
	import star from '../../assets/icon/star-full.png'
	import praise from '../../assets/icon/praise.png'
	import comment from '../../assets/icon/comment.png'
	import { Swiper, SwiperItem, Scroller, Cell, Group } from 'vux'
	export default {
		name: "detail",
		components: {
			Swiper,
			SwiperItem,
			Group,
			Scroller,
			Cell
		},
		data(){
			return{
				praiseDiv: {
					backgroundImage: 'url(' + praise + ')'
				},
				commentDiv: {
					backgroundImage: 'url(' + comment + ')'
				},
				backgroundDiv: {
					backgroundImage: 'url(' + star + ')'
				},
				id:'',
				reList:[],
				dataList:[],
				list:[]
			}
		},
		mounted(){
			this.getData(),
			this.getRecommend()
		},
		methods:{
			getData(){
				this.$axios.get("../../../static/detail_data.js",{cid:this.id}).then(response => {
					this.dataList = response.data
					this.list = this.dataList[0]
					console.log(this.list)
				}).catch(function(err) {
					console.log(err)
				})
			},
			getRecommend(){
				this.$axios.get("../../../static/relevant_data.js").then(response => {
					this.reList = response.data
					console.log(this.reList)
				}).catch(function(err) {
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped>
	.page-wraper {
		position: relative;
		background-color: #f0f0f0;
	}
	* {
		box-sizing: border-box;
	}
	.page-head > h4 {
		font-size: 21px;
		padding: 0 10px;
	}
	.pull-left {
		float: left;
	}
	.pull-right {
		float: right;
	}
	.page-head {
		background-color: #fff;
	}
	.download-btn-wrap > button {
		width:75px;
		height: 30px;
		color: #fff;
		background-color: #f74444;
		font-size: 14px;
		border: 0 none;
		border-radius: 3px;
	}
	.movie-pic-wrap {
		position: relative;
		width: 100%;
		float: left
	}
	.shadow-box-one {
		position: absolute;
		width: 100%;
		height: 75px;
		left: 0;
		bottom: 0;
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0.8) 98%, #fff 100%);
	}
	.movie-pic-wrap > i {
		position: absolute;
		top: 10px;
	}
	.movie-pic-wrap > i.icon-back-pre {
		left: 10px;
	}
	.movie-pic-wrap > i.icon-share {
		right: 10px;
	}
	.movie-info-wrap {
		float: left;
		padding:0 10px;
		margin-top: -75px;
	}
	.movie-info {
		position: relative;
	}
	.mivie-info-list {
		float: left;
		padding-left: 10px;
	}
	.mivie-info-list p {
		width:170px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.width-60 {
		width: 60%;
	}
	.margin-top-5 {
		margin-top: 5px;
	}
	.mov-name {
		font-size: 18px;
		color: #fff;
	}
	.movie-text-list {
		font-size: 13px;
	}
	.icon-star-wrap {
		margin-top: 5px;
	}
	.icon-star-wrap > span{
		margin-right: 3px;
		color: #F8B246;
	}
	.icon-star-wrap > span {
		display: inline-block;
		position: relative;
		left: 0;
		top: 0;
		font-size: 14px;
	}
	.movie-desc {
		font-size: 14px;
		color: #666;
		margin-top: 19px;
	}
	.icon-star-wrap > span {
		display: inline-block;
		position: relative;
		left: 0;
		top: 0;
		font-size: 14px;
	}

	.icon-star-wrap > span {
		margin-right: 3px;
		color: #F8B246;
	}
	.icon-smaller {
		display: inline-block;
		width: 12px;
		height: 12px;
		background-size: cover;
		background-repeat: no-repeat;
	}
	.icon {
		display: inline-block;
		width: 30px;
		height: 30px;
		background-size: cover;
		background-repeat: no-repeat;
	}
	.clearfix:after {
		display: table;
		content: " ";
		clear: both;
	}
	.actor {
		height: 150px;
		position: relative;
		width: 900px;
		padding-bottom: 30px;
	}

	.actor-item img{
		width: 93.75px;
		height: 123.6px;
		background-color: #ccc;
		display:inline-block;
		margin-left: 15px;
		float: left;
		text-align: center;
		line-height: 100px;
	}

	.poster {
		height: 62px;
		position: relative;
		width: 900px;
		padding-bottom: 30px;
	}
	.poster-item img{
		width: 93.75px;
		height: 62px;
		background-color: #ccc;
		display:inline-block;
		margin-left: 15px;
		float: left;
		text-align: center;
		line-height: 100px;
	}
	.comment-list {
		padding: 0 10px;
	}

	ol, ul {
		list-style: none;
	}
	.comment-list > li {
		border-bottom: 1px solid #f0f0f0;
	}
	.user-info {
		margin: 10px 0;
	}
	.user-info > span {
		display: inline-block;
		height: 30px;
		line-height: 30px;
	}

	.margin-left-5 {
		margin-left: 5px;
	}
	.font-14 {
		font-size: 14px !important;
	}
	.font-12 {
		font-size: 12px !important;
	}
	.comment-title {
		font-size: 14px;
		color: #1a1a1a;
		line-height: 2em;
	}
	.comment-con {
		font-size: 14px;
		color: #4d4d4d;
	}
	.commen-record {
		margin: 13px 0;
		font-size: 12px;
	}
	.light-grey {
		color: #999;
	}
	.commen-record i.icon-smaller {
		position: relative;
		top: 2px;
		margin-right: 5px;
	}

	.praise-num {
		/* color: #f74444; */
		margin-right: 23px;
	}
	.commen-record i.icon-smaller {
		position: relative;
		top: 2px;
		margin-right: 5px;
	}

	.comment-list img {
		display: inline-block;
		width: 30px;
		height: 30px;
		border-radius: 15px;
	}
	.recommend {
		height: 150px;
		position: relative;
		width: 1700px;
		padding-bottom: 30px;
	}
	.recommend-item{
		width: 93.75px;
		height: 150px;
		display:inline-block;
		margin-left: 15px;
		float: left;
		text-align: center;
		line-height: 100px;
	}
	.recommend-item img{
		width: 93.75px;
		height: 123.6px;
	}
	.recommend-item span{
		width: 93.75px;
		position: relative;
		font-size: 13px;
		padding-top: 5px;
		color: #4d4d4d;
		text-align: center;
	}
</style>

<template>
	<div class="list">
		<div @click="$router.push({name:'detail',query:{id:item.SRC_CONT_ID}})">
			<div class="clearfix news-con">
				<div class="pull-left news-name font-14 grey">{{item.name}}</div>
				<div class="pull-right news-pic">
					<img class="lazy" alt="" :src="'http://movie.miguvideo.com'+item.imgSrcH">
				</div>
			</div>
		</div>
		<div class="news-origin clearfix">
			<div class="pull-left font-12 light-grey">来源：时光网</div>
		</div>
	</div>
	<!--<a href="" class="weui-media-box weui-media-box_appmsg">-->
		<!--<div class="weui-media-box__hd">-->
			<!--<img class="weui-media-box__thumb" :src="'http://movie.miguvideo.com'+item.imgSrcH" alt="">-->
		<!--</div>-->
		<!--<div class="weui-media-box__bd">-->
			<!--<h4 class="weui-media-box__title">{{item.name}}</h4>-->
			<!--<p class="weui-media-box__desc">来源：时光网</p>-->
		<!--</div>-->
	<!--</a>-->
</template>
<script>
	import { Rater, Badge } from 'vux'
	// var lodash = require('lodash')
	export default {
		components: {
			Rater,
			Badge
		},
		props: {
			item: {}
		},
		// filters: {
		// 	ceil: function (value) {
		// 		return lodash.ceil(value, 1)
		// 	}
		// }
	}
</script>
<style scoped>
	.pull-right {
		float: right;
	}
	.pull-right img{
		width: 32%;
	}
	.light-grey {
		color: #999;
	}
	.grey {
		color: #666;
	}
	.font-12 {
		font-size: 12px !important;
	}
	.font-14 {
		font-size: 14px !important;
	}
	.pull-left {
		float: left;
	}
	a, a:hover {
		color: #000;
		text-decoration: none;
	}
	.clearfix:after {
		display: table;
		content: " ";
		clear: both;
	}
	.loop-module .loop-time{height: 35px; line-height: 35px; padding: 0 12px; background: #efefef;}
	.list{padding: 8px 12px; border-top: 1px solid #e7e7e7;}
	.news-con{width: 100%;}
	.news-name{width: 66%;}
	.news-pic{width: 32%;}
	.news-pic img{width: 100%;}
	.news-origin{line-height: 25px;}

</style>


<template>
	<div class="loop-List" @click="$router.push({name:'filmName',query:{id:item.filmId}})">
		<div class="film-Intro clearfix">
			<div class="film-Pic pull-left">
				<img class="lazy" :src="'http://movie.miguvideo.com/' + item.picAddr" style=""></div>
			<div class="film-Con pull-left">
				<div class="film-Con-Top clearfix">
					<h3 class="clearfix inline-block pull-left">
						<span class="inline-block pull-left font-16 grey">{{item.filmName}}</span>
						<span class="inline-block pull-left">
							<img class="space-Flag display-none" src="" alt="">
						</span>
					</h3>
				</div>
				<div class="film-Con-bottom clearfix">
					<div class="pull-left">
						<p class="font-14 high-grey">{{item.director}}</p>
						<p class="font-14 high-grey">{{item.actor}}</p>
					</div>
					<div class="pull-right">
						<img class="order-Status"  src="../../assets/icon/oreder.png" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
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
	h1, h2, h3, h4, h5, h6 {
		font-weight: normal;
	}
	.grey {
		color: #666;
	}
	.font-16 {
		font-size: 16px !important;
	}

	.inline-block {
		display: inline-block !important;
	}
	.font-14 {
		font-size: 14px !important;
	}
	.pull-left {
		float: left;
	}
	.pull-right {
		float: right;
	}
	img {
		border: 0;
	}
	.loop-List{padding: 12px 12px 0; border-bottom: 1px solid #e7e7e7;}
	.film-Pic{width: 22%; padding-right: 3%;}
	.film-Pic img{width: 100%;}
	.space-Flag{height: 16px; width: auto; margin-left: 5px;}
	.film-Con{width: 75%; padding-top: 3%; padding-bottom: 3%}
	.film-Con-bottom{position: relative; margin-top: 7%;}
	.film-Con-bottom div:first-child{width: 70%;}
	.film-Con-bottom div:last-child{width: 30%;}
	.film-Con-bottom p{line-height: 20px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;}
	.order-Status{height: 26px; position: absolute; top: 50%; right: 0; margin-top: -13px;}
	.clearfix:after {
		display: table;
		content: " ";
		clear: both;
	}
</style>

<template>
	<div class="page-head">
		<h4>{{list.name}}</h4>
		<div class="addr-time clearfix">
			<span class="pull-left">时光网</span>
			<span class="pull-right">{{list.publishTime}}</span>
		</div>
		<div class="pic-wrap">
			<p v-html="list.describe"></p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "detail",
		data(){
			return{
				id:'',
				dataList:[],
				list:[]
			}
		},
		mounted(){
			this.getData()
		},
		methods:{
			getData(){
				this.$axios.get("../../../static/news_detail.js",{cid:this.id}).then(response => {
					this.dataList = response.data
					this.list = this.dataList[0]
					console.log(this.list)
				}).catch(function(err) {
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped>
	.pic-wrap {
		padding: 0 10px;
	}
	img {
		width:90%;
		padding: 0 10px;
	}
	.page-head {
		padding: 13px 0 25px;
		background-color: #fff;
	}
	* {
		box-sizing: border-box;
	}
	.page-head > h4 {
		font-size: 21px;
		padding: 0 10px;
	}
	.addr-time {
		font-size: 12px;
		color: #999;
		padding: 10px;
	}
	.pull-left {
		float: left;
	}
	.pull-right {
		float: right;
	}
</style>

<template>
	<div class="module-con">
		<div class="module-big-pic editorSelect" v-for="(item, index) in infoList.list" :key="index">
			<div class="content-pic">
				<img class="lazy" :src="'http://movie.miguvideo.com/publish/i_www'+item.picList[0].imgSrc">
				<div class="mongoliaLayer"></div>
				<p class="hatchedTheme font-14 white">{{item.name}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "comment",
		data() {
			return {
				infoList: [],

			}
		},
		mounted() {
			this.getData()
		},
		methods: {
			getData(){
				this.$axios.get("../../../static/film_comment.js").then(response => {
					this.datalist = response.data
					console.log(this.datalist);
					this.infoList = this.datalist[0]
				}).catch(function(err) {
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped>
	.module-big-pic {
		width: 100%;
		height: auto;
	}

	.editorSelect {
		margin-bottom: 8px;
	}
	.editorSelect .content-pic {
		position: relative;
		font-size: 0px;
	}

	.content-pic {
		position: relative;
	}
	.module-big-pic img {
		width: 100%;
		height: 47.5vw;
	}

	img {
		border: 0;
	}
	.mongoliaLayer {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 50;
		background: rgba(0, 0, 0, 0.5);
	}
	.hatchedTheme {
		position: absolute;
		top: 50%;
		left: 35px;
		right: 35px;
		z-index: 100;
		margin-top: -1.2em;
		font-size: 16px!important;
		text-align: center;
		lint-height: 2.2em;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		font-weight: bold;
	}

	.white {
		color: #fff;
	}
	.font-14 {
		font-size: 14px !important;
	}
</style>

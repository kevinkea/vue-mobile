<template>
	<div class="module-con">
		<div class="module-big-pic editorSelect" v-for="(item, index) in infoList.list" :key="index">
			<div class="content-pic">
				<img class="lazy" :src="'http://movie.miguvideo.com/publish/i_www'+item.picList[0].imgSrc" style="width:100%">
				<span class="update-to font-14 white">{{item.name}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "video",
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
				this.$axios.get("../../../static/film_video.js").then(response => {
					this.datalist = response.data
					console.log(this.datalist);
					this.infoList = this.datalist[1]
				}).catch(function(err) {
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped>
	.module .module-con {
		width: 100%;
		height: auto;
	}
	.content-pic {
		position: relative;
	}
	.update-to {
		position: absolute;
		left: 12px;
		right: 12px;
		bottom: 12px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.white {
		color: #fff;
	}
	.font-14 {
		font-size: 14px !important;
	}
</style>

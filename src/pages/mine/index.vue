<template>
	<div>
		<group >
			<cell :title="'点击登录'" is-link>
				<img slot="icon" width="60" style="display:block;margin-right:5px;" src="../../assets/icon/defaultPhoto.png">
			</cell>
		</group>
		<grid :show-lr-borders="false" :show-vertical-dividers="false" style="background-color:#fff;">
			<grid-item link="/" :label="'收藏'">
				<img slot="icon" src="../../assets/icon/colle.png">
				<span slot="label">播放历史</span>
			</grid-item>
			<grid-item :link="{ path: '/'}" :label="'影评'">
				<img slot="icon" src="../../assets/icon/mov-com.png">
				<span slot="label">播放历史</span>
			</grid-item>
			<grid-item link="/" :label="'播放历史'">
				<img slot="icon" src="../../assets/icon/play-his.png">
				<span slot="label">播放历史</span>
			</grid-item>
		</grid>

		<group >
			<cell :title="'我的订单'" is-link>
				<img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/icon/order.png">
			</cell>
			<cell :title="'我的钱包'" is-link>
				<img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/icon/wallet.png">
			</cell>
		</group>
		<group >
			<cell :title="'常见问题'" is-link>
				<img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/icon/question.png">
			</cell>
			<cell :title="'在线客服'" is-link>
				<img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/icon/serv-online.png">
			</cell>
		</group>
		<group >
			<cell :title="'商城'" is-link>
				<img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/icon/shopping.png">
			</cell>
		</group>
	</div>
</template>

<script>
	import { Divider, Card, Cell, CellBox, CellFormPreview, Group, Badge, Grid, GridItem } from 'vux'

	export default {
		mounted () {
			setTimeout(() => {
				this.money = -1024
			}, 2000)
		},
		components: {
			Card,
			Divider,
			Group,
			Cell,
			CellFormPreview,
			CellBox,
			Badge,
			Grid,
			GridItem
		},
		methods: {
			onClick () {
				console.log('on click')
			}
		},
		data () {
			return {
				list: [{
					label: 'Apple',
					value: '3.29'
				}, {
					label: 'Banana',
					value: '1.04'
				}, {
					label: 'Fish',
					value: '8.00'
				}],
				money: null,
				showContent001: false,
				showContent002: false,
				showContent003: false,
				showContent004: false
			}
		}
	}
</script>

<style scoped>

	.card-demo-flex > div {
		flex: 1;
		text-align: center;
		font-size: 12px;
	}
	.card-demo-flex span {
		color: #f74c31;
	}

</style>

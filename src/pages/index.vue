<template>
	<div style="height:100%;">
		<div style="position: fixed;top:0;width:100%;z-index:999;">
			<x-header slot="header" :left-options="leftOptions" :title="title" ></x-header>
		</div>
		<div style="margin-top: 46px;">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<div>
			<div style="height:60px;"></div>
			<tabbar style="position: fixed" v-show="true" slot="bottom">
				<tabbar-item v-for="(item,index) in tabbars" @on-item-click="item_click" :key="index" :link="{name:item.route_name,replace:true}" :selected="route_name===item.route_name?true:false">
					<img slot="icon" :src="item.icon">
					<span slot="label">{{item.name}}</span>
				</tabbar-item>
			</tabbar>
		</div>
	</div>
</template>

<script>
	import mov from '../assets/icon/mainMenu-mov.png'
	import tickets from '../assets/icon/mainMenu-tickets.png'
	import find from '../assets/icon/mainMenu-find.png'
	import mine from '../assets/icon/mainMenu-mine.png'

	import { Radio, Group, Cell, Badge, Drawer, Actionsheet, ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem, Loading, TransferDom } from 'vux'
	import { mapState, mapActions } from 'vuex'

	export default {
		name: 'index',
		// 自定义组件
		directives: {
			TransferDom
		},
		components: {
			Radio,
			Group,
			Cell,
			Badge,
			Drawer,
			ButtonTab,
			ButtonTabItem,
			ViewBox,
			XHeader,
			Loading,
			Actionsheet,
			Tabbar,
			TabbarItem
		},
		data () {
			return {
				route_name: '',
				selected: 0,
				tabbars: [
					{
						name: '看片',
						route_name: 'mov',
						icon: mov
					},
					{
						name: '购票',
						route_name: 'tickets',
						icon: tickets
					},
					{
						name: '发现',
						route_name: 'find',
						icon: find
					},
					{
						name: '我的',
						route_name: 'mine',
						icon: mine
					}
				]
			}
		},
		mounted () {
			this.route_name = this.$route.name
		},
		methods: {
			item_click (index) {
				let item = this.tabbars[index]
				if (item.route_name === this.route_name) {
					console.log('123')
					document.body.scrollTop = 0
					document.documentElement.scrollTop = 0
				}
			},
			...mapActions([
				'updatePosition'
			])
		},
		beforeDestroy () {
			this.box && this.box.removeEventListener('scroll', this.handler, false)
		},
		computed: {
			leftOptions () {
				var status = false
				if (this.$route.path === '/detail' || this.$route.path === '/content') {
					status = true
				}
				return {
					showBack: status
				}
			},
			title () {
				if (this.$route.path) {
					return this.$route.meta.title
				}
			}
		}
	}
</script>

<style scoped>
	.vux-header .vux-header-title {
		line-height: 40px;
		text-align: center;
		font-size: 18px;
		font-weight: 400;
		color: #000000;
	}
</style>


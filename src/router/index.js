import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'

Vue.use(Router)

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
	{
		path: '/',
		name: 'index',
		component: index,
		redirect: '/mov',
		hidden: true,
		children: [
			{
				path: '/mov',
				name: 'mov',
				component: () => import('@/pages/mov/index'),
				meta: {title: '看片', keepAlive: true}
			},
			{
				path: '/tickets',
				name: 'tickets',
				component: () => import('@/pages/tickets/index'),
				meta: {title: '购票', keepAlive: true}
			},
			{
				path: '/find',
				name: 'find',
				component: () => import('@/pages/find/index'),
				meta: {title: '发现', keepAlive: true}
			},
			{
				path: '/mine',
				name: 'mine',
				component: () => import('@/pages/mine/index'),
				meta: {title: '我的', keepAlive: true}
			}
		]
	},
	{ path: '*', redirect: '/404', hidden: true }
]

export default new Router({
	// mode: 'history', //后端支持可开
	// scrollBehavior: () => ({ y: 0 }),
	routes: constantRouterMap
})


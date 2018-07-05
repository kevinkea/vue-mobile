// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueRouter from 'vue-router'
import FastClick from 'fastclick'
import Navigation from 'vue-navigation'
// // import 'lib-flexible/flexible'
//
import http from './libs/http'
import sess from './libs/sess'
import { AlertPlugin, ToastPlugin, LoadingPlugin, ConfirmPlugin, WechatPlugin } from 'vux'

Vue.use(VueRouter)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)
Vue.use(WechatPlugin)

Vue.prototype.$sess = sess
Vue.prototype.$http = http

const tabbars = ['mov', 'tickets', 'find', 'mine']

Vue.prototype.tabbars = tabbars
// const router = new VueRouter({
//   mode: 'history',
//   routers,
//   scrollBehavior (to, from, savedPosition) {
//     if (savedPosition) {
//       return savedPosition
//     } else {
//       if (tabbars.indexOf(to.name) < 0) {
//         return { x: 0, y: 0 }
//       }
//     }
//   }
// })

/**
 * 点击延迟
 */
FastClick.attach(document.body)

/**
 * 日志输出
 * @type {boolean}
 */
Vue.config.productionTip = false

router.beforeEach(function (to, from, next) {
	let scrollTop = window.scrollY
	let fromPath = from.path
	store.commit('updateLoadingStatus', {isLoading: true})
	if (tabbars.indexOf(to.name) > 0) {
		if (from.meta.keepAlive) {
			sess.set(fromPath || '/', {
				history: true,
				scrollTop: scrollTop
			})
		}
	}
	next()
})

router.afterEach((toRoute, fromRoute) => {
	const to = toRoute.path
	const h = sess.get(to)
	if (h && h.scrollTop >= 0) {
		Vue.nextTick(() => {
			window.scroll(0, h.scrollTop)
		})
	}
	if (window.ga) {
		window.ga('set', 'page', toRoute.fullPath)
		window.ga('send', 'pageview')
	}
	store.commit('updateLoadingStatus', {isLoading: false})
})
Vue.use(Navigation, {router, store})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})


<template>
  <div id="app">
	  <navigation>
		  <router-view></router-view>
	  </navigation>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>

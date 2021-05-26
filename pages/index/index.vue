<template>
	<div class="indexContainer">
		
		<!-- 头部 -->
		<div class="head">
			<image class="logo" src="../../static/images/logo.png" />
			<div class="searchInput">
				<!-- icon不方便的是单位是px，不能做适配 -->
				<!-- <icons type="search"></icons> -->
				<i class='iconfont icon-sousuo'></i>
				<input type="text" value="" placeholder="搜索商品" placeholder-class="placeholder" />
			</div>
			<button class="btn">登录</button>
		</div>
		
		<!-- 导航 -->
		<!-- <scroll-view class="navScrollContainer" scroll-x="true" >
			<view @click="activeItemIndex(index)" class="navListItem" 
				:class="{activeItem:activeIndex === index}"  v-for="(listItem,index) in navList" :key="index">
				{{listItem}}
			</view>
		</scroll-view> -->
		<scroll-view class="navScrollContainer" scroll-x="true" >
			<view @click="activeItemIndex(0)" class="navListItem" :class="{activeItem:activeIndex === 0}" >
				推荐
			</view>
			<view @click="activeItemIndex(index+1)" class="navListItem" 
				:class="{activeItem:activeIndex === (index+1)}"  v-for="(listItem,index) in indexDatas.kingKongModule.kingKongList" :key="index">
				{{listItem.text}}
			</view>
		</scroll-view>
		
		<!-- 内容区-->
		<scroll-view scroll-y="true" class="contentScroll">
			<view class="contentContainer">
				<Recommend :indexDatas="indexDatas"></Recommend>
			</view>
		</scroll-view>
		
	
	</div>
</template>

<script>
	import request from '../../utils/request.js'
	import Recommend from '../../componexts/recommend/recommend.vue'
	export default {
		components:{
			Recommend
		},
		data() {
			return {
				// 导航名
				navList:[
					'推荐',
					'居家生活',
					'服饰鞋包',
					'美食酒水',
					'个护清洁',
					'母婴亲子',
					'运动旅行',
					'数码加点',
					'严选全球',
				],
				// 点击项下标
				activeIndex:0,
				// 首页数据
				indexDatas:{}
			}
		},
		methods: {
			activeItemIndex (index){
				this.activeIndex = index
			}
		},
		async mounted() {
			this.indexDatas = await request('/getIndex')
		},
	}
</script>

<style lang="stylus" scoped>
	.indexContainer
		.head 
			display flex
			margin-top 15upx
			padding 10upx
			.logo  
				width 140upx
				height 40upx
				margin 10upx 25upx
			.searchInput
				position relative
				width 440upx
				height 60upx
				line-height 60upx
				background-color #EDEDED
				border-radius 10upx
				.iconfont 
					font-size 35upx
					position absolute
					top 50%
					left 10upx
					transform translateY(-50%)
				input 
					height 60upx
					line-height 60upx
					margin-left 50upx
				/deep/.placeholder
					font-size 25upx
			.btn 
				width 120upx
				height 60upx
				line-height 60upx
				text-align center
				font-size 25upx
				color #C55F62
				margin 0 25upx
		.navScrollContainer
			white-space nowrap
			margin-bottom 1upx
			.navListItem
				display inline-block
				width 140upx
				height 80upx
				line-height 80upx
				text-align center
				font-size 27upx
				&.activeItem
					border-bottom 1upx solid #BB2C08
		.contentScroll
			// height calc(屏幕的高度-头部内容区域的高度) 
			height calc(100vh - 160upx)			/* 1vh = 1%屏幕高度 */
			
			
</style>

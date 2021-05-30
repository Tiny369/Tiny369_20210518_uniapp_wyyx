<template>
	<view class="cateListContainer">
		
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-active-color="#bb2c08">
			<swiper-item v-for="(item,index) in objList.category.bannerUrlList" :key="index">
				<view class="swiper-item">
					<image :src="item" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		
		<!-- 列表 -->
		<div class="listContainer">
			<div class="headTitle">
				<h2 class="PrimaryTitle">{{objList.category.name}}</h2>
				<p class="secondaryTitle">{{objList.category.frontName}}</p>
			</div>
			<div class="ListGoodGrid">
				<div class="listItem" v-for="(item,index) in objList.itemList" :key="index">
					<image class="listItemImg" :src="item.listPicUrl" mode=""></image>
					<p class="listItemName">{{item.name}}</p>
					<p class="listItemNPrice">${{item.retailPrice}}</p>
				</div>
			</div>
		</div>
		
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		props:['navId'],
		data() {
			return {
				// 导航栏项数据
				cateList:[]
			}
		},
		async mounted() {
			// 发送请求获取分类列表数据
			this.cateList = await request('/getCateList')
			console.log(this.cateList);
		},
		computed:{
			// 判断父级Id，返回对应的对象
			objList (){
				return this.cateList.find(item => item.category.parentId === this.navId)
			},
		},
	}
</script>

<style lang="stylus">
		.cateListContainer
			swiper
				width 100%
				height 370upx
				image
					width 100%
					height 370upx
			.listContainer
				.headTitle
					.PrimaryTitle
						font-size 35upx
						font-weight bold
						text-align center
						padding 15upx 0
					.secondaryTitle
						font-size 25upx
						text-align center
						padding-bottom 9upx
				.ListGoodGrid
					display flex
					flex-wrap wrap
					justify-content space-around
					&:after
						content ""
						width 45%
						height 0
					.listItem
						width 45%
						margin-bottom 9upx
						.listItemImg
							width 100%
							height 345upx
						.listItemName
							font-size 27upx
						.listItemNPrice
							color red
							font-weight bold
							font-size 27upx
					
</style>

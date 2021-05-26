<template>
	<div class="recommendContainer">

		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="5000" 
			:duration="1000" indicator-active-color="#bb2c08" :circular="true">
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/e602a6c1ae932932fa567e1aab5e354b.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="https://yanxuan.nosdn.127.net/4b1f1bdd34595d1a6a0e0c2c5bbdec60.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="https://yanxuan.nosdn.127.net/04fc9c1907e43fb483cfb479bc7c714e.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="https://yanxuan.nosdn.127.net/f79f2e6db6b9ae725d4cf6d950186941.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="https://yanxuan.nosdn.127.net/7f0a4aa58798fdb4d577c51d1eeca8e4.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
					</view>
				</swiper-item>
		</swiper>

		<!-- policyDescList -->
		<div class="indexServicePolicy">
			<div class="PolicyItem" v-for="(policyDescListItem, index) in indexDatas.policyDescList" :key="index">
				<img :src="policyDescListItem.icon" alt="">
				<span>{{policyDescListItem.desc}}</span>
			</div>
		</div>

		<!-- 10个图标板块 kingKongModule -->
		<div class="kingKongList">
			<div class="kingKongItem" v-for="(kingKongListItem, index) in indexDatas.kingKongModule.kingKongList" :key="index">
				<img :src="kingKongListItem.picUrl" alt="">
				<p>{{kingKongListItem.text}}</p>
			</div>
		</div>


	</div>
</template>

<script>
	export default {
		props:['indexDatas']
	}
</script>

<style lang="stylus">
	.recommendContainer
		height 2000upx
		swiper
			width 100%
			height 370upx
			image
				width 100%
				height 370upx
		.indexServicePolicy
			display flex
			justify-content space-around
			height 70upx
			.PolicyItem
				display flex
				align-items center
				img
					width 30upx
					height 30upx
				span
					font-size 25upx
		.kingKongList
			display flex
			flex-wrap wrap
			.kingKongItem
				display flex
				width 20%
				flex-direction column
				align-items center
				img
					width 110upx
					height 110upx
				p
					font-size 25upx
					padding 15upx
</style>

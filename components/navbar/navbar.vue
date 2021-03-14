<template>
	 <!-- :style="{height: statusBarHeight + navBarHeight + 'px'}" -->
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- 状态栏 -->
			<view :style="{height: statusBarHeight + 'px'}"></view>
			<!-- 导航栏内容 -->
			<view class="navbar-content" :style="{height: navBarHeight + 'px', width: navBarContentWidth + 'px'}">
				<view class="navbar-search">
					<view class="navbar-search_icon">
						<!-- <text class="iconfont icon-search"></text> -->
						<uni-icons type="search" color="#999" size="16"></uni-icons>
					</view>
					<view class="navbar-search_text">uni-app、vue</view>
				</view>
			</view>
		</view>
		<view :style="{height: statusBarHeight+navBarHeight+'px'}"></view>
		<!-- <view style="height: 45px;width: 100%;"></view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 20,
				navBarHeight: 45,
				navBarContentWidth:375
			};
		},
		created() {
			// 获取手机系统信息
			const info = uni.getSystemInfoSync()
			this.statusBarHeight = info.statusBarHeight
			// console.log('info', info)
			this.navBarContentWidth = info.windowWidth
			// #ifndef APP-PLUS || H5 || MP-ALIPAY
			// 获取胶囊的位置信息
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			// console.log(menuButtonInfo);
			// 导航栏的高度 = (胶囊底部的高度 - 状态栏的高度) + (胶囊顶部的高度 - 状态栏的高度)
			this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight)
			// console.log('this.navBarHeight', this.navBarHeight)
			this.navBarContentWidth = menuButtonInfo.left
			// #endif
		}
	}
</script>

<style lang="scss">
	/* @import '@/common/css/icons.css'; */
	.navbar{
		.navbar-fixed{
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			background-color: $mk-base-color;
			.navbar-content{
				display: flex;
				align-items: center;  // 水平居中
				justify-content: center; // 垂直居中
				padding: 0 15px;
				box-sizing: border-box;
				.navbar-search{
					display: flex;
					align-items: center;
					width: 100%;
					height: 30px;
					padding: 0 10px;
					border-radius: 30px;
					background-color: #fff;
					.navbar-search_icon{
						margin-right: 10px;
					}
					.navbar-search_text{
						font-size: 12px;
						color: #999;
					}
				}
			}
		}
	}
</style>

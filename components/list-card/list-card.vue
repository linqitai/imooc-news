<style lang="scss">
	.listcard{
		display: flex;
		/* flex-direction: column; */
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		box-sizing: border-box;
		.listcard-image{
			/* flex: 0 0 60px; */
			flex-shrink: 0;
			width: 60px;
			height: 60px;
			border-radius: 5px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.listcard-content{
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 10px;
			.listcard-content__title{
				font-size: 14px;
				color: $uni-text-color;
				font-weight: 400;
				line-height: 1.2em;
				/* 文字溢出隐藏并显示省略号 */
				text{
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp:2; /* 设置行数 */
					-webkit-box-orient:vertical;
				}
			}
			.listcard-content__des{
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				.listcard-content__des-label{
					display: flex;
					.listcard-content__des-label-item{
						padding: 0 5px;
						/* margin-left: 5px; */
						border-radius: 15px;
						color: $mk-base-color;
						border: 1px $mk-base-color solid;
					}
				}
				.listcard-content__des-browse{
					color: $uni-text-color-grey;
					line-height: 1.5em;
				}
			}
		}
		&.mode-column{
			flex-direction: column;
			.listcard-content{
				width: 100%;
				padding-left: 0px;
				.listcard-image{
					display: flex;
					margin-top: 10px;
					width: 100%;
					height: 70px;
					.listcard-image__item{
						margin-left: 10px;
						width: 100%;
						border-radius: 5px;
						overflow: hidden;
						&:first-child {
							margin-left: 0;
						}
						image{
							width: 100%;
							height: 100%;
						}
					}
				}
				.listcard-content__des{
					margin-top: 10px;
				}
			}
		}
		&.mode-image{
			flex-direction: column;
			.listcard-image{
				width: 100%;
				height: 100px;
			}
			.listcard-content{
				width: 100%;
				padding-left: 0px;
				.listcard-content__des,.listcard-content__title{
					margin-top: 10px;
				}
			}
		}
	}
</style>

<template>
	<view>
		<!-- 基础卡片 -->
		<view class="listcard" v-if="item.mode==='base'">
			<view class="listcard-image">
				<image :src="item.cover[0]" mode="aspectFill"></image>
			</view>
			<view class="listcard-content">
				<view class="listcard-content__title">
					<text>{{item.title}}</text>
				</view>
				<view class="listcard-content__des">
					<view class="listcard-content__des-label">
						<view class="listcard-content__des-label-item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard-content__des-browse">
						{{item.browse_count}}浏览
					</view>
				</view>
			</view>
		</view>
		<!-- 多图模式 -->
		<view class="listcard mode-column" v-if="item.mode==='column'">
			<view class="listcard-content">
				<view class="listcard-content__title">
					<text>{{item.title}}</text>
				</view>
				<view class="listcard-image">
					<view class="listcard-image__item" v-if="index<3" v-for="(item,index) in item.cover" :key="index">
						<image :src="item" mode="aspectFill"></image>
					</view>
				</view>
				<view class="listcard-content__des">
					<view class="listcard-content__des-label">
						<view class="listcard-content__des-label-item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard-content__des-browse">
						{{item.browse_count}}浏览
					</view>
				</view>
			</view>
		</view>
		<!-- 大图模式 -->
		<view class="listcard mode-image" v-if="item.mode==='image'">
			<view class="listcard-image">
				<image :src="item.cover[0]" mode="aspectFill"></image>
			</view>
			<view class="listcard-content">
				<view class="listcard-content__title">
					<text>{{item.title}}</text>
				</view>
				<view class="listcard-content__des">
					<view class="listcard-content__des-label">
						<view class="listcard-content__des-label-item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard-content__des-browse">
						{{item.browse_count}}浏览
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"list-card",
		props:{
			item:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {
				
			};
		},
		created() {
			// console.log('item',this.item.id);
		}
	}
</script>
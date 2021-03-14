<style lang="scss">
	.tab {
		display: flex;
		background-color: #fff;
		border: 1px #f5f5f5 solid;
		width: 100%;
		box-sizing: border-box;

		.tab-scroll {
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;

			.tab-scroll__box {
				display: flex;
				flex-wrap: nowrap; // 不换行
				align-items: center; // 垂直居中
				height: 45px;
				box-sizing: border-box;

				.tab-scroll__item {
					flex-shrink: 0;
					font-size: 14px;
					color: #333;
					padding: 0 10px;

					&.active {
						color: $mk-base-color;
					}
				}
			}
		}

		.tab-icons {
			position: relative;
			flex: 0 0 45px;
			display: flex;
			justify-content: center; // 水平居中
			align-items: center;

			&::after {
				content: '';
				position: absolute;
				top: 12px;
				bottom: 12px;
				left: 0;
				width: 1px;
				background-color: #ddd;
			}
		}
	}
</style>

<template>
	<view class="tab">
		<scroll-view class="tab-scroll" scroll-x>
			<view class="tab-scroll__box">
				<view class="tab-scroll__item" :class="{active:activeIndex===index}" v-for="(item,index) in list" :key="index"
					@click="clickTab(item,index)">{{item.name}}</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tab",
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			},
			tabIndex: {
				type: Number,
				default () {
					return 0
				}
			}
		},
		data() {
			return {
				activeIndex: 0
			};
		},
		watch: {
			tabIndex(newVal, oldVal) {
				this.activeIndex = newVal
			}
		},
		methods: {
			clickTab(item, index) {
				this.activeIndex = index
				this.$emit('tab', {
					data: item,
					index
				})
			}
		}
	}
</script>

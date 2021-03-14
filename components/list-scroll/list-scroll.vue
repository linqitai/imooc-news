<style lang="scss">
	.scroll {
		height: 100%;
		box-sizing: border-box;
		.list-scroll{
			height: 100%;
			display: flex;
			flex-direction: column;
			box-sizing: border-box;
		}
	}
</style>
<template>
	<view class="scroll">
		<scroll-view class="list-scroll" scroll-y @scrolltolower="loadmore">
			<slot></slot>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"list-scroll",
		data() {
			return {
				
			};
		},
		methods:{
			loadmore(){
				console.log('loadmore_list-scroll')
				this.$emit('loadmore')
			}
		}
	}
</script>


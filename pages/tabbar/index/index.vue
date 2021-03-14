<style lang="scss">
	/* @import '@/common/css/icons.css'; */
	page {
		height: 100%;
		display: flex;
	}
	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		box-sizing: border-box;
		overflow: hidden;
	}
</style>
<template>
	<view class="home">
		<navbar></navbar>
		<tab :list="tabList" :tabIndex="tabIndex" @tab="tab"></tab>
		<list :tab="tabList" :listIndex="listIndex" @change="listChange"></list>
		<!-- <view class="home-list">
			<list></list>
		</view> -->
	</view>
</template>

<script>
	import navbar from '@/components/navbar/navbar.vue'
	export default {
		components:{
			navbar
		},
		data() {
			return {
				tabList:[],
				tabIndex:0,
				listIndex:0
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			getLabel(){
				this.$api.get_label().then((res) => {
					const {data} = res
					console.log('label',data);
					data.unshift({
						name:'全部'
					})
					this.tabList = data
				})
			},
			tab({data,index}){
				this.listIndex = index
			},
			listChange(current){
				this.tabIndex = current
			}
		}
	}
</script>

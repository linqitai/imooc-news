<template>
	<list-scroll class="list-scroll" @loadmore="loadmore">
		<list-card v-for="(item,index) in list" :key="index" :item="item"></list-card>
		<uni-load-more status="noMore" iconType="snow"></uni-load-more>
	</list-scroll>
</template>

<script>
	export default{
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			loadmore(){
				console.log('loadmore_list-item')
				this.$emit('loadmore')
			}
		}
	}
</script>

<style lang="scss">
	.list-scroll{
		height: 100%;
	}
</style>

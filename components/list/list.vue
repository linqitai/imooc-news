<style lang="scss">
	.home-swiper {
		height: 100%;

		.swiper-item {
			height: 100%;
		}
	}
</style>

<template>
	<swiper class="home-swiper" @change="change" :current="listIndex">
		<swiper-item class="swiper-item" v-for="(item,index) in tab" :key="index">
			<list-item :list="listCatchData[index]" @loadmore="loadmore"></list-item>
		</swiper-item>
	</swiper>
</template>

<script>
	import listItem from './list-item.vue'
	export default {
		name: "list",
		components: {
			listItem
		},
		props: {
			tab: {
				type: Array,
				default () {
					return []
				}
			},
			listIndex: {
				type: Number,
				default () {
					return 0
				}
			}
		},
		data() {
			return {
				listCatchData:{}
			};
		},
		watch:{
			tab(newVal){
				if(newVal.length === 0) return
				this.getList(this.listIndex)
			}
		},
		// onLoad是用在页面，组件里只能用created
		created() {
		},
		methods: {
			loadmore(){
				console.log('loadmore_list')
			},
			change(e) {
				const {
					current
				} = e.detail
				this.$emit('change', current)
				this.getList(current)
			},
			getList(current) {
				console.log("getList");
				console.log("getList");
				this.$api.get_list({
					name:this.tab[current].name,
					page:1,
					pageSize:2
				}).then(res => {
					console.log('返回数据', res);
					const {
						data
					} = res
					// this.list = data
					//this.listCatchData[current] = data
					this.$set(this.listCatchData,current,data)
				})
			}
		}
	}
</script>


<style lang="scss">
	.home-swiper {
		height: 100%;

		.swiper-item {
			height: 100%;
		}
	}
</style>

<template>
	<swiper class="home-swiper" @change="change" :current="listIndex">
		<swiper-item class="swiper-item" v-for="(item,index) in tab" :key="index">
			<list-item :list="listCatchData[index]"></list-item>
		</swiper-item>
	</swiper>
</template>

<script>
	import listItem from './list-item.vue'
	export default {
		name: "list",
		components: {
			listItem
		},
		props: {
			tab: {
				type: Array,
				default () {
					return []
				}
			},
			listIndex: {
				type: Number,
				default () {
					return 0
				}
			}
		},
		data() {
			return {
				listCatchData: {},
			};
		},
		watch:{
			tab(newVal){
				if(newVal.length === 0) return
				this.getList(this.listIndex)
			}
		},
		// onLoad是用在页面，组件里只能用created
		created() {
			// this.getList(this.listIndex)
		},
		methods: {
			change(e) {
				const {
					current
				} = e.detail
				this.$emit('change', current)
				// 当数据不存在或者长度为0的时候才请求数据
				if(!this.listCatchData[current] || this.listCatchData[current].length === 0){
					this.getList(current)
				}
			},
			getList(current) {
				this.$api.get_list({
					name:this.tab[current].name
				}).then(res => {
					console.log('返回数据',res);
					const {
						data
					} = res
					// this.list = data
					// 懒加载
					this.$set(this.listCatchData, current, data)
				})
			}
		}
	}
</script>

// 该文件用于合并所有接口文件并批量导出所有的接口请求
const requireApi = require.context(
	// api 的相对路径
	'.',
	// 是否查询子目录
	false,
	// 查询文件的后缀
	/.js$/
)
let module = {} // 用于存放接口并一起导出
requireApi.keys().forEach((key,index) => {
	if(key == './index.js') return // 过滤index.js文件
	Object.assign(module,requireApi(key))
})
//导出所有接口请求
export default module
'use strict';

// 获取数据库的引用
const db = uniCloud.database()
exports.main = async (event, context) => {
	const {
		name,
		page = 1,
		pageSize = 10
	} = event
	let matchObj = {}
	if(name !== '全部'){
		matchObj = {
			classify: name
		}
	}
	//也可以试试聚合查询
	const article_list = await db.collection('article')
	.aggregate()
	.match(matchObj)
	.project({
		content:false
	})
	.skip((page-1)*pageSize)
	.limit(pageSize)
	.end()
	/* .where({
		classify:name
	})
	.field({
		content:false
	})
	.get() */
	// console.log("label",label);
	// 返回数据给客户端
	return {
		code: 200,
		msg: '数据请求成功',
		data: article_list.data
	}
};
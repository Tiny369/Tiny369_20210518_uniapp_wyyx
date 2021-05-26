let Koa = require('koa');
let KoaRouter = require('koa-router');


// 1. 生成应用实例
const app = new Koa();
// 2. 生成路由器
const router = new KoaRouter();
app
	.use(router.routes()) // 允许使用路由
	.use(router.allowedMethods()) // 允许使用路由方法

	
// 3. 注册路由
// express: req, res, next
// koa: ctx(req, res) next
router.get('/', (ctx, next) => {
	
	// 返回数据
	ctx.body = '服务器返回的测试数据';
});



// 主页数据接口
/* let indexData = require('./datas/index.json');
router.get('/getIndexData', (ctx, next) => {
	ctx.body = {
		code: 200,
		data: indexData
	};
}); */
let indexData = require('./datas/index.json');
router.get('/getIndex', (ctx, next) => {
	// 生成的H5应用存在跨域问题，通过cors设置跨域配置
	ctx.set('Access-Control-Allow-Origin', '*')
	ctx.body = indexData
});


// 分类页接口
/* let cateGoryData = require('./datas/categoryDatas.json');
router.get('/getCateGoryData', (ctx, next) => {
	ctx.body = {
		code: 200,
		data: cateGoryData
	};
}); */
let categoryDatas = require('./datas/categoryDatas.json');
router.get('/getCategoryDatas', (ctx, next) => {
	ctx.set('Access-Control-Allow-Origin', '*')
	ctx.body = categoryDatas
});


// 主页导航分类页接口
/* let indexCateListData = require('./datas/indexCateList.json');
router.get('/getIndexCateListData', (ctx, next) => {
	ctx.body = {
		code: 200,
		data: indexCateListData
	};
}); */
let cateList = require('./datas/indexCateList.json');
router.get('/getCateList', (ctx, next) => {
	ctx.set('Access-Control-Allow-Origin', '*')
	ctx.body = cateList
});




// 获取用户唯一标识的接口
router.get('/getOpenId', async (ctx, next) => {
	// 1. 获取请求参数
	const code = ctx.query.code;
	// 2. 整合数据： appId， appSecret， code
	const appId = 'wx810e8b1fde386fde';
	const appSecret = '3f12b5e1dd68df01a8370011170b6133';
	
	// 发送请求给微信的服务器, 换取openId
	let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
	
	let result = await fly.get(url)
	let openId = JSON.parse(result.data).openid;
	console.log('openId', openId)
	// 自定义登录状态
	let user =  {
		token: openId,
		username: 'kobe',
		age: 43
	}
	
	// 对openId进行加密
	let token = jwt.sign(openId, 'atguigu')
	// 测试解密token
	let testResult = jwt.verify(token, 'atguigu');
	console.log('testResult', testResult)
	ctx.body = token
});

// 2. 绑定监听
app.listen('3001', (err) => {
	if(err){
		console.log('服务器启动失败');
		console.log(err);
	}else {
		console.log('服务器启动成功');
		console.log('服务器地址： http://localhost:3001')
	}
})

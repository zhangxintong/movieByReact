var app = require('koa')();
var router = require('koa-router')();

// 订单列表
const orderList = require('./orderlist/orderList.js')
router.get('/api/orderlist/:username', function*(next) {
        console.log('订单列表')

        const params = this.params
        const username = params.username
        console.log('用户名：' + username)

        this.body = orderList
    })
    // 提交评论
router.post('/api/submitComment', function*(next) {
    console.log('提交评论')

    // 获取参数

    this.body = {
        errno: 0,
        msg: 'ok'
    }
})

// 开始服务并生成路由
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3001);
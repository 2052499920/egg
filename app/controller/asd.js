'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async carousel() {
        let { ctx,app } = this
        let carousel = new app.model.Home(ctx.request.body)
        let user = new app.model.Home(ctx.request.body)
        await user.save()
        ctx.body = {
            code: 200,
            msg: '获取成功',
            data: carousel.carousel
        }
    }
}

module.exports = UserController;
'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async login() {
        let { ctx, app } = this
        let { username, password,yard } = ctx.request.body
        let user = await ctx.model.Rear.findOne({ username, password })
        let { codes } = ctx.session
        let token = app.jwt.sign({
            username
        }, app.config.jwt.secret, { expiresIn: '1h' })
        // console.log(user);
        if (user) {
            console.log(yard, codes, yard === codes);
            if (yard === codes && codes) {
                let obj = {}
                obj.id = user._id
                obj.username = user.username
                ctx.body = {
                    code: 200,
                    msg: '登录成功',
                    data: obj,
                    token
                }
            } else {
                ctx.body = {
                    code: 500,
                    msg: '验证码错误'
                }
            }
        } else {
            ctx.body = {
                code: 500,
                msg: '用户名或密码错误'
            }
        }
    }
    async sing() {
        //接受前端传递的参数
        let { ctx, app } = this
        let { username } = ctx.request.body
        //查询当前有没信息
        let user = await ctx.model.Rear.findOne({ username })
        if (user) {
            ctx.body = {
                code: 500,
                msg: '用户已存在'
            }
        } else {
            let user = new app.model.Rear(ctx.request.body)
            await user.save()
            let obj = {}
            obj.id = user._id
            obj.username = user.username
            ctx.body = {
                code: 200,
                msg: '注册成功',
                data: obj
            }
        }
    }

}

module.exports = UserController;

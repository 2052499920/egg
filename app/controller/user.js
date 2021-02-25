'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async login() {
        let { ctx, app } = this
        let { username, password, yard } = ctx.request.body
        let { codes } = ctx.session
        console.log(codes);

        let user = await ctx.model.User.findOne({ username, password })
        let token = app.jwt.sign({
            username
        }, app.config.jwt.secret, { expiresIn: '1h' })
        if (user) {
           
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
        let { username, password } = ctx.request.body
        //查询当前有没信息
        let user = await ctx.model.User.findOne({ username })
        if (user) {
            ctx.body = {
                code: 500,
                msg: '用户已存在'
            }
        } else {
            let user = new app.model.User(ctx.request.body)
            await user.save()
            let obj = {}
            obj.img = user.img
            obj.coupon = user.coupon
            obj.isV = user.isV
            obj.id = user._id
            ctx.body = {
                code: 200,
                msg: '注册成功',
                data: obj
            }
        }
    }
    async del() {
        let { ctx } = this
        let { id } = ctx.request.body
        if (id === '6034b8810800a64718054a53') {
            ctx.body = {
                code: 500,
                msg: '管理员账户不允许删除',
            }
        } else {
            let user = await ctx.model.User.findByIdAndRemove({ _id: id })
            if (user) {
                ctx.body = {
                    code: 200,
                    msg: '删除成功'
                }
            } else {
                ctx.body = {
                    code: 500,
                    msg: '删除失败'
                }
            }
        }
    }
    // async put() {
    //     let { ctx } = this
    //     let { id, username } = ctx.request.body
    //     let user = await ctx.model.User.findByIdAndUpdate(id, { username: username })
    //     if (user) {
    //         ctx.body = {
    //             code: 200,
    //             msg: '修改成功'
    //         }
    //     } else {
    //         ctx.body = {
    //             code: 500,
    //             msg: '修改失败'
    //         }
    //     }
    // }
}

module.exports = UserController;

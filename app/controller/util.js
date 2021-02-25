const svgCaptcha = require('svg-captcha');
// 获取图片验证码
// module.exports.getcode = (ctx) => {
//     const options = {// 参数
//         width: 100,
//         height: 40, // height of captcha
//         fontSize: 50, // captcha text size
//         color: true,
//         noise: 2,
//     }
//     const Captcha = svgCaptcha.createMathExpr(options);//生成验证码
//     ctx.session.codes = Captcha.text
//     console.log(Captcha.text);
//     // 设置session过期时间
//     ctx.session.maxAge = 1000 * 60 * 10
//     ctx.body = {//返回结果给客户端
//         code: 200,
//         msg: '获取验证码成功',
//         data: Captcha.data
//     }
// };

// 'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async getcode() {
        let { ctx } = this
        const options = {// 参数
            width: 100,
            height: 40, // height of captcha
            fontSize: 50, // captcha text size
            color: true,
            noise: 2,
        }
        const Captcha = svgCaptcha.createMathExpr(options);//生成验证码
        ctx.session.codes = Captcha.text
        let {codes} = ctx.session
        console.log(Captcha.text,codes);
        // 设置session过期时间
        ctx.session.maxAge = 1000 * 60 * 10
        ctx.body = {//返回结果给客户端
            code: 200,
            msg: '获取验证码成功',
            data: Captcha.data
        }
    }
}

module.exports = UserController;

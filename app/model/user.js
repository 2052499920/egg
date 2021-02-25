// //用户的所有字段（信息）
const dayjs = require('dayjs')

let time = () => {
    let times = dayjs.unix(new Date())

    return times
}

module.exports = app => {
    let mongoose = app.mongoose;
    let Schema = mongoose.Schema;
    const useSchema = new Schema({
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        yard: {
            type: Number,
            // required: true
        },
        isV: {
            type: Number,
            default: 0
        },
        img: {
            type: String,
            default: 'https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%A4%B4%E5%83%8F&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=496620333,2325269774&os=3191224994,129428760&simid=0,0&pn=2&rn=1&di=104970&ln=2312&fr=&fmq=1614048947159_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=11&spn=0&pi=0&gsm=0&oriquery=%E5%A4%B4%E5%83%8F&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fc-ssl.duitang.com%252Fuploads%252Fblog%252F202010%252F31%252F20201031163129_1840e.thumb.400_0.jpg%26refer%3Dhttp%253A%252F%252Fc-ssl.duitang.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1616640945%26t%3D5a8ec8327d1798a48c2fcd75a5f509eb&rpstart=0&rpnum=0&adpicid=0&force=undefined'
        },
        coupon: {
            type: Array,
            default: [
                {
                    cid: 3,
                    endtimes: time() / 1000 + 259200000
                },
                {
                    cid: 5,
                    endtimes: time() / 1000 + 259200000
                },
                {
                    cid: 7,
                    endtimes: time() / 1000 + 259200000
                },

            ]
        }
    })
    return mongoose.model('User', useSchema)
}

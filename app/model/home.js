let uid =()=> {
    var s = [];
    var hexDigits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
    }
    s[14] = "4"
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
    s[8] = s[13] = s[18] = s[23] = "-"
    let uuid = s.join("")
    return uuid
  }

module.exports = app => {
    let mongoose = app.mongoose;
    let Schema = mongoose.Schema;
      const HomeSchema = new Schema({
        carousel:{
            type:Array,
            default:[
                {
                    id:uid(),
                    img:'/public/0766e1811936d599.jpg.jpg'
                },
                {
                    id:uid(),
                    img:'/assets/0766e1811936d599.jpg.jpg'
                },
                {
                    id:uid(),
                    img:'/assets/0766e1811936d599.jpg.jpg'
                }
            ]
        }
      })
      return mongoose.model('Home', HomeSchema)
  }
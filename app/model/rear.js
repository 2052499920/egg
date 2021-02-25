// //用户的所有字段（信息）
module.exports = app => {
    let mongoose = app.mongoose;
    let Schema = mongoose.Schema;
    const rearSchema = new Schema({
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

    })
    return mongoose.model('Rear', rearSchema)
}

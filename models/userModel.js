const mongoose = require ('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Nmae is required']
    },

    email :{
        type:String, 
        required:[true, "Email is required"]
    },
    password: {
        type: String,
        required :[true, 'Password is requires']
    },

    isAdmin:{
        type:Boolean,
        default:false
    }

}, {timeStamps:true})




module.exports = mongoose.model('User', userSchema)
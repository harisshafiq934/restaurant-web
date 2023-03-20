const mongoose = require('mongoose')
 const orderSchema = mongoose.Schema({
    name:{

        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true,'email is required']
    },
    userid:{
        type:String,
        
    },
    orderAmount: {
        type:String,
    },

    orderItems:[],
    shippingAddress:{
        type: Object,
       
    },
    isDelivered:{
        type:String,
        // required:true
    },

    transectionId:{
        type:String,
        // required:true
    },
 },{timetamps:true})

 module.exports =mongoose.model('order', orderSchema)
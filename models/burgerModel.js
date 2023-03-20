const mongoose = require ("mongoose");
// const dbb = require("./../db")

const burgerSchema = mongoose.Schema({
    name :{type: String, require},
    varients: [],
    prices: [],
    category: {type: String, require},
    image: {type: String, require},
    description: {type: String, require}

} , {
    timesstamps:true,
    autoCreate: true
})


const burgerModel = mongoose.model('burgers' , burgerSchema)

module.exports = burgerModel
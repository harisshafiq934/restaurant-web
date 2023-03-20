const mongoose = require ("mongoose");
// const dbb = require("./../db")

const sandwichSchema = mongoose.Schema({
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


const sandwichModel = mongoose.model('sandwiches' , sandwichSchema)

module.exports = sandwichModel
const mongoose = require ("mongoose");
// const dbb = require("./../db")

const pizzaSchema = mongoose.Schema({
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


const pizzaModel = mongoose.model('pizzas ' , pizzaSchema)

module.exports = pizzaModel
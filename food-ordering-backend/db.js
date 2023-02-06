const mongoose = require ("mongoose")

mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://dbuser:abna.vt63cnM4y7@cluster0.fubsiuz.mongodb.net/food-app" , {useUnifiedTopology:true, useNewUrlParser:true})


 var db = mongoose.connection
db.on('connected' , ()=>{
    console.log('connection successfull');
})

db.on('error', ()=>{
    console.log('connection failed');
})

module.exports = mongoose
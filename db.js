require ("dotenv").config();
const mongoose = require ("mongoose")

mongoose.set('strictQuery', false);

mongoose.connect(process.env.db_key, {useUnifiedTopology:true, useNewUrlParser:true})


 var db = mongoose.connection
db.on('connected' , ()=>{
    console.log('connection successfull');
})

db.on('error', ()=>{
    console.log('connection failed');
})

module.exports = mongoose
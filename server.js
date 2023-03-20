const express = require('express')
const app = express()
const burger = require("./models/burgerModel")
const pizza = require ("./models/pizzaModel")
const sandwich = require ("./models/sandwichModel")
const db = require("./db")
const path = require('path')
app.use(express.json());


const pizzasRoute =require('./routes/pizzasRoute')
app.use('/api/pizzas/', pizzasRoute)
app.use('/api/burgers', require("./routes/burgersRoute"));
app.use('/api/sandwiches', require("./routes/sandwichesRoute"));
app.use('/api/users', require("./routes/userRoute"));
app.use('/api/orders', require("./routes/orderRoute"));

//static
app.use(express.static(path.join(__dirname, './food-ordering-ui/build')))
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, './food-ordering-ui/build/index.html'))
})
const port = process.env.PORT || 5000;
app.listen(port, () => "ok ki report");




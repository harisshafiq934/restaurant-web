const express = require('express')
const app = express()
const burger = require("./models/burgerModel")
const pizza = require ("./models/pizzaModel")
const sandwich = require ("./models/sandwichModel")
const db = require("./db")

app.use(express.json());


const pizzasRoute =require('./routes/pizzasRoute')
app.use('/api/pizzas/', pizzasRoute)
app.use('/api/burgers', require("./routes/burgersRoute"));
app.use('/api/sandwiches', require("./routes/sandwichesRoute"));
app.use('/api/users', require("./routes/userRoute"));
app.use('/api/orders', require("./routes/orderRoute"));
const port = process.env.PORT || 5000;
app.listen(port, () => "ok ki report");
















































// const express =require ('express')

// require('colors')
// const morgan = require ('morgan')

// const app = express()


// //middlewares

// app.use(express.json())
// app.use(morgan('dev'))


// //route

// app.get('/', (req, res)=>{
//     res.send('<h1>hello</h1>')
// })


// app.listen(8080, () => {
//     console.log('server is running');
// })
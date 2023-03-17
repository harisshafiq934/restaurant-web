
 require ("dotenv").config();
const express = require("express");

const router = express.Router();


const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  process.env.stripe_api
);

const Order = require("../models/orderModel");

router.post("/placeorder", async (req, res) => {
  const { token, subTotal, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: subTotal * 100,
        currency: "pkr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    
        if(payment){
            const newOrder = new Order ({

                name:currentUser.name,
                email:currentUser.email,
                userId:currentUser._id,
                orderItems:cartItems,
                orderAmount:subTotal,
                shippingAddress:{
                    street:token.card.address_line1,
                    city:token.card.address_city,
                    country:token.card.address_country,
                    zipcode:token.card.address_city_zip,

                },

                transectionId:payment.source.id

            })

            newOrder.save()
            res.send('payment success')

        }else{
            res.send('payment failed')
        }
    } catch (error){
        res.status(400).json({
            message:'something went wrong',
            error:error.stack
        });

    }});




    router.post("/getuserorder", async (req, res)=>{
        const {userid} = req.body;
        try {

            const orders = await Order.find({userid}).sort({ _id: "-1"});
            res.status(200).send(orders);
            
        } catch (error) {
            res.status(400).json({
                message: 'something went wrong',
                error:error.stack
            })
            
        }
    })


module.exports= router 
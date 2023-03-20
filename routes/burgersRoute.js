const express = require ("express")

const router = express.Router();
const burgerModel = require('../models/burgerModel')

router.get("/getAllburgers", async(req, res)=>{

    try{
        const burgers = await burgerModel.find({});
        res.send(burgers)
    }

    catch (error){
       res.json({ message: error});
    }
});





module.exports= router;


const express = require ("express")

const router = express.Router();
const sandwichModel = require('../models/sandwichModel')

router.get("/getAllsandwiches", async(req, res)=>{

    try{
        const sandwiches = await sandwichModel.find({});
        res.send(sandwiches)
    }

    catch (error){
       res.json({ message: error});
    }
});





module.exports= router;


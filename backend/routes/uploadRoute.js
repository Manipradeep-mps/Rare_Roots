const express=require('express')
const router=express.Router();


const postmodel=require('./../models/postmodel')
const authenticate=require('./middleware');
router.post('/post',authenticate,(req,res)=>{
    const obj=req.body;
    postmodel(obj).save()
    .then(result=>{
        res.json("Success");
    })
    .catch(err=>{
        res.json("Error");
    })
})

module.exports=router
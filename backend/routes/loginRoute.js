const express=require('express')
const router=express.Router();
require('dotenv').config()
const mongoose=require('mongoose')

const formmodel=require('./../models/formmodel')
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');


router.post('/',(req,res)=>{
    let email
    let password
    email=req.body.email;
    password=req.body.password;
  
    if(email=='' || password=='')
    {
        res.json("The fields can't be empty!")
    }
    else{
    formmodel.find({email})
    .then(result=>{
        if(result.length){
            const hps=result[0].password
            console.log(result)
            bcrypt.compare(password,hps)
            .then((resp=>{
                if(resp){
                    const curruser={
                        useremail:email
                    }
                    const accesstoken=jwt.sign(curruser,process.env.jwt_secret_key)
                    res.json({
                        accessToken: accesstoken,
                        message: "Login successful !!!"
                      });
                }
                else
                {
                    res.json("Invalid password")
                    console.log(resp)
                }
            }))
            .catch(err=>{
                res.send("Error in ps compare")
            })
            
        }
        else
        {
            res.json("User does not exists")
        }
    })
    .catch(err=>{
        res.json("Error in find")
    })
}
})

router.post('/obj',(req,res)=>{
    formmodel.find({email:req.body.email})
    .then(result=>{
        res.send(result);
    })
    .catch((err)=>{
        res.send(err);
    })
})
module.exports=router;






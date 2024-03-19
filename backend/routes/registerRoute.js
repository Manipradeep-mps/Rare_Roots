const express=require('express')
const router=express.Router();

const bcrypt=require('bcrypt')

const formmodel=require('./../models/formmodel')

router.post('/',(req,res)=>{
    let name=req.body.name;
    let email=req.body.email;
    let password=req.body.password;
    let phoneno=req.body.phoneno;
    if(name==''||email==''||password==''||phoneno=='')
    {
        res.json("The fields should not be empty")
    }
    else if(!/^[A-Za-zÀ-ÖØ-öø-ÿ-]+(?: [A-Za-zÀ-ÖØ-öø-ÿ-]+)*$/.test(name))
    {
        res.json("Please enter a valid name")
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    {
        res.json("Please enter a valid email id")
    }
    else if(password.length<8)
    {
        res.json("Password should be atleast Eight characters")
    }
    else if(!/^\+?[0-9\s\-]+$/.test(phoneno))
    {
        res.json("Please enter a valid number")
    }
    else
    {
        formmodel.find({email})
        .then(result=>{
            if(result.length)
            {
                res.json("User already exists")
            }
            else{
                
                const salt=10;
                 bcrypt.hash(password,salt)
                .then(hashedpassword=>{
                    const obj={
                        "name":name,
                        "email":email,
                        "password":hashedpassword,
                        "phoneno":phoneno
                    }
                    formmodel(obj).save()
                    .then(result=>{
                        res.json("Success");
                        //res.send(JSON.stringify(result))
                    })
                    .catch(err=>{
                        
                        res.json("Error")
                    })

                })
                .catch(err=>{
                    res.json("Error while hashing the password")
                })
                

            }
        
        })
    }
    
})

module.exports=router;
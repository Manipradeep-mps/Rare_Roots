const mongoose=require('mongoose')

const obj={
    "name":String,
    "email":String,
    "password":String,
    "phoneno":Number

}

const formschema=mongoose.Schema(obj)
const formmodel=mongoose.model('formdetail',formschema)

const bcrypt=require('bcrypt')

module.exports=formmodel;
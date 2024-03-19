const mongoose=require('mongoose')

const obj={
    "id":String,
    "product":{
        "name":String,
        "description":String,
        "image":String,
        "location":{
            "latitude":String,
            "longitude":String
        },
        "contact":String


    },
    "objectid":String
}

const postschema=new mongoose.Schema(obj);
const postmodel=mongoose.model('postdetail',postschema);

module.exports=postmodel;
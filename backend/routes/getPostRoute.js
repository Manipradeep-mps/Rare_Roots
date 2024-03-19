const express=require('express')
const router=express.Router();

const postmodel=require('./../models/postmodel');
const mongoose=require('mongoose')

const authenticate =require('./middleware')

router.get('/getAllPosts', authenticate, (req, res) => {
    postmodel.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).send(err); // Handle error response
        });
});

router.get('/getOnePost', authenticate, (req, res) => {
    const id = req.query.id;
    postmodel.findById(id)
        .then((result) => {
            console.log(result);
            res.send(result);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

router.get('/getMyPost', authenticate, (req, res) => {
    postmodel.find({ objectid: req.query.objectid })
        .then((result) => {
            console.log(req.query.objectid);
            res.send(result);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

module.exports=router;
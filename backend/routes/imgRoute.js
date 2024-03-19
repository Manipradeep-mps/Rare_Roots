const express=require('express')
const router=express.Router();

const mongoose=require('mongoose')
const postmodel=require('../models/postmodel');
const { S3Client, PutObjectCommand ,DeleteObjectCommand} = require('@aws-sdk/client-s3');
const { readFileSync } = require('fs')
const multer=require('multer')
const authenticate =require('./middleware')
const client=new S3Client({
    region:process.env.AWS_REGION,
    credentials:{
        accessKeyId:process.env.aws_access_key,
        secretAccessKey:process.env.aws_secret_key
    }
})
const upload=multer({dest:'uploads/'})
router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            res.status(400).send("No file or file buffer found");
            return;
        }

        const fname = req.file.originalname;
        const filecontent = readFileSync(req.file.path);

        const params = {
            Bucket: process.env.aws_bucket_name,
            Key: fname,
            Body: filecontent,
        };

        try {
            // Upload file to S3
            await client.send(new PutObjectCommand(params));
           res.json( ["Success",`https://${process.env.aws_bucket_name}.s3.amazonaws.com/${fname}`]);


    
        } catch (err) {
            console.error("Failed to upload file:", err);
            res.status(500).send("Failed to upload file or update info in DB");
        }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports=router;
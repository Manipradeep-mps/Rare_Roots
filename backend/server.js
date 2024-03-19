const express=require('express')
const mongoose=require('mongoose')
const multer=require('multer')
const app=express()
app.use(express.json())
const cors=require('cors')
app.use(cors())
require('dotenv').config()
app.listen(8000);

// const { S3Client, PutObjectCommand ,DeleteObjectCommand} = require('@aws-sdk/client-s3');
// const { readFileSync } = require('fs')
const mongourl=process.env.mongoDB_uri
mongoose.connection.on('connected',()=> console.log('Connected'))
mongoose.connect(mongourl)


const loginRoute=require('./routes/loginRoute');
const registerRoute=require('./routes/registerRoute');
const imgRoute=require('./routes/imgRoute');
const uploadRoute=require('./routes/uploadRoute')
const getPostRoute=require('./routes/getPostRoute');

app.use('/login',loginRoute);
app.use('/register',registerRoute);
app.use('/image',imgRoute);
app.use('/data',uploadRoute);
app.use('/api',getPostRoute)


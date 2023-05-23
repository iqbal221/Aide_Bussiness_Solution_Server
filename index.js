const express = require('express')
const cors = require('cors')
const colors = require('@colors/colors');
const routes = require("./src/Routes/Routes")
const mongoose = require('mongoose')
require('dotenv').config()


const app = express()

// middleware
app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send('ecommerce app server is running')
})

// route end point
app.use('/api/v1/',routes)


// Not found route
app.get('*',(req,res)=>{
    res.send('404 Not Found anything')
})

// database connection
mongoose.connect(process.env.MONGO_URI).then(()=>{
   console.log(`database connected successfully`.blue)  
})

// server port
const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`server is running at ${port}`.yellow)
})


module.exports = app;


const express = require("express");
const bodyParser = require('body-parser');

const mongoose = require("mongoose")

// const routes = require('./routes/api');

const app = express();
// app.get("/ajay",(req,res) => {
//     res.send({
//         name:"ajay"
//     })
// })
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json()); 

app.use('/api', require('./routes/api'));

app.use(function(err,req,res,next){
    res.status(422).send({error:err.message})
})

app.listen(process.env.port || 5006,() => {
    console.log("server start addjef")
})

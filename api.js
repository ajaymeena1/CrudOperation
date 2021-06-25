const express = require("express");

const Ninja = require('../models/db');


const router = express.Router();




router.get("/aj ",(req,res,next) => {
    Ninja.geoNear({type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},

{maxDistance: 100000, spherical: true})

.then(function(ninjas){

res.send(ninjas)
})

})

router.post('/aj',(req,res,next) => {
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja)
    }).catch(next)
    

   
})


router.put('/aj/:id',(req,res,next) => {
    Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(ninja){
        Ninja.findOne({_id:req.params.id}).then(function(ninja){
            res.send(ninja)
        })
    
    })
})


router.delete('/aj/:id',(req,res,next) => {
    Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
      
            res.send(ninja)


    })
  
})

module.exports = router;

const mongoose = require('mongoose')

const ProductUser = new mongoose.Schema({
    id:{type:Number},
     name :{type:String,require:true},
     description:{type:String, require: true},
     price:{type:Number, required: true},
     category:{type:String, require:true},
    //  reviews:{}
})
// moongose library import hua fir schema bna and fir collection bna in mongodb
// const user is schema and make a collection in mongodb so we exports module using mongoose
// Moongoose model create a collections in mongodb with g3users and with model name user


module.exports = mongoose.model("productData",ProductUser)
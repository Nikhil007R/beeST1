const mongoose = require('mongoose')

const reviewUser = new mongoose.Schema({
     content :{type:String,require:true},
     rating:{type:Number, require: true},
     author:{type:String, required: true},
     createdAt:{type:Date, require:true},
    
})
// moongose library import hua fir schema bna and fir collection bna in mongodb
// const user is schema and make a collection in mongodb so we exports module using mongoose
// Moongoose model create a collections in mongodb with g3users and with model name user


module.exports = mongoose.model("reviewData",reviewUser)
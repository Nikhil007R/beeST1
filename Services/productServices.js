const moongose = require('mongoose')
const user = require("../model/productmodule")

// exports.findbyEmail= async(email)=>{
//     return await user.findOne({'email':email}).select('_id').lean()
// }
exports.createuser = async(data)=>{
    return await user.create(data);
}
const express = require ('express');
const user =require ('../model/productmodule');
const userservice = require('../Services/productServices')


exports.register = async(req,res)=>{
    try{
        const inputdata=req.body;
        const name = inputdata.name;
        console.log('name',name);
        const activeuser = await userservice.findbyName(name);
        if(activeuser){
            res.status(500).json({message : "user already exist"});
        }
        else{
            const createdata = await userservice.createuser(inputdata)
            res.status(200).json({
                message:'success', data: createdata
        })

        }
    }
    catch(error){
        res.status(500).json({message:"fail"})
    }
    
}
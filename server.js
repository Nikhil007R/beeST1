const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
app.use(express.json());

const dB = require('./Middlewares/db');
const userData = require('./model/productmodule.js');
dB.connectToDb();

const routes = require("./Routes/productRoutes.js");
app.use("/",routes);


app.listen(3000,()=>{
    console.log(`server is statred on 3000`);
})
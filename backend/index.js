const express = require('express')
const {body,validationResult} = require('express-validator')
const mongoose = require("mongoose")
const app = express()

mongoose.connect("mongodb+srv://sammywally0707646865:<db_password>@nodebackend.epwia.mongodb.net/?retryWrites=true&w=majority&appName=NodeBackend")
    .then(()=>{
        console.log("database connected")
        app.listen(3000,()=>{
            console.log("3k running")
        });
    })
    .catch(()=>{
        console.log("failed connection")
    })
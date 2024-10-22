const express = require('express');
const {body,validationResult} = require('express-validator');
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({origin :'http://localhost:5173'}));
const Identitymodel = require('./identity.model.js');
const Database = require('./database.js');

app.post("/signup",(req,res)=>{
    Identitymodel.create(req.body)
    .then(Identity => res.json(Identity))
    .catch(err => res.json(err))
});


mongoose.connect(Database)
    .then(()=>{
        console.log("database connected")
        app.listen(3001,()=>{
            console.log("3k running")
        });
    })
    .catch((error)=>{
        console.log("failed connection",error)
    });


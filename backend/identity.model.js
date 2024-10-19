const mongoose = require("mongoose")

const IdentitySchema = mongoose.Schema(
    {
        name:{
            type : String,
            required : false
        },
        email:{
            type : String,
            required : true
        },
        password:{
            type : String,
            required : true
        }
    }
)

const Identity = mongoose.model("Identity",IdentitySchema);

module.exports = Identity;
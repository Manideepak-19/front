const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        requires:true
    },
    email:{
        type:String,
        requires:true
    },
    password:{
        type:String,
        required:true
    }
})

mongoose.model("User",userSchema)
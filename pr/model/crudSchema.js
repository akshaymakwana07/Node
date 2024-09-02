const mongoose = require("mongoose")

const crud = mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    prize :{
        type:String,
        required:true
    },
    details : {
        type:String,
        required:true
    }
})

const crudtbl = mongoose.model("crud",crud);

module.exports = crudtbl;
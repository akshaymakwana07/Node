const mongoose = require("mongoose");

const crud = mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    author:{
        type:String,
        required:true
    },

    published:{
        type:String,
        required:true
    },

    pages:{
        type:String,
        required:true
    },

    price:{
        type:String,
        required:true
    },

    published_copies:{
        type:String,
        required:true
    },
})

const crudAPl = mongoose.model("crud",crud);

module.exports = crudAPl
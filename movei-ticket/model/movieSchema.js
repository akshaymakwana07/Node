const mongoose = require("mongoose")

const movie = mongoose.Schema({
    title:{
        type : String,
        required : true
    },

    year:{
        type : Number,
        required : true
    },
    
    rating:{
        type : Number,
        required : true
    },

    category:{
        type : String,
        required : true
    },
    // poster:{
    //     type : String,
    //     required : true
    // }
})

const movieApl = mongoose.model("movie",movie);

module.exports = movieApl

const { Timestamp } = require("mongodb")
const mongoose=require("mongoose")

// definition d'un schèma
const postSchema=mongoose.Schema({
    titre: {
        type: String,
        required: true,
    },
    auteur:{
        type: String,
         default:"uknown" 
    },
    resume:{
        type: String,
        required: true,
        max:100
    },

    content: {
        type: String,
        required: true,
        max:100
    }
}, {timestamps:true})
module.exports = mongoose.model("Post",postSchema)
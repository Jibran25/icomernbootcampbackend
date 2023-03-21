const mongoose = require('monngose');
const {ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxlenght:32
    },
    discription:{
        type:String,
        trim:true,
        required:true,
        maxlenght:32
    },
    price:{
        type:Number,
        trim:true,
        required:true,
        maxlenght:32
    },
    category:{
        type:ObjectId,
        ref:"Category",
        required:true
    },
    stock:{
        typ:Number
    },
    sold:{
        type:Number,
        default:0
    },
    photo:{
        data:Buffer,
        contentType:String
    }

}, {timestamps:true});

module.exports = mongoose.model("Product", productSchema); 
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const ProductCartSchema = mongoose.Schema({
    products:{
        type:ObjectId,
        ref:"Product"
    },
    name:String,
    count:Number,
    price:Number
});
 
const ProductCart = mongoose.model("ProductCart",ProductCartSchema);

const OrderSchema = mongoose.Schema({
    products:[ProductCartSchema],
    transation_id:{},
    amount:{type:Number},
    address:String,
    updated:Date,
    user:{
        type:ObjectId,
        ref:"User",
    } 


});

const Order = mongoose.model("Order",OrderSchema);

module.exports ={Order, ProductCart}
const Product = require("../models/product")
const formidable = require("/formidable");
const _ = require("lodash");
const fs = require("fs");
exports.getProductById =(req, res, next, id) =>{
    Product.findById(id)
    .populate("category")
    .exec((err, product)=>{
        if(err){
            return res.status(400).json({
                error: "Product not Found"
            });
        } 
        req.product = product;
        next();
    });

};

exports.createProduct = (req , res)=>{
    let form = new formidable.IncominfForm();
    form.keepExtension = true;

    form.parse(req, (err, fields, file)=>{
        if(err){
            return res.status(400).json({
                error: "problem with image"
            });
        }
        //destructive the fields
        const {name, description, price, category, stock} = fields;


        if( 
            !name  ||
            !description||
            !price ||
            !category ||
            !stock 

        ){
                return res.statu(400).json({
                error: "please include all fields"  
                });
        }

        //TODO restriction on field 
        let product =new product(fields)

        //handle file here
        if(file.photo){
            if(file.photo.size > 3000000){
                return res.status(400).json({
                    error: "File size is too big"

                });
                
            }
            product.photo.data = fs.readFileSync(file.photo.path)
            product.photo.contentType = file.photo.type
        }
        //save to the db
        product.save((err, product)=>{
            if(err){
                res.status(400).json({
                    error: "savind product db is failed"
                });
            }
            req.json(product)
        });
    });
};
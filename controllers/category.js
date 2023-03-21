const Category = require("../models/category")

exports.getCategoryById = (req, res, next , id ) =>{
    Category.findById(id).exec((err, cate) =>{
        if(err){
            return res.status(400).json({

                error:"Category not found in Db"

            });
        }
        req.Category = cate;
    })
    
    next();
}

exports.createCatergory = (req, res) =>{
    const category = new Category(req.body)
    category.save((err , category) => {
        if(err){
            return res.status(400).json({
                error : " Not able to save category in DB"
            });
        }
        res.json({category});
    });
}; 

exports.getCategory =(req, res) =>{
    return res.json(req.Category);
};
exports.getAllCategory =(req, res) =>{
    Category.find().exec((err, categories)=>{
        if(err){
            return res.status(400).json({
                error: "No catgories found"
            });
        }
        res.json(categories);
    });
};

exports.updateCategory = (req, res)=>{
    const category = req.Category;
    category.name = req.body.name;

    category.save((err , updateCategory) => {
        if(err){
            return res.status(400).json({
                error : " failed to Update Category"
            });
        }
        res.json({updateCategory});
    });
}

exports.removeCategory = (req, res) => {
        const category = req.Category;
        category.remove((err, category) =>{
            
            if(err){
                return res.status(400).json({
                    error : " failed to delete this Category"
                });
            }
            res.json({
                message:"Succesfully Deleted" 
            });
        });
}
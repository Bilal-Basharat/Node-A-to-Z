const Product = require('../models/product');

//create a new product
async function createProduct(req, res){
    try{
        console.log('this is client request' + req.body);
            const product = await Product.create(req.body);
            res.status(201).json(product);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

module.exports = {
    createProduct,
}

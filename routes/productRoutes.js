const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');

//create a new product 
router.post('/products', productController.createProduct);

//get all products 
router.get('/products', productController.getAllProduct);

//update a product
router.put('/products/:id', productController.updateProduct);

//delete a product
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;

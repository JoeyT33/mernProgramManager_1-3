const Product = require('../models/product.model')

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => {
            console.log("Trying to find all the products")
            res.json({results: allProducts})
        })
        .catch(err => res.json(err))
}

module.exports.createOneProduct = (req, res) => {
    Product.create(req.body)
    .then(newlyCreatedProduct=> res.json({results: newlyCreatedProduct}))
    .catch(err => res.json(err))
}

module.exports.findAProduct = (req, res) => {
    Product.findOne({_id: req.params.productid})
        .then(oneProduct => res.json({results: oneProduct}))
        .catch(err => res.json(err))
}

module.exports.updateAProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id: req.params.productid},
        req.body ,
        {new:true, runValidators:true})
        .then(updatedProduct => res.json({results: updatedProduct}))
        .catch(err => res.json(err))    
}

module.exports.deleteAProduct = (req, res) => {
    Product.deleteOne({_id: req.params.productid})
        .then(deletedResult => res.json({results: deletedResult}))
        .catch(err => res.json(err))
}
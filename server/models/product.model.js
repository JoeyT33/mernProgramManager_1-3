const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name needs to be filled out!"],
        minLength: [2, "Product name must be at least 2 characters"]
    },
    price: {
        type: Number,
        required: [true, "Product price needs to be filled out!"],
        minLength: [2, "Product price must be at least 2 characters"]
    },
    description: {
        type: String,
        required: [true, "Product description needs to be filled out!"],
        minLength: [5, "Product description must be at least 5 characters"]
    }
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product;
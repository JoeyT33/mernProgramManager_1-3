const ProductController = require("../contollers/product.controller")

module.exports = app => {
    app.get("/api/products/all", ProductController.findAllProducts)
    app.post("/api/products/create", ProductController.createOneProduct)
    app.get("/api/products/:productid", ProductController.findAProduct)
    app.put("/api/products/update/:productid", ProductController.updateAProduct)
    app.delete("/api/products/delete/:productid", ProductController.deleteAProduct)
}
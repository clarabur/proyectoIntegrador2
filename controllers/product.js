
let productController = {

    product: (req, res)=>{
        res.render ("product")
    },
    productadd: (req, res)=>{
        res.render ("product-add")
    }
}

module.exports = productController
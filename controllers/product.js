var detalleProducto  = require ("../data/products")

let productController = {

    product: (req, res)=>{
        for (let index = 0; index < detalleProducto.lista.length; index++) {
            const element = detalleProducto.lista[index];

            if (element.id == req.params.id) {
                res.render ("product", {producto: element})
            }
            
        }
        
    },
    productadd: (req, res)=>{
        res.render ("product-add")
    },
    porId: (req, res)=>{
        let id=req.params.id;
        products.forEach(element=>{
            if (element.id ==id){
                res.render("product", {products: element})
            }
        })
    },
    search: (req, res)=>{
        res.render ("search-results", {productos: detalleProducto.lista})
    }

}

module.exports = productController


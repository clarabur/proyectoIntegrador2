
var detalleProducto  = require ("../data/products")

let indexController = {

    index: (req, res)=>{
        res.render ("index", {productos: detalleProducto.lista})
    }
}

module.exports = indexController
var detalleProducto  = require ("../data/products")
let profileController = {

    profile: (req, res)=>{
        res.render ("profile", {productos: detalleProducto.lista})
    }
}

module.exports = profileController




var detalleProducto  = require ("../data/products")
let searchController = {

    search: (req, res)=>{
        res.render ("search-results", {productos: detalleProducto.lista})
    }
}

module.exports = searchController
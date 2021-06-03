const db = require ('../database/models')
const productos = db.Producto
const op = db.sequelize.op
var detalleProducto  = require ("../data/products")

let indexController = {

    index: (req, res)=>{
        res.render ("index", {productos: detalleProducto.lista})
    },
    // ordenar productos de descendentes

  store: (req, res)=>{
    db.Producto.findAll({
        order: [
            ['productos', 'DES']
        ],
  })
 }
}

module.exports = indexController
const db = require ('../database/models')

const productos = db.Producto

const op = db.sequelize.Op
//var detalleProducto  = require ("../data/products")

let indexController = {

    index: (req, res)=>{
            productos.findAll()
          
         .then((resultados)=> res.render('index', {resultados}))
              .catch((err)=> `Error: ${err}`) 
 
        },
        show: (req, res)=>{
              let primaryKey = req.params.id;
            productos.findByPk(primaryKey, {
                include: [{association: 'comentarios'}, {association: 'usuarios'}]
            })
         
              .then(resultados => res.render('product', {resultados}) )
                .catch((err)=> `Error: ${err}`) 
                 
             
        },
   
 
    
    // ordenar productos de manera descendentes

  store: (req, res)=>{
    db.Producto.findAll({
        order: [
            ['lanzamiento', 'DESC']
        ],

       
  })
 },

}

module.exports = indexController;
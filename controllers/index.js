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
                include: [{association: 'comentarios'}]
            })
         
              .then(resultados =>   
                //console.log (resultados)
                res.render('product', {resultados}) )                
                .catch((err)=> `Error: ${err}`) 
                 
             
        },
         search: (req,res)=> {
          let buscadorProductos = req.query.search
          productos.findAll({
            where: [
              { nombre: { [op.like]: `%${buscadorProductos}%` } }
            ]
          })
          .then(resultados => res.render('search-results', {resultados:resultados}) )
            .catch((err)=>console.log (err) ) 
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
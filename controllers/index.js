let db = require('../database/models');

const Op = db.Sequelize.Op;

const producto = db.Producto;



let indexController = {

  index: (req, res) => {

    db.Producto.findAll({
      include: [{ association: 'usuario' }],
      
      order: [
        ['lanzamiento', 'DESC']
      ],
    // limit: 5,
    })
   

      .then(resultado => { res.render('index', { resultados: resultado })
      })

  },
  
  show: (req, res) => {
    let primaryKey = req.params.id;
    db.Producto.findByPk(primaryKey, {
        include: [{ association: 'comentario', include: [{ association: 'usuario'}] }, { association: 'usuario' }]
      })
      
      .then(resultados =>  res.render('product', {resultados }))
      .catch((err) => `Error: ${err}`)
     
  
      

  },

  // BUSCADOR
  search: (req, res) => {
    let buscadorProductos = req.query.search;
    db.Producto.findAll({
      include: [
        {association: 'usuario'}
      ],
      
      where: {
          
          [Op.or]: [
            { nombre: {[Op.substring]: buscadorProductos} },
            { descripcion: {[Op.substring]: buscadorProductos}}
          ]
        },

    })
    
    .then(resultados => res.render('search-results', {resultados: resultados}))
    
    .catch ((errors)=> {
      console.log("Error de conexion: " + errors.message);
        res.render ('error', {errors:"Error de conexion: " + errors.message});
        })
    },
    
    
  borrar: (req, res)=>{
    let primaryKey = req.params.id;
    db.Producto.destroy({
        where: {
            id: primaryKey
        }
    })
    .then(()=> res.redirect('/'))
    .catch(err=> console.log(err))
},
destroy: (req, res)=>{
  let primaryKey = req.params.id;
  //console.log(primaryKey);
   db.Producto.destroy({
      where: [{
          id: primaryKey
      }]
  })
  .then(()=> res.redirect('/'))
  .catch(err=> console.log(err))
},
edit: (req, res)=>{
  let primaryKey = req.params.id;
  db.Producto.findByPk(primaryKey)
      .then(resultados => res.render('product-edit', { resultados }))
      .catch(err => console.log(err))
}, 
update: (req, res)=>{   
  let primaryKey = req.params.id;
  let productoActualizar = req.body
  db.Producto.update(
      productoActualizar, 
      {
          where: [{
              id: primaryKey
          }]
      }
  )
      .then(()=> res.redirect('/'))
      .catch(err => console.log(err))
}
}

module.exports = indexController;

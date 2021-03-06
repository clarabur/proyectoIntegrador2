let db = require('../database/models');

const Op = db.Sequelize.Op;

const producto = db.Producto;



let indexController = {

  index: (req, res) => {

    db.Producto.findAll({
      include: [{ association: 'usuario' }],
      
      order: [
        ['createdAt', 'DESC']
      ],
   
    })
   

      .then(resultado => { 
        res.render ('index', { resultados: resultado })
      })

  },
  
  show: (req, res) => {
    let primaryKey = req.params.id;
    db.Producto.findByPk(primaryKey, {
        include: [{ 
          association: 'usuario'
        
        }, {
          association: 'comentario', 
          include: [{ 
            association: 'usuario'
          }],
        }],
        order: [['comentario', 'createdAt', 'DESC']]
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
    
//BORRAR PRODUCTO
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
  .catch((error) => {
   // console.log ('error de conexion: ' + error.menssage)
    res.render ('error', { error: "Error de conexion: " + error.message})
  })
},

//AGREGAR PRODUCTO

add: (req,res) => {
  if (req.session.user == null){
    return res.redirect('/')
}else {
    return res.render ('product-add')
} 
   
  
},

storeProduct: (req,res) => {

  let product = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    temporada: req.body.categoria,
    lanzamiento: req.body.lanzamiento,
    image:`/images/products/${req.file.filename}`,
    usuario_id: req.session.user.id,

  }

  db.Producto.create (product)
  .then(() => res.redirect ('/'))
  .catch(err => console.log (err))

},

//EDITAR PRODUCTO

edit: (req, res, next)=> {
  if (req.session.user != null){
    let id = req.params.id
    db.Producto.findOne({
      where: [{id: req.params.id, usuario_id: req.session.user.id }]
    })
    .then(producto => {
      if (producto != null){
        return res.render('product-edit', {
          producto,
          id
        })
      
      }  else {
        return res.redirect('/')
      }
      })
  }else {
    return res.redirect('/')
  }

 
    }, 

update: (req, res)=>{  
  
  let primaryKey = req.params.id;
  db.Producto.findByPk(primaryKey)
  .then (resultado => {

    let productoAGuardar = {
      
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      temporada: req.body.categoria,
      lanzamiento: req.body.lanzamiento,
      image:`/images/products/${req.file.filename}`,
      usuario_id: req.session.user.id,
     
    }
    
   
     db.Producto.update(productoAGuardar, {
      where: [{
          id: primaryKey
      }]
  })
  .then(()=> res.redirect('/detalle/' + resultado.id))

    })
  
   
 .catch((error) => {
 // console.log ('error de conexion: ' + error.menssage)
  res.render ('error', { error: "Error de conexion: " + error.message})
})
},

//AGREGAR COMENTARIO
addComentario: (req,res)=>{
let comentario = {
          comentario: req.body.comentario,
          usuario_id: req.session.user.id,
          producto_id: req.body.id,
          
      }
      db.Comentario.create (comentario)
      .then (() => 
      res.redirect(`/detalle/${req.body.id}`))
  },




}

module.exports = indexController;

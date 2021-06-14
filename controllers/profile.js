
var detalleProducto  = require ("../data/products")
const db = require ('../database/models')

const usuarios = db.Usuario

const op = db.sequelize.Op
let profileController = {

    profile: (req, res)=>{
        
         usuarios.findAll()
          
         .then((resultados)=> res.render('product', {resultados}))
              .catch((err)=> `Error: ${err}`) 
 
        
       // res.render ("profile", {productos: detalleProducto.lista})
    },
  
show: (req, res)=>{
          let primaryKey = req.params.id;
        usuarios.findByPk(primaryKey, {
         //   include: [{association: 'comentarios'},]
        })
     
          .then(resultados => res.render('profile', {resultados}) )
            .catch((err)=> `Error: ${err}`)  
             
         
    }, 

}

module.exports = profileController




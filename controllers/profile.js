
const db = require('../database/models')
const bcrypt = require ('bcryptjs')
const usuarios = db.Usuario

const op = db.sequelize.Op
let profileController = {

  profile: (req, res) => {

    usuarios.findByPk(req.params.id,{
      include: [
        {
          association: "producto"
        },
        {
          association: "comentarios"
        }
      ]
    })

      .then((resultados) => res.render('profile', {
        resultados: resultados
      }))
      .catch((err) => `Error: ${err}`)



  },
  editarPerfil: (req, res) => {
    

   






  if (req.session.user != null ){
    //return //res.send('hola')
    if(req.session.user.id == req.params.id){
      db.Usuario.findByPk (req.params.id)
      .then (resultado => {
        res.render('profile-edit', {resultado: resultado}) 
        
      })
    }else {
      return res.redirect ('/')
    }
  }   else{
    return res.redirect ('/')
  }
   
    
  
      
    
    

  },

  editar: (req, res) => {
    if (req.body.contraseña == ""){
      req.body.contraseña = req.session.contraseña
    } else {
      req.body.contraseña = bcrypt.hashSync(req.body.contraseña)
    }

    if (req.file != undefined){
      let avatar = req.file.filename
      usuarios.update ({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        mail: req.body.mail,
        avatar: avatar,
        contraseña: req.body.contraseña,
        fecha: req.body.fecha,
        telefono: req.body.telefono,
        user: req.body.user
      },{
        where: {
          id: req.params.id
        }
      })
      .then (()=>{
      res.redirect ('/')
    })
    .catch ((error)=> {
      res.render ('error', {error: "Error de conexion: " + error.message})
    })
    } else {
      let avatar = req.session.avatar
     usuarios.update({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        mail: req.body.mail,
        avatar: avatar,
        contraseña: req.body.contraseña,
        fecha: req.body.fecha,
        telefono: req.body.telefono,
        user: req.body.user
      },{where: {
        id: req.params.id
      }
    } )
    .then (() => {
      res.redirect ('/')
    })
    .catch ((error) => {
      res.render ('error', {error: "Error de conexion: " + error.message})
    })
      
    }
    if (req.body.nombre){
req.session.resultado = req.body.nombre
    }
  },
  
  
  


  



}

module.exports = profileController
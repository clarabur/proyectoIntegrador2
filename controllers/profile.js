
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


  



}

module.exports = profileController
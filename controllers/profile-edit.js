const db = require('../database/models')
const bcrypt = require ('bcryptjs')
let profileeditController = {

    edit: (req, res)=>{
        db.Usuario.findByPk (req.params.id) .then (resultado => {
            res.render ("profile-edit",{
                resultado:resultado
            })
        })
    },

    profileEdit: (req,res) => {
        db.Usuario.update ({
            nombre: req.body.first_name,
            apellido: req.body.last_name,
            mail: req.body.email,
            telefono: req.body.phone,
            fecha: req.body.date,
            user: req.body.user,
            contraseña: bcrypt.hashSync(req.body.password),
            avatar: req.file.avatar,
        },
        {where: {id:req.body.id}}) .then (resultado => {
            res.redirect ("/profile/detalle/" + resultado.id)
        }) 
    }

}

module.exports = profileeditController
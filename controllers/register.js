const db = require ('../database/models')
const op = db.Sequelize.Op
const bcrypt = require ('bcryptjs')
let registerController = {

    register: (req, res)=>{
        res.render ("register")
    }, store: (req, res) => {
        let usuario = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email:req.body.email,
            date:req.body.date,
            user:req.body.user,
            password:bcrypt.hashSync(req.body.password, 10)
        }
        console.log (req.body);
        db.Usuario.create(usuario)
        .then(usuario => {
            res.redirect('/')
        })
      },
  }


module.exports = registerController
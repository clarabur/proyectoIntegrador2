
const db = require('../database/models');
const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

let loginController = {

    index: (req, res)=>{
        if(req.session.user != undefined){
            return res.redirect('/')
        } else {
            return res.render('login')
        }
    },

    login: (req,res)=>{
       
        let errors = {};

        db.Usuario.findOne ({
            where: [{ mail: req.body.email }]
        }) 
        .then( (user) => {
            
            if(user==null){ 
                errors.message = "Email es incorrecto"; 
                res.locals.errors = errors; 
               return res.render('login') 
            } else if (bcrypt.compareSync(req.body.contraseña, user.contraseña) == false){
                
             errors.message = "Contraseña Incorrecta";
             res.locals.errors = errors;
               return res.render('login') 
            } else {
                req.session.user = user;

                if(req.body.recuerdame != undefined){
                    res.cookie('userID', user.id, {maxAge: 1000 * 60 * 5});
                }
            }
            return res.redirect('/');
        })
        .catch( err => console.log(err))
    },

    logout: (req,res) => {
        req.session.destroy()
        res.clearCookie ("userID")
        res.redirect ("/")
    }
}

module.exports = loginController




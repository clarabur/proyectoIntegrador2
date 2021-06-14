
const db = require('../database/models');
const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

let loginController = {

    login: (req, res)=>{
        res.render ("login")
    },

    loginPost: (req,res)=>{
        db.Usuario.findOne ({
            where: {
                user: req.body.usuario 
            }
        }) .then (result=>{

            if (result && bcrypt.compareSync(req.body.password,result.contraseña)) {
                req.session.user = {
                    id: result.id,
                    name: result.user
                };
                if (req.body.remember) {
                    res.cookie('userId', result.id, {
                        maxAge: 1000 * 60 * 5
                    });
                }
                    
            }
            res.redirect('/');
        })
    },

    logout: (req,res) => {
        req.session.destroy()
        res.clearCookie ("userId")
        res.redirect ("/")
    }
}

module.exports = loginController




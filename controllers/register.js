const db = require ('../database/models')
const usuario = db.Usuario
const bcrypt = require ('bcryptjs')
const op = db.sequelize.op
let registerController = {

    register: (req, res)=>{
        if (req.session.usuario != undefined){
            return res.redirect('/')
        }else {
            return res.render ('register')
        } 
    }, 
    store: (req, res) => {
       
        let usuario = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email:req.body.email,
            date:req.body.date,
            user:req.body.user,
            password:bcrypt.hashSync(req.body.password, 10)
        }
        let errors = {};
        if(req.body.email == ""){
            errors.message = "Email no puede estar vacío."; 
            res.locals.errors = errors; 
            return res.render('register'); 
        }//else if (req.body.email != unique){
           // errors.message = "Email no puede repetirse."; 
           // res.locals.errors = errors; 
           // return res.render('register'); 

       // }
        else if(req.body.password == ""){
                    errors.message = "la contraseña no puede estar vacía."; 
                    res.locals.errors = errors; 
                    return res.render('register'); 

        }else if (req.body.password < 3 ){
                    errors.message =  "la contraseña debe ser mas larga"; 
                    res.locals.errors = errors; 
                    return res.render('register'); 
                }  else {
                            req.session.usuario = usuario
                        }

        console.log (req.body);
        db.Usuario.create(usuario)
        .then(usuario => {
            res.redirect('/')
        })
        
        
      
   

    }

       

      
  }

  
module.exports = registerController
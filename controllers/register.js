const db = require ('../database/models')
const usuarios = db.Usuario
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
            nombre: req.body.first_name,
            apellido: req.body.last_name,
            mail: req.body.email,
            telefono: req.body.phone,
            fecha: req.body.date,
            user: req.body.user,
            contraseña:bcrypt.hashSync(req.body.password),  
            avatar: req.body.avatar,
        }
        let errors = {};

        if(req.body.email == ""){
            errors.message = "Email no puede estar vacío."; 
            res.locals.errors = errors; 
            return res.render('register'); 
        }  
        else if(req.body.password == ""){
                    errors.message = "la contraseña no puede estar vacía."; 
                    res.locals.errors = errors; 
                    return res.render('register'); 

        } else if  (req.body.password.length < 3){
            errors.message =  "la contraseña debe ser mas larga"; 
            res.locals.errors = errors; 
            return res.render('register'); 
        }  
        else {
            usuarios.findOne ({ where: [{ mail : req.body.email}]})
            .then (usuario => {
                if (usuario != null){
                    errors.message = "email ya existe"
                    res.locals.errors = errors;
                    return res.render('register');
                } else if (req.body.password != req.body.password1){
                    errors.message = "las constraseñas no coinciden";
                    res.locals.errors = errors;
                    return res.render('register');
                } else {
                    let usuario = {
                       nombre: req.body.first_name,
                       apellido: req.body.last_name,
                        mail: req.body.email,
                        contraseña:bcrypt.hashSync(req.body.password, 10),  //(primero el dato a incriptar, deps la sal, hace q sea mas dificl d craquear eje 10 o 12)
                        telefono: req.body.phone,
                        fecha: req.body.date,
                        user: req.body.user,
                        avatar: req.file.filename
                    }
                    usuarios.create (usuario)
                    .then ( usuario => {
                        return res.redirect ('/login')
                    })

                }

            })
         
            .catch (err => console.log (err))
        
        } 


    }
      
  }


  
module.exports = registerController
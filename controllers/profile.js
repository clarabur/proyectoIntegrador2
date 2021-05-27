var detalleProducto  = require ("../data/products")
let profileController = {

    profile: (req, res)=>{
        res.render ("profile", {productos: detalleProducto.lista})
    },
    profileedit: (req, res)=>{
        res.render ("profile-edit")
    },
    register: (req, res)=>{
        res.render ("register")
    }
}

module.exports = profileController




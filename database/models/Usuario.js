module.exports = (sequelize, dataTypes)=> {

let alias = 'Usuario'
let cols ={
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
    },
    nombre:{
        type: dataTypes.STRING
    },
    apellido:{
        type: dataTypes.STRING
    },
    mail:{
        type: dataTypes.STRING
    },
    fecha:{
        type: dataTypes.DATE
    },
    telefono:{
        type: dataTypes.INTEGER
    },
    contraseña:{
        type: dataTypes.STRING
    },
};
let config = {
    table: "usuarios",
    timestamps: false,
    underscored: false
}


    const Usuario = sequelize.define(alias, cols, config)
    return Usuario;
}
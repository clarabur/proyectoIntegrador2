module.exports = (sequelize, dataTypes)=> {

let alias = 'Usuario'
let cols ={
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
        notNull: true
    },
    nombre:{
        type: dataTypes.STRING,
        notNull: true
    },
    apellido:{
        type: dataTypes.STRING,
        notNull: true
    },
    mail:{
        type: dataTypes.STRING,
        notNull: true,
        unique: true
    },
    fecha:{
        type: dataTypes.DATE,
        notNull: true
    },
    telefono:{
        type: dataTypes.INTEGER,
        notNull: true,
        unique: true
    },
    contraseña:{
        type: dataTypes.STRING,
        notNull: true
    },
    createdAt: {
        type: dataTypes.DATE,
    },
    updatedAt: {
        type: dataTypes.DATE,
    },
    user:{
        type: dataTypes.STRING,
        notNull: true
    },
    avatar:{
            type: dataTypes.STRING,
    }
};
let config = {
    tablename: "usuarios",
}


    const Usuario = sequelize.define(alias, cols, config)
  
     Usuario.associate = (models)=>{
        // Relacion
        
        Usuario.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'usuario_id',
        }),
       
        Usuario.hasMany(models.Producto, {
            as: 'producto', 
            foreignKey: 'usuario_id'
        }) 
    }
   
    return Usuario;
}
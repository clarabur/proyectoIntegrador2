module.exports = (sequelize, dataTypes)=> { 

    let alias = 'Producto'
    let cols ={
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
        notNull: true
    },
    image:{
        type: dataTypes.STRING
    },
    nombre:{
        type: dataTypes.STRING
    },
    temporada:{
        type: dataTypes.STRING
    },
    descripcion:{
        type: dataTypes.STRING
    },
    lanzamiento:{
        type: dataTypes.DATE,
        notNull: true,
    }, 
    usuario_id:{
        type: dataTypes.INTEGER,
        notNull: true,
    },
    createdAt: {
        type: dataTypes.DATE,
    },
    updatedAt: {
        type: dataTypes.DATE,
    }
};
let config = {
    table: "productos",
}


    const Producto = sequelize.define(alias, cols, config)
    
      Producto.associate = (models)=>{
        // Relacion
     
    
        Producto.hasMany( models.Comentario , {
            as: 'comentario',
            foreignKey: 'producto_id',
        
        })
        Producto.belongsTo( models.Usuario , {
            as: 'usuario',
            foreignKey: 'usuario_id',
        })
   }  

    return Producto;
}
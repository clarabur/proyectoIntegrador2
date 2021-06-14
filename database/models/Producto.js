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
        field: "created_at",
    },
    updatedAt: {
        type: dataTypes.DATE,
        field: "updated_at",
    }
};
let config = {
    table: "productos",
}


    const Producto = sequelize.define(alias, cols, config)
    
      Producto.associate = (models)=>{
        // Relacion
     
       /*  Producto.belongsTo(models.Comentario , {
            as: 'comentario',
            foreignKey: 'comentario_id',
        })

         Producto.belongsTo(models.Usuario , {
            as: 'usuarios',
            foreignKey: 'usuario_id',
        })  */
    
        Producto.hasMany( models.Comentario , {
            as: 'comentario',
            foreignKey: 'producto_id',
        
        })
        Producto.belongsTo( models.Usuario , {
            as: 'usuario',
            foreignKey: 'producto_id',
        })
   }  

    return Producto;
}
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
    creadopor:{
        type: dataTypes.INTEGER,
        notNull: true
    },
};
let config = {
    table: "productos",
    timestamps: false,
    underscored: false
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
    
        Producto.belongsToMany( models.Comentario , {
            as: 'comentario',
            through: 'producto_comentarios',
            foreignKey: 'producto_id',
            otherKey: 'comentario_id',
            timestamps: false,
        })
        Producto.belongsToMany( models.Usuario , {
            as: 'usuario',
            through: 'producto_usuarios',
            foreignKey: 'producto_id',
            otherKey: 'usuario_id',
            timestamps: false,
        })
   }  

    return Producto;
}
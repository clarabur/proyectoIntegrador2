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
        type: dataTypes.STRING,
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
     
        Producto.hasMany( models.Comentario , {
            as: 'comentario',
            foreignKey: 'comentario_id',
        })

         Producto.belongsTo( models.Usuario , {
            as: 'usuarios',
            foreignKey: 'usuario_id',
        }) 
    
   }
    
    return Producto;
}
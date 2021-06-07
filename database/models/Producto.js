module.exports = (sequelize, dataTypes)=> { 

    let alias = 'Producto'
    let cols ={
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
    },
    imagen:{
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
    },
};
let config = {
    table: "productos",
    timestamps: false,
    underscored: false
}


    const Producto = sequelize.define(alias, cols, config)
    return Producto;
}
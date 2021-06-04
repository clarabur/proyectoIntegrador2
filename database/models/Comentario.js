module.exports = (sequelize, dataTypes)=> {

    let alias = 'Comentario'
    let cols ={
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuario_id:{
            type: dataTypes.STRING
        },
        producto_id:{
            type: dataTypes.STRING
        },
        comentario:{
            type: dataTypes.STRING
        },
        fecha:{
            type: dataTypes.STRING
        },
    };
    let config = {
        table: "comentarios",
        timestamps: false,
        underscored: false
    }
    
    
        const Comentario = sequelize.define(alias, cols, config)
        return Comentario;
    }
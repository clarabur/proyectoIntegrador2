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
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
    };
    let config = {
        table: "comentarios",
    }
    
    
        const Comentario = sequelize.define(alias, cols, config)

        Comentario.associate = (models)=>{
            // Relacion
         
        
            Comentario.belongsTo( models.Producto , {
                as: 'producto',
                foreignKey: 'producto_id',
            
            })
            Comentario.belongsTo( models.Usuario , {
                as: 'usuario',
                foreignKey: 'usuario_id',
            })
       }  
    
        return Comentario;
    }
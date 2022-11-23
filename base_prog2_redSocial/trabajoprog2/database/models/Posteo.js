module.exports = function(sequelize,datatypes){
    let alias = "Posteo"
    let cols = {
        id: {
            primaryKey: true, 
            notNull: true, 
            autoIncrement: true,
            type: datatypes.INTEGER.UNSIGNED
        },
    
        foto: {
            notNull: true, 
            type: datatypes.STRING
        },
    
        texto: {
            notNull: true, 
            type: datatypes.STRING
        },
       
        usuario_id:{ 
            type:datatypes.INTEGER.UNSIGNED
        }
    }
    let config = {
        tableName: "posteos", 
        timestamps: true, 
        underscored: false
    }

    const Posteo = sequelize.define(alias, cols, config);
    
    //relaciones//
   
    Posteo.associate = function (models) {
        Posteo.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'usuario_id',
        })

        Posteo.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'posteo_id',
        })
    }
    
    
    return Posteo 
    
    }


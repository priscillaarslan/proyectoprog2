module.exports = function(sequelize,datatypes){
    let alias = "Comentario"
    let cols = {
        id: {
            primaryKey: true, 
        notNull: true, 
        autoIncrement: true,
        type: datatypes.INTEGER.UNSIGNED
            
        },
    
        texto: {
            notNull: true, 
            type: datatypes.STRING
        },

        usuario_id:{ 
            defaultValue:sequelize.literal('null'),
            type:datatypes.INTEGER.UNSIGNED
    
        },
        posteo_id:{ 
            defaultValue:sequelize.literal('null'),
            type:datatypes.INTEGER.UNSIGNED
        }
    }

    let config = {
        tableName: "comentarios", 
        timestamps: true, 
        underscored: false
    }
    const Comentario = sequelize.define(alias, cols, config);

     //relaciones//

     Comentario.associate = function (models) {
        Comentario.belongsTo(models.Usuario, {
            as: 'comentador',
            foreignKey: 'usuario_id',
        })
        Comentario.belongsTo(models.Posteo, {
            as: 'PosteoComentado',
            foreignKey: 'posteo_id',
        })
   }
    
  return Comentario 
    
    }
    




        
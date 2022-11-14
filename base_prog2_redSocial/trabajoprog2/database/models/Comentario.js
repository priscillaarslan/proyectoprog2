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
        createdAT: {
        notNull: true, 
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        type: datatypes.DATE
            
        },
        updatedAT: { 
            notNull: true, 
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
            type: datatypes.DATE
        },
    
        deleatedAT: {
        notNull: true, 
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        type: datatypes.DATE
        },
        FkUserid:{ 
            defaultValue:sequelize.literal('null'),
            type:datatypes.INTEGER.UNSIGNED
    
    
    
        },
        FkPostid:{ 
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


    Comentario.associate=function(models){
        Comentario.belongsTo(models.Usuario,{
            as:'comentador',
            foreignKey:'FkUserid',
        })
        Comentario.belongsTo(models.Posteo,{
            as:'PosteoComentado',
            foreignKey:'FkPostid',
        })
        
        
        
            }
    


    
    
    
    
    return Comentario 
    
    }
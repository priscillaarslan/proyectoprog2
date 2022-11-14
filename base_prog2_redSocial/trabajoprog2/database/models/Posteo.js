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
    
    
    
        }
        
    
    }
    
    let config = {
        tableName: "posteos", 
        timestamps: true, 
        underscored: false
    }
    const Posteo = sequelize.define(alias, cols, config);
    
    //relaciones//
    
    Posteo.associate=function(models){
        Posteo.belongsTo(models.Usuario,{
            as:'usuario',
            foreignKey:'FkUserid',
        })
        Posteo.hasMany(models.Comentario,{
            as:'comentarios',
            foreignKey:'id',
    
            
        })
        
        
            }
    
    
    return Posteo 
    
    }
module.exports = function(sequelize,datatypes){
    let alias = "Usuario"
    let cols = {
        id: {
            primaryKey: true, 
        notNull: true, 
        autoIncrement: true,
        type: datatypes.INTEGER.UNSIGNED
            
        },

        email: { notNull: true, 
            unique:true,
            type:datatypes.STRING
            
            
        },

        username: {notNull: true, 
            unique:true,
            type:datatypes.STRING
            
        },
    
        foto: {
            notNull: true, 
            type: datatypes.STRING
        },

        password: {
            notNull: true, 
            type: datatypes.STRING
        },

        fechaDeNacimiento: {
            notNull: true, 
            type: datatypes.STRING
        },

        DNI: {
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
    
    }
    
    let config = {
        tableName: "usuarios", 
        timestamps: true, 
        underscored: false
    }
    const Usuario = Sequelize.define(alias, cols, config);
    
    //relaciones//
    Usuario.associate=function(models){
Usuario.hasmany(models.Posteo,{
    as:'posteos',
    foreignKey:'id',
})
Usuario.hasmany(models.Comentario,{
    as:'comentarios',
    foreignKey:'id',
})


    }
    
    
    
    return Usuario 
    
    }
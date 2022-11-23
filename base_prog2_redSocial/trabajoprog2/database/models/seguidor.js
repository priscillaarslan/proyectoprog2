module.exports = function(sequelize,datatypes){
    let alias = "Seguidor"
    let cols = {
        id: {
            primaryKey: true, 
            notNull: true, 
            autoIncrement: true,
            type: datatypes.INTEGER.UNSIGNED
        },

        seguido_id:{ 
            type:datatypes.INTEGER.UNSIGNED
        },
  
        seguidor_id:{ 
            type:datatypes.INTEGER.UNSIGNED
        }
    }

    let config = {
        tableName: "seguidores", 
        timestamps: true, 
        underscored: false
    }
  
    const Seguidor = sequelize.define(alias, cols, config);
    
    
    return Seguidor 
    
    }
    
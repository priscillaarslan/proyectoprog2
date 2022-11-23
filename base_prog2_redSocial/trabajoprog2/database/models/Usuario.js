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
    
    }

    let config = {
        tableName: "usuarios", 
        timestamps: true, 
        underscored: false
    }
    const Usuario = sequelize.define(alias, cols, config);
    
//relaciones//
Usuario.associate = function (models) {
    Usuario.hasMany(models.Posteo, {
        as: 'posteos',
        foreignKey: 'usuario_id',
    })

    Usuario.belongsToMany(models.Usuario, {
        as: 'mis_usuarios_seguidores',
        through: 'seguidores',
        foreignKey: 'seguido_id',
        otherKey: 'seguidor_id',
        timestamps: true
    })
    Usuario.belongsToMany(models.Usuario, {
        as: 'mis_usuarios_seguidos',
        through: 'seguidores',
        foreignKey: 'seguidor_id',
        otherKey: 'seguido_id',
        timestamps: true
    })

}

return Usuario
}

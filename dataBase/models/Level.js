module.exports = (sequelize, dataTypes) => {

    let alias = 'Level'

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        level: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: 'level',
        timestamps: false
    };
    
    const Level = sequelize.define(alias, cols, config)

    Level.associate = function(models) {
        Level.hasMany(models.User,{
            foreignKey: 'level_id',
            as: 'users'
        })
    }

    return Level;
}


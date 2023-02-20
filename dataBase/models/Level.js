module.exports = (sequelize, dataTypes) => {

    let alias = 'Level';

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

    Category.associate = function(models) {
        Category.hasMany(models.Product,{
            foreignKey: 'level_id',
            as: 'products'
        })
    } 

    return Level;
}
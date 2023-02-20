module.exports = (sequelize, dataTypes) => {

    let alias = 'Size';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        size_name: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: 'size',
        timestamps: false
    };

    const Size = sequelize.define(alias, cols, config)

    Size.associate = function(models) {
        Size.hasMany(models.Product,{
            foreignKey: 'size_id',
            as: 'products'
        })
    }   

    return Size;
}

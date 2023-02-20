module.exports = (sequelize, dataTypes) => {

    let alias = 'Product';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.TEXT
        },
        image: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.DOUBLE
        },
        category_id: {
            type: dataTypes.INTEGER
        },
        size_id: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: 'products',
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = function(models) {
        Product.belongsTo(models.Category,{
            foreignKey: 'category_id',
            as: 'category'
        }),
        Product.belongsTo(models.Size,{
            foreignKey: 'size_id',
            as: 'size'
        })
    }


    return Product;
}
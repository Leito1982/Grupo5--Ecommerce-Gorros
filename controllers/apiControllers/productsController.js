const db = require('../../dataBase/models');
const { Op } = require("sequelize");

const productsAPIController = {
    list: (req,res) => {

        let promProducts = db.Product.findAll({
            include: [{association: 'category'}, {association: 'size'}],
            order: [
                ['id', 'ASC'],
                ],
               
        })
        let promCategory = db.Category.findAll();

        Promise.all([promProducts, promCategory])

        .then(([products, categories]) => {

            let dataProducts = [];
            let productsByCategory = {
                Música: 0,
                Deportiva: 0,
                Colección:0
            };

            products.forEach(product => {
                dataProducts.push({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    categories: categories,
                    detail: `http://localhost:3000/api/products/${product.id}`
                })
                switch (product.category.category_name) {
                    case "Música": productsByCategory.Música += 1; 
                        break;
                    case "Deportiva": productsByCategory.Deportiva += 1; 
                        break;
                    case "Colección": productsByCategory.Colección += 1; 
                        break;            
                }
            });


            
            return res.status(200).json({
                count: products.length,
                countByCategory: productsByCategory, //ver como hacerlo
                products: dataProducts,
                status: 200 
            })
        })
    }

}

module.exports = productsAPIController;
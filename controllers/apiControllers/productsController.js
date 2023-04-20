const db = require('../../dataBase/models');

const productsAPIController = {
    list: (req, res) => {

        let promProducts = db.Product.findAll({
            include: [{ association: 'category' }, { association: 'size' }],
            order: [
                ['id', 'ASC'],
            ],
        })

        let promCategory = db.Category.findAll();

        Promise.all([promProducts, promCategory])

            .then(([products, categories]) => {

                let dataProducts = [];
                //ver si las propiedades las puedo sacar de la db
                let productsByCategory = {
                    Música: 0,
                    Deportiva: 0,
                    Colección: 0
                };

                products.forEach(product => {
                    dataProducts.push({
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        categories: categories,// esto no iria afuera??
                        detail: `http://localhost:3000/api/products/${product.id}`
                    });

                    switch (product.category.category_name) {
                        case "Música": productsByCategory.Música += 1;
                            break;
                        case "Deportiva": productsByCategory.Deportiva += 1;
                            break;
                        case "Colección": productsByCategory.Colección += 1;
                            break;
                    };
                });

                return res.status(200).json({
                    count: products.length,
                    countByCategory: productsByCategory,
                    products: dataProducts,
                    status: 200
                });
            });
    },

    detail: (req, res) => {

        db.Product.findByPk(req.params.id, {
            include: [{ association: 'category' }, { association: 'size' }]
        })

        .then(product => {

            const data = {
                id: product.id,
                name: product.name,
                description: product.description,
                category: product.category.category_name,
                size: product.size.size_name,
                image: `http://localhost:3000/images/${product.image}`,
                price: product.price
            }
            return res.status(200).json({
                users: data,
                status: 200
            })

        })


    }

};

module.exports = productsAPIController;
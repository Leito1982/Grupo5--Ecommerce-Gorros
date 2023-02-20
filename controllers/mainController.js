const db = require('../dataBase/models');
const sequelize = db.sequelize;

//Otra forma de llamar a los modelos
const Products = db.Product;


const controller = {

    index: (req, res) => {

        Products.findAll()
            .then(products => {
                res.render('index', {style: "/css/styleHome.css", title: 'Honky Caps', products: products})
            })

    },

}

module.exports = controller;
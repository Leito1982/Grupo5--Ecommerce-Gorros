const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../dataBase/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {

    index: (req, res) => {
        res.render('index', {style: "/css/styleHome.css", title: 'Honky Caps', products})
    },

}

module.exports = controller;
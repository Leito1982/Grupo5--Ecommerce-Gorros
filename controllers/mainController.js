const products = require('../dataBase/products');

const controller = {

    index: (req, res) => {
        res.render('index', {style: "/css/styleHome.css", title: 'Honky Caps', products})
    },

    productDetail: (req, res) => {
        res.render('./products/productDetail', {style: "/css/styleProductDetail.css", title: "Honky Caps - Detalle de Producto"}) 
    },
    
    register: (req, res) => {
        res.render('./user/register', {style:"/css/styleRegister.css", title: "Honky Caps - Register" }) 
    },
    
    login: (req, res) => {
        res.render('./user/login',  {style: "/css/stylelogin.css", title: 'Honky Caps - Login'} ) 
        
    },

    productCart: (req, res) => {
        res.render('./products/productCart', {style: '/css/styleProductCart.css', title: 'Product Cart'}) 
    },

    productCreate: (req, res) => {
        res.render('./products/productCreate', {style: '/css/styleProductCreate.css', title: 'Product Create'}) 
    }

}

module.exports = controller;
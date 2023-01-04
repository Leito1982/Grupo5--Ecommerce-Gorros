
const controller = {

    index: (req, res) => {
        res.render('index', {style: "/css/styleHome.css", title: 'Honky Caps'})
    },

    productDetail: (req, res) => {
        res.render('productDetail', {style: "/css/styleProductDetail.css", title: "Honky Caps - Detalle de Producto"}) 
    },
    
    register: (req, res) => {
        res.render('register') 
    },
    
    login: (req, res) => {
        res.render('login',  {style: "/css/stylelogin.css", title: 'Login'} ) 
        
    },

    productCart: (req, res) => {
        res.render('productCart') 
    },

}

module.exports = controller;
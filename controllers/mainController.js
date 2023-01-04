
const controller = {

    index: (req, res) => {
        res.render('index')
    },

    productDetail: (req, res) => {
        res.render('productDetail') 
    },

    register: (req, res) => {
        res.render('register') 
    },

    login: (req, res) => {
        res.render('login') 
    },

    productCart: (req, res) => {
        res.render('productCart') 
    },

}

module.exports = controller;
const path = require("path");

const controller = {

    index: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/index.html")) 
    },

    productDetail: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/productDetail.html")) 
    },

    register: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/register.html")) 
    },

    login: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/login.html")) 
    },

    productCart: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/productCart.html")) 
    },

}

module.exports = controller;
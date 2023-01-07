const express = require ("express");
const router = express.Router ();
const mainController = require ("../controllers/mainController");

const path = require("path");

    router.get ('/', mainController.index);

    router.get ('/productDetail', mainController.productDetail);

    router.get ('/register', mainController.register);

    router.get ('/login', mainController.login);

    router.get ('/productCart', mainController.productCart);

    router.get ('/productCreate', mainController.productCreate);

    router.get ('/productEdit', mainController.productEdit);

module.exports = router
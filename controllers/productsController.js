const db = require('../database/models');
const sequelize = db.sequelize;

//Otra forma de llamar a los modelos
const Products = db.Product;
const Category = db.Category;
const Size = db.Size;

// const fs = require('fs');
// const path = require('path');

// const productsFilePath = path.join(__dirname, '../dataBase/products.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	// Listado de productos
	index: (req, res) => {

		Products.findAll()
            .then(products => {
                res.render('products/products', {products: products})
            })
	},

	// Detalle de producto
	detail: (req, res) => {

		Products.findByPk(req.params.id)
            .then(product => {
                res.render('products/productDetail', {product});
            });
	},

	// formulario crear producto
	create: (req, res) => {
		let promCategory = Category.findAll();
		let promSize = Size.findAll();

		Promise.all([promCategory, promSize])
            .then(([categories, sizes]) => {
                res.render('products/productCreate', {categories: categories, sizes: sizes})
            })	
	},
	
	// crear producto guardar
	store: (req, res) => {

		let img

		if(req.file != undefined){
			img = req.file.filename
		} else {
			img = 'descargar.jpeg'
		}

		Products.create({
            name: req.body.name,
            description: req.body.description,
            image: img,
            price: req.body.price,
            category_id: req.body.category,
            size_id: req.body.size
        })
		.then(product => {
            res.redirect('/')
        });

	},

	// formulario editar producto
	edit: (req, res) => {

		Products.findOne({
			where: {id: req.params.id},
			include: [{association: 'category'}, {association: 'size'}]
		})
        .then(product => {
            res.render('products/productEdit', {product: product})
        })
	},

	// editar producto guardar
	update: (req, res) => {

		let productToEdit  = Products.findByPk(req.params.id);

	   let img

		if(req.file != undefined){
			img = req.file.filename
		} else {
			img = productToEdit.image
		}

        Products.update(
            {
                name: req.body.name,
                description: req.body.description,
                image: img,
                price: req.body.price,
                category_id: req.body.category,
				size_id: req.body.size
            },
            {
                where: {id: req.params.id}
            }
        )
        .then(product => {
            res.redirect('/');
        })
	},

	confirmDelete: (req, res) => {
		Products.findByPk(req.params.id)
		.then(product => {
			res.render('products/productDelete', {product: product})
		}) 
	   },

	// Eliminar producto	
	 destroy : (req, res) => {

		Products.destroy({
			where: {id: req.params.id}
		})
		.then(product => {
			res.redirect('/');
		})
	},

	// Carrito de compras
	cart: (req, res) => {
		res.render('products/productCart')
	}
};

module.exports = controller;
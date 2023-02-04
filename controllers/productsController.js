const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../dataBase/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	// Listado de productos
	index: (req, res) => {
	 	res.render('products/products', {products});
	},

	// Detalle de producto
	detail: (req, res) => {
		res.render('products/productDetail', {product: products.find(prod => prod.id == req.params.id)})
	},

	// Crear producto formulario
	create: (req, res) => {
		res.render('products/productCreate')	
	},
	
	// crear producto guardar
	store: (req, res) => {

		let img

		if(req.file != undefined){
			img = req.file.filename
		} else {
			img = 'descargar.jpeg'
		}

		console.log(req.file)

	 	let productToCreate = {

			id: products[products.length -1].id + 1,
			name: req.body.name,
			description: req.body.description,
			image: img,
			category: req.body.category,
			soze: req.body.size,
			price: Number(req.body.price)
		}
		console.log(productToCreate);

		products.push(productToCreate);
		
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

		res.redirect('/')
	},

	// Editar producto formulario
	edit: (req, res) => {
	 	res.render('products/productEdit', {product: products.find(prod => prod.id == req.params.id)})
	},
	// editar producto guardar
	update: (req, res) => {

		let productToEdit  = products.find(prod => prod.id == req.params.id);

		let img

		if(req.file != undefined){
			img = req.file.filename
		} else {
			img = productToEdit.image
		}

		console.log(req.file)

		productToEdit = {	
			id: Number(req.params.id),
			name: req.body.name,
			description: req.body.description,
			image: img,
			category: req.body.category,
			soze: req.body.size,
			price: Number(req.body.price)
		}
		console.log(productToEdit);

		let newProduct = products.map(product => {
			if(product.id == req.params.id){
				
				return product = {...productToEdit}

			}
				return product;
			
		})
			fs.writeFileSync(productsFilePath, JSON.stringify(newProduct));
		
			res.redirect('/');
	},

	// Eliminar producto
	 destroy : (req, res) => {
	 
		let productsNoDelete = products.filter(product => product.id != req.params.id);
		
		fs.writeFileSync(productsFilePath, JSON.stringify(productsNoDelete));

		res.redirect('/');
	},
	cart: (req, res) => {
		res.render('products/productCart')
	}
};

module.exports = controller;
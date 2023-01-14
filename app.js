const express = require("express");
const methodOverride =  require('method-override')

const app = express();

const mainRouter = require("./routes/mainRouter");
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");

// Middleware
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

// Rutas
app.use ("/", mainRouter)
app.use ("/products", productsRouter)
app.use ("/users", usersRouter)


app.use((req, res, next) => {
    res.status(404).render("not-found")
  });


const port = process.env.PORT || 3000;
app.listen(port, () => console.log ("Servidor corriendo en el puerto " + port));

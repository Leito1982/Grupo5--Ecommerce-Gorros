const express = require("express");
const methodOverride =  require('method-override')
const session = require('express-session');
const cookieParser = require('cookie-parser')
const userLogged = require('./middlewares/userLogged');

const app = express();

const mainRouter = require("./routes/mainRouter");
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
  secret: 'Esto es secreto!!',
  resave: true,
  saveUninitialized: true
}));
app.use(cookieParser());
app.use(userLogged);

app.use(express.static("public"));

// Rutas
app.use ("/", mainRouter)
app.use ("/products", productsRouter)
app.use ("/users", usersRouter)


app.use((req, res, next) => {
    res.status(404).render("not-found")
  });


const port = process.env.PORT || 3000;
app.listen(port, () => console.log ("Servidor corriendo en el puerto " + port));

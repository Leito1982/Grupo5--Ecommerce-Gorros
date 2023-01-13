const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRouter");

app.set('view engine', 'ejs');

// Middleware
app.use(express.static("public"));

// Rutas
app.use ("/", mainRouter)
app.use((req, res, next) => {
    res.status(404).render("not-found")
  });


const port = process.env.PORT || 3000;
app.listen(port, () => console.log ("Servidor corriendo en el puerto " + port));

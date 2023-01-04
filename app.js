const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRouter")


// Middleware
app.use (express.static("public"))
app.set('view engine', 'ejs');

// Rutas
app.use ("/", mainRouter)


const port = process.env.PORT || 3000;
app.listen(port, () => console.log ("Servidor corriendo en el puerto " + port));

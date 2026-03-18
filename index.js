const express = require("express");
const exphbs = require("express-handlebars");
require("dotenv").config();
const PORT = process.env.PORT;

//cria a instância principal da sua aplicação Express.
const app = express();

// Registra o Handlebars como motor de renderização de views.
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

//interpreta dados enviados por formulários HTML
app.use(
  express.urlencoded({
    extended: true,
  }),
);

//interpreta o corpo de requisições no formato JSON.
app.use(express.json());
//serve arquivos estáticos direto da pasta (public/)
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("Server is running!");
});

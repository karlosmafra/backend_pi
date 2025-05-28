// Importar e instanciar express
const express = require('express')
const db = require("./config/db")
const app = express()
const cors = require('cors')

// Definir porta
require('dotenv').config()
const PORT = process.env.PORT

// Rotas
const UsuarioRotas = require('./routes/usuario')

app.use(cors())
app.use(express.json())
app.use('/', UsuarioRotas)

// Conectar com banco de dados e iniciar servidor
db.connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});

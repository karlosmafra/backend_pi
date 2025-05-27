// Importar e instanciar express
const express = require('express')
const app = express()
const cors = require('cors');

// Definir porta
require('dotenv').config()
const PORT = process.env.PORT

//const cors = require('cors');

const UsuarioRotas = require('./routes/usuario')

app.use(cors())
app.use(express.json())
app.use('/', UsuarioRotas)

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor aguardando requisições na porta ${PORT}`)
})

// Importar e instanciar express
const express = require('express')
const app = express()
const cors = require('cors')

// Definir porta
require('dotenv').config()
const PORT = process.env.PORT

// Modelos BD
const sequelize = require('./config/db')
const Usuario = require('./models/usuario')

// Rotas
const UsuarioRotas = require('./routes/usuario')

app.use(cors())
app.use(express.json())
app.use('/', UsuarioRotas)

// Conectar com banco de dados e iniciar servidor
sequelize.sync({alter: true})
.then(() => {
    console.log("BD sincronizado")
}).catch(error => {
    console.log("ERRO conectando ao BD") 
})

app.listen(PORT, () => {
    console.log("Servidor aguardando requisições")
})

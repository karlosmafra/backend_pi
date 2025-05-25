// Importar e instanciar express
const express = require('express')
const app = express()

// Definir porta
require('dotenv').config()
const PORT = process.env.PORT

//const cors = require('cors');

// Rota de teste
app.get('/', (req, res) => {
    res.send('Requisição funcionando')
})

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor aguardando requisições na porta ${PORT}`)
})

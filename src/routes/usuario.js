const express = require('express')
const router = express.Router()
const Usuario = require('../models/usuario')

// ROTAS

// Rota de teste
router.get('/', (req, res) => {
    res.send('Requisição funcionando')
})

// Rota que retorna TODOS os usuários da aplicação
router.get('/usuarios', async (req, res) => {    
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
});


// Rota que busca um usuário específico 
router.get('/usuario/:id_usuario', async (req, res) => {
    /*
    const usuario = await Usuario.findAll({
        where: {
          id_usuario: req.params.id_usuario
        },
    });

    res.json(usuario);
    */
   res.send('Get usuário por id a ser implementado')
});


// Rota que cria um usuário
router.post('/usuario', async (req, res) => {

    const { nome, telefone, email, senha, role_id } = req.body;

    // 1. Validação básica
    if (!nome || !telefone || !email || !senha || !role_id) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
    }

    // 2. Verificar se o e-mail já está cadastrado 
    /*
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
        return res.status(409).json({ mensagem: 'E-mail já cadastrado.' });
    } */

    // 3. Criar o novo usuário (fazer hash da senha com criptografia)
    const novoUsuario = new Usuario({
        nome,
        telefone,
        email,
        senha,
        role_id
    });

    await novoUsuario.save();

    // 4. Resposta de sucesso
    return res.status(201).json({
        mensagem: 'Usuário cadastrado com sucesso!',
        usuario: {
        id: novoUsuario._id,
        nome: novoUsuario.nome,
        telefone: novoUsuario.telefone,
        email: novoUsuario.email,
        role_id: novoUsuario.role_id
        }
    })

})

module.exports = router
// Configuração do banco de dados
const { Pool } = require("pg");

async function connect() {
  if (global.connection) return global.connection;

  const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
  });

  const client = await pool.connect();
  console.log("Banco conectado:", (await client.query("SELECT now()")).rows[0]);
  client.release();

  global.connection = pool;
  return pool;
}

// Funções de SELECT para cada tabela
async function selectAvaliacoes() {
  const client = await connect();
  const res = await client.query("SELECT * FROM avaliacao");
  return res.rows;
}

async function selectCategorias() {
  const client = await connect();
  const res = await client.query("SELECT * FROM categoria");
  return res.rows;
}

async function selectClientes() {
  const client = await connect();
  const res = await client.query("SELECT * FROM cliente");
  return res.rows;
}

async function selectLogAcoes() {
  const client = await connect();
  const res = await client.query("SELECT * FROM log_acao");
  return res.rows;
}

async function selectMensagens() {
  const client = await connect();
  const res = await client.query("SELECT * FROM mensagem");
  return res.rows;
}

async function selectPrestadores() {
  const client = await connect();
  const res = await client.query("SELECT * FROM prestador");
  return res.rows;
}

async function selectRoles() {
  const client = await connect();
  const res = await client.query("SELECT * FROM roles");
  return res.rows;
}

async function selectServicos() {
  const client = await connect();
  const res = await client.query("SELECT * FROM servico");
  return res.rows;
}

async function selectSolicitacoesServico() {
  const client = await connect();
  const res = await client.query("SELECT * FROM solicitacao_servico");
  return res.rows;
}

async function selectUsuarios() {
  const client = await connect();
  const res = await client.query("SELECT * FROM usuario");
  return res.rows;
}

module.exports = {
  connect,
  selectAvaliacoes,
  selectCategorias,
  selectClientes,
  selectLogAcoes,
  selectMensagens,
  selectPrestadores,
  selectRoles,
  selectServicos,
  selectSolicitacoesServico,
  selectUsuarios,
};
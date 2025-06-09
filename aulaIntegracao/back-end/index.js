const express = require('express');
const cors = require('cors');
const {sequelize} = require('./src/config/configDB');
const cursoRoutes = require('./src/modules/curso/routes/cursoRoutes');
const alunoRoutes = require('./src/modules/aluno/routes/alunoRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/cursos', cursoRoutes);
app.use('/alunos', alunoRoutes);

sequelize.sync()
  .then(async () => {
    try {
      await sequelize.authenticate();
      console.log('Conexão com o banco de dados estabelecida com sucesso.');
      
      app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
      });
    } catch (error) {
      console.error('Não foi possível conectar ao banco de dados:', error);
    }
  })
  .catch((syncError) => {
    console.error('Erro ao sincronizar com o banco de dados:', syncError);
  });
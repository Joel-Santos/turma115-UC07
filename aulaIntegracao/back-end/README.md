# back-end

npm init -y
npm install express pg dotenv pg-hstore cors sequelize //em casa no fork ou clone basta colocar npm install

# Criando estrutura de pastas 
-src

-src/config
-src/config/configDB

-src/modules/aluno
-src/modules/aluno/controllers
-src/modules/aluno/models
-src/modules/aluno/routes

-src/modules/curso/controllers
-src/modules/curso/models
-src/modules/curso/routes

# criar aruivos na raiz
.env
.gitignore
README.md

# criar arquivo na raiz do modules para fazer conecção com chaves das tabelas

index.js

# para testar ir para o terminal 
node index.js 

# --------termina o BACK-END------




.env
DB_USER=postgres
DB_HOST=localhost
DB_DATABASE=aula
DB_PASSWORD=BemVindo!
DB_PORT=5432
PORT=3000

# front-end
npm create vite@latest ./
React
Javascript
npm install //em casa precisa dar somente este comando
npm install axios react-router-dom
npm run dev


.env
VITE_API_URL=http://localhost:3000





# Aula 08/04 – Desenvolvimento Web
## Descrição

Nesta aula, desenvolvemos um pequeno projeto web integrando front-end e back-end. No front-end, utilizamos React para criar a interface do usuário, enquanto o back-end foi construído com Express para fornecer uma API REST. O React consumiu os dados da API utilizando a biblioteca Axios, permitindo a comunicação eficiente entre as duas camadas da aplicação.

## Estrutura do Projeto

### Front-end (`front-end/`)
- `src/App.js`: Componente principal que gerencia o estado e faz requisições à API usando Axios.
- `src/components/`: Componentes reutilizáveis da interface.
- `src/services/api.js`: Configuração do Axios para facilitar as chamadas à API.
- `src/App.module.css`: Estilização modular dos componentes.
- `package.json`: Gerenciamento das dependências do React e Axios.

### Back-end (`back-end/`)
- `index.js`: Arquivo principal do servidor Express, responsável por inicializar a API.
- `routes/`: Pasta com as rotas da API.
- `package.json`: Gerenciamento das dependências do Node.js e Express.

## Principais Recursos Utilizados

- **React**: Criação de componentes, gerenciamento de estado e renderização dinâmica.
- **Axios**: Biblioteca para realizar requisições HTTP do front-end para o back-end.
- **Express**: Framework para criação de rotas e manipulação de requisições no back-end.
- **Integração Front-end/Back-end**: Comunicação entre React e Express via API REST.

## Resumo das Atividades

1. Estruturamos as pastas `front-end` (React) e `back-end` (Express).
2. Criamos componentes React e configuramos o Axios para consumir a API.
3. Implementamos rotas no Express para fornecer dados ao front-end.
4. Realizamos testes de integração, garantindo a comunicação entre as duas partes do projeto.


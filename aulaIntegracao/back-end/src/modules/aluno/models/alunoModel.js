const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB');

const AlunoModel = sequelize.define('Aluno', {

    matricula: {
        type: DataTypes.STRING(6),
        allowNull: false,
        primaryKey: true,
        validate: {
            is: {
                args: /^[A-Z]\d{5}$/,
                msg: 'a matricula deve ter a primeira letra maiúscula seguida de 5 digitos númericos'
            }
        }
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    cod_curso: {
        type: DataTypes.STRING(4),
        allowNull: false,
        references: {
            model: 'curso',
            key: 'cod_curso'
        }
    },
},
    {
        tableName: 'aluno',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em'
    },

)

module.exports = AlunoModel;
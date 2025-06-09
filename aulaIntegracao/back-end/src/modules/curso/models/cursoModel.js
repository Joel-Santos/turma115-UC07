const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB');

const CursoModel = sequelize.define('Curso', {

    cod_curso: {
        type: DataTypes.STRING(4),
        allowNull: false,
        primaryKey: true,
        validate: {
            is: {
                args: /^[A-Z]\d{3}$/,
                msg: 'O código da turma deve ter a primeira letra Maiúscula seguida de 3 digitos númericos'
            }
        }
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
},
    {
        tableName: 'curso',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em'
    },

)

module.exports = CursoModel;
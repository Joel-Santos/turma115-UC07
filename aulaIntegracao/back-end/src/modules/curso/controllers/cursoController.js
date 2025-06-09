const Curso = require('../../curso/models/cursoModel');
class CursoController {

    static async criar(req, res) {
        try {
            const { cod_curso, nome } = req.body
            if (cod_curso && nome) {
                const curso = await Curso.create({ cod_curso, nome });
                res.status(201).json({ mensagem: 'Curso cadastrado com sucesso', curso })
            } else {
                res.status(400).json({ mensagem: 'Todos os campos devem ser preenchidos' })
            }
        } catch (error) {
            res.status(500).json({ erro: error.message });
        }
    }

    static async listar(req, res) {
        try {
            const cursos = await Curso.findAll();

            if (cursos.length > 0) {
                return res.status(200).json(cursos)
               
            }
            res.status(200).json({ mensagem: 'Nenhum curso encontrado' })
        } catch (error) {
            res.status(500).json({ erro: error.message });
        }
    }
    static async atualizar(req, res) {
        try {
            const cod_curso = req.params.cod_curso;
            const {nome} = req.body
            if (nome && cod_curso) {
                const [curso] = await Curso.update(
                    { nome },
                    { where: { cod_curso: cod_curso } }
                );
                res.status(200).json({ mensagem: 'Curso atualizado com sucesso', curso });
            } else {
                res.status(400).json({ mensagem: 'Todos os campos devem ser preenchidos' });
            }
        } catch (error) {
            res.status(500).json({ erro: error.message });
        }
    }

    static async deletar(req, res) {
        try {
          const { cod_curso } = req.params;
          const curso = await Curso.findByPk(cod_curso);
      
          if (!curso) {
            return res.status(404).json({ mensagem: 'Curso não encontrado.' });
          }
      
          await curso.destroy();
          res.status(200).json({ mensagem: 'Curso deletado com sucesso!' });
      
        } catch (error) {
          res.status(500).json({ erro: error.message });
        }
      }
}
module.exports = CursoController;

import api from './api';

class AlunoService {
    static async listar() {
        try {
            const res = await api.get('/alunos');
            return res.data;
        } catch (err) {
            console.error('Erro ao listar alunos:', err);
            return [];
        }
    }

    static async criar(dados) {
        try {
            const res = await api.post('/alunos', dados);
            return res.data;
        } catch (err) {
            console.error('Erro ao criar aluno:', err);
        }
    }

    static async atualizar(id, dados) {
        try {
            const res = await api.put(`/alunos/${id}`, dados);
            return res.data;
        } catch (err) {
            console.error('Erro ao atualizar aluno:', err);
        }
    }

    static async deletar(id) {
        try {
            const res = await api.delete(`/alunos/${id}`);
            return res.data;
        } catch (err) {
            console.error('Erro ao deletar aluno:', err);
        }
    }
}

export default AlunoService;
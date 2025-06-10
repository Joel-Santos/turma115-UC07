import api from './api';

class CursoService {
  static async listar() {
    try {
      const res = await api.get('/cursos');
      return res.data;
    } catch (err) {
      console.error('Erro ao listar cursos:', err);
      return [];
    }
  }

  static async criar(dados) {
    try {
      const res = await api.post('/cursos', dados);
      return res.data;
    } catch (err) {
      console.error('Erro ao criar curso:', err);
    }
  }

  static async atualizar(id, dados) {
    try {
      const res = await api.put(`/cursos/${id}`, dados);
      return res.data;
    } catch (err) {
      console.error('Erro ao atualizar curso:', err);
    }
  }

  static async deletar(id) {
    try {
      const res = await api.delete(`/cursos/${id}`);
      return res.data;
    } catch (err) {
      console.error('Erro ao deletar curso:', err);
    }
  }
}

export default CursoService;

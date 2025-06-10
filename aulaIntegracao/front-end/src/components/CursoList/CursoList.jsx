import { useEffect, useState } from 'react'; // Importa hooks do React
import CursoService from '../../services/cursoService'; // Importa o serviço de cursos
import CursoForm from '../CursoForm/CursoForm'; // Importa o formulário de curso

function CursoList() {
    // Estado para armazenar a lista de cursos
    const [cursos, setCursos] = useState([]);
    // Estado para armazenar o curso que está sendo editado
    const [editando, setEditando] = useState(null);

    // Função para carregar a lista de cursos
    const carregar = async () => {
        const lista = await CursoService.listar(); // Busca os cursos do serviço
        setCursos(Array.isArray(lista) ? lista : []); // Atualiza o estado com a lista recebida
        setEditando(null); // Limpa o estado de edição
    };

    // Função para excluir um curso
    const excluir = async (id) => {
        await CursoService.deletar(id); // Exclui o curso pelo id
        carregar(); // Recarrega a lista após exclusão
    };

    // Executa a função carregar ao montar o componente
    useEffect(() => {
        carregar();
    }, []);

    return (
        <div className="curso-lista">
            <h2>Cursos</h2>
            {/* Formulário para adicionar ou editar cursos */}
            <CursoForm cursoEditando={editando} aoSalvar={carregar} />
            {/* Exibe mensagem se não houver cursos */}
            {cursos.length === 0 ? (
                <p>Nenhum curso cadastrado.</p>
            ) : (
                // Lista de cursos cadastrados
                <ul>
                    {cursos.map((c) => (
                        <li key={c.cod_curso}>
                            {c.nome} &nbsp;
                            {/* Botão para editar o curso */}
                            <button onClick={() => setEditando(c)}>Editar</button>
                            {/* Botão para excluir o curso */}
                            <button onClick={() => excluir(c.cod_curso)}>Excluir</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CursoList; // Exporta o componente

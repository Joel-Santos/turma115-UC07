import { useEffect, useState } from 'react'; // Importa hooks do React para estado e efeitos colaterais
import AlunoService from '../../services/alunoService'; // Importa o serviço para manipular dados de alunos
import AlunoForm from '../AlunoForm/AlunoForm'; // Importa o componente de formulário de aluno

function AlunoList() { // Define o componente funcional AlunoList
    const [alunos, setAlunos] = useState([]); // Estado para armazenar a lista de alunos
    const [editando, setEditando] = useState(null); // Estado para armazenar o aluno em edição

    const carregar = async () => { // Função para carregar a lista de alunos
        const lista = await AlunoService.listar(); // Busca a lista de alunos do serviço
        setAlunos(Array.isArray(lista) ? lista : []); // Atualiza o estado com a lista ou array vazio
        setEditando(null); // Limpa o estado de edição
    };

    const excluir = async (id) => { // Função para excluir um aluno
        await AlunoService.deletar(id); // Chama o serviço para deletar o aluno pelo id
        carregar(); // Recarrega a lista após exclusão
    };

    useEffect(() => { // Hook para executar efeito colateral ao montar o componente
        carregar(); // Carrega a lista de alunos ao iniciar o componente
    }, []); // Executa apenas uma vez, ao montar

    return (
        <div className="aluno-lista"> {/* Container principal da lista de alunos */}
            <h2>Alunos</h2> {/* Título da seção */}
            <AlunoForm alunoEditando={editando} aoSalvar={carregar} /> {/* Formulário para adicionar/editar aluno */}
            {alunos.length === 0 ? ( // Se não houver alunos cadastrados
                <p>Nenhum aluno cadastrado.</p> // Exibe mensagem de lista vazia
            ) : (
                <ul> {/* Lista de alunos */}
                    {alunos.map((a) => ( // Itera sobre cada aluno
                        <li key={a.matricula}> {/* Item da lista, usa matrícula como chave */}
                            {a.nome} - {a.curso?.nome || 'Curso não informado'} &nbsp; {/* Exibe nome e curso */}
                            <button onClick={() => setEditando(a)}>Editar</button> {/* Botão para editar aluno */}
                            <button onClick={() => excluir(a.cod_aluno)}>Excluir</button> {/* Botão para excluir aluno */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default AlunoList; // Exporta o componente para uso em outros arquivos
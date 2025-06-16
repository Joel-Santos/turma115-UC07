import { useEffect, useState } from "react"; // importas os hooks do react
import AlunoService from "../../services/alunoService";

function ListarAlunos({aoEditar}) {
    //Estado para armazenar os Alunos
    const [alunos, setAlunos] = useState([]);

    //Função para carregar a lista de Alunos 
    const carregar = async () => {
        const lista = await AlunoService.listar();
        console.log(lista);
        // Atualiza o estado (Alunos) com a lista recebida, caso não receba um array é setado um array vazio para o estado.
        setAlunos(Array.isArray(lista) ? lista : []);
    }


    //Função para deletar curso
    const deletar = async (matricula, nome) => {
        const confirm = window.confirm(`Deseja mesmo remover o aluno: ${nome} ?`);
        if (confirm) {
            const res = await AlunoService.deletar(matricula);
            console.log(res)
            if (res) {
                alert('Aluno removido com sucesso!');
                carregar();
            } else {
                alert('Erro ao remover!');
            }
        }
    }
    //Executa a função carregar ao montar o componente ([])
    useEffect(() => {
        carregar();
       
    }, []);
    return (
        <>
            <h1>Listagem de Alunos</h1>
            {
                alunos.length === 0 ?
                    (
                        <p>Nenhum Aluno cadastrado no sistema.</p>
                    )
                    :
                    (
                        <table border={1}>
                            <thead>
                                <tr>
                                    <th>Matrícula</th>
                                    <th>Nome</th>
                                    <th>Código Curso</th>
                                    <th>Nome Curso</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    alunos.map((a) => (
                                        <tr key={a.matricula}>
                                            <td>{a.matricula}</td>
                                            <td>{a.nome}</td>
                                            <td>{a.cod_curso}</td>
                                            <td>{a.Curso.nome}</td>
                                            <td>
                                                <button onClick={()=> aoEditar(a)}>Editar</button>
                                                <button onClick={() => deletar(a.matricula, a.nome)}>Excluir</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
            }
        </>
    )
}

export default ListarAlunos;
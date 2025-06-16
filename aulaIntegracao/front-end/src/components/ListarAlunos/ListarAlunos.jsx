import { useEffect, useState } from "react"; // importas os hooks do react
import AlunoService from "../../services/alunoService";

function ListarAlunos() {
    //Estado para armazenar os alunos
    const [alunos, setAlunos] = useState([]);

    //Função para carregar a lista de alunos 
    const carregar = async () => {
        const lista = await AlunoService.listar();
        console.log(lista);
        // Atualiza o estado (alunos) com a lista recebida, caso não receba um array é setado um array vazio para o estado.
        setAlunos(Array.isArray(lista) ? lista : []);
    }

    //Executa a função carregar ao montar o componente ([])
    useEffect(() => {
        carregar();
    }, []);
    return (
        <>
            <h1>Listagem de alunos</h1>
            {
                alunos.length === 0 ?
                    (
                        <p>Nenhum aluno cadastrado no sistema.</p>
                    )
                    :
                    (
                        <table>
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Nome</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    alunos.map((a) => (
                                        <tr key={a.matricula}>
                                            <td>{a.matricula}</td>
                                            <td>{a.nome}</td>
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
import { useEffect, useState } from "react"; // importas os hooks do react
import CursoService from "../../services/cursoService";

function ListarCursos() {
    //Estado para armazenar os cursos
    const [cursos, setCursos] = useState([]);

    //Função para carregar a lista de cursos 
    const carregar = async () => {
        const lista = await CursoService.listar();
        console.log(lista);
        // Atualiza o estado (cursos) com a lista recebida, caso não receba um array é setado um array vazio para o estado.
        setCursos(Array.isArray(lista) ? lista : []);
    }

    //Executa a função carregar ao montar o componente ([])
    useEffect(() => {
        carregar();
    }, []);
    return (
        <>
            <h1>Listagem de cursos</h1>
            {
                cursos.length === 0 ?
                    (
                        <p>Nenhum curso cadastrado no sistema.</p>
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
                                    cursos.map((c) => (
                                        <tr key={c.cod_curso}>
                                            <td>{c.cod_curso}</td>
                                            <td>{c.nome}</td>
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

export default ListarCursos;
import { useEffect, useState } from "react"; // importas os hooks do react
import AlunoService from "../../services/alunoService";
import CursoService from "../../services/cursoService";

function AlunoForm({ alunoEditando, aoSalvar }) {
    const [matricula, setMatricula] = useState('');
    const [nome, setNome] = useState('');
    const [cod_curso, setCod_Curso] = useState('');
    const [cursos, setCursos] = useState([]);

    //Função para carregar a lista de cursos 
    const carregarCursos = async () => {
        const lista = await CursoService.listar();
        console.log(lista);
        // Atualiza o estado (cursos) com a lista recebida, caso não receba um array é setado um array vazio para o estado.
        setCursos(Array.isArray(lista) ? lista : []);
    }
    useEffect(() => {
        if (alunoEditando) {
            setMatricula(alunoEditando.matricula);
            setNome(alunoEditando.nome);
            setCod_Curso(alunoEditando.cod_curso);

        }
    }, [alunoEditando]);

    useEffect(() => {
        carregarCursos();
    }, [])

    //Função para criar um Aluno
    const handleSubmit = async (e) => {
        e.preventDefault(); //Evita o recarregamento da página
        if (alunoEditando) {
            const data = await AlunoService.atualizar(matricula, { nome, cod_curso })
            console.log(data);
        } else {
            const data = await AlunoService.criar({ matricula, nome, cod_curso })
            console.log(data);
        }

        setMatricula(''); //Limpa o campo de matrícula
        setNome('');//Limpa o campo de nome
        setCod_Curso(''); //Limpa o campo de código do curso    

    };
    const matriculaPattern = "^[A-Z][0-9]{5}$";
    const codCursoPattern = "^[A-Z][0-9]{3}$";
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" // Matrícula do Aluno
                    placeholder="Matrícula do Aluno (ex:A12345)"
                    value={matricula}//linkando a variavel de estado
                    pattern={matriculaPattern} //validando com o regex
                    onChange={(e) => setMatricula(e.target.value)} //Atualiza o estado
                    maxLength={6}
                    minLength={6}
                    disabled={!!alunoEditando}
                    required //campo obrigatorio
                />
                <input
                    type="text" // nome do Aluno
                    placeholder="Informe o nome do Aluno"
                    value={nome}//linkando a variavel de estado
                    onChange={(e) => setNome(e.target.value)} //Atualiza o estado
                    required //campo obrigatorio
                />
                {/* <input
                    type="text" // Código do Curso
                    placeholder="Código do Curso (ex: A123)"
                    value={cod_curso}//linkando a variavel de estado
                    pattern={codCursoPattern} //validando com o regex
                    onChange={(e) => setCod_Curso(e.target.value)} //Atualiza o estado
                    maxLength={4}
                    minLength={4}
                    required //campo obrigatorio
                />  */}
                <select
                    value={cod_curso}
                    onChange={(e) => setCod_Curso(e.target.value)}
                    required
                >
                    <option value="">Selecione um curso</option>
                    {
                        cursos.map((c) => (
                            <option key={c.cod_curso} value={c.cod_curso}>
                                {c.nome}
                            </option>
                        ))
                    }
                </select>


                <button type="submit"> {alunoEditando ? 'Atualizar' : 'Cadastrar'} </button>
            </form>

        </>
    )
}
export default AlunoForm;


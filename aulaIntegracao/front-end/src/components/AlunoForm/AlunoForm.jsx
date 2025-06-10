import { useState, useEffect } from 'react'; // Importa hooks do React
import AlunoService from '../../services/alunoService'; // Importa o serviço de alunos

function AlunoForm({ alunoEditando, aoSalvar }) { // Componente recebe props para edição e callback de salvar
    const [nome, setNome] = useState(''); // Estado para o nome do aluno
    const [matricula, setMatricula] = useState(''); // Estado para a matrícula
    const [codCurso, setCodCurso] = useState(''); // Estado para o código do curso selecionado
    const [cursos, setCursos] = useState([]); // Estado para a lista de cursos

    useEffect(() => {
        // Carrega a lista de cursos ao abrir o formulário
        async function carregarCursos() {
            const cursoService = await import('../../services/cursoService'); // Importa o serviço de cursos dinamicamente
            const lista = await cursoService.default.listar(); // Busca a lista de cursos
            setCursos(lista); // Atualiza o estado com os cursos
        }
        carregarCursos(); // Executa a função ao montar o componente
    }, []); // Executa apenas uma vez

    useEffect(() => {
        // Preenche os campos se estiver editando um aluno
        if (alunoEditando) {
            setNome(alunoEditando.nome || ''); // Define o nome
            setMatricula(alunoEditando.matricula || ''); // Define a matrícula
            setCodCurso(alunoEditando.cod_curso || ''); // Define o código do curso
        }
    }, [alunoEditando]); // Executa quando alunoEditando mudar

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita o recarregamento da página
        const alunoData = { nome, matricula, cod_curso: codCurso }; // Monta objeto com dados do aluno
        if (alunoEditando) {
            await AlunoService.atualizar(alunoEditando.id, alunoData); // Atualiza aluno existente
        } else {
            await AlunoService.criar(alunoData); // Cria novo aluno
        }
        setNome(''); // Limpa o campo nome
        setMatricula(''); // Limpa o campo matrícula
        setCodCurso(''); // Limpa o campo curso
        aoSalvar(); // Chama callback após salvar
    };

    // Regex: 1 letra maiúscula, 5 dígitos (ex: A12345)
    const matriculaPattern = "^[A-Z][0-9]{5}$";

    return (
        <form onSubmit={handleSubmit} className="aluno-form"> {/* Formulário de cadastro/edição */}
            <input
                type="text"
                placeholder="Matrícula (ex: A12345)"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value.toUpperCase())} // Sempre maiúscula
                pattern={matriculaPattern} // Validação pelo padrão
                maxLength={6} // Máximo de 6 caracteres
                required
                title="Uma letra maiúscula seguida de 5 números (ex: A12345)"
            />
            <input
                type="text"
                placeholder="Nome do aluno"
                value={nome}
                onChange={(e) => setNome(e.target.value)} // Atualiza nome
                required
            />
            <select
                value={codCurso}
                onChange={(e) => setCodCurso(e.target.value)} // Atualiza curso selecionado
                required
            >
                <option value="">Selecione o curso</option> {/* Opção padrão */}
                {cursos.map((curso) => (
                    <option key={curso.cod_curso} value={curso.cod_curso}>
                        {curso.nome}
                    </option>
                ))}
            </select>
            <button type="submit">{alunoEditando ? 'Atualizar' : 'Cadastrar'}</button> {/* Botão dinâmico */}
        </form>
    );
}

export default AlunoForm; // Exporta o componente
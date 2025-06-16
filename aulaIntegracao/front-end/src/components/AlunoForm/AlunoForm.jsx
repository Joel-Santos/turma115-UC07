import { useEffect, useState } from "react"; // importas os hooks do react
import AlunoService from "../../services/alunoService";

function AlunoForm(){
    const[matricula, setMatricula] = useState('');
    const[nome, setNome] = useState('');
    const[cod_curso, setCod_curso] = useState('');

    //Função para criar um curso
    const handleSubmit = async(e) =>{
        e.preventDefault(); //Evita o recarregamento da página
        const data = await AlunoService.criar({matricula, nome, cod_curso})
        console.log(data);
        setMatricula('');
        setNome('');
        setCod_curso('');
    };
    const codMatriculaPattern = "^[A-Z][0-9]{5}$";
    const codCursoPattern = "^[A-Z][0-9]{3}$";
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" // código do curso
                    placeholder="Matricula (ex:A12345)"
                    value={matricula}//linkando a variavel de estado
                    pattern={codMatriculaPattern} //validando com o regex
                    onChange={(e) => setMatricula(e.target.value)} //Atualiza o estado
                    maxLength={6}
                    minLength={6}
                    required //campo obrigatorio
                />
                 <input
                    type="text" // nome do curso
                    placeholder="Informe o nome do aluno"
                    value={nome}//linkando a variavel de estado
                    onChange={(e) => setNome(e.target.value)} //Atualiza o estado
                    required //campo obrigatorio
                />
                  <input
                    type="text" // código do curso
                    placeholder="Código do Curso (ex:A123)"
                    value={cod_curso}//linkando a variavel de estado
                    pattern={codCursoPattern} //validando com o regex
                    onChange={(e) => setCod_curso(e.target.value)} //Atualiza o estado
                    maxLength={4}
                    minLength={4}
                    required //campo obrigatorio
                />
                <button type="submit">Cadastrar</button>
            </form>
        
        </>
    )
}
export default AlunoForm;


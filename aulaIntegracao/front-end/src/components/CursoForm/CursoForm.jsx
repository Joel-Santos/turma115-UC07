import { useEffect, useState } from "react"; // importas os hooks do react
import CursoService from "../../services/cursoService";

function CursoForm({ cursoEditando, aoSalvar }) { //Duas props 
    const [cod_curso, setCod_curso] = useState('');
    const [nome, setNome] = useState('');

    useEffect(() => {
        if (cursoEditando) {
            setCod_curso(cursoEditando.cod_curso);
            setNome(cursoEditando.nome);

        }
    }, [cursoEditando]);

    //Função para criar ou atualizar um curso
    const handleSubmit = async (e) => {
        e.preventDefault(); //Evita o recarregamento da página
        if (cursoEditando) {
            const cursoAtualizar = await CursoService.atualizar(cod_curso, { nome })
        } else {
            const data = await CursoService.criar({ cod_curso, nome })
            console.log(data);
        }
        setNome('');
        setCod_curso('');
        aoSalvar();
    };
    const codCursoPattern = "^[A-Z][0-9]{3}$";
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" // código do curso
                    placeholder="Código do Curso (ex:A123)"
                    value={cod_curso}//linkando a variavel de estado
                    pattern={codCursoPattern} //validando com o regex
                    onChange={(e) => setCod_curso(e.target.value)} //Atualiza o estado
                    maxLength={4}
                    minLength={4}
                    disabled={!!cursoEditando}
                    required //campo obrigatorio
                />
                <input
                    type="text" // nome do curso
                    placeholder="Informe o nome do curso"
                    value={nome}//linkando a variavel de estado
                    onChange={(e) => setNome(e.target.value)} //Atualiza o estado
                    required //campo obrigatorio
                />
                <button type="submit">{cursoEditando ? "Atualizar" : "Cadastrar" }</button>
            </form>

        </>
    )
}
export default CursoForm;


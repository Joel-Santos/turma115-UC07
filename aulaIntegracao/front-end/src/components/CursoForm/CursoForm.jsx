import { useState, useEffect } from 'react'; // Importa hooks do React
import CursoService from '../../services/cursoService'; // Importa o serviço de cursos

// Componente de formulário para criar/editar cursos
function CursoForm({ cursoEditando, aoSalvar }) {
    const [nome, setNome] = useState(''); // Estado para o nome do curso
    const [codCurso, setCodCurso] = useState(''); // Estado para o código do curso

    // Atualiza os campos se estiver editando um curso existente
    useEffect(() => {
        if (cursoEditando) {
            setNome(cursoEditando.nome); // Preenche o nome do curso
            setCodCurso(cursoEditando.cod_curso || ''); // Preenche o código do curso
        }
    }, [cursoEditando]); // Executa quando cursoEditando muda

    // Função chamada ao enviar o formulário
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita recarregar a página
        if (cursoEditando) {
            // Atualiza curso existente
            await CursoService.atualizar(cursoEditando.id, { nome, cod_curso: codCurso });
        } else {
            // Cria novo curso
            await CursoService.criar({ nome, cod_curso: codCurso });
        }
        setNome(''); // Limpa o campo nome
        setCodCurso(''); // Limpa o campo código do curso
        aoSalvar(); // Chama callback após salvar
    };

    // Regex para validar: 1 letra maiúscula seguida de 3 dígitos
    const codCursoPattern = "^[A-Z][0-9]{3}$";

    return (
        <form onSubmit={handleSubmit} className="curso-form"> {/* Formulário de curso */}
            <input
                type="text" // Campo de texto para código do curso
                placeholder="Código do curso (ex: A123)" // Placeholder do campo
                value={codCurso} // Valor do campo
                onChange={(e) => setCodCurso(e.target.value.toUpperCase())} // Atualiza estado e força maiúscula
                pattern={codCursoPattern} // Validação pelo padrão regex
                maxLength={4} // Máximo de 4 caracteres
                required // Campo obrigatório
                title="Uma letra maiúscula seguida de 3 números (ex: A123)" // Dica de validação
            />
            <input
                type="text" // Campo de texto para nome do curso
                placeholder="Nome do curso" // Placeholder do campo
                value={nome} // Valor do campo
                onChange={(e) => setNome(e.target.value)} // Atualiza estado do nome
                required // Campo obrigatório
            />
            <button type="submit">{cursoEditando ? 'Atualizar' : 'Cadastrar'}</button> {/* Botão de submit */}
        </form>
    );
}

export default CursoForm; // Exporta o componente

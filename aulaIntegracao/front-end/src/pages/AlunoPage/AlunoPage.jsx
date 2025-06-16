import React, {useState} from "react";
import AlunoForm from "../../components/AlunoForm/AlunoForm";
import ListarAlunos from "../../components/ListarAlunos/ListarAlunos";

function PageAluno() {
    const [alunoEditando, setAlunoEditando] = useState(null);

    const handleEditar = (aluno) => {
        setAlunoEditando(aluno)
    }
    const handleSalvar = () => {
        setAlunoEditando(null);
    }

    return (
        <>
            <AlunoForm alunoEditando={alunoEditando} aoSalvar={handleSalvar} />
            <ListarAlunos aoEditar={handleEditar} />

        </>
    );
}

export default PageAluno;
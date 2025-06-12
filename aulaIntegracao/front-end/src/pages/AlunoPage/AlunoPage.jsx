import React from "react";
import AlunoForm from "../../components/AlunoForm/AlunoForm";
import ListarAlunos from "../../components/ListarAlunos/ListarAlunos";

function PageAluno(){
    return(
        <>
            <AlunoForm />
            <ListarAlunos />
        
        </>
    );
}

export default PageAluno;
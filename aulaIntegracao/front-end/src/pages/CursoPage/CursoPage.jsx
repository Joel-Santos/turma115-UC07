import React from "react";
import CursoForm from "../../components/CursoForm/CursoForm";
import ListarCursos from "../../components/ListarCursos/ListarCursos";
import AlunoForm from "../../components/AlunoForm/AlunoForm";
import ListarAlunos from "../../components/ListarAlunos/ListarAlunos";

function PageCurso(){
    return(
        <>
            <CursoForm />
            <ListarCursos />
            <AlunoForm />
            <ListarAlunos />        
        </>
    );
}

export default PageCurso;
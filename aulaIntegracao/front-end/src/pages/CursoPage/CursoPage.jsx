import React, {useState} from "react";
import CursoForm from "../../components/CursoForm/CursoForm";
import ListarCursos from "../../components/ListarCursos/ListarCursos";

function PageCurso(){
const [cursoEditando, setCursoEditando] = useState(null);

const handleEditar = (curso) =>{
    setCursoEditando(curso)
}
const handleSalvar = () =>{
    setCursoEditando(null);
}

    return(
        <>
            <CursoForm cursoEditando={cursoEditando} aoSalvar={handleSalvar}/>
            <ListarCursos aoEditar={handleEditar}/>
        
        </>
    );
}

export default PageCurso;
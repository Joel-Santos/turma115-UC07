import { useEffect, useState } from "react"; // importas os hooks do react
import CursoService from "../../services/cursoService";

function ListarCursos(){
    //Estado para armazenar os cursos
    const[cursos, setCursos] = useState([]);
    
    //Função para carregar a lista de cursos 
    const carregar = async() => {
        const lista = await CursoService.listar();
        console.log(lista);
    }

    //Executa a função carregar ao montar o componente
    useEffect(()=>{
        carregar(); 
    }, []);


    return(
        <>
        <h1>Listagem de cursos</h1>
        </>
    )
}

export default ListarCursos;
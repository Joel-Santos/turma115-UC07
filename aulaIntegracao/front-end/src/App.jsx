import './App.css';
import AlunoList from './components/AlunoList/AlunoList';
import CursoList from './components/CursoList/CursoList';


function App() {
  return (
    <div className="App">
      <h1>Gestão de Cursos</h1>
      <CursoList />
      <AlunoList />
    </div>
  );
}

export default App;

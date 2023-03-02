import './App.scss';
import Aluno from './Aluno';

import { Link } from 'react-router-dom';

export default function App() {

  return (
    <div className="pagina-app">
      <header className="App-header">
        <h1 className='titulo'> Alunos super fofos! </h1>
        <Link to='/contato'>Ir para contato</Link>
        <Aluno nome="Bruno de Oliveira" formacao="Analista de Sistemas" />
        <Aluno nome="João José" formacao="Engenheiro de Software" />
      </header>
      
    </div>
  );

}


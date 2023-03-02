import './Aluno.scss';


export default function Aluno(props) {

  return (
    <div className='componente-aluno'>
      <hr />
      <h1 className='titulo'>Aluno:</h1>
      <p> {props.nome}  </p>

      <h1> Formação:</h1>
      <p> {props.formacao}</p>
      <hr />
    </div>
  )
}


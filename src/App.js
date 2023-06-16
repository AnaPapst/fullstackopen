const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Oi Oi {props.nome}, você tem {props.idade}</p>
    </div>
  )
}

const App = () => {
  const amigos = [
    {nome: 'Lu', idade: 28},
    {nome: 'Matheus', idade: 26}
  ]

  
  return (
    <>
      <p>Olá, mundo!</p>
      <p>{amigos[0].nome}</p>
      <p>{amigos[1].idade}</p>
    </>
  )
}

export default App;

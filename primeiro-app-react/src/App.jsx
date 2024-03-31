// exemplo de sintaxe JSX
function App() {
//Bloco Superior
  const nome = 'Douglas Gilson Nunes'
  const email = 'email@email.com'

  return (
    //somente aqui aceita HTML
    <div className="App">
      <h1>Nome:{nome}</h1><br />
      <h2>Email: {email}</h2><br />
    </div>
  )
}

export default App
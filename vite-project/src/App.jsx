import './App.css'
import Button from './compounents/Button'
import Title from './compounents/Title'
function App() {
  function handleClick(){
    console.log('Click en App')
  }

  return (
    <>
      <Title text="Titulo"/>
      <Button text="Click22" click={handleClick}/>
    </>
  )
}

export default App

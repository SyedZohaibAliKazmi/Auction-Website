
import './App.css'

function App() {

  const handleClick =()=>{
    window.open('https://github.com/SyedZohaibAliKazmi', '_blank');
  }

  return (
    <>
    <h1>Auction Website </h1>
    <p>Craete a Auction Website for new Versio.</p>
    <button onClick={handleClick}>Click</button>
    </>
  )
}

export default App

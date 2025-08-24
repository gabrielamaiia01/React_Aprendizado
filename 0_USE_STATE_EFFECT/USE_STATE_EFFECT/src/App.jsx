import { useState, useEffect} from 'react' 
import './App.css'

function App() {
  
  const [likes, setLikes] = useState(0); //UseState(0): Onde é o valor inicial. O useState é o inicio de um estado. 
 /* setLikes é uma função responsável por colocar um valor dentro da variável 'Likes'. */
 
  const [input, setInput] = useState("Nada"); 
  function handleClick(){
    setLikes(prevLikes => prevLikes + 1); 
     /* valor previo dos Likes e adiciona uma função
     forma de captar o valor dos likes
     */
    }

    //Sempre quando alterar algo, o useEffect vai rodar
    useEffect( () => {

        alert(` Olá seja bem vindo  `)

    },[]) //quais estados vão chamar, assim que rodar o UseEffect

  return (
    <>
    <h2>Quantidade de likes: {likes}</h2>
    <button onClick={handleClick}> cliqueaqui</button>


    <h1>O que voce digitou no input {input}</h1>
    <input value={input} onChange={event => setInput(event.target.value)}></input> 
     
    </>
  )
  /*OnChage = sempre que tiver uma alteração no input pode modificar esse evento*/ 
}

export default App
/*OnChage = sempre que tiver uma alteração no input pode modificar esse evento*/ 
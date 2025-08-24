import './App.css';

import { useState, useEffect } from 'react';

function App() {

  const url = "http://localhost:3000/products"; 
  const [produtos, setProdutos] = useState([])//salva esses produtos
  
  const [name, setName] = useState(""); 
  const [price, setPrice] = useState(""); 

  //1 - resgastando dados
  useEffect(() => { 
    async function fetchData() {
          const res = await fetch(url)
          const data = await res.json() //metodo json originado do res
          setProdutos(data)
    }

    fetchData();
  }, []);


  //Adição de Produtos

  //Função que envia o formulário 
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name, 
      price, 
    };

    const res = await fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(product)
    })

     //3 - carregamento dinamico 
const addedProduct = await res.json()

setProdutos((prevProdutos) => [...prevProdutos, addedProduct])

setName("")
setPrice("")
  }


 

  return (
    <div className="App">
    <h1>Lista de produtos</h1>
    <ul> 
      {produtos.map((produto) => (
        <li key={produto.id}>{produto.name} - R${produto.price} </li>
      ))}
    </ul>

    <div className='add-product'> 

      <form onSubmit={handleSubmit}> 
        <label>
          nome: 
          <input type='text' 
          value={name} 
          name='name' 
          onChange={(e)=> setName(e.target.value)}/>
        </label>
        <label>
          preço:
          <input type='number' 
          value={price} 
          name='price' 
          onChange={(e)=> setPrice(e.target.value)}/>
        </label>
        <input type='submit' value='Criar'/>
      </form>
    </div>
    </div>
  );
}

export default App;

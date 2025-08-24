import './App.css';

import { useState, useEffect } from 'react';

function App() {

  const url = "http://localhost:3000/products"; 
  const [produtos, setProdutos] = useState([])//salva esses produtos

  //1 - resgastando dados
  useEffect(() => { 
    async function fetchData() {
          const res = await fetch(url)
          const data = await res.json() //metodo json originado do res
          setProdutos(data)
    }

    fetchData();
  }, []);

  console.log(produtos)

  return (
    <div className="App">
    <h1>Lista de produtos</h1>
    </div>
  );
}

export default App;

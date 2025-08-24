const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
        console.log('Ativou o evento')
    }

    const renderSomenthing = (x) => {
        if (x) {
            return <h1>Renderizou aqui</h1>
        } else {
            return <h1>Também posso renderizar</h1>
        }

    }

    return (

        <div> 

        <div> <button onClick={handleMyEvent}>Clique Aqui</button> </div>
        <div> 
            <button onClick={() => console.log("Clicou")}> clique aqui também </button>
             <button onClick={() => {
                if(true){
                    console.log("Isso não deveria estar aqui") //pode ser trocado por uma função com nome
                }
             }}> clique aqui também </button>
        </div>

        {renderSomenthing(true)}
        {renderSomenthing(false)}

        </div>



    )
}

export default Events; 
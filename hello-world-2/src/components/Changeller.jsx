const Changeller = () => {

    const A = 10; 
    const B = 10;
    const soma = () => {
        return console.log(A + B);
     
    }

    return (
        <div>
            <h1>{A}</h1>
            <h1>{B}</h1>

            <div>
                <button onClick={soma}> Aperte aqui</button>
            </div>


        </div>
    )
}

export default Changeller;
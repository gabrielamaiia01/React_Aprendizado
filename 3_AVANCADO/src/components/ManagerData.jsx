import { useState } from "react";

const ManagerData = () => {
    let value = 10; 


    const [number, setNumber] = useState(10); 

    console.log(number)
    return (
        <div>
            <div>
                <p>valor: {value} </p>
                <button onClick={() => (value = 15)}>mudar valor</button>
            </div>

            <div>
                <p>valor: {number}</p>
                <button onClick={()=> {setNumber(20)}}>mudança</button>
            </div>

        </div>
    )
};

export default ManagerData; 
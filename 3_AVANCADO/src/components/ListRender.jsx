import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus" , "Pedro", "Josias"])

    const [users] = useState([
        {id: 1, name: "Gabriela", age: 14},
        {id: 134, name: "Gabriel", age: 10}, 
        {id: 4323, name: "G", age: 34}
    ])

  return (
    <div>
        <ul>
            {list.map((item, index) => (
                <li key={index}> {item}</li>
            ))}
        </ul>

        <ul> 
            {users.map((user) => (
                <li key={user.id}> 
                {user.name} - {user.age}
                </li>
            ))}
        </ul>
    </div>

    
  )
}

export default ListRender
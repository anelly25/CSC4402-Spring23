import React, {useState} from 'react'
import './Users.css'
import {UserData} from "./UserData"

export default function Users(){
  const[query, setQuery] = useState("");

  console.log(UserData.filter(user => user.first_name.toLowerCase().includes("fe")));
    return (
       <div className="users">
          <input type = "text" placeholder="Search Tutors" className="search" onChange={(e)=> setQuery(e.target.value)} />
          <ul className="list">
            {UserData.filter(user => user.first_name.toLowerCase().includes(query)).map((user) => (
              <li key={user.id} className="listItem">{user.first_name}</li>
            ))}
          </ul>
       </div>
    )
}

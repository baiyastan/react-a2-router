import React from 'react'
import { user } from '../data'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      Home
      {
        user.map((item) => (
            <Link to={`/userinfo/${item.id}`} key={item.id} style={{border:"2px solid red", margin: "10px"}}>
                <div>{item.name}</div>
                <p>{item.age}</p>
            </Link>
        ))
      }
    </div>
  )
}

export default Home

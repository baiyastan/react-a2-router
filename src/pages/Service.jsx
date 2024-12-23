import React, {useState, useEffect} from 'react'
import axios from 'axios'
import apeClient from '../axios/apiClent'

function Service() {
    const [count, setCount] = useState(1)
    const [title, setTitle] = useState("")
    const [carts, setCarts] = useState([])
    const [user, setUser] = useState([])

    // let API = "https://dummyjson.com/carts/5"

    let API1 = "https://dummyjson.com/users";

   async function getProduct() {
        try {
            const res = await apeClient.get(`/carts/${count}`)

            setCarts(res.data.products)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    async function getUser() {
        try {
           const res = await axios.get(API1)

           console.log(res);
           setUser(res.data.users)
           
        } catch (error) {
            console.log(error);
            
        }
    }

    

    useEffect(() => {
        getProduct()
        getUser()
    }, [count])

  return (
    <div>
      Service
      {count}<br></br>
      {title} <br></br>

      <button onClick={() => setCount(count + 1)}>Click</button>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

    {
        carts.map((item) => (
            <div key={item.id}>
                <img src={item.thumbnail} alt="" />
            </div>
        ))
    }

    <div >
        {
            user.map((item) => (
                <div key={item.id}>
                    <img src={item.image} alt="" />
                </div>
            ))
        }
    </div>

    </div>
  )
}

export default Service

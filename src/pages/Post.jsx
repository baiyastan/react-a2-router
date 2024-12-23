import React, {useState, useEffect} from 'react'
import axios from 'axios'

let API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/products"

function Post() {

    async function getProduct() {
        try {
            const res = await axios.get(API)

            console.log(res);
            
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

  return (
    <div>
      
    </div>
  )
}

export default Post

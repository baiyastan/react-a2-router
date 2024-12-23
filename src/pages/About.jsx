import React from 'react'
import { products } from '../data'
import Card from '../components/Card/Card'

function About() {
  return (
    <div style={{width:"1350px", display: "flex", flexWrap: "wrap", margin: "0 auto"}}>
      {
        products.map((item) => (
          <Card key={item.id} data={item} />
        ))
      }
    </div>
  )
}

export default About

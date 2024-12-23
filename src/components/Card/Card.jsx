import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom';

function Card({data}) {
    console.log(data);
    
  return (
    <Link to={`/card-item/${data.id}`} className='card'>
      <img src={data.image} alt="" />
      <div className='card-content'>
            <h4>{data.title}</h4>
            <p>{data.price}</p>
            <div className='count'>{data.discountedPrice}</div>
      </div>
    </Link>
  )
}

export default Card

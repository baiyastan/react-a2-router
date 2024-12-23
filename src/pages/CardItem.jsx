import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data'

function CardItem() {
    const {id} = useParams()
    const findProduct = products.find((x) => x.id == id)

    const [image, setImage] = useState(findProduct?.image)
  return (
    <div>
      <img src={image} alt="" />

      <div className='images'>
        {
            findProduct.images.map((item, index) => (
                <img onClick={() => setImage(item)} style={{width:"120px", height:"120px"}} src={item} key={index} />
            ))
        }
      </div>
    </div>
  )
}

export default CardItem

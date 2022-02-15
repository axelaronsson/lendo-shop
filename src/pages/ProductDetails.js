import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function ProductDetails({ addToCart, products }) {
  const { id } = useParams()

  const [product, setProduct] = useState(null);

  useEffect(()=>{
    if(products) {
      const prod = products.filter(item => id === item.id.toString());
      setProduct(prod[0])
    }
  },[products])

  return (
    product ?
    <div className="content">
      <div className="product">
        <div className="details">
          <h2>Product - { product.name }</h2>
          <p>Brand: { product.brand }</p>
          <p>Price: { product.price }</p>
          <p>Weight: { product.weight }</p>
          {
            product.available ?
            <button onClick={() => addToCart(product)}>Buy</button> :
            'Product not available'
          }
        </div>
      </div>
    </div> : ''
  )
}

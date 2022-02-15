import { Link } from "react-router-dom"

export default function Products( { products } ) {
  return (
    products ?
    <div className="content">
      <h3>Products</h3>
      <div className="products">
        {
        products.map(p => (
          <div key={p.id}>
            <Link to={`/products/${p.id}`}>
              {p.name}
            </Link>
            <span>${p.price}</span>
          </div>
        ))
        }
      </div>
    </div> : ''
  )
}

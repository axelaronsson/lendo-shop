
export default function Cart({ products, decrementItem, incrementItem, removeItem }) {
  return (
    <div className="content cart">
          <h2>Cart</h2>
      {
        products.map((item, i) => {
          return <p
            key={i}>{item.name} {item.price} {item.chosenColor}
            <button onClick={() => decrementItem(item)}>-</button>
            <button onClick={() => incrementItem(item)}>+</button>
            <button onClick={() => removeItem(item)}>Remove</button>
          </p>
        })
      }
    </div>
  )
}

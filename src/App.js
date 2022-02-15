import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Cart from './pages/Cart'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

function App() {

  const [data, setData] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    getData()
  },[])

  const getData = () => {
    fetch('http://localhost:3000/data.json', {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(function(response){
      return response.json();
    })
    .then(function(myJson) {
      setData(myJson.items)
    });
  }

  const decrementItem = (item) => {
    const idx = cart.indexOf(item);
    const newArr = cart.filter((item, i) => {
      if(i !== idx) {
        return item
      }
    })
    setCart(newArr);
  }

  const incrementItem = (item) => {
    setCart(oldArray => [...oldArray, item]);
  }

  const removeItem = (item) => {
    const newArr = cart.filter((prod, i) => {
      if(prod.id !== item.id) {
        return item
      }
    })
    setCart(newArr);
  }

  const addToCart = (product) => {
    const cartLink = document.querySelector('a[href="/cart"]');
    cartLink.className = 'animate__animated animate__wobble';
    setTimeout(function() {
      cartLink.className = '';
    }, 500);
    setCart(oldArray => [...oldArray, product]);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Shop</h1>
          <Link to="/cart">Cart <span>{cart.length}</span></Link>
          <Link to="/products">Products</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Products}>
            <Products products={data} />
          </Route>
          <Route path="/cart">
            <Cart removeItem={removeItem} incrementItem={incrementItem} decrementItem={decrementItem} products={cart} />
          </Route>
          <Route path="/products/:id">
            <ProductDetails addToCart={addToCart} products={data} />
          </Route>
          <Route path="/products">
            <Products products={data} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
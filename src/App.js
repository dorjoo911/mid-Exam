import "./styles.css";
import { useEffect, useState } from "react";
import ListProduct from "./ListProduct";
import Product from "./Product";

export default function App() {
  const [products, setproduct] = useState([]);
  const [cart, setcart] = useState([]);

  useEffect(() => {
    setproduct([
      { name: "p1", price: 20 },
      { name: "p2", price: 50 },
      { name: "p3", price: 10 }
    ]);
  }, []);

  const compare = (a, b) => {
    if (a > b) return 1;
    else if (a === b) return 0;
    else return -1;
  };

  function sortProduct() {
    const sorted = [...products];
    // need a solution on that ...
    sorted.sort(compare(products.price, cart.price));
    // need a solution on that ...
    setproduct(sorted);
  }

  function addToCart(product) {
    const c = [...cart];
    const p = products.find((p) => p === product);
    c.push(p);
    setcart(c);
  }

  return (
    <div className="App">
      <b>All product: </b>
      <button onClick={sortProduct}>Sort by price</button>
      {products.map((p, i) => (
        <>
          <ListProduct i={i} p={p} addToCart={addToCart} />
        </>
      ))}
      <b>Cart</b>
      {cart.map((p, i) => (
        <>
          <Product i={i} p={p} />
        </>
      ))}
    </div>
  );
}

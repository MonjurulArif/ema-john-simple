import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const first10 = products.slice(0, 10);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((responsedData) => setProducts(responsedData)) //assigned to products
      .catch((error) => alert("Error: ", error));
  }, []);

  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    // console.log("Product added", product); //when addToCart button clicked
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {first10.map((pd) => (
          <Product handleAddProduct={handleAddProduct} product={pd}></Product>
        ))}
      </div>
      <div className="cart-container">
        {/* <h3>This is Cart</h3>
        <h5>Order Summery: {cart.length}</h5> */}

        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";
import { addToDb, clearShoppingCart, getStoredCart } from "../../utilities/fakedb";

const Shop = () => {
  //Products loaded to using router loader in app.js and useLoaderData()
  const productsLoaded = useLoaderData();
  //converting to JSON to JavaScript object
  const products = JSON.parse(productsLoaded);
  // const products = productsLoaded.json();
  // console.log("products type: ", typeof products);
  // console.log(products);

  //products loading here
  // const [products, setProducts] = useState([]);
  // const first100 = products.slice(0, 100);

  //Products loaded using router loader in app.js and useLoaderData()
  // useEffect(() => {
  //   // console.log("Product load before fetch");
  //   fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
  //     .then((res) => res.json())
  //     // .then((data) => console.log(data))
  //     .then((responsedData) => setProducts(responsedData)) //assigned to products
  //     .catch((error) => alert("Error: ", error));
  // }, []);

  // useEffect(() => {
  //   fetch("products.JSON")
  //     .then((res) => res.json())
  //     // .then((data) => console.log(data))
  //     .then((responsedData) => setProducts(responsedData)) //assigned to products
  //     .catch((error) => alert("Error: ", error));
  // }, []);

  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
    clearShoppingCart();
  };

  useEffect(() => {
    // console.log("Local Storage fist line", products);
    const storedCart = getStoredCart();
    // console.log(storedcart);

    const savedCart = [];
    //for in loop for all properties of object
    //for of loop for array of object
    for (const id in storedCart) {
      // console.log(id);
      const addedProduct = products.find((product) => product.id === id);
      // console.log(addedProduct);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // console.log(addedProduct);
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
    // console.log("Local Storage finished");
  }, [products]);
  //[] dependency injection
  //[products] is called second time when products load

  const handleAddToCart = (selectedProduct) => {
    // console.log("Product added", product); //when addToCart button clicked
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    //
    // const newCart = [...cart, selectedProduct];
    setCart(newCart);

    addToDb(selectedProduct.id);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product handleAddToCart={handleAddToCart} key={product.id} product={product}></Product>
        ))}
      </div>
      <div className="cart-container">
        {/* <h3>This is Cart</h3>
        <h5>Order Summery: {cart.length}</h5> */}

        <Cart cart={cart} clearCart={clearCart}>
          {/* <Link to="/review">
            <button className="main-button">Review Order</button>
          </Link> */}
          {/* //since Link is inside another componet Cart, hence Link is by default a children */}
          <Link to="/orders">
            <button className="btn-review">Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;

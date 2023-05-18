import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { clearShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  //{ products: products, initialCart: initialCart } from productsAndCartLoader to Orders
  const { products, initialCart } = useLoaderData();
  //converting to JSON to JavaScript object
  // const products = JSON.parse(productsLoaded);
  // console.log(products);
  // console.log(typeof products);

  //To allow user to change cart
  const [cart, setCart] = useState(initialCart);

  const handleRemoveItem = (id) => {
    // console.log(id);
    const remaining = cart.filter((prodcut) => prodcut.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const clearCart = () => {
    setCart([]);
    clearShoppingCart();
  };

  return (
    <div className="shop-container">
      {/* <h2>This is Orders: {products.length}</h2>
      <p>Initial Cart: {initialCart.length} contains type of product</p> */}

      <div className="orders-container">
        {cart.map((product) => (
          <ReviewItem key={product.id} product={product} handleRemoveItem={handleRemoveItem}></ReviewItem>
        ))}
        {cart.length === 0 && (
          <h2>
            No Items for Review. Please <Link to="/">Shop more</Link>
          </h2>
        )}
      </div>

      <div className="cart-container">
        <Cart clearCart={clearCart} cart={cart}>
          <Link to="/shipping">
            <button>Proceed Shipping</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;

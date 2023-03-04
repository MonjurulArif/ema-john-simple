import React from "react";
import "./Cart.css";

const Cart = (props) => {
  // const Cart = ({ cart }) => {
  const cart = props.cart;
  console.log(cart);
  console.log(props.children);
  // const total = cart.reduce((total, prd) => total + prd.price, 0);
  //initial value of total is 0

  const productPrice = () => {
    if (props.cart.length === 0) {
      return 0;
    } else {
      return props.cart[props.cart.length - 1].price;
    }
  };

  //same as reduce
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  // for (let i = 0; i < cart.length; i++) {
  //   const product = cart[i];
  //   total = total + product.price;
  // }

  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }

  // if (total > 1050) {
  //   shipping = 0;
  // } else if (total > 750) {
  //   shipping = 20;
  // } else if (total > 400) {
  //   shipping = 40;
  // }

  // const tax = Number((total * 0.1).toFixed(2));
  //toFixed considered as string value
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  const formatNumber = (num) => {
    const precision = Number(num).toFixed(2);
    return precision;
  };

  return (
    <div className="cart">
      <h4>Order Summery</h4>
      {/* <p>Selected Items: {cart.length}</p> */}
      <p>Selected Items: {quantity}</p>
      {/* <p>Product Price: {formatNumber(total)}</p> */}
      <p>Product Price: ${productPrice()}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax : ${tax}</p>
      <p>Grand Total: ${formatNumber(grandTotal)}</p>
      <br />
      {/* {props.children} */}
    </div>
  );
};

export default Cart;

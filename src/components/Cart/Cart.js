import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
  // const total = cart.reduce((total, prd) => total + prd.price, 0);
  //initial value of total is 0

  //same as reduce
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
  }

  let shipping = 0;
  if (total > 350) {
    shipping = 0;
  } else if (total > 250) {
    shipping = 20;
  } else if (total > 0) {
    shipping = 40;
  }

  const tax = (total / 10).toFixed(2);
  const grandTotal = total + shipping + Number(tax).toFixed(2);

  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };

  return (
    <div>
      <h4>Order Summery</h4>
      <p>Items Ordered: {cart.length}</p>
      <p>Product Price: {formatNumber(total)}</p>
      <p>
        <small>Tax + VAT: {tax}</small>
      </p>
      <p>
        <small>Shipping Cost: {shipping}</small>
      </p>
      <p>Total Price: ${grandTotal}</p>
    </div>
  );
};

export default Cart;

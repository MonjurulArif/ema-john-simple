import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
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
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
  }

  let shipping = 0;
  if (total > 1050) {
    shipping = 0;
  } else if (total > 750) {
    shipping = 20;
  } else if (total > 400) {
    shipping = 40;
  }

  const tax = total / 10;
  const grandTotal = total + shipping + tax;

  const formatNumber = (num) => {
    const precision = Number(num).toFixed(2);
    return precision;
  };

  return (
    <div>
      <h4>Order Summery</h4>
      <p>Items Ordered: {cart.length}</p>
      {/* <p>Product Price: {formatNumber(total)}</p> */}
      <p>Product Price: ${productPrice()}</p>
      <p>
        <small>Tax + VAT: ${tax}</small>
      </p>
      <p>
        <small>Shipping Cost: ${shipping}</small>
      </p>
      <p>Total Price: ${formatNumber(grandTotal)}</p>
    </div>
  );
};

export default Cart;

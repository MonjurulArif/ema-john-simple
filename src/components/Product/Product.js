import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid, regular, brands, icon } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { faCoffee, faStarHalf, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  // const Product = ({product, handleAddToCart}) => {

  // console.log(props.product.name);
  // console.log(props);

  // const{product, handleAddToCart}=props;
  // const { img, name, seller, price, stock, ratings } = product;

  //same as above
  const { img, name, seller, price, stock, ratings } = props.product;
  return (
    <div className="product">
      <div>
        <img className="image" src={img} alt="" />

        <div className="product-info">
          <h4 className="product-name">{name}</h4>
          <p>${price}</p>
          <p>
            <small>Seller: {seller}</small>
          </p>
          <p>
            <small>Ratings: {ratings} stars</small>
          </p>
          <p>
            {" "}
            <small>Only: {stock} left in stack - Order soon </small>
          </p>
        </div>

        <button className="btn-cart" onClick={() => props.handleAddToCart(props.product)}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <p className="btn-text">Add to Cart</p>
        </button>
      </div>
    </div>
  );
};

export default Product;

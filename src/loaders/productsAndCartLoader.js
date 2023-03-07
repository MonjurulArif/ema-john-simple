import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
  //get Products
  const productsData = await fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json");
  const products = await productsData.json();
  // const products = await JSON.parse(productsData);
  // const products = await JSON.stringify(productsData);

  //get Cart
  const savedCart = getStoredCart();
  // console.log("savedCart type:", typeof savedCart);
  // console.log("savedCart:", savedCart);

  // console.log("products type:", typeof products);
  // console.log("products :", products);

  const initialCart = [];

  //since we have key value pairs so for using in
  for (const id in savedCart) {
    // console.log(id);
    //unique product using unique id, so find
    const addedProduct = products.find((product) => product.id === id);
    // console.log(id, addedProduct);
    if (addedProduct) {
      const quantity = savedCart[id];
      // console.log(id, quantity);
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
    }
  }

  // return products;
  // return { products, initialCart };
  return { products: products, initialCart: initialCart };
};

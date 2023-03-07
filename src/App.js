import logo from "./logo.svg";
import "./App.css";
import Main from "./layouts/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => {
            return fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json");
            // return fetch("products.JSON");
          },
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>,
          // loader: () => {
          //   return fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json");
          //   // return fetch("products.JSON");
          // },
        },
        { path: "/inventory", element: <Inventory></Inventory> },
        { path: "/about", element: <About></About> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      {/* <Main></Main> */}
    </div>
  );
}

export default App;

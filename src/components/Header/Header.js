import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Header.css";
import { AuthContext } from "../../context/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div>
      <nav className="header">
        <img src={logo} alt="" />
        <div>
          <Link to="/">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/about">About</Link>
          {user?.uid ? (
            <button onClick={logOut} className="btn-logout">
              Log Out
            </button>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign up</Link>
            </>
          )}
          {/* <span>{user?.email}</span> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;

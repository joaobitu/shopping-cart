import React from "react";
import { Link } from "react-router-dom";
import "../style/nav.css";

export const Nav = (props) => {
  return (
    <div id="navigation">
      <ul>
        <Link to="/">
          <li id="home">Home</li>
        </Link>

        <Link to="/about">
          <li id="about">About</li>
        </Link>
        <Link to="/shop">
          <li id="shop">Shop</li>
        </Link>
        <Link to="/cart">
          <li id="cart">Cart ({props.cartCounter})</li>
        </Link>
      </ul>
    </div>
  );
};

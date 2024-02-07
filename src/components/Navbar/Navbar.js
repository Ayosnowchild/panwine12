import React from "react";
import { CartIcon, LogoSvg } from "../icons";
import "./navbar.css";
function Navbar() {
  return (
    <div className="nav-main">
      <div className="nav-top">
        <p>Home</p>
        <p>Product</p>
        <p>Support</p>
      </div>
      <div className="nav-bottom">
        <LogoSvg />
        <input type="text" placeholder="Search" />
        <div>
          <div>
            <CartIcon />
          </div>
          <div>
            <button>Login</button>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

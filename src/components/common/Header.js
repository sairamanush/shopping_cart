import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart,FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const naviagtion=useNavigate();
  return (
    <div className="headerContainer">
      <div className="leftSection">
        <div className="title" onClick={()=>naviagtion('/')}>The shopping store</div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              All Products{" "}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="rightSection">
        <div className="title"><FaShoppingCart/></div>
        <div className="title"><FaUser /></div>
      </div>
    </div>
  );
};
export default Header;

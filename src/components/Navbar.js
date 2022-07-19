import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.CartReducer);

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink to="/products" class="nav-link">
                 $WickedSales
              </NavLink>
            </ul>
            <NavLink
              to="/cart"
              className="btn btn-outline-success me-2"
              type="button"
            >
              Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

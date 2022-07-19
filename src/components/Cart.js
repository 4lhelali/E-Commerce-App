import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/action/index";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
 
  const emptyCart = () => {
    return (
      <div className="my-5 bg-light">
        <div className="container py-4">
          <div className="row">
            <h3 style={{ color: "red" }} className="text-center display-6">
              Your Cart is Empty !
            </h3>
          </div>
        </div>
      </div>
    );
  };
  const cartItems = (product) => {
    return (
      <>
        <div className="card_head col-md-4 mt-5 ">
          <div className="card h-100 text-center" key={product.id}>
            <NavLink to={`/cart/${product.id}`}>
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                height="200px"
              />
            </NavLink>
            <div className="card-body">
              <h4 className="card-title mb-0 text-left" style={{color:"blue"}}>{product.title}</h4>
              <br></br>
              <p className="card-text lead text-left fw-bold" style={{color:"green"}}>
                 $ {product.price}
              </p>
              <p className="card-text lead text-left fw-bold">
                {product.description}
              </p>
            </div>
      
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      <div className="container py-4">
        <div className="row justify-content-center">
          {state.length !== 0 && state.map(cartItems)}
          <h3 className="text-center" style={{color:"#193663"}}> Total =  $ {state.reduce((a, c) => a + c.price * c.qty, 0)}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;

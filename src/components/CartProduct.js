import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addItem, removeItem } from "../redux/action/index";


const CartProduct = () => {
  const dispatch = useDispatch();

  const removeProduct = (product) => {
    dispatch(removeItem(product));
  };

  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
    };
    getProduct();
  }, []);


  const ShowData = () => {
    return (
      <>
        <div className="card m-20 ">
          <div className="row  m-20 ">
              
            <div className="col-md-6 m-20  ">

            <NavLink to="/products" className="btn btn-primary">
                Back
              </NavLink>
              <img
                src={product.image}
                alt={product.title}
                className=""
                height="200"
              />
            </div>
            <div className="col-md-4">
              <h1 className="display-6">{product.title}</h1>
              <h3>$ {product.price}</h3>
  
              <button
                className="btn btn-outline-danger "
                onClick={() => removeProduct(product)}
              >
                Remove from Cart
              </button>
            </div>
          </div>


          <p>{product.description}</p>

        </div>
      </>
    );
  };

  return (
    <>
      <div className="container p-20 ">
        <ShowData />
      </div>
    </>
  );
};

export default CartProduct;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/action/index";
import { NavLink } from "react-router-dom";
import { fontFamily, fontWeight } from "@mui/system";


const DescriptionProduct = () => {
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addItem(product));
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
              
            <div className="col-md-8 m-20 ">

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
              <h2 className="display-6">{product.title}</h2>
              <h3>$ {product.price}</h3>
  
              <button
                className="btn btn-outline-success "
                onClick={() => addProduct(product)}
              >
                Add to Cart 
              </button>
            </div>
          </div>
          <br></br>
          <br></br>
          <p style={{color: "#996500" , fontWeight:"bolder"}}>{product.description}</p>

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

export default DescriptionProduct;

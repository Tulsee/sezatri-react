import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="single-product col-lg-3 col-md-6">
      <div className="product-img">
        <img
          className="card-img category-image"
          style={{ height: "18em" }}
          src={product.image}
        />
        <div className="p_icon">
          <Link to="">
            <i className="ti-eye"></i>
          </Link>
          <Link to="">
            <i className="ti-heart"></i>
          </Link>
          <Link style={{ cursor: "pointer" }}>
            <i className="ti-shopping-cart"></i>
          </Link>
        </div>
      </div>
      <div className="product-btm">
        <Link to="" className="d-block">
          <h4>{product.name}</h4>
        </Link>
        <div className="mt-3">
          <span className="mr-4">${product.price}</span>
          <del>$35.00</del>
        </div>
      </div>
    </div>
  );
};

export default Product;

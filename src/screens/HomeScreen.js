import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductCarousel from "../components/ProductCarousel";
import Product from "../components/Product";
import {
  listProducts,
  listTopProducts,
  listLatestProducts,
} from "../actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  const productTopRated = useSelector((state) => state.productTopRated);
  const {
    error: errorTopProducts,
    loading: loadingTopProducts,
    products: topProducts,
  } = productTopRated;

  const productLatest = useSelector((state) => state.productLatest);
  const {
    error: errorLatestProducts,
    loading: loadinglatestProducts,
    products: latestProducts,
  } = productLatest;

  useEffect(() => {
    dispatch(listProducts());
    dispatch(listTopProducts());
    dispatch(listLatestProducts());
  }, [dispatch]);

  return (
    <div>
      <ProductCarousel />
      {/* {latestProducts.map((product) => (
        <h1>{product.name}</h1>
      ))} */}

      {/* <!-- Start feature Area --> */}
      <section className="feature-area section_gap_bottom_custom">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <Link to="/" className="title">
                  <i className="flaticon-money"></i>
                  <h3>Money back gurantee</h3>
                </Link>
                <p>Shall open divide a one</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <Link to="" className="title">
                  <i className="flaticon-truck"></i>
                  <h3>Free Delivery</h3>
                </Link>
                <p>Shall open divide a one</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <Link to="" className="title">
                  <i className="flaticon-support"></i>
                  <h3>Alway support</h3>
                </Link>
                <p>Shall open divide a one</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <Link to="" className="title">
                  <i className="flaticon-blockchain"></i>
                  <h3>Secure payment</h3>
                </Link>
                <p>Shall open divide a one</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new_product_area section_gap_top section_gap_bottom_custom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="main_title">
                <h2>
                  <span>new products</span>
                </h2>
                <p>Bring called seed first of third give itself now ment</p>
              </div>
            </div>
          </div>

          <div className="latest_product_inner">
            <div className="row">
              {latestProducts.map((product) => (
                <Product product={product} key={product._id} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="new_product_area section_gap_top section_gap_bottom_custom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="main_title">
                <h2>
                  <span>Latest Products</span>
                </h2>
                <p>Bring called seed first of third give itself now ment</p>
              </div>
            </div>
          </div>

          <div className="latest_product_inner">
            <div className="row">
              {topProducts.map((product) => (
                <Product product={product} key={product._id} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;

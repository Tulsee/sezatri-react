import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";
import logo from "../logo.png";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header className="header_area">
      <div className="top_menu">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="float-left">
                <p>Phone: +977 986-1872377</p>
                <p>email: sezatriculturalworld@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main_menu">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light w-100">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <a className="navbar-brand logo_h" href="index.html">
              <img src={logo} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div
              className="collapse navbar-collapse offset w-100"
              id="navbarSupportedContent"
            >
              <div className="row w-100 mr-0">
                <div className="col-lg-7 pr-0">
                  <ul className="nav navbar-nav center_nav pull-right">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/product">
                        Product
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-5 pr-0">
                  <ul className="nav navbar-nav navbar-right right_nav pull-right">
                    <li className="nav-item">
                      <a href="#" className="icons">
                        <i className="ti-shopping-cart"></i> View Cart
                      </a>
                    </li>

                    {userInfo ? (
                      <li className="nav-item submenu dropdown">
                        <i className="ti-user ml-2 mr-2" aria-hidden="true"></i>
                        <Link
                          to="/profile"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {userInfo.name}
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link to="/profile" className="nav-link">
                              Profile
                            </Link>
                          </li>
                          <li className="nav-item">
                            <p
                              className="nav-link"
                              onClick={logoutHandler}
                              style={{ cursor: "pointer" }}
                            >
                              Logout
                            </p>
                          </li>
                        </ul>
                      </li>
                    ) : (
                      <li className="nav-item">
                        <Link to="/login" className="icons">
                          <i className="ti-user" aria-hidden="true"></i> Login
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

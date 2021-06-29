import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { login } from "../actions/userActions";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card">
                <div className="card-header ">
                  <h4>
                    <i className="fa fa-sign-in"></i> Login
                  </h4>
                </div>
                <div className="card-body">
                  {error && <Message variant="danger">{error}</Message>}
                  {loading && <Loader />}
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <label for="email">Email Address</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>

                    <input
                      type="submit"
                      className="btn btn-success btn-block"
                    />
                  </form>
                  <br />
                  <h5>
                    Need to create account?
                    <Link
                      to={
                        redirect
                          ? `/register?redirect=${redirect}`
                          : `/register`
                      }
                      style={{ cursor: "pointer", color: "#fc03c2" }}
                    >
                      Register here
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginScreen;

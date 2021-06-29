import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { register } from "../actions/userActions";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage(" Password and Confirm Password do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };
  return (
    <div>
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mx-auto">
              <div class="card">
                <div class="card-header">
                  <h4>
                    <i class="fa fa-user-plus"></i> Register
                  </h4>
                </div>
                <div class="card-body">
                  {message && <Message variant="danger">{message}</Message>}
                  {error && <Message variant="danger">{error}</Message>}
                  {loading && <Loader />}
                  <form onSubmit={submitHandler}>
                    <div class="form-group">
                      <label for="name">Name</label>
                      <input
                        type="text"
                        placeholder="Enter your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        class="form-control"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="email">Email Address</label>
                      <input
                        type="email"
                        placeholder="Enter your Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        placeholder="Enter  password"
                        class="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="passwordConfirm">Confirm Password</label>
                      <input
                        type="password"
                        placeholder="Enter Confirm password"
                        class="form-control"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>

                    <input type="submit" class="btn btn-success btn-block" />
                  </form>
                  <hr />
                  <h5>
                    Already have an account?
                    <Link
                      to={redirect ? `/login?redirect=${redirect}` : `/login`}
                      style={{ color: "#fc03c2" }}
                    >
                      Login Now
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

export default RegisterScreen;

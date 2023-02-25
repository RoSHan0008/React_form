import React, { useState } from "react";
import Button from "../Element/Button";
import { useNavigate } from "react-router-dom";
import "./style.css";
const INITIAL_USER = { Name: "", Email: "", Password: "" };
const Signin = () => {
  const [userAccount, setUserAccount] = useState(INITIAL_USER);

  let navigate = useNavigate();
  const handleInputChange = ({ target: { name, value } }) => {
    setUserAccount({ ...userAccount, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const UserAcc = JSON.parse(localStorage.getItem("Account") || "[]");
    localStorage.setItem("Account", JSON.stringify([...UserAcc, userAccount]));
    navigate("/Login");
  };

  return (
    <div className="login-container">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={setUserAccount.Name}
            name="Name"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="Email"
            name="Email"
            value={setUserAccount.Email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="Password"
            name="Password"
            value={setUserAccount.Password}
            onChange={handleInputChange}
          />
        </div>
        <Button Name="Sign In"></Button>
      </form>
    </div>
  );
};

export default Signin;

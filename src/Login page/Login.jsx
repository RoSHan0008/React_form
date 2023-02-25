import React, { useState } from 'react';
import Button from '../Element/Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Login = () => {
  let navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("Account"));
    

    const user = storedUser.filter(u=> u.Email === Email && u.Password === Password);
    if (user){
      console.log(user)
      toast.success("login success")
      navigate("/EmployeeList")
    }else{
      toast.error("Invalid Email or Password")
    }
  }

  return (

    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label >Email</label>
          <input
            type="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
        </div>
        <Button Name = "Login"></Button>
      </form>
    </div>
  );
};

export default Login;

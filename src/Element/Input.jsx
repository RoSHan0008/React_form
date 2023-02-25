import React from 'react';

const Input = ({ type, label, placeholder, value, handler,name ,error}) => {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
            <input type={type} value={value} name={name}  onChange={handler} placeholder={placeholder}></input>
            {error && <p style={{color : "red"}}>{error}</p>}
    </div>
  );
};

export default Input;

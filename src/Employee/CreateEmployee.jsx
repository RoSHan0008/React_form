import React, { useState } from 'react';
import Input from '../Element/Input';
import Dropdown from '../Element/Dropdown';
import Gender from '../Element/Gender';
import { useNavigate } from 'react-router-dom';
import { useValidate } from '../Validation/Validate';
const INITIAL_USER_Info = {
  UniqueId: "",
  Image: "",
  Name: "",
  Email: "",
  Mobile: "",
  Designation: "",
  Gender: "",
  Course: "",
  Date: "",
};


const CreateEmployee = () => {
  let navigate = useNavigate();
  const [userInfo, setuserInfo] = useState(INITIAL_USER_Info);
  const validate = useValidate(Object.keys(INITIAL_USER_Info));
  const [errors,setErrors] = useState({});

const onUserEnterInput=({ target: { name, value } })=>{
  setuserInfo({ ...userInfo, [name]: value });
  setErrors(validate(userInfo));

}
  const handleSubmit = (event) => {
    event.preventDefault();
    const Employees = JSON.parse(localStorage.getItem('Employees') || '[]');
    localStorage.setItem('Employees', JSON.stringify([...Employees, userInfo]));
    setuserInfo(INITIAL_USER_Info)
    navigate("/EmployeeList")
  };

  return (
   <div className='form_con'>
     <form onSubmit={handleSubmit} className="form">
      
      <Input
        type="text"
        label="Name"
        error={errors.Name}
        name="Name"
        placeholder="Enter Name"
        handler={onUserEnterInput}
        value={userInfo.Name}
      />
      <Input
        type="email"
        label="Email"
        error={errors.Email}
        name="Email"
        placeholder="Enter Email"
        handler={onUserEnterInput}
        value={userInfo.Email}
      />
      <Input
        type="number"
        label="Mobile"
        name="Mobile"
        error={errors.Mobile}

        placeholder="Enter Phone No."
        handler={onUserEnterInput}
        value={userInfo.Mobile}
      />
      <Dropdown
      label="Designation"
      value={userInfo.Designation}
      name="Designation"
      id="Designation"
      handler={onUserEnterInput}
      opt={["Managing Director", "HR", "Directors", "CEO", "Chief Executive"]}
      />
        
     <Gender
     label="Gender"
     value={userInfo.Gender}
     name="Gender"
     ></Gender>
      <Input
        type="text"
        label="Course"
        placeholder="Enter Course"
        name="Course"
        handler={onUserEnterInput}
        value={userInfo.Course}
      />
      <Input
        type="text"
        label="Image"
        name="Image"
        placeholder="Enter Image URL"
        handler={onUserEnterInput}
        value={userInfo.Image}
      />
      <button  className='button' type="submit">Submit</button>
    </form>
   </div>
  );
};

export default CreateEmployee;

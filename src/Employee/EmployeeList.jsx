import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Input from '../Element/Input';
import Dropdown from '../Element/Dropdown';
import Gender from '../Element/Gender';
import "./style.css"
import Search from './Search'
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

const EmployeeList = () => {

  const [User, setUser] = useState(JSON.parse(localStorage.getItem('Employees') || '[]'));
  const [userInfo, setuserInfo] = useState(INITIAL_USER_Info);
  const [isEditing, setIsEditing] = useState(false);
  const [userindex, setuserindex] = useState();
  const handleDelete = (index) => {
    const newUser = [...User];
    newUser.splice(index, 1);
    setUser(newUser);
    localStorage.setItem('Employees', JSON.stringify(newUser));
  };
  


  
  const onUserEnterInput = (event) => {
    const { name, value } = event.target;
    setuserInfo({ ...userInfo, [name]: value });
  };
 
  const handleEdit= (index)=>{
    setuserindex(index)
    setIsEditing(true)
    setuserInfo(User[index])


  }
  const handleSave = () => {
    const newUser = [...User];
    newUser.splice(userindex, 1);
    setUser(newUser);
    localStorage.setItem('Employees', JSON.stringify([...newUser, userInfo]));

  
  };
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('Employees'));
    if (storedData) {
      setuserInfo(storedData);
    }
  }, [User]);
  return (
    <div className='Employee' >
      <div className='Employee_menu' >
      <div>Employees List</div>
      <div><Search></Search></div>
      <div className='CreateEmployee'><Link to="./CreateEmployee">Create Employee</Link></div>
    </div>
    {
      isEditing &&(
        <div className='form_con'>
        <form className="form" onSubmit={handleSave} >
         
         <Input
           type="text"
           label="Name"
           name="Name"
           placeholder="Enter Name"
           handler={onUserEnterInput}
           value={userInfo.Name}
         />
         <Input
           type="email"
           label="Email"
           name="Email"
           placeholder="Enter Email"
           handler={onUserEnterInput}
           value={userInfo.Email}
         />
         <Input
           type="number"
           label="Mobile"
           name="Mobile"
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
         <button className='button' >Save</button>
       </form>
      </div>
      )
    }
    <div>
        <table>
          <thead>
            <tr>
              <td>Unique Id</td>
              <td>Image</td>
              <td>Name</td>
              <td>Email</td>
              <td>Mobile No.</td>
              <td>Designation</td>
              <td>Gender</td>
              <td>Course</td>
              <td>Create Date</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
          {User.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.Image}</td>
            <td>{item.Name}</td>
            <td>{item.Email}</td>
            <td>{item.Mobile}</td>
            <td>{item.Designation}</td>
            <td>{item.Gender}</td>
            <td>{item.Course}</td>
            <td></td>

            <td>
            <button className='button' onClick={() => handleEdit(index)}>Edit</button>
              <button className='button' onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
          ))}
          </tbody>
        </table>
      

    </div>
    </div>
  )
}

export default EmployeeList

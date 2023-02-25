import Home from "./Component/Home";
import EmployeeList from "./Employee/EmployeeList"
import Header from "./Component/Header";
import Login from "./Login page/Login";
import Signin from "./Login page/Signin";
import CreateEmployee from "./Employee/CreateEmployee"
import { Route,Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
function App() {
  return (
    <div >
    <Header></Header>
    <ToastContainer/>
     <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/EmployeeList" element={<EmployeeList/>}></Route>
     <Route path="/Login" element={<Login/>}></Route>
     <Route path="/Signin" element={<Signin/>}></Route>
     <Route path="/EmployeeList/CreateEmployee" element={<CreateEmployee/>}></Route>
      
     </Routes>

    </div>
  );
}

export default App;

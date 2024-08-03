import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./LogInDashBoardEmployee.css";
import { FaUserPlus, FaUserTie } from "react-icons/fa";
import axios from 'axios';


const LogInDashBoardEmployee = () => {
  const [employeeDp, setEmployeeDp] = useState();
  const [employeeData, setEmployeeData] = useState({
    NameOrEmail: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://officealhajandalumrah.adaptable.app/employee');
        setEmployeeDp(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleChangeEmployeeData = (e) => {
    const { name, value, files } = e.target;
    setEmployeeData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    const foundEmployee = employeeDp.find(employee => 
      (employee.email === employeeData.NameOrEmail || employee.firstname === employeeData.NameOrEmail) &&
      employee.password === employeeData.password
    );

      if (foundEmployee) {
  
      navigate("/DashBoardEmployee/DashBoardEmployee");
    } else {
      setErrorMessage("كلمة المرور خاطئة أو البريد الإلكتروني خاطئ");
    }
  };

  return (
    <div className="login-dash-board">
      <div className="form-box">
        <div className="register-continer" id="rejister">
          <div className="top">
            <span></span>
            <i>
              <FaUserPlus />
            </i>
            <h1>تسجيل الدخول</h1>
          </div>
          <div className="two-forms">
            <div className="inputBox">
              <input
                type="email"
                name="NameOrEmail"
                value={employeeData.NameOrEmail}
                className="input-filed"
                placeholder="البريد الالكتروني او اسم المستخدم"
                onChange={handleChangeEmployeeData}
              />
            </div>
            <div className="inputBox">
              <input
                type="password"
                name="password"
                value={employeeData.password}
                className="input-filed"
                placeholder="كلمة السر"
                onChange={handleChangeEmployeeData}
              />
            </div>
            <div className="inputBox">
              <button className="submit" onClick={handleLogin}>تسجيل الدخول</button>
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div className="two-col">
              <div className="one">
                <input type="checkbox" id="register-check" />
                <label htmlFor="register-check">remember me</label>
              </div>
              <div className="two">
                <label>
                  <a href="#">terms & condition</a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
      
export default LogInDashBoardEmployee;

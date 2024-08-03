import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./LogInDashBoardManager.css";
import { FaUserPlus } from "react-icons/fa";
import axios from 'axios';

const LogInDashBoardManager = () => {
  const [officeDp, setOfficeDp] = useState();
  const [officeData, setOfficeData] = useState({
    NameOrEmail: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://officealhajandalumrah.adaptable.app/office');
        setOfficeDp(response.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleChangeofficeData = (e) => {
    const { name, value, files } = e.target;
    setOfficeData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (officeData.NameOrEmail === officeDp?.email && officeData.password === officeDp?.password) {
  
      navigate("/DashBoardManager/DashBoardManager");
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
                value={officeData.NameOrEmail}
                className="input-filed"
                placeholder="البريد الالكتروني او اسم المستخدم"
                onChange={handleChangeofficeData}
              />
            </div>
            <div className="inputBox">
              <input
                type="password"
                name="password"
                value={officeData.password}
                className="input-filed"
                placeholder="كلمة السر"
                onChange={handleChangeofficeData}
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

export default LogInDashBoardManager;

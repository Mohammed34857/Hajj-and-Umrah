import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LogInDashBoard.css";
import { FaUserPlus, FaUserTie } from "react-icons/fa";

const LogInDashBoard = () => {
  useEffect(() => {
    const loginBtn = document.getElementById("loginbtn");
    const signUpBtn = document.getElementById("sign-btn");
    const registerContainer = document.getElementById("rejister");
    const loginContainer = document.getElementById("login");

    const login = () => {   
      registerContainer.style.opacity = 0;
      loginContainer.style.opacity = 1;
    };

    const register = () => {
      registerContainer.style.opacity = 1;
      loginContainer.style.opacity = 0;
    };

    loginBtn.addEventListener("click", login);
    signUpBtn.addEventListener("click", register);

   
  }, []);

  return (
    <div className="login-dash-board">
      <div className="btn-sign">
        <button className="sign sign-in whit-sign" id="loginbtn">
          sign-in
        </button>
        <button className="sign sign-up" id="sign-btn">
          sign-up
        </button>
      </div>

      <div className="form-box">
        {/* login */}
        <div className="login-continer" id="login">
          <div className="top">
            <span>
            
            </span>
            <i>
              <FaUserTie />
            </i>
            <h1>تسجيل الدخول</h1>
          </div>
          <div className="two-forms">
            <div className="input-box">
              <input type="email" className="input-filed" placeholder="البريد الالكتروني او اسم المستخدم" />
            </div>
            <div className="input-box">
              <input type="password" className="input-filed" placeholder="كلمة السر" />
            </div>
            <div className="input-box">
              <input type="submit" className="submit" value="تسجيل الدخول" />
            </div>
            <div className="two-col">
              <div className="one">
                <input type="checkbox" id="login-check" />
                <label htmlFor="login-check">remember me</label>
              </div>
              <div className="two">
                <label>
                  <a href="#">forgot password?</a>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* register */}
        <div className="register-continer" id="rejister">
          <div className="top">
            <span>
            
            </span>
            <i>
              <FaUserPlus />
            </i>
            <h1>انشاء حساب</h1>
          </div>
          <div className="two-forms">
            <div className="input-box">
              <input type="text" className="input-filed" placeholder="الاسم الاول" />
            </div>
            <div className="input-box">
              <input type="text" className="input-filed" placeholder="الاسم الاخير" />
            </div>
            <div className="input-box">
              <input type="email" className="input-filed" placeholder="البريد الالكتروني" />
            </div>
            <div className="input-box">
              <input type="password" className="input-filed" placeholder="كلمة السر" />
            </div>
            <div className="input-box">
              <input type="submit" className="submit" value="انشاء حساب" />
            </div>
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

export default LogInDashBoard;

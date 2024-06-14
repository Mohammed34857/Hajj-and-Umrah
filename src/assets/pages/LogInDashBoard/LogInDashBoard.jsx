import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LogInDashBoard.css";
import { FaUserPlus } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
const LogInDashBoard = () => {
  // var a = document.getElementById("loginbtn");
  // var b = document.getElementById("sign-btn");
  // var x = document.getElementById("rejister");
  // var y = document.getElementById("login");

  // function login() {
  //   x.style.left = " 4px ";
  //   y.style.right = " -520px ";
  //   a.className += " whit-sign ";
  //   b.className = " sign-in ";
  //   x.style.opacity = 1;

  //   y.style.opacity = 0;
  // }

  // function registar() {
  //   x.style.left = " -520px ";
  //   y.style.right = " 4px ";
  //   a.className += " whit-sign ";
  //   b.className = " sign-in ";
  //   x.style.opacity = 0;

  //   y.style.opacity = 1;
  // }

  return (
    <div className="login-dash-board">
      <div class="btn-sign">
        <button class="sign  sign-in  whit-sign " id="loginbtn" onclick="{login()}">
          sign-in
        </button>
        <button class="sign  sign-up" id="sign-btn" onclick="{registar()}">
          sign-up
        </button>
      </div>

      <div class="form-box">
{/* login */}
      <div class="login-continer" id="login">
          <div class="top">
            <span>
              <a href="#"  onclick="{registar()}">
            
              </a>
            </span>
            <i><FaUserTie /></i>
            <h1>تسجيل الدخول</h1>
          </div>

          <div class="two-forms">
         
            <div class="input-box">
                <input type="email" class="input-filed" placeholder="البريد الالكتروني او اسم المستخدم"/>
            </div>
            <div class="input-box">

                <input type="password" class="input-filed" placeholder="كلمة السر"    />
                
            </div>
            <div class="input-box">
                <input type="submit" class="submit " value="تسجيل الدخول"/>
            </div>


            <div class="two-col">
                <div class="one">
                    <input type="checkbox" id="login-check"/>
                    <label for="login-check">remember me</label>
                </div>
                <div class="two">
                    <label> <a href="#">forgot password?</a></label>
                </div>
                </div>

                
            </div>



        </div>
        {/* register */}
        <div class="register-continer" id="rejister">
          <div class="top">
            <span>
              <a href="#" onclick="{login()}">
         
              </a>
            </span>
            <i><FaUserPlus /></i>
            <h1>انشاء حساب</h1>
          </div>

          <div class="two-forms">
          <div class="input-box">
                <input type="text" class="input-filed" placeholder="الاسم الاول"/>
            </div>
            <div class="input-box">
                <input type="text" class="input-filed" placeholder="الاسم الاخير"/>
            </div>
            <div class="input-box">
                <input type="email" class="input-filed" placeholder="البريد الالكتروني "/>
            </div>
            <div class="input-box">
                <input type="password" class="input-filed" placeholder="كلمة السر"/>
            </div>
            <div class="input-box">
                <input type="submit" class="submit " value="انشاء حساب"/>
            </div>


            <div class="two-col">
                <div class="one">
                    <input type="checkbox" id="register-check"/>
                    <label for="register-check">remember me</label>
                </div>
                <div class="two">
                    <label> <a href="#">terms & condition</a></label>
                </div>
                </div>


            </div>





        </div>
      </div>
    </div>
  );
};

export default LogInDashBoard;

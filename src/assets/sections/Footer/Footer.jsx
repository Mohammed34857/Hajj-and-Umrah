import "./Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddIcCall ,MdOutlineAlternateEmail } from "react-icons/md";
import React, { useEffect, useState } from "react";
import axios from 'axios';

function Footer() {

  const [office,setOffice]=useState([]);
  console.log(office)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://officealhajandalumrah.adaptable.app/office');
        setOffice(response.data[0]);
     
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <footer>
      <div className="parent">
        <div className="addres">
          <h2> عنوان</h2>
          <ul>
            <li>  <FaLocationDot /> <span> {office.address} </span></li>
            <li><MdAddIcCall/><span>اتصال +963{office.phone}</span></li>
            <li><MdOutlineAlternateEmail/><span>{office.email}</span></li>
          </ul>
        </div>
        <div className="info">
          <h2>معلومات</h2>
          <p>من خلال خدماتنا المتميزة ومجموعة من المرشيدين الدينيين  <br />
          نقدم لكم خيارات متعددة لبرنامج زيارة الحرمين الشريفين
            <br />
       بأفضل الاسعار وبتفاصيل مميزة 
          </p>
          <h2>نوع الحساب</h2><p>حساب جاري </p>
          <h2>رقم الحساب</h2><p>6-760-210101-205023-0</p>
        </div>
        <div className="links">
          <h2>روابط</h2>
          <ul className="ul-two">
            <li>
              <a href="#">الرئيسية</a>
            </li>
            <li>
              <a href="#">برامج الحج</a>
            </li>
            <li>
              <a href="#UmrahPrograms">برامج العمرة</a>
            </li>
            <li>
              <a href="#hotel">الفنادق</a>
            </li>
            <li>
              <a href="#">النقل</a>
            </li>
          </ul>
        </div>
        <div className="subscribe">
          <h2>تواصل معنا </h2>
          <input type="email" placeholder="enter email" />
          <br />
          <div className="line"></div>
          <button>subscribe</button>
        </div>
      </div>
      
      <div>
        <div className="row">
          <div className="col-lg-12">
            <p className="p-2">
           
              حقوق النشر © 2024 شركة <a href="">اجنحة الضيافة للحج</a> . كل الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

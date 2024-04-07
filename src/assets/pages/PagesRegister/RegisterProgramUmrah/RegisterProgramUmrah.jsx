import React from 'react'
import './RegisterProgramUmrah.css'
import { FaPencilAlt , FaBook , FaBed } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { GiCash } from "react-icons/gi";


const RegisterProgramUmrah=() => {
  return (
    <div className='register-program-umrah'>
      <div className="container">
        <form action="post">
        <h1 className="hellow">انضم إلى قافلة عباد الرحمن في برنامج العمرة </h1>
        <h2 className="title-program">3/6/1445 عمرة البر </h2>

        <div className="register">
            <h3> :التسجيل <FaPencilAlt/></h3>

            <div className="chiled-register">
                <div className="name">

                    <input type="text" required placeholder="أدخل الأسم"/>
                    <label for="" className="name"> :الاسم</label>
                </div>
                <div className="emal">

                    <input type="email" placeholder="ادخل البريد الالكتروني"/>
                    <label for=""> :البريد الالكتروني</label>
                </div>
                <div className="phon">

                    <input type="number" placeholder="ادخل رقم الهاتف"/>
                    <label for=""> :رقم الهاتف</label>
                </div>
            </div>
        </div>

        <div className="paperwork">
            <h3> :الاوراق المطلوبة <FaBook/></h3>
            <div className="chiled-paper">
                
                <div className="phpto">
                    <input type="file" />
                    <label for=""> :الصورة الشخصية</label>
                </div>
                <div className="passport">
                    <input type="file" />
                    <label for=""> :ادخل صورة جواز السفر</label>
                </div>
            </div>
        </div>
        <div className="booking">
            <select name="" id="">
                <option value="" hidden>رقم الرحلة</option>
                <option value="numper-program">
                    رقم المقعد
                </option>
            </select>
            <h3>: احجز مقعدك في الحافلة <MdAirlineSeatReclineExtra/></h3>

        </div>

        <div className="room">
            <h3> :اختر غرفتك من الفندق <FaBed /></h3>
            <div className="chiled-room">
                <div className="one">
                    سعر البرنامج للغرفة الاحادية $200<input type="radio" name="room" id="" />

                </div>
                <div className="two ">

                    سعر البرنامج للغرفة الثنائية $150 <input type="radio" name="room" id="" />
                </div>
                <div className="three">
                    سعر البرنامج للغرفة الثلاثية$ 100 <input type="radio" name="room" id="" />

                </div>
            </div>
        </div>

        <div className="paying">
            <h3> :طريقة الدفع <GiCash/></h3>
            <div className="chiled-paying">
                <div className="electronic">
                    الدفع الالكتروني <input type="radio" name="pay" />
                </div>
                <div className="cash">
                    الدفع كاش <input type="radio" name="pay" />

                </div>
            </div>
        </div>

        <button className='send2'>احجز</button>
        </form>
     </div>
    </div>
  )
}

export default RegisterProgramUmrah
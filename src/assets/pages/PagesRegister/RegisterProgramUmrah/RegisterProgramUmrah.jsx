import React, { useEffect , useState} from 'react'
import './RegisterProgramUmrah.css'
import { FaPencilAlt , FaBook , FaBed } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { GiCash } from "react-icons/gi";


const RegisterProgramUmrah=() => {

    useEffect(() => {
        const handleFileChange = (inputId, outputPathId) => {
            return () => {
                document.getElementById(outputPathId).textContent = '';
                const filePath = document.getElementById(inputId).files[0].name;
                document.getElementById(outputPathId).textContent = filePath;
            };
        };
    
        const fileInputs = [
            { inputId: 'file-img', outputPathId: 'file-path' },
            { inputId: 'passport', outputPathId: 'passport-path' }
        ];
    
        fileInputs.forEach(({ inputId, outputPathId }) => {
            const handleChange = handleFileChange(inputId, outputPathId);
            document.getElementById(inputId).addEventListener('change', handleChange);
            return () => {
                document.getElementById(inputId).removeEventListener('change', handleChange);
            };
        });
    }, []);



  return (
    <div className='register-program-umrah'>
      <div className="container">
        <form action="post">
        <h1 className="hellow">انضم إلى قافلة عباد الرحمن في برنامج العمرة </h1>
        <h2 className="title-program">3/6/1445 عمرة البر </h2>

        <div className="register">
            <h3> :التسجيل <FaPencilAlt/></h3>

            {/* <div className="chiled-register">
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
            </div> */}
            <table className='table1'>
                <tbody>
                <tr>
                    <th><input type="text" name='name' required placeholder=" أدخل الأسم "/></th>
                    <th><label> : الاسم</label></th>
                </tr>
                <tr>
                    <th><input type="email" name='email' placeholder=" ادخل البريد الالكتروني "/></th>
                    <th><label> : البريد الالكتروني</label></th>
                </tr>
                <tr>
                    <th><input type="number" name='phone' placeholder=" ادخل رقم الهاتف "/></th>
                    <th><label> : رقم الهاتف</label></th>
                </tr>  
                </tbody>  
              </table>
              <div className='end-float'></div>
        </div>

        <div className="paperwork">
            <h3> :الاوراق المطلوبة <FaBook/></h3>
            <div className="child-paper">
             <table className='table2'>
               <tbody>
                <tr>
                    <th>
                         <div className='path' id='file-path'> لم يتم اختيار ملف 
                         </div>
                         <label className='label-file' htmlFor="file-img"><span>اختر ملف</span></label>
                         <input id='file-img' name='image' type="file" />
                    </th>
                    <th><label> : الصورة الشخصية</label></th>
                </tr>
                <tr>
                    <th>
                        <div className='path' id='passport-path'> لم يتم اختيار ملف  </div>
                        <label className='label-file' htmlFor="passport">اختر ملف</label>
                        <input id='passport' name='passport' type="file" />
                    </th>
                    <th><label> : ادخل صورة جواز السفر</label></th>
                </tr> 
               </tbody> 
            </table>
              </div>
              <div className='end-float'></div>
            </div>
            <h3>: احجز مقعدك في الحافلة <MdAirlineSeatReclineExtra/></h3>

        <div className="booking">
            <select name="" id="">
                <option value="" hidden>رقم الرحلة</option>
                <option value="numper-program">
                    رقم المقعد
                </option>
            </select>
        </div>

        <div className="room">
            <h3> :اختر غرفتك من الفندق <FaBed /></h3>
            <div className="radio-room">
                    <label className="radio-container"><input type="radio" name="roomPrice" value={200} />
                    <span className="checkmark"></span>
                    سعر البرنامج للغرفة الاحادية $200 
                    </label>
                    <label className="radio-container"><input type="radio" name="roomPrice" value={150} />
                    <span className="checkmark"></span>
                    سعر البرنامج للغرفة الثنائية $150 
                    </label>
                    <label className="radio-container"><input type="radio" name="roomPrice" value={100} />
                    <span className="checkmark"></span>
                    سعر البرنامج للغرفة الثلاثية$ 100 
                    </label>
            </div>
          
        </div>

        <div className="paying-off">
            <h3> : طريقة الدفع <GiCash/></h3>
            <div className="paying">
                    <label className="radio-container"><input type="radio" name="paying" value={"electronic"} />
                    <span className="checkmark"></span>
                    الالكتروني
                    </label>
                    <label className="radio-container"><input type="radio" name="paying" value={"cash"} />
                    <span className="checkmark"></span>
                     الدفع كاش 
                    </label>
            </div>
          </div>
          <div className='order-send'>
            <button >ارسال الطلب</button>
         </div>
        </form>
     </div>
    </div>
  )
}

export default RegisterProgramUmrah
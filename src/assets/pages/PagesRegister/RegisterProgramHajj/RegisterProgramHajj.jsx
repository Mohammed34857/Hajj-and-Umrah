import React, {  useState} from 'react'
import './RegisterProgramHajj.css'
import { FaPencilAlt, FaHotel  } from "react-icons/fa";
import { MdEmojiTransportation , MdOutlineHealthAndSafety , MdOutlineAirplanemodeActive } from "react-icons/md";

const RegisterProgramHajj = () => {


  const [BirthDateAmenities, setBirthDateAmenities] = useState('');
  const [errorAmenities, setErrorAmenities] = useState('');
  


  const [birthdate, setBirthdate] = useState('');
  const [error, setError] = useState('');

  function validateAge(e) {
    e.preventDefault();

    const currentDate = new Date();

    const selectedDate = new Date(birthdate);
    const age = currentDate.getFullYear() - selectedDate.getFullYear();
    if (age < 64) {
      setError("يجب أن يكون عمرك 64 عامًا أو أكثر.");
      return;
    }
    setError(''); 

    const selectedAmenitiesDate = new Date(BirthDateAmenities);
    const AmenitiesAge = currentDate.getFullYear() - selectedAmenitiesDate.getFullYear();
    if (AmenitiesAge < 18) {
      setErrorAmenities("يجب أن يكون عمر المرافق 18 عامًا أو أكثر.");
      return;
    }
    setErrorAmenities(''); 
  }
 

    const [selectedHealthState, setSelectedHealthState] = useState(null);
    const handleHealthStateChange = (HealthState) => {
        setSelectedHealthState(HealthState);
    };

    
  return (
    <div className='register-program-hajj'>
      <form action="post" onSubmit={validateAge}>
        <div className="container">
           <h1> انضم إلى قافلة عباد الرحمن في برنامج الحج </h1>
            <div className="hajj-register">
               <h3> :التسجيل <FaPencilAlt/></h3>
              <table className='table1'>
                <tbody>
                <tr>
                    <th><input type="text" name='name'  required placeholder=" أدخل الأسم "/></th>
                    <th><label> : الاسم</label></th>
                </tr>
                <tr>
                    <th><input type="email" name='email'  placeholder=" ادخل البريد الالكتروني "/></th>
                    <th><label> : البريد الالكتروني</label></th>
                </tr>
                <tr>
                    <th><input type="number" name='phone'  placeholder=" ادخل رقم الهاتف "/></th>
                    <th><label> : رقم الهاتف</label></th>
                </tr>  
                <tr>
                    <th><input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} placeholder=" ادخل  تاريخ ميلادك "/></th>
                    <th><label> :  تاريخ الميلاد</label></th>
                </tr> 
                <tr>
                    <td colSpan="2">{error && <span style={{ color: '#fff' }}>{error}</span>}</td>
                </tr>
                </tbody>  
              </table>
              <div className='end-float'></div>
          </div>

          <div className="health-status">
              <h3> :  الحالة الصحية <MdOutlineHealthAndSafety /></h3>
               <div className='health'>
                 <label className="radio-container" onClick={()=>handleHealthStateChange("good")}><input type="radio" name="HealthStatus" value={"good"} />
                    <span className="checkmark"></span>
                     جيدة 
                    </label>
                     <label className="radio-container" onClick={()=>handleHealthStateChange("helpless")}><input type="radio" name="HealthStatus" value={"helpless"} />
                    <span className="checkmark"></span>
                      عاجز 
                    </label>
                </div>
                <div className='amenities'>
                {selectedHealthState === 'good' && (
                    <div className='good-container'>
                         <table className='table1'>
                            <tbody>
                            <tr>
                                <td colSpan="2"><h2> ادخل معلومات المرافق  </h2></td>
                            </tr>
                            <tr>
                                <th><input type="text" name='amenitiesName'   required placeholder=" أدخل الأسم "/></th>
                                <th><label> : الاسم</label></th>
                            </tr>
                            <tr>
                                <th><input type="email" name='amenitiesEmail'  placeholder=" ادخل البريد الالكتروني "/></th>
                                <th><label> : البريد الالكتروني</label></th>
                            </tr>
                            <tr>
                                <th><input type="number" name='amenitiesPhone'  placeholder=" ادخل رقم الهاتف "/></th>
                                <th><label> : رقم الهاتف</label></th>
                            </tr>  
                            <tr>
                                <th><input type="date" value={BirthDateAmenities} onChange={(e) => setBirthDateAmenities(e.target.value)} placeholder=" ادخل  تاريخ ميلادك "/></th>
                                <th><label> :  تاريخ الميلاد</label></th>
                            </tr> 
                            <tr>
                                <td colSpan="2">{errorAmenities && <span style={{ color: '#fff' }}>{ErrorAmenities}</span>}</td>
                            </tr>
                            <tr>
                                <th><input type="text" name='relativeRelation'  placeholder=" أدخل صلة القرابة "/></th>
                                <th><label> : صلة القرابة</label></th>
                            </tr>
                            <tr>
                                <th>
                                   <div className='path' id='file-path'> لم يتم اختيار ملف   </div>
                                   <label className='label-file' htmlFor="file-img"><span>اختر ملف</span></label>
                                   <input id='file-img' name='amenitiesImage' type="file" />
                                 </th>
                                 <th><label> : الصورة الشخصية</label></th>
                            </tr>
                            <tr>
                                 <th>
                                     <div className='path' id='passport-path'> لم يتم اختيار ملف  </div>
                                     <label className='label-file' htmlFor="passport">اختر ملف</label>
                                     <input id='passport' name='amenitiesPassport' type="file" />
                                 </th>
                                <th><label> : ادخل صورة جواز السفر</label></th>
                           </tr>                       
                            </tbody>  
                          </table>
                    </div>
                )}
                {selectedHealthState === 'helpless' && (
                    <div className='helpless-container'>
                         <table className='table1'>
                            <tbody>
                            <tr>
                                <td colSpan="2"><h2> ادخل معلومات المرافق الاول </h2></td>
                            </tr>
                            <tr>
                                <th><input type="text" name='amenitiesName'  required placeholder=" أدخل الأسم "/></th>
                                <th><label> : الاسم</label></th>
                            </tr>
                            <tr>
                                <th><input type="email" name='amenitiesEmail'  placeholder=" ادخل البريد الالكتروني "/></th>
                                <th><label> : البريد الالكتروني</label></th>
                            </tr>
                            <tr>
                                <th><input type="number" name='amenitiesPhone'   placeholder=" ادخل رقم الهاتف "/></th>
                                <th><label> : رقم الهاتف</label></th>
                            </tr>  
                            <tr>
                                <th><input type="date" value={BirthDateAmenities} onChange={(e) => setBirthDateAmenities(e.target.value)} placeholder=" ادخل  تاريخ ميلادك "/></th>
                                <th><label> :  تاريخ الميلاد</label></th>
                            </tr> 
                            <tr>
                                <td colSpan="2">{errorAmenities && <span style={{ color: '#fff' }}>{ErrorAmenities}</span>}</td>
                            </tr>
                            <tr>
                                <th><input type="text" name='relativeRelation'  placeholder=" أدخل صلة القرابة "/></th>
                                <th><label> : صلة القرابة</label></th>
                            </tr>
                            <tr>
                                <th>
                                   <div className='path' id='file-path'> لم يتم اختيار ملف   </div>
                                   <label className='label-file' htmlFor="file-img"><span>اختر ملف</span></label>
                                   <input id='file-img' name='amenitiesImage' type="file" />
                                 </th>
                                 <th><label> : الصورة الشخصية</label></th>
                            </tr>
                            <tr>
                                 <th>
                                     <div className='path' id='passport-path'> لم يتم اختيار ملف  </div>
                                     <label className='label-file' htmlFor="passport">اختر ملف</label>
                                     <input id='passport' name='amenitiesPassport' type="file" />
                                 </th>
                                <th><label> : ادخل صورة جواز السفر</label></th>
                           </tr>
                            <tr>
                                <td colSpan="2"><h2> ادخل معلومات المرافق الثاني </h2></td>
                            </tr>
                            <tr>
                                <th><input type="text" name='amenitiesName2'  required placeholder=" أدخل الأسم "/></th>
                                <th><label> : الاسم</label></th>
                            </tr>
                            <tr>
                                <th><input type="email" name='amenitiesEmail2'  placeholder=" ادخل البريد الالكتروني "/></th>
                                <th><label> : البريد الالكتروني</label></th>
                            </tr>
                            <tr>
                                <th><input type="number" name='amenitiesPhone2'  placeholder=" ادخل رقم الهاتف "/></th>
                                <th><label> : رقم الهاتف</label></th>
                            </tr>  
                            <tr>
                                <th><input type="date" value={BirthDateAmenities} onChange={(e) => setBirthDateAmenities(e.target.value)} placeholder=" ادخل  تاريخ ميلادك "/></th>
                                <th><label> :  تاريخ الميلاد</label></th>
                            </tr> 
                            <tr>
                                <td colSpan="2">{errorAmenities && <span style={{ color: '#fff' }}>{ErrorAmenities}</span>}</td>
                            </tr>
                            <tr>
                                <th><input type="text" name='relativeRelation2'  placeholder=" أدخل صلة القرابة "/></th>
                                <th><label> : صلة القرابة</label></th>
                            </tr>
                            <tr>
                                <th>
                                   <div className='path' id='file-path'> لم يتم اختيار ملف   </div>
                                   <label className='label-file' htmlFor="file-img"><span>اختر ملف</span></label>
                                   <input id='file-img' name='amenitiesimage2' type="file" />
                                 </th>
                                 <th><label> : الصورة الشخصية</label></th>
                            </tr>
                            <tr>
                                 <th>
                                     <div className='path' id='passport-path'> لم يتم اختيار ملف  </div>
                                     <label className='label-file' htmlFor="passport">اختر ملف</label>
                                     <input id='passport' name='amenitiesPassport' type="file" />
                                 </th>
                                <th><label> : ادخل صورة جواز السفر</label></th>
                           </tr>
                            </tbody>  
                          </table>
                         </div>
                )}
             
                </div>  
              <div className='end-float'></div>
            </div>

          <div className="seat-on-plane">
            <h3> : احجز مقعدك من الطائرة <MdOutlineAirplanemodeActive/></h3>
            <div className="radio-room">
                    <label className="radio-container" ><input type="radio" name="seatNumber" value={1} />
                    <span className="checkmark"></span>
                    مقعد
                    </label>
                    <label className="radio-container"><input type="radio" name="seatNumber" value={2} />
                    <span className="checkmark"></span>
                     مقعدين
                    </label>
                    <label className="radio-container"><input type="radio" name="seatNumber" value={3} />
                    <span className="checkmark"></span>
                     ثلاث مقاعد
                    </label>
            </div>
          </div>
    
          <div className="selecthotel">
            <h3>   : اختر عدد الغرف  <FaHotel /> </h3>
            <div className="radio-room">
                    <label className="radio-container"><input type="radio" name="roomNumber" value={1} />
                    <span className="checkmark"></span>
                    غرفة ثنائية
                    </label>
                    <label className="radio-container"><input type="radio" name="roomNumber" value={2} />
                    <span className="checkmark"></span>
                     غرفة ثلاثية 
                    </label>
                    <label className="radio-container"><input type="radio" name="roomNumber" value={3} />
                    <span className="checkmark"></span>
                     غرفة رباعية 
                    </label>
            </div>
          </div>

          <div className="paying-off">
            <h3> : طريقة الدفع <MdEmojiTransportation/></h3>
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
        </div>
     </form>
    </div>
  )
}

export default RegisterProgramHajj

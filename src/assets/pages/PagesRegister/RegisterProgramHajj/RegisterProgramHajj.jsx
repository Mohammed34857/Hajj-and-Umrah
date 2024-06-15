import React, { useState , useEffect } from 'react'
import './RegisterProgramHajj.css'
import { FaPencilAlt, FaHotel  } from "react-icons/fa";
import { MdEmojiTransportation , MdOutlineHealthAndSafety , MdOutlineAirplanemodeActive } from "react-icons/md";

const RegisterProgramHajj = () => {

    const [formData, setFormData] = useState({
       id_ProgAlHajHotel: "string",
       full_name: "string",
       name_father: "string",
       name_mother: "string",
       email: "string",
       phone_number: 0,
       birth: "2024-06-14T23:23:19.764Z",
       gender: "string",
       Health_status: "string",
       companion1: "string",
       companion2: "string",
       silat_alqaraba: "string",
       iscompanion: true,
       Nationality: "string",
       passport_number: "string",
       passport_photo: {},
       alhaj_photo: {},
       payment_method: "string",
       Verification: true,
       visa_photo: {}
    });
    const [companion1, setCompanion1] = useState({
      id_ProgAlHajHotel: "string",
       full_name: "string",
       name_father: "string",
       name_mother: "string",
       email: "string",
       phone_number: 0,
       birth: "2024-06-14T23:23:19.764Z",
       gender: "string",
       Health_status: "string",
       companion1: "string",
       companion2: "string",
       silat_alqaraba: "string",
       iscompanion: true,
       Nationality: "string",
       passport_number: "string",
       passport_photo: {},
       alhaj_photo: {},
       payment_method: "string",
       Verification: true,
       visa_photo: {}
    });
    const [companion2, setCompanion2] = useState({
      id_ProgAlHajHotel: "string",
       full_name: "string",
       name_father: "string",
       name_mother: "string",
       email: "string",
       phone_number: 0,
       birth: "2024-06-14T23:23:19.764Z",
       gender: "string",
       Health_status: "string",
       companion1: "string",
       companion2: "string",
       silat_alqaraba: "string",
       iscompanion: true,
       Nationality: "string",
       passport_number: "string",
       passport_photo: {},
       alhaj_photo: {},
       payment_method: "string",
       Verification: true,
       visa_photo: {}
    });

  const [BirthDateAmenities, setBirthDateAmenities] = useState('');
  const [ErrorAmenities, setErrorAmenities] = useState('');
  
  const [BirthDateAmenities2, setBirthDateAmenities2] = useState('');
  const [ErrorAmenities2, setErrorAmenities2] = useState('');

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

    const selectedAmenitiesDate2 = new Date(BirthDateAmenities2);
    const AmenitiesAge2 = currentDate.getFullYear() - selectedAmenitiesDate2.getFullYear();
    if (AmenitiesAge2 < 18) {
      setErrorAmenities2("يجب أن يكون عمر المرافق 18 عامًا أو أكثر.");
      return;
    }
    setErrorAmenities2(''); 
  }
    const [selectedHealthState, setSelectedHealthState] = useState(null);
    const handleHealthStateChange = (HealthState) => {
        setSelectedHealthState(HealthState);
    };

    

    const handleChangeImage = async (e) => {
      const { name, files } = e.target;
      if (files && files[0]) {
          const formData = new FormData();
          formData.append('file', files[0]);
          try {
              const response = await axios.post('https://officealhajandalumrah.adaptable.app/CloudinaryController/image', formData, {
                  headers: {
                      'Content-Type': 'multipart/form-data',
                  },
              });
              const imagePath = response.data;
              setFormData((prevFormData) => ({
                  ...prevFormData,
                  [name]: imagePath,
              }));
          } catch (error) {
              console.error('Error uploading image:', error);
          }
      }
    };
       
    const handleChange = (e) => {
      const { name, value, files } = e.target;
      if (files) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: files[0]
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      }
    };
  
    const handleCompanionChange = (e, companion, setCompanion) => {
      const { name, value, files } = e.target;
      if (files) {
        setCompanion((prevData) => ({
          ...prevData,
          [name]: files[0]
        }));
      } else {
        setCompanion((prevData) => ({
          ...prevData,
          [name]: value
        }));
      }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
          id_ProgAlHajHotel:formData.id_ProgAlHajHotel,
          full_name: formData.full_name,
          name_father: formData.name_father,
          name_mother: formData.name_mother,
          email: formData.email,
          phone_number: Number(formData.phone_number),
          birth: formData.birth,
          gender: formData.gender,
          Health_status:formData.Health_status,
          companion1: formData.companion1,
          companion2: formData.companion2,
          silat_alqaraba: formData.silat_alqaraba,
          iscompanion: formData.iscompanion,
          Nationality: formData.Nationality,
          passport_number: formData.passport_number,
          passport_photo: formData.passport_photo,
          alhaj_photo: formData.alhaj_photo,
          payment_method: formData.payment_method,
          Verification: formData.Verification,
          visa_photo: formData.visa_photo,
        };
      console.log(data);
        try {
            const response = await axios.post('https://officealhajandalumrah.adaptable.app/al-hajj', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Data submitted successfully:', response.data);
            window.location.reload();
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

  return (
    <div className='register-program-hajj'>
        <form  onSubmit={handleSubmit}>
        <div className="container">
           <h1> انضم إلى قافلة عباد الرحمن في برنامج الحج </h1>
            <div className="hajj-register">
               <h3> :التسجيل <FaPencilAlt/></h3>
              <table className='table1'>
                <tbody>
                <tr>
                  <th><input type="text" name='full_name' value={formData.full_name} onChange={handleChange} required placeholder=" أدخل الأسم " /></th>
                  <th><label> : الاسم</label></th>
                </tr>
                <tr>
                  <th><input type="email" name='email' value={formData.email} onChange={handleChange} placeholder=" ادخل البريد الالكتروني " /></th>
                  <th><label> : البريد الالكتروني</label></th>
                </tr>
                <tr>
                  <th><input type="number" name='phone_number' value={formData.phone_number} onChange={handleChange} placeholder=" ادخل رقم الهاتف " /></th>
                  <th><label> : رقم الهاتف</label></th>
                </tr>
                <tr>
                  <th><input type="date" name='birth' value={birthdate} onChange={(e) => setBirthdate(e.target.value)} placeholder=" ادخل  تاريخ ميلادك " /></th>
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
                                <th><input type="date" name='BirthDateAmenities' value={BirthDateAmenities} onChange={(e) => setBirthDateAmenities(e.target.value)} placeholder=" ادخل  تاريخ ميلاد المرافق الاول "/></th>
                                <th><label> :  تاريخ ميلاد المرافق</label></th>
                            </tr> 
                            <tr>
                                <td colSpan="2">{ErrorAmenities && <span style={{ color: '#fff' }}>{ErrorAmenities}</span>}</td>
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
                                <th><input type="date" name='BirthDateAmenities2' value={BirthDateAmenities2} onChange={(e) => setBirthDateAmenities2(e.target.value)} placeholder=" ادخل  تاريخ ميلاد المرافق الثاني "/></th>
                                <th><label> :  تاريخ ميلاد المرافق</label></th>
                            </tr> 
                            <tr>
                                <td colSpan="2">{ErrorAmenities2 && <span style={{ color: '#fff' }}>{ErrorAmenities2}</span>}</td>
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
                  {selectedHealthState === 'good' && (
                    <div className='good-container'>
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
                                <th><input type="date" name='BirthDateAmenities' value={BirthDateAmenities} onChange={(e) => setBirthDateAmenities(e.target.value)} placeholder=" ادخل  تاريخ ميلاد المرافق الاول "/></th>
                                <th><label> :  تاريخ ميلاد المرافق</label></th>
                            </tr> 
                            <tr>
                                <td colSpan="2">{ErrorAmenities && <span style={{ color: '#fff' }}>{ErrorAmenities}</span>}</td>
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

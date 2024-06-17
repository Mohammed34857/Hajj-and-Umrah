import React, { useState , useEffect } from 'react'
import './RegisterProgramHajj.css'
import { FaPencilAlt, FaHotel  } from "react-icons/fa";
import { MdEmojiTransportation , MdOutlineHealthAndSafety , MdOutlineAirplanemodeActive } from "react-icons/md";
import axios from 'axios';

const RegisterProgramHajj = () => {
    
    const [companion1Id, setCompanion1Id] = useState("");
    const [companion2Id, setCompanion2Id] = useState("");
    const [formData, setFormData] = useState({
      id_ProgAlHajHotel: "666f62e4fb0f54b75d2708e8",
      full_name: "عمر",
      name_father: "حسن",
      name_mother: "فاطمة",
      email: "ahmadnasser@gmail.com",
      phone_number: 675428882,
      birth: "1950-06-15",
      gender: "ذكر",
      Health_status: "سليم",
      companion1: companion1Id,
      companion2: companion2Id,
      iscompanion: false,
      Nationality: "سوري",
      passport_number: "758121823",
      passport_photo: "https://res.cloudinary.com/dj05jeavk/image/upload/v1714507309/hotels/%D9%86%D8%B3%D9%83%20%D8%A7%D9%84%D9%87%D8%AC%D8%B1%D8%A9/449441863_cusyvs.jpg",
      alhaj_photo: "https://res.cloudinary.com/dj05jeavk/image/upload/v1714507309/hotels/%D9%86%D8%B3%D9%83%20%D8%A7%D9%84%D9%87%D8%AC%D8%B1%D8%A9/449441863_cusyvs.jpg",
      payment_method: "كاش",
      Verification: false,
      visa_photo: "https://res.cloudinary.com/dj05jeavk/image/upload/v1714507309/hotels/%D9%86%D8%B3%D9%83%20%D8%A7%D9%84%D9%87%D8%AC%D8%B1%D8%A9/449441863_cusyvs.jpg",
      });
      
      const [companion1, setCompanion1] = useState({
        id_ProgAlHajHotel: "666f62e4fb0f54b75d2708e8",
        full_name: "عمر",
        name_father: "حسن",
        name_mother: "فاطمة",
        email: "ahmadnasser@gmail.com",
        phone_number: 675428882,
        birth: "1950-06-15",
        gender: "ذكر",
        Health_status: "سليم",
        companion1: "string",
        companion2: "string",
        iscompanion: false,
        Nationality: "سوري",
        passport_number: "758121823",
        passport_photo: "https://res.cloudinary.com/dj05jeavk/image/upload/v1714507309/hotels/%D9%86%D8%B3%D9%83%20%D8%A7%D9%84%D9%87%D8%AC%D8%B1%D8%A9/449441863_cusyvs.jpg",
        alhaj_photo: "https://res.cloudinary.com/dj05jeavk/image/upload/v1714507309/hotels/%D9%86%D8%B3%D9%83%20%D8%A7%D9%84%D9%87%D8%AC%D8%B1%D8%A9/449441863_cusyvs.jpg",
        payment_method: "كاش",
        Verification: false,
        visa_photo: "https://res.cloudinary.com/dj05jeavk/image/upload/v1714507309/hotels/%D9%86%D8%B3%D9%83%20%D8%A7%D9%84%D9%87%D8%AC%D8%B1%D8%A9/449441863_cusyvs.jpg",
       });
    
      const [companion2, setCompanion2] = useState({
        id_ProgAlHajHotel: "666f62e4fb0f54b75d2708e8",
       full_name: "عمر",
       name_father: "حسن",
       name_mother: "فاطمة",
       email: "ahmadnasser@gmail.com",
       phone_number: 675428882,
       birth: "1950-06-15",
       gender: "ذكر",
       Health_status: "سليم",
       companion1: "string",
       companion2: "string",
       iscompanion: false,
       Nationality: "سوري",
       passport_number: "758121823",
       passport_photo: "https://res.cloudinary.com/dj05jeavk/image/upload/v1714507309/hotels/%D9%86%D8%B3%D9%83%20%D8%A7%D9%84%D9%87%D8%AC%D8%B1%D8%A9/449441863_cusyvs.jpg",
       alhaj_photo: "https://res.cloudinary.com/dj05jeavk/image/upload/v1714507309/hotels/%D9%86%D8%B3%D9%83%20%D8%A7%D9%84%D9%87%D8%AC%D8%B1%D8%A9/449441863_cusyvs.jpg",
       payment_method: "كاش",
       Verification: false,
       visa_photo: "https://res.cloudinary.com/dj05jeavk/image/upload/v1714507309/hotels/%D9%86%D8%B3%D9%83%20%D8%A7%D9%84%D9%87%D8%AC%D8%B1%D8%A9/449441863_cusyvs.jpg",
    });
    
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

      const [selectedHealthState, setSelectedHealthState] = useState(null);
      const handleHealthStateChange = (HealthState) => {
        setSelectedHealthState(HealthState);
      };
     
      const handleChangeImage = async (e) => {
        const { name, files, dataset } = e.target;
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
      
            if (dataset.target === 'formData') {
              setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: imagePath,
              }));
            } else if (dataset.target === 'companion1') {
              setCompanion1((prevCompanion1) => ({
                ...prevCompanion1,
                [name]: imagePath,
              }));
            } else if (dataset.target === 'companion2') {
              setCompanion2((prevCompanion2) => ({
                ...prevCompanion2,
                [name]: imagePath,
              }));
            }
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
    
      const handleCompanionChange = (e, setCompanion) => {
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
          id_ProgAlHajHotel: formData.id_ProgAlHajHotel,
          full_name: formData.full_name,
          name_father: formData.name_father,
          name_mother: formData.name_mother,
          email: formData.email,
          phone_number: Number(formData.phone_number),
          birth: formData.birth,
          gender: formData.gender,
          Health_status: formData.Health_status,
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

        const dataCompanion1 = {
          id_ProgAlHajHotel: companion1.id_ProgAlHajHotel,
          full_name: companion1.full_name,
          name_father: companion1.name_father,
          name_mother: companion1.name_mother,
          email: companion1.email,
          phone_number: Number(companion1.phone_number),
          birth: companion1.birth,
          gender: companion1.gender,
          Health_status: companion1.Health_status,
          companion1: companion1.companion1,
          companion2: companion1.companion2,
          silat_alqaraba: companion1.silat_alqaraba,
          iscompanion: companion1.iscompanion,
          Nationality: companion1.Nationality,
          passport_number: companion1.passport_number,
          passport_photo: companion1.passport_photo,
          alhaj_photo: companion1.alhaj_photo,
          payment_method: companion1.payment_method,
          Verification: companion1.Verification,
          visa_photo: companion1.visa_photo,
        }; 
        console.log(dataCompanion1);

        const dataCompanion2 = {
          id_ProgAlHajHotel: companion2.id_ProgAlHajHotel,
          full_name: companion2.full_name,
          name_father: companion2.name_father,
          name_mother: companion2.name_mother,
          email: companion2.email,
          phone_number: Number(companion2.phone_number),
          birth: companion2.birth,
          gender: companion2.gender,
          Health_status: companion2.Health_status,
          companion1: companion2.companion1,
          companion2: companion2.companion2,
          silat_alqaraba: companion2.silat_alqaraba,
          iscompanion: companion2.iscompanion,
          Nationality: companion2.Nationality,
          passport_number: companion2.passport_number,
          passport_photo: companion2.passport_photo,
          alhaj_photo: companion2.alhaj_photo,
          payment_method: companion2.payment_method,
          Verification: companion2.Verification,
          visa_photo: companion2.visa_photo,
        };

        if (selectedHealthState === 'good') {
          try {
              const responseCompanion1 = await axios.post('https://officealhajandalumrah.adaptable.app/al-hajj', dataCompanion1, {
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              setCompanion1Id(responseCompanion1.data._id);
          } catch (error) {
            console.error('Error submitting companion1 data:', error);
          }
        }
       else if(selectedHealthState === 'helpless'){ 
        try {
          const responseCompanion1 = await axios.post('https://officealhajandalumrah.adaptable.app/al-hajj', dataCompanion1, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          setCompanion1Id(responseCompanion1.data._id);
          const responseCompanion2 = await axios.post('https://officealhajandalumrah.adaptable.app/al-hajj', dataCompanion2, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          setCompanion2Id(responseCompanion2.data._id);
      } catch (error) {
        console.error('Error submitting companion1 data:', error);
      }
       }
  
        try {
          const response = await axios.post('https://officealhajandalumrah.adaptable.app/al-hajj', data, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log('Data submitted successfully:', response.data);
      } catch (error) {
        if (error.response) {
          console.error("Error response:", error.response);
        } else if (error.request) {
          console.error("Error request:", error.request);
        } else {
          console.error("Error message:", error.message);
        }
        console.error("Error config:", error.config);
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
                  <th><input type="date" name='birth' value={formData.birth} onChange={handleChange} placeholder=" ادخل  تاريخ ميلادك " /></th>
                  <th><label> :  تاريخ الميلاد</label></th>
                </tr>
                <tr>
                                <th>
                                   <div className='path' id='file-path'> لم يتم اختيار ملف   </div>
                                   <label className='label-file' htmlFor="file-img"><span>اختر ملف</span></label>
                                   <input id='file-img' name='alhaj_photo' data-target="formData" type="file"  onChange={handleChangeImage} />
                                 </th>
                                 <th><label> : الصورة الشخصية</label></th>
                            </tr>
                            <tr>
                                 <th>
                                     <div className='path' id='passport-path'> لم يتم اختيار ملف  </div>
                                     <label className='label-file' htmlFor="passport">اختر ملف</label>
                                     <input id='passport' name='passport_photo' data-target="formData" type="file"  onChange={handleChangeImage} />
                                 </th>
                                <th><label> : ادخل صورة جواز السفر</label></th>
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
                                <th><input  type="text"  name="full_name" value={companion1.full_name} onChange={(e) => handleCompanionChange(e, setCompanion1)}  required  placeholder=" أدخل الأسم "/></th>
                                <th><label> : الاسم</label></th>
                            </tr>
                            <tr>
                                <th><input  type="email"  name="email"  value={companion1.email}  onChange={(e) => handleCompanionChange(e, setCompanion1)}  placeholder=" ادخل البريد الالكتروني "/></th>
                                <th><label> : البريد الالكتروني</label></th>
                            </tr>
                            <tr>
                                <th><input  type="number"  name="phone_number"  value={companion1.phone_number}  onChange={(e) => handleCompanionChange(e, setCompanion1)}  placeholder=" ادخل رقم الهاتف "/></th>
                                <th><label> : رقم الهاتف</label></th>
                            </tr>  
                            <tr>
                                <th>
                                  <input  type="date"  name="birth"  value={companion1.birth}  onChange={(e) => handleCompanionChange(e, setCompanion1)}  placeholder=" ادخل  تاريخ ميلاد المرافق الاول "/>
                                  </th>
                                <th><label> :  تاريخ ميلاد المرافق</label></th>
                            </tr> 
                            <tr>
                                <th><input type="text" name='silat_alqaraba' value={companion1.silat_alqaraba} onChange={(e) => handleCompanionChange(e, setCompanion1)}  placeholder=" أدخل صلة القرابة "/></th>
                                <th><label> : صلة القرابة</label></th>
                            </tr>
                            <tr>
                                <th>
                                   <div className='path' id='file-path'> لم يتم اختيار ملف   </div>
                                   <label className='label-file' htmlFor="file-img"><span>اختر ملف</span></label>
                                   <input id='file-img' name='amenitiesImage' data-target="companion1" type="file" />
                                 </th>
                                 <th><label> : الصورة الشخصية</label></th>
                            </tr>
                            <tr>
                                 <th>
                                     <div className='path' id='passport-path'> لم يتم اختيار ملف  </div>
                                     <label className='label-file' htmlFor="passport">اختر ملف</label>
                                     <input id='passport' name='amenitiesPassport' data-target="companion1" type="file" />
                                 </th>
                                <th><label> : ادخل صورة جواز السفر</label></th>
                           </tr>
                            <tr>
                                <td colSpan="2"><h2> ادخل معلومات المرافق الثاني </h2></td>
                            </tr>
                            <tr>
                                <th><input  type="text"  name="full_name" value={companion2.full_name} onChange={(e) => handleCompanionChange(e, setCompanion2)}  required  placeholder=" أدخل الأسم "/></th>
                                <th><label> : الاسم</label></th>
                            </tr>
                            <tr>
                                <th><input  type="email"  name="email"  value={companion2.email}  onChange={(e) => handleCompanionChange(e, setCompanion2)}  placeholder=" ادخل البريد الالكتروني "/></th>
                                <th><label> : البريد الالكتروني</label></th>
                            </tr>
                            <tr>
                                <th><input  type="number"  name="phone_number"  value={companion2.phone_number}  onChange={(e) => handleCompanionChange(e, setCompanion2)}  placeholder=" ادخل رقم الهاتف "/></th>
                                <th><label> : رقم الهاتف</label></th>
                            </tr>  
                            <tr>
                                <th>
                                  <input  type="date"  name="birth"  value={companion2.birth}  onChange={(e) => handleCompanionChange(e, setCompanion2)}  placeholder=" ادخل  تاريخ ميلاد المرافق الاول "/>
                                  </th>
                                <th><label> :  تاريخ ميلاد المرافق</label></th>
                            </tr> 
                            <tr>
                                <th><input type="text" name='silat_alqaraba' value={companion2.silat_alqaraba} onChange={(e) => handleCompanionChange(e, setCompanion2)}  placeholder=" أدخل صلة القرابة "/></th>
                                <th><label> : صلة القرابة</label></th>
                            </tr>
                            <tr>
                                <th>
                                   <div className='path' id='file-path'> لم يتم اختيار ملف   </div>
                                   <label className='label-file' htmlFor="file-img"><span>اختر ملف</span></label>
                                   <input id='file-img' name='amenitiesimage2' data-target="companion2" type="file" />
                                 </th>
                                 <th><label> : الصورة الشخصية</label></th>
                            </tr>
                            <tr>
                                 <th>
                                     <div className='path' id='passport-path'> لم يتم اختيار ملف  </div>
                                     <label className='label-file' htmlFor="passport">اختر ملف</label>
                                     <input id='passport' name='amenitiesPassport' data-target="companion2" type="file" />
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
                                <th><input  type="text"  name="full_name" value={companion1.full_name} onChange={(e) => handleCompanionChange(e, setCompanion1)}  required  placeholder=" أدخل الأسم "/></th>
                                <th><label> : الاسم</label></th>
                            </tr>
                            <tr>
                                <th><input  type="email"  name="email"  value={companion1.email}  onChange={(e) => handleCompanionChange(e, setCompanion1)}  placeholder=" ادخل البريد الالكتروني "/></th>
                                <th><label> : البريد الالكتروني</label></th>
                            </tr>
                            <tr>
                                <th><input  type="number"  name="phone_number"  value={companion1.phone_number}  onChange={(e) => handleCompanionChange(e, setCompanion1)}  placeholder=" ادخل رقم الهاتف "/></th>
                                <th><label> : رقم الهاتف</label></th>
                            </tr>  
                            <tr>
                                <th>
                                  <input  type="date"  name="birth"  value={companion1.birth}  onChange={(e) => handleCompanionChange(e, setCompanion1)}  placeholder=" ادخل  تاريخ ميلاد المرافق الاول "/>
                                  </th>
                                <th><label> :  تاريخ ميلاد المرافق</label></th>
                            </tr> 
                            <tr>
                                <th><input type="text" name='silat_alqaraba' value={companion1.silat_alqaraba} onChange={(e) => handleCompanionChange(e, setCompanion1)}  placeholder=" أدخل صلة القرابة "/></th>
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
            <button type="submit" >ارسال الطلب</button>
         </div>
        </div>
        </form>
    </div>
  )

}
export default RegisterProgramHajj

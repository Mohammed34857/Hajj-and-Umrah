import React, { useEffect , useState} from 'react'
import './RegisterProgramSpecial.css'
import { FaPencilAlt, FaBook, FaHotel  } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import { MdEmojiTransportation } from "react-icons/md";
import axios from 'axios';

const RegisterProgramSpecial = () => {
    const [reservationCode, setReservationCode] = useState([]);
    const [error, setError] = useState("");
    const [inMakaaHotel,setInMakaaHotel] = useState([{}]);
    const [inMadenaHotel,setInMadenaHotel] = useState([]);
    console.log(inMakaaHotel);
    console.log(inMadenaHotel);
    const [formData, setFormData] = useState({
        "Airline": {},
        "Date_Travel": "2024-06-04",
        "total_stay": 0 ,
        "stay_in_macca": 0 ,
        "stay_in_madina": 0 
    });
    const [formDataMutamir, setFormDataMutamir] = useState({
        fullName: "string",
        nameFather: "string",
        nameMother: "string",
        phoneNumber: 95678,
        email: "abedalrahaman@gmail.com",
        birth: "2024-05-20T23:27:58.385Z",
        gender: "string",
        nationality: "string",
        passportNumber: "string",
        passportPhoto: "",
        almutamirPhoto: "",
        numberBus: 0,
        typeRoom: "string",
        seatNumber: 0,
        paymentMethod: "string",
        verification: true,
        reservationCode:""
    });

    useEffect(() =>{
      const fetchData = async () => {
        try {
           const allHotels = await axios.get("https://officealhajandalumrah.adaptable.app/Hotel");
           const inMakaaHotels = allHotels.data.filter( inMakaHotel => inMakaHotel.location === "مكة المكرمة");
           setInMakaaHotel(inMakaaHotels)
           const inMadenaHotels = allHotels.data.filter( inMadenaHotel => inMadenaHotel.location === "المدينة المنورة");
           setInMadenaHotel(inMadenaHotels)

           const ReservationCode = await axios.get('https://officealhajandalumrah.adaptable.app/employee');
          setReservationCode(ReservationCode.data.map((Code)=>{
            return Code.Reservation_code;
          }));

          } catch (error) {
            console.error('Error fetching hotel data:', error);
        }
    };
    fetchData();
    },[])

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
                setFormDataMutamir((prevFormDataMutamir) => ({
                    ...prevFormDataMutamir,
                    [name]: imagePath,
                }));
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
      };

    const handleChangeDataProgramSpecial = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    
    const handleChangeDataMutamir = (e) => {
        const { name, value} = e.target;
        setFormDataMutamir((prevFormDataMutamir) => ({
            ...prevFormDataMutamir,
            [name]:value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!reservationCode.includes(formDataMutamir.reservationCode)) {
          setError("كود الحجز غير صحيح , يرجى التأكد من الكود والمحاولة مرة أخرى");
          return;
        }
        else{
        const dataProgramSpecial = {
            Airline: formData.Airline,
            Date_Travel: formData.Date_Travel,
            total_stay: Number(formData.total_stay) ,
            stay_in_macca: Number(formData.stay_in_macca) ,
            stay_in_madina: Number(formData.stay_in_madina) 
        };
        console.log(dataProgramSpecial);
        const dataMutamir = {
            full_name: formDataMutamir.fullName,
            name_father: formDataMutamir.nameFather,
            name_mother: formDataMutamir.nameMother,
            phone_number: Number(formDataMutamir.phoneNumber) ,
            email: formDataMutamir.email,
            birth: formDataMutamir.birth,
            gender: formDataMutamir.gender,
            Nationality: formDataMutamir.nationality,
            passport_number: formDataMutamir.passportNumber,
            passport_photo: formDataMutamir.passportPhoto,
            almutamir_photo: formDataMutamir.almutamirPhoto,
            type_room: formDataMutamir.typeRoom,
            number_bus: formDataMutamir.numberBus,
            seatNumber: formDataMutamir.seatNumber,
            payment_method: formDataMutamir.paymentMethod,
            Verification: formDataMutamir.verification,
        };
        console.log(dataMutamir);
        try {   
            const responseProgramSpecial = await axios.post('https://officealhajandalumrah.adaptable.app/program-umrah-special', dataProgramSpecial, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseMutamir = await axios.post('https://officealhajandalumrah.adaptable.app/al-mutamir', dataMutamir, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
            console.log(dataProgramSpecial);
            console.log('Data submitted successfully:', responseProgramSpecial.data);
            console.log('Data submitted successfully:', responseMutamir.data);
            // window.location.reload();
        } catch (error) {
            console.error('Error fetching program data:', error);
        }
    };
  }
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
    

   
    const [selectedTransfer, setSelectedTransfer] = useState(null);
    const handleTransferChange = (transferType) => {
        setSelectedTransfer(transferType);
    };

    const [selectedPosition, setSelectedPosition] = useState(null);
    const handlePositionChange = (positionHotel) => {
        setSelectedPosition(positionHotel);
    };

    
  return (
    <div className='register-program-special'>
     <div className>
      <form onSubmit={handleSubmit}>
        <div className="container">
           <h1> انضم إلى قافلة اجنحة الضيافة عن طريق انشاء برنامجك الخاص </h1>
            <div className="special-register">
               <h3> :التسجيل <FaPencilAlt/></h3>
               <table className='table1'>
              <tbody>
                <tr>
                  <th>
                    <input 
                      type="text" 
                      name='fullName' 
                      required 
                      placeholder=" أدخل الأسم " 
                      value={formDataMutamir.fullName} 
                      onChange={handleChangeDataMutamir}
                    />
                  </th>
                  <th><label> : الاسم</label></th>
                </tr>
                <tr>
                  <th>
                    <input 
                      type="text" 
                      name='email' 
                      placeholder=" ادخل البريد الالكتروني " 
                      value={formDataMutamir.email} 
                      onChange={handleChangeDataMutamir}
                    />
                  </th>
                  <th><label> : البريد الالكتروني</label></th>
                </tr>
                <tr>
                   <th>
                    <input 
                      type="text" 
                      name='phoneNumber' 
                      placeholder=" ادخل رقم الهاتف " 
                      value={formDataMutamir.phoneNumber} 
                      onChange={handleChangeDataMutamir}
                    />
                  </th>
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
                      <div className='path' id='file-path'> لم يتم اختيار ملف </div>
                      <label className='label-file' htmlFor="file-img"><span>اختر ملف</span></label>
                      <input 
                        id='file-img' 
                        name='almutamirPhoto' 
                        type="file" 
                        onChange={handleChangeImage}
                      />
                    </th>
                    <th><label> : الصورة الشخصية</label></th>
                  </tr>
                  <tr>
                    <th>
                      <div className='path' id='passport-path'> لم يتم اختيار ملف </div>
                      <label className='label-file' htmlFor="passport"><span> اختر ملف  </span></label>
                      <input 
                        id='passport' 
                        name='passportPhoto' 
                        type="file" 
                        onChange={handleChangeImage}
                      />
                    </th>
                    <th><label> : ادخل صورة جواز السفر</label></th>
                  </tr>
                </tbody>
              </table>
              </div>
              <div className='end-float'></div>
            </div>

            <div className="duration">
               <h3> : اختيار المدة <FaPencilAlt/></h3>
              <table className='table1'>
                <tbody>
                <tr>
                    <th><input type="number" name='total_stay' required placeholder=" أدخل عدد الايام " value={formData.total_stay}  onChange={handleChangeDataProgramSpecial}/></th>
                    <th><label> : عدد الايام</label></th>
                </tr>
                <tr>
                    <th><input type="number" name='stay_in_macca' placeholder="ادخل عدد ايام الأقامة في مكة " value={formData.stay_in_macca}  onChange={handleChangeDataProgramSpecial}/></th>
                    <th><label> :  عدد ايام الأقامة في مكة</label></th>
                </tr>
                <tr>
                    <th><input type="number" name='stay_in_madina' placeholder=" ادخل عدد ايام الأقامة في المدينة " value={formData.stay_in_madina}  onChange={handleChangeDataProgramSpecial}/></th>
                    <th><label> :  عدد ايام الأقامة في المدينة </label></th>
                </tr>   
                </tbody> 
              </table>
              <div className='end-float'></div>
          </div>

          <div className="transfer">
            <h3> : اختيار النقل <MdEmojiTransportation/></h3>
            <div className="child-transfer">
                
                {selectedTransfer === 'land' && (
                    <div className='wild-transfer'>
                        <input className='input-date' type="date" name='Date_Travel' placeholder="ادخل تاريخ السفر " value={formData.Date_Travel}   onChange={handleChangeDataProgramSpecial} />
                        <label> :  تاريخ السفر</label>
                    </div>
                )}
                <label  className="radio-container" onClick={() => handleTransferChange('land')}>
                    <input type="radio" name="transfer" value={"land"} readOnly />
                    <span className="checkmark"></span>
                    بري
                </label>
                
                {selectedTransfer === 'air' && (
                    <div className='aerial-transfer'>
                        <input className='input-date' type="date" name='Date_Travel' placeholder="ادخل تاريخ السفر " value={formData.Date_Travel}   onChange={handleChangeDataProgramSpecial} />
                        <label> :  تاريخ السفر</label>
                    </div>
                )}
                <label className="radio-container" onClick={() => handleTransferChange('air')}>
                    <input type="radio" name="transfer" value={"air"} readOnly />
                    <span className="checkmark"></span>
                    جوي
                </label>
            </div>
          </div>
    
          <div className="select-hotel">
            <h3><FaHotel  />   اختر الفندق : </h3>
            <h2> موقع الفندق : </h2> 
            <div className="radio-hotel">
                <label className="radio-container" onClick={()=> handlePositionChange("inMakaa")}>
                <input type="radio" name='positionHotel' value={"inMakaa"}  />
                <span className="checkmark"></span>
                  في مكة 
                </label>
                {selectedPosition === "inMakaa" && (
                    <div className='makaa-hotel'>
                        <select name="makaa-hotel">
                          {inMakaaHotel.length > 0 ? (
                             inMakaaHotel.map((hotel, index) => (
                             <option key={index} value={hotel.name}>
                                 {hotel.name}
                            </option>
                           ))
                           ) : (
                           <option>لا توجد فنادق في مكة المكرمة</option>
                             )}
                        </select>
                    </div>
                )}
                <label className="radio-container" onClick={()=> handlePositionChange("inMadena")}>
                <input type="radio" name='positionHotel' value={"inMadena"} />
                <span className="checkmark"></span>
                 في المدينة 
                </label>
                {selectedPosition === "inMadena" && (
                    <div className='madena-hotel'>
                        <select name="madena-hotel">
                            {inMadenaHotel.length > 0 ? (
                             inMadenaHotel.map((hotel, index) => (
                             <option key={index} value={hotel.name}>
                                 {hotel.name}
                            </option>
                           ))
                           ) : (
                           <option>لا توجد فنادق في المدينة المنورة</option>
                             )}
                        </select>
                    </div>
                )}
            </div>
            <h2> نوع الغرفة :</h2> <br />
            <div className="radio-room">
                    <label className="radio-container">
                        <input
                         type="radio"
                         name="typeRoom" 
                         value="single room" 
                         onChange={handleChangeDataMutamir}
                        />
                    <span className="checkmark"></span>
                    غرفة احادية  
                    </label>
                    <label className="radio-container">
                       <input
                         type="radio"
                         name="typeRoom" 
                         value="double room"
                         onChange={handleChangeDataMutamir}
                        />
                    <span className="checkmark"></span>
                  غرفة ثنائية  
                    </label>
                    <label className="radio-container">
                        <input
                         type="radio"
                         name="typeRoom" 
                         value="triple room"
                         onChange={handleChangeDataMutamir}
                        />
                    <span className="checkmark"></span>
                    غرفة ثلاثية                     </label>
            </div>
          </div>

          <div className="paying-off">
            <h3> : طريقة الدفع <GiCash/></h3>
            <div className="paying">
                    <label className="radio-container">
                        <input
                         type="radio" 
                         name="paymentMethod" 
                         value="electronic"
                         onChange={handleChangeDataMutamir}
                         />
                    <span className="checkmark"></span>
                    الالكتروني
                    </label>
                    <label className="radio-container">
                        <input
                         type="radio" 
                         name="paymentMethod" 
                         value="cash" 
                         onChange={handleChangeDataMutamir}
                         />
                    <span className="checkmark"></span>
                     الدفع كاش 
                    </label>
            </div>
          </div>

          <div className='Reservation_code'>
              <table className='table1'>
                 <tbody>
                            <tr>
                                <th><input
                                     type="text"
                                     name="reservationCode"
                                     placeholder="كود الحجز"
                                     value={formDataMutamir.reservationCode}
                                     onChange={handleChangeDataMutamir}
                                    />
                                </th>
                                <th><label> : ادخل كود تأكيد الحجز </label></th>
                            </tr>
                            <tr>
                              <th>
                              {error && <p className="error-message">{error}</p>}
                              </th>
                            </tr>
                 </tbody>
              </table>
          </div>

         <div className='order-send'>
            <button type='submit' >ارسال الطلب</button>
         </div>
        </div>
     </form>
     </div>
    </div>
  )
}

export default RegisterProgramSpecial
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RegisterProgramUmrah.css';
import { FaPencilAlt, FaBook, FaBed , FaHotel } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { GiCash } from "react-icons/gi";
import axios from 'axios';

const RegisterProgramUmrah = () => {

    const { id } = useParams();
    const [reservationCode, setReservationCode] = useState([]);
    const [error, setError] = useState("");
    const [programUmrah, setProgramUmrah] = useState({});
    const [programUmrahId, setProgramUmrahId] = useState("");
    const [inMakaaHotel,setInMakaaHotel] = useState([{}]);
    const [inMadenaHotel,setInMadenaHotel] = useState([]);
    const [fullName, setFullName] = useState("");
    const [reservedSeats, setReservedSeats] = useState([]);
    const [alertMessage, setAlertMessage] = useState("");
    const [roomCost, setRoomCost] = useState(0);
    const [formData, setFormData] = useState({
      fullName: "",
      nameFather: "",
      nameMother: "",
      phoneNumber: 0,
      email: "",
      birth: "",
      gender: "",
      nationality: "",
      passportNumber: "",
      passportPhoto: "",
      almutamirPhoto: "",
      busNumber: 0,
      typeRoom: "",
      seatNumber: 0,
      paymentMethod: "",
      verification: false ,
      reservationCode:""
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

      const fetchData = async () => {
          try {

            const allHotels = await axios.get("https://officealhajandalumrah.adaptable.app/Hotel");
            const inMakaaHotels = allHotels.data.filter( inMakaHotel => inMakaHotel.location === "مكة المكرمة");
            setInMakaaHotel(inMakaaHotels)
            const inMadenaHotels = allHotels.data.filter( inMadenaHotel => inMadenaHotel.location === "المدينة المنورة");
            setInMadenaHotel(inMadenaHotels)

              const program_umrah = await axios.get(`https://officealhajandalumrah.adaptable.app/program-umrah/${id}`).then(response => response.data);
                setProgramUmrah(program_umrah);
                setProgramUmrahId(program_umrah._id)
              const ReservationCode = await axios.get('https://officealhajandalumrah.adaptable.app/employee');
               setReservationCode(ReservationCode.data.map((Code)=>{
              return Code.Reservation_code;
               }));

        
          const response = await axios.get('https://officealhajandalumrah.adaptable.app/program-bus/all-ProgramBus-with-ProgramUmrah');
          const programBusData = response.data;
          const programBus = programBusData.find((ProgramUmrah) => ProgramUmrah.id_ProgramUmrah.name_program === program_umrah.name_program);
          const availableSeats = programBus.seat
          .filter(seat => seat.isReserved === true)
          .map(seat => ({ busNumber: seat.number_bus, seatNumber: seat.seatNumber }));
           setReservedSeats(availableSeats);
           console.log(availableSeats);
          } catch (error) {
              console.error('Error fetching program data:', error);
          }
      };
      fetchData();
     }, [id]);

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
       

    const handleChange = async (e) => {
    const { name, value, files } = e.target;
    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files ? files[0] : value,
    }));

    if(name === 'fullName'){
      setFullName(value);
    }

    if (name === 'roomPrice') {
      let cost = 0;
      switch (value) {
        case 'single room':
          cost = programUmrah.price1;
          break;
        case 'double room':
          cost = programUmrah.price2;
          break;
        case 'triple room':
          cost = programUmrah.price3;
          break;
        default:
          cost = 0;
      }
      setRoomCost(cost);
    }

    if (name === 'paymentMethod') {
      if (value === 'electronic') {
        setAlertMessage(`تم إرسال رقم حساب بنكي إلى بريدك الإلكتروني لتسديد تكاليف الرحلة وقدرها ${roomCost}`);
        try {
          await axios.post(API_SEND_EMAIL_ENDPOINT, {
            to: formData.email,
            subject: 'تفاصيل الدفع للرحلة',
            text: `تم إرسال رقم حساب بنكي إلى بريدك الإلكتروني لتسديد تكاليف الرحلة وقدرها ${roomCost}`
          });
        } catch (error) {
          console.error('Error sending email:', error);
        }
      } else if (value === 'cash') {
        setAlertMessage(`يرجى مراجعة المكتب لتسديد تكاليف الرحلة وقدرها ${roomCost}`);
      } else {
        setAlertMessage("");
      }
    }
  };

    const handleSeatChange = async (e) => {
      const { value } = e.target;
      const [seatNumber, busNumber] = value.split(',').map(Number);
      console.log(typeof programUmrahId ,typeof busNumber , typeof seatNumber , typeof fullName)
      try {
        setFormData((prevFormData) => ({
          ...prevFormData,
          seatNumber,
          busNumber,
      }));
      } catch (error) {
        console.error("Error reserving seat:", error);
        alert("حدث خطأ أثناء حجز المقعد");
      }
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!reservationCode.includes(formData.reservationCode)) {
          setError("كود الحجز غير صحيح , يرجى التأكد من الكود والمحاولة مرة أخرى");
          return;
        }
        else{
        const data = {
          full_name: formData.fullName,
          name_father: formData.nameFather,
          name_mother: formData.nameMother,
          phone_number: Number(formData.phoneNumber),
          email: formData.email,
          birth: formData.birth,
          gender: formData.gender,
          Nationality: formData.nationality,
          passport_number: formData.passportNumber,
          passport_photo: formData.passportPhoto,
          almutamir_photo: formData.almutamirPhoto,
          type_room: formData.typeRoom,
          number_bus: formData.busNumber,
          seatNumber: Number(formData.seatNumber) ,
          payment_method: formData.paymentMethod,
          Verification: formData.verification,
        };
        try {
            const response = await axios.post('https://officealhajandalumrah.adaptable.app/al-mutamir', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            alert('تم التسجيل على البرنامج بنجاح!');
            alert('سيتم الغاء طلبك في حال عدم تسديد المكيلغ خلال مدة اقصاها 24 ساعة');
            const timer = setTimeout(() => {
                window.location.reload();
            }, 5000);
            return () => clearTimeout(timer);
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };
  }
  const [selectedPosition, setSelectedPosition] = useState(null);
  const handlePositionChange = (positionHotel) => {
      setSelectedPosition(positionHotel);
  };

  return (
    <div className='register-program-umrah'>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1 className="hellow">انضم إلى قافلة اجنحة الضيافة في برنامج العمرة </h1>
          <h2 className="title-program">{programUmrah.name_program}</h2>

          <div className="register">
            <h3> :التسجيل <FaPencilAlt /></h3>
            <table className='table1'>
              <tbody>
                <tr>
                  <th>
                    <input 
                      type="text" 
                      name='fullName' 
                      required 
                      placeholder=" أدخل الأسم " 
                      value={formData.fullName} 
                      onChange={handleChange}
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
                      value={formData.email} 
                      onChange={handleChange}
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
                      value={formData.phoneNumber} 
                      onChange={handleChange}
                    />
                  </th>
                  <th><label> : رقم الهاتف</label></th>
                </tr>
              </tbody>
            </table>
            <div className='end-float'></div>
          </div>

          <div className="paperwork">
            <h3> :الاوراق المطلوبة <FaBook /></h3>
            <div className="child-paper">
              <table className='table2'>
                <tbody>
                  <tr>
                    <th>
                      <div className='path' id='file-path'> لم يتم اختيار ملف </div>
                      <label className='label-file' htmlFor="file-img"><span>اختر ملف</span></label>
                      <input 
                        id='file-img' 
                        name='personalPhoto' 
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

          <h3>: احجز مقعدك في الحافلة <MdAirlineSeatReclineExtra /></h3>
          <div className="booking">
          <select className='seat' name='seatNumber' onChange={handleSeatChange}>
             {reservedSeats.map((seat, index) => (
              <option key={index} value={`${seat.seatNumber},${seat.busNumber}`}>
                 رقم الباص : {seat.busNumber} , رقم المقعد : {seat.seatNumber}
                </option>
              ))}
          </select>
          </div>
          <div className="room">
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
            <h3> :اختر غرفتك من الفندق <FaBed /></h3>
            <div className="radio-room">
                    <label className="radio-container">
                        <input
                         type="radio"
                         name="roomPrice" 
                         value="single room" 
                         onChange={handleChange}
                        />
                    <span className="checkmark"></span>
                    {programUmrah.price1}
                    </label>
                    <label className="radio-container">
                       <input
                         type="radio"
                         name="roomPrice" 
                         value="double room" 
                         onChange={handleChange}
                        />
                    <span className="checkmark"></span>
                       {programUmrah.price2}
                    </label>
                    <label className="radio-container">
                        <input
                         type="radio"
                         name="roomPrice" 
                         value="triple room"
                         onChange={handleChange}
                        />
                    <span className="checkmark"></span>
                      {programUmrah.price3} 
                    </label>
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
                         onChange={handleChange}
                         />
                    <span className="checkmark"></span>
                    الالكتروني
                    </label>
                    <label className="radio-container">
                        <input
                         type="radio" 
                         name="paymentMethod" 
                         value="cash"
                         onChange={handleChange}
                         />
                    <span className="checkmark"></span>
                     الدفع كاش 
                    </label>
            </div>
            {alertMessage && <div className="alert-message">{alertMessage}</div>}
          </div>

          <div className='Reservation_code'>
              <table className='table1'>
                 <tbody>
                            <tr><th><label> للحصول على كود تاكيد الحجز يرجى التواصل معنا على رقم الوتس 0993642776 </label></th></tr>
                            <tr>
                                <th><input
                                     type="text"
                                     name="reservationCode"
                                     placeholder="كود الحجز"
                                     value={formData.reservationCode}
                                     onChange={handleChange}
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
            <button type="submit">ارسال الطلب</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterProgramUmrah;

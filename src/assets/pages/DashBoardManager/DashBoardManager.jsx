import React, { useEffect, useState } from "react";
import './DashBoardManager.css'
import manger from "../../images/dashbord/img_avatar3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiTwotoneCheckCircle , AiFillLike } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import { ImCogs ,ImFolderOpen , ImLibrary , ImBubbles4 , ImAirplane , ImUsers } from "react-icons/im";
import { GrServices } from "react-icons/gr";
import imghaj from "../../images/register3.jpg";
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdEditSquare } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
import { FaRegPlusSquare } from "react-icons/fa";

const  DashBoardManager = ()=> {

  // employee
  const [isEditingEmployee, setIsEditingEmployee] = useState(false);
  const [editingIdEmployee, setEditingIdEmployee] = useState(null);
  const [employee,setEmployee]=useState([]);
  const [employeeData,setEmployeeData]=useState({
    firstname: "",
    lastname: "",
    birth: "",
    specialty: "",
    mobile: 0,
    email: "",
    Educational_attainment: "",
    adress: "",
    dateEmployee: "",
    Reservation_code: "",
    id_office: ""
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://officealhajandalumrah.adaptable.app/employee');
        setEmployee(response.data);
     
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleChangeEmployee = async (e) => {
    const { name, value, files } = e.target;
      setEmployeeData((prevFormData) => ({
        ...prevFormData,
        [name]: files ? files[0] : value,
      }));
  };  

  const handleSubmitEmployee = async (e) => {
    e.preventDefault();
    if (isEditingEmployee) {
      try {
        await axios.patch(`https://officealhajandalumrah.adaptable.app/employee/${editingIdEmployee}`, employeeData , {
          headers: {
              'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        console.error('Error updating data:', error);
      }
    } else {
      const dataEmployee = {
        firstname: employeeData.firstname,
        lastname: employeeData.lastname,
        birth: employeeData.birth,
        specialty: employeeData.specialty,
        mobile: Number(employeeData.mobile) ,
        email: employeeData.email,
        Educational_attainment: employeeData.Educational_attainment,
        adress: employeeData.adress,
        dateEmployee: employeeData.dateEmployee,
        Reservation_code: employeeData.Reservation_code,
    };
    console.log(dataEmployee);
      try {
        const responseEmployee = await axios.post('https://officealhajandalumrah.adaptable.app/employee', dataEmployee, {
          headers: {
              'Content-Type': 'application/json',
          },
        });
      
      } catch (error) {
        console.error('Error adding data:', error);
      }
    }
    setEmployeeData({
      firstname: "",
      lastname: "",
      birth: "",
      specialty: "",
      mobile: 0,
      email: "",
      Educational_attainment: "",
      adress: "",
      dateEmployee: "",
      Reservation_code: "",
      id_office: ""
    });
    setIsEditingEmployee(false);
    setEditingIdEmployee(null);
  };

  const handleEditEmployee = (emp) => {
    setEmployeeData(emp);
    setIsEditingEmployee(true);
    setEditingIdEmployee(emp._id);
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await axios.delete(`https://officealhajandalumrah.adaptable.app/employee/${id}`);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }
// minimumAge
const [idMinimumAge, setIdMinimumAge] = useState(null);
const [minimumAge, setMinimumAge] = useState({
  minimumAge:""
});
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://officealhajandalumrah.adaptable.app/minimumAge');
      setIdMinimumAge(response.data[0]._id);
   
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);
const handleChangeMinimumAge = async (e) => {
  const { name, value, files } = e.target;
  setMinimumAge((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
};  
const handleEditminimumAge = async () => {
  try {
    await axios.patch(`https://officealhajandalumrah.adaptable.app/minimumAge/${idMinimumAge}`, minimumAge , {
      headers: {
          'Content-Type': 'application/json',
      },
    });
    
  } catch (error) {
    console.error('Error updating data:', error);
  }
}
// UmrahProgram
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  centerMode: true,
  centerPadding: '0px',
  adaptiveHeight: true
};

const [umrahProgram,setUmrahProgram]= useState([]);
const [allProgramUmrahHotel, setAllProgramUmrahHotel] = useState([]);
const [hotelsForProgram, setHotelsForProgram] = useState({});

useEffect(() => {
const fetchData = async () => {
try {
  const response = await axios.get('https://officealhajandalumrah.adaptable.app/program-umrah');
  setUmrahProgram(response.data);
  const allProgramUmrahHotelResponse = await axios.get('https://officealhajandalumrah.adaptable.app/prog-umrah-hotel');
  setAllProgramUmrahHotel(allProgramUmrahHotelResponse.data);
} catch (error) {
  console.error('Error fetching data:', error);
}
};
fetchData();
}, []);

useEffect(() => {
const fetchHotels = async () => {
try {
  const programHotelRooms = {};

  allProgramUmrahHotel.forEach((hotelRoom) => {
    const { id_ProgramUmrah, id_HotelRoom } = hotelRoom;
    if (!programHotelRooms[id_ProgramUmrah]) {
      programHotelRooms[id_ProgramUmrah] = [];
    }
    programHotelRooms[id_ProgramUmrah].push(id_HotelRoom);
  });

  const hotelData = {};
  for (const programId in programHotelRooms) {
    const hotelRooms = await Promise.all(
      programHotelRooms[programId].map((hotelRoomId) =>
        axios.get(`https://officealhajandalumrah.adaptable.app/hotel-room/${hotelRoomId}`)
          .then(response => response.data)
      )
    );

    const hotels = await Promise.all(
      hotelRooms.map(hotelRoom =>
        axios.get(`https://officealhajandalumrah.adaptable.app/Hotel/${hotelRoom.id_hotel}`)
          .then(response => response.data)
      )
    );

    hotelData[programId] = hotels;
  }

  setHotelsForProgram(hotelData);
} catch (error) {
  console.error('Error fetching hotels for program:', error);
}
};

fetchHotels();
}, [allProgramUmrahHotel]);



// data form mutamer
const [mutamir,setMutamir]=useState([]);
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://officealhajandalumrah.adaptable.app/al-mutamir');
      setMutamir(response.data);
   
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);

    // Hajj Porgram

    const [hajjProgram,setHajjProgram]= useState([]);
    const [allProgramHajjHotel, setAllProgramHajjHotel] = useState([]);
    const [hotelsForProgramHajj, setHotelsForProgramHajj] = useState({});
    
    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://officealhajandalumrah.adaptable.app/program-al-haj');
        setHajjProgram(response.data);
        const allProgramHajjHotelResponse = await axios.get('https://officealhajandalumrah.adaptable.app/prog-al-haj-hotel');
        setAllProgramHajjHotel(allProgramHajjHotelResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    }, []);
    
    useEffect(() => {
      const fetchHotels = async () => {
        try {
          const programHotelRooms = {};
          allProgramHajjHotel.forEach((hotelRoom) => {
           
            const { id_ProgramAlHaj, id_HotelRoom } = hotelRoom;
            if (!programHotelRooms[id_ProgramAlHaj]) {
              programHotelRooms[id_ProgramAlHaj] = [];
            }
            programHotelRooms[id_ProgramAlHaj].push(id_HotelRoom);
          });
        
          const hotelData = {};
          for (const programId in programHotelRooms) {
            const hotelRooms = await Promise.all(
              programHotelRooms[programId].map((hotelRoomId) =>
                axios.get(`https://officealhajandalumrah.adaptable.app/hotel-room/${hotelRoomId}`)
                  .then(response => response.data)
              )
            );
    
            const hotels = await Promise.all(
              hotelRooms.map(hotelRoom =>
                axios.get(`https://officealhajandalumrah.adaptable.app/Hotel/${hotelRoom.id_hotel}`)
                  .then(response => response.data)
              )
            );
    
            hotelData[programId] = hotels;
          }
    
          setHotelsForProgramHajj(hotelData);
        } catch (error) {
          console.error('Error fetching hotels for program:', error);
        }
      };
    
      fetchHotels();
    }, [allProgramHajjHotel]);
    

    // data form Hajj
  
    const [hajj,setHajj]=useState([]);   
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://officealhajandalumrah.adaptable.app/al-hajj');
          setHajj(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);


    
// Hotel

const [hotels,setHotels]=useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://officealhajandalumrah.adaptable.app/Hotel');
      setHotels(response.data);
     } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
  }, []);


//  transport


const [transports,setTransports]=useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://officealhajandalumrah.adaptable.app/BusCompany');
      setTransports(response.data);
     } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
  }, []);

// office

const [idOfficeData, setIdOfficeData] = useState(null);
const [officeData,setOfficeData]=useState({
  name: "",
  nameEnglish: "",
  logoImage: "",
  aboutOffice: "",
  address: "",
  password: "",
  mobile: 0,
  password: "",
});
console.log(officeData);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://officealhajandalumrah.adaptable.app/office');
      setIdOfficeData(response.data[0]._id);
      console.log(response.data[0]._id);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);


const handleChangeImageOffice = async (e) => {
  const { name, files } = e.target;
  if (files && files[0]) {
    const formData = new FormData();
    formData.append('file', files[0]);
    try {
      const response = await axios.post('https://officealhajandalumrah.adaptable.app/CloudinaryController/image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      const imagePath = response.data;
      setOfficeData((prevFormData) => ({ ...prevFormData, [name]: imagePath }));
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }
};

const handleChangeOffice = async (e) => {
  const { name, value, files } = e.target;
    setOfficeData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
};  

const handleUpdateField = async (fieldName) => {
  try {
    await axios.patch(`https://officealhajandalumrah.adaptable.app/office/${idOfficeData}`, { [fieldName]: officeData[fieldName] }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(`Error updating ${fieldName}:`, error);
  }
    setOfficeData({
      name: "",
      nameEnglish: "",
      logoImage: "",
      aboutOffice: "",
      address: "",
      password: "",
      mobile: 0,
      password: "",
  });
    };

  return (
    <div className='Dash-board-manager'>
          <div className="min">
          <nav>
            <ul>
              <li>
              <img src={manger} />
                <h5>مدير المكتب</h5>
              </li>
              <a href="" className="navbar-brand">
                <li>   <i>
                    <AiTwotoneCheckCircle />
                  </i>
                  لوحة التحكم
               
                </li>
              </a>
              <a href="">
                <li>
               <i><ImUsers /></i>
                 الموظفين
                </li>
              </a>
              <a href="">
                <li>
                  <i><GrServices /></i>
                  شروط الحج
                </li>
              </a>
              <a href="">
                <li>      <i>
                    <ImFolderOpen />{" "}
                  </i>
                      البرامج
                
                </li>
              </a>
              <a href="">
                <li>
                <i>
                <FaUsers />
                  </i>
                  المسافرين
                </li>
              </a>
              <a href="">
                <li>
                <i>
                    <ImLibrary />
                  </i>
                  الفنادق
                </li>
              </a>
              <a href="">
                <li>
                <i>
                    <ImAirplane />
                  </i>
                  النقل
                </li>
              </a>
              <a href="">
                <li> 
                <i>
                    <ImBubbles4 />
                  </i>
                  الرسائل الواردة
                </li>
              </a>
              <a href="https://web.whatsapp.com/">
                <li>
                <i>
                    
                    <ImCogs />
                  </i>
                  اعدادات
                </li>
              </a>
            </ul>
          </nav>
    
        </div>

        
        <div className="detil">
          <div className="alert " role="alert">
            <h5>
              عدد برامج الحج خلال السنوات <br /> 2022-2024
            </h5>
            <p> 15 برنامج</p>
          </div>
          <div className="alert " role="alert">
            <h5>
              عدد برامج العمرة خلال السنوات <br />
              2022-2024
            </h5>
            <p> 15 برنامج</p>
          </div>
          <div className="alert " role="alert">
            <h5>
              عدد المسافرين من المكتب خلال السنوات
              <br /> 2022-2024
            </h5>
            <p> 15 برنامج</p>
          </div>
        </div>

        <div className="contain-employee">
        <h2>:الموظفين  <i><ImUsers /></i></h2>
          <div className="table-employee">
            <table className="table">
              <thead>
                <tr>
                  <th>الكود الخاص</th>
                  <th>العنوان</th>
                  <th> تارخ التعيين </th>
                  <th>التحصيل العلمي</th>
                  <th>البريد الالكتروني</th>
                  <th>رقم الهاتف</th>
                  <th>الحالة الاجتماعية</th>
                  <th>التولد</th>
                  <th>الكنية</th>
                  <th>الاسم</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {employee.map((emp, index) => (
                  <tr key={index}>
                    <td>{emp.Reservation_code}</td>
                    <td>{emp.adress}</td>
                    <td>{emp.dateEmployee}</td>
                    <td>{emp.Educational_attainment}</td>
                    <td>{emp.email}</td>
                    <td>{emp.mobile}</td>
                    <td>{emp.specialty}</td>
                    <td>{emp.birth}</td>
                    <td>{emp.lastname}</td>
                    <td>{emp.firstname}</td>
                    <td>
                      <button className="edit" onClick={() => handleEditEmployee(emp)}>تعديل<MdEditSquare /></button>
                      <button className="delet" onClick={() => handleDeleteEmployee(emp._id)}>حذف<MdDeleteSweep /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3>{isEditingEmployee ? "تعديل معتمر" : "إضافة معتمر جديد"}</h3>
            <form onSubmit={handleSubmitEmployee}>
            <table className="table">
              <thead>
                <tr>
                  <th>الكود الخاص</th>
                  <th>العنوان</th>
                  <th> تارخ التعيين </th>
                  <th>التحصيل العلمي</th>
                  <th>البريد الالكتروني</th>
                  <th>رقم الهاتف</th>
                  <th>الحالة الاجتماعية</th>
                  <th>التولد</th>
                  <th>الكنية</th>
                  <th>الاسم</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                  <tr >
                    <td><input type="text" name="Reservation_code" placeholder="الكود الخاص" value={employeeData.Reservation_code} onChange={handleChangeEmployee} /></td>
                    <td><input type="text" name="adress" placeholder=" العنوان" value={employeeData.adress} onChange={handleChangeEmployee} /></td>
                    <td><input type="date" name="dateEmployee" placeholder="تارخ التعيين  " value={employeeData.dateEmployee} onChange={handleChangeEmployee} /></td>
                    <td><input type="text" name="Educational_attainment" placeholder="التحصيل العلمي" value={employeeData.Educational_attainment} onChange={handleChangeEmployee} /></td>
                    <td><input type="email" name="email" placeholder="البريد الإلكتروني" value={employeeData.email} onChange={handleChangeEmployee} /></td>
                    <td><input type="number" name="mobile" placeholder="رقم الهاتف"value={employeeData.mobile} onChange={handleChangeEmployee} /></td>
                    <td><input type="text" name="specialty" placeholder="الحالة الاجتماعية " value={employeeData.specialty} onChange={handleChangeEmployee} /></td>
                    <td><input type="date" name="birth" placeholder=" التولد" value={employeeData.birth} onChange={handleChangeEmployee} /></td>
                    <td><input type="text" name="lastname" placeholder="الكنية " value={employeeData.lastname} onChange={handleChangeEmployee} /></td>
                    <td><input type="text" name="firstname" placeholder="الاسم " value={employeeData.firstname} onChange={handleChangeEmployee} /></td>
                    <td>
                    <button className="add" type="submit">{isEditingEmployee ? "تحديث" : "إضافة"}<FaRegPlusSquare /></button>
                    </td>
                  </tr>
              </tbody>
            </table>            
            </form>
          </div>
        </div>

        <div className="maneger-hajj">
          <h2>:تحديد شروط الحج  <i><GrServices /></i></h2>
          <div className="maneger-hajj-detil">
          <div >
            <img src={imghaj} alt="" />
          </div>
          <div className="edit-hajj">
            <label htmlFor="">:مواليد الحجاج المقبولين حسب  وزارة الحج السعودية</label>
            <input type="date" name="minimumAge" value={minimumAge.minimumAge} onChange={handleChangeMinimumAge}  /> <br />
            <button className="editminimumAge" onClick={() => handleEditminimumAge()}>Edit</button>
          </div>
        </div>
        </div>

        <div className="manager-prog-umrah">
        <h2>:برامج العمرة <i><ImFolderOpen />{" "}</i></h2>
          <div className="progr-parent">
          <Slider {...settings}>
            {umrahProgram.map((program,index)=>(
              <div key={index} className="prog1" >
              <h3> {program.name_program} </h3>
              <p> مدة البرنامج <span> {program.total_stay} </span>يوم</p>
              <p>
                <span> {program.stay_in_macca} </span> مدة الاقامة بمكة المكرمة
              </p>
              <p>
                <span> {program.stay_in_madina} </span> مدة الاقامة بمكة المكرمة
              </p>

              <p> <span> {program.Date_Travel} </span> تاريخ السفر </p>
              <p> : الفنادق   </p>
              {hotelsForProgram[program._id] ? (
               <p> 
                {hotelsForProgram[program._id].map((hotel, hotelIndex) => (
                <span key={hotelIndex}>{hotel.name}: {hotel.location}<br/></span>
                 ))}
              </p>
             ) : (
             <p></p>
              )}
            </div>
            ))}
           </Slider>
          </div>
        </div>
        {/* <div className=" manager-prog-umrah">
          <h2>:برامج العمرة    <i>
                    <ImFolderOpen />{" "}
                  </i></h2>
          <div className="progr-parent">
            <div className="prog1">
              <h3>عمرة رمضان البرية</h3>

              <p>
                مدة البرنامج <span>25 يوم</span>
              </p>
              <p>
                <span>5</span> مدة الاقامة بمكة المكرمة
              </p>
              <p>
                <span>5</span> مدة الاقامة بمكة المكرمة
              </p>

              <p>
                {" "}
                تاريخ السفر <span>11/5/2024</span> السفر برا
              </p>
              <p>
                فنادق مكة المكرمة : <span>اعمار غراند</span> <span>فيوليت</span>
                <span>انوار الاصيل </span>
              </p>

              <p>
                فنادق المدينة المنورة : <span>روز الماسة</span>{" "}
                <span>نجوم المدينة</span> <br />
                <span>ارجوان روز</span>
              </p>

            
           
           <button className="btn">  عرض المسافرين في هذا البرنامج</button>
           
            </div>
            <div className="prog1">
              <h3>عمرة رمضان البرية</h3>

              <p>
                مدة البرنامج <span>25 يوم</span>
              </p>
              <p>
                <span>5</span> مدة الاقامة بمكة المكرمة
              </p>
              <p>
                <span>5</span> مدة الاقامة بمكة المكرمة
              </p>

              <p>
                {" "}
                تاريخ السفر <span>11/5/2024</span> السفر برا
              </p>
              <p>
                فنادق مكة المكرمة : <span>اعمار غراند</span>{" "}
                <span>انوار الاصيل </span>
              </p>

              <p>
                فنادق المدينة المنورة : <span>روز الماسة</span>{" "}
                <span>نجوم المدينة</span> <br />
                <span>ارجوان روز</span>
              </p>
             
           <button className="btn">  عرض المسافرين في هذا البرنامج</button> </div>
          </div>

        
        </div> */}

      <h2>:المعتمرين<i> <FaUsers /></i></h2>
        <div className="show-travel">
            <table className="table">
              <thead>
                <tr>
                  <th>رقم التأكيد</th>
                  <th>نمط الدفع</th>
                  <th>نمط الغرفة</th>
                  <th>رقم المقعد</th>
                  <th>رقم الباص</th>
                  <th>اسم البرنامج</th>
                  <th>صورة شخصية</th>
                  <th>صورة جواز السفر</th>
                  <th>رقم الجواز</th>
                  <th>الجنسية</th>
                  <th>الجنس</th>
                  <th>التولد</th>
                  <th>البريد الالكتروني</th>
                  <th>رقم الهاتف</th>
                  <th>اسم الاب</th>
                  <th>اسم الام</th>
                  <th>الاسم</th>
                </tr>
              </thead>
              <tbody>
                {mutamir.map((muta, index) => (
                  <tr key={index}>
                    <td>{muta.Verification}</td>
                    <td>{muta.payment_method}</td>
                    <td>{muta.type_room}</td>
                    <td>{muta.seatNumber}</td>
                    <td>{muta.number_bus}</td>
                    <td>{muta.name_program}</td>
                    <td><img src={muta.almutamir_photo} alt="Personal" width="50" height="50" /></td>
                    <td><img src={muta.passport_photo} alt="Passport" width="50" height="50" /></td>
                    <td>{muta.passport_number}</td>
                    <td>{muta.Nationality}</td>
                    <td>{muta.gender}</td>
                    <td>{muta.birth}</td>
                    <td>{muta.email}</td>
                    <td>{muta.phone_number}</td>
                    <td>{muta.name_father}</td>
                    <td>{muta.name_mother}</td>
                    <td>{muta.full_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      
        <div className=" manager-prog-hajj">
          <h2>:برامج الحج<i><ImFolderOpen />{" "}</i></h2>
          <div className="progr-parent">
          <Slider {...settings}>
            {hajjProgram.map((program,index)=>(
              <div key={index} className="prog1" >
              <h3> {program.name_program} </h3>
              <p> مدة البرنامج <span> {program.total_stay} </span>يوم</p>
              <p>
                <span> {program.stay_in_macca} </span> مدة الاقامة بمكة المكرمة
              </p>
              <p>
                <span> {program.stay_in_madina} </span> مدة الاقامة بمكة المكرمة
              </p>

              <p> <span> {program.Date_Travel} </span> تاريخ السفر </p>
              <p> : الفنادق   </p>
              {hotelsForProgramHajj[program._id] ? (
                
               <p> 
                {hotelsForProgramHajj[program._id].map((hotel, hotelIndex) => (
                <span key={hotelIndex}>{hotel.name}: {hotel.location}<br/></span>
                 ))}
              </p>
             ) : (
             <p></p>
              )}
            </div>
            ))}
           </Slider>
          </div>
         </div>
      
        <div className="show-travel">
          <h2>:الحجاج<i><FaUsers /></i></h2>
          <table className="table">
              <thead>
                <tr>
                  <th>رقم التأكيد</th>
                  <th>نمط الدفع</th>
                  <th>نمط الغرفة</th>
                  <th>اسم البرنامج</th>
                  <th>صورة شخصية</th>
                  <th>صورة جواز السفر</th>
                  <th>رقم الجواز</th>
                  <th>الجنسية</th>
                  <th>الجنس</th>
                  <th>التولد</th>
                  <th>البريد الالكتروني</th>
                  <th>رقم الهاتف</th>
                  <th>اسم الاب</th>
                  <th>اسم الام</th>
                  <th>الاسم</th>
                </tr>
              </thead>
              <tbody>
                {hajj.map((haj, index) => (
                  <tr key={index}>
                    <td>{haj.Verification}</td>
                    <td>{haj.payment_method}</td>
                    <td>{haj.type_room}</td>
                    <td>{haj.name_program}</td>
                    <td><img src={haj.alhaj_photo} alt="Personal" width="50" height="50" /></td>
                    <td><img src={haj.passport_photo} alt="Passport" width="50" height="50" /></td>
                    <td>{haj.passport_number}</td>
                    <td>{haj.Nationality}</td>
                    <td>{haj.gender}</td>
                    <td>{haj.birth}</td>
                    <td>{haj.email}</td>
                    <td>{haj.phone_number}</td>
                    <td>{haj.name_father}</td>
                    <td>{haj.name_mother}</td>
                    <td>{haj.full_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>

       <div className="show-hotal">
            <h2 > :الفنادق  <i><ImLibrary /></i></h2>
          <div className="table-hotal">
          <table className="table">
              <thead>
                <tr>
                <th>اسم الفندق</th>
                <th>الموقع</th>
                <th>التفاصيل</th>
                <th>رتبة الفندق</th>
                <th>الخدمات</th>
                <th>اماكن يمكن زيارتها</th>
                <th>الصورة الرئيسية</th>
                </tr>
              </thead>
              <tbody>
              {hotels.map((hotel, index) => (
                  <tr key={index}>
                     <td>{hotel.name}</td>
                     <td>{hotel.location}</td>
                     <td>{hotel.  details}</td>
                     <td>{hotel.Number_stars}</td>
                     <td>{hotel.Services}</td>
                     <td>{hotel.Places_available_visit}</td>
                     <td><img src={hotel.urlImagehotel} width="50" height="50" /></td>
                   </tr>
                ))}
              </tbody>
            </table>
            </div>
            </div>

       <div className=" show-transport">
        <h2> :النقل <i><ImAirplane /></i></h2>
          <div className="table-transport">
          <table className="table">
              <thead>
                <tr>
                <th>اسم الشركة</th>
                <th>الخدمات</th>
                <th>هدف الشركة</th>
                <th>الصورة الرئيسية</th>
                <th>رابط الشركة</th>
                <th>نوع النقل</th>
                <th> سعر التكيت</th>
               </tr>
              </thead>
              <tbody>
                {transports.map((Transport, index) => (
                  <tr key={index}>
                    <td>{Transport.name_company}</td>
                    <td>{Transport.Services}</td>
                    <td>{Transport.goals_company}</td>
                    <td><img src={Transport.urlImageCompany} width="50" height="50" /></td>
                    <td>{Transport.link}</td>
                    <td>{Transport.type_bus}</td>
                    <td>{Transport.price_tecket}</td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

ى      <div className="seting-manager">
          <h2>:الاعدادات  <i><ImCogs /> </i></h2>
          <div className="parent-seting">
          <div className="seting-detil-maneger">
            <h3>:اعادة تعيين كلمة المرور</h3>
          <div className="input-box seting-box1">
              <input type="password" className="input-filed" placeholder=" كلمة السر الحالية" />
            </div>
            <div className="input-box">
              <input type="password" className="input-filed" placeholder="كلمة السر الجديدة" />
            </div>
            <div className="input-box">
              <input type="password" className="input-filed" placeholder="تاكيد كلمة المرور" />
            </div>
            <div className="input-box">
              <input type="submit" className="submit" value="تغيير كلمة المرور" />
            </div>
            </div>
   <form>
        <div className="edit-logo">
          <h3>: تعيين لوغو المكتب</h3>
          <input type="file" name="logoImage" onChange={handleChangeImageOffice} />
          <button type="button" onClick={() => handleUpdateField('logoImage')}><AiFillLike /></button>
        </div>

        <div className="edit-titel">
          <h3>:تعيين اسم المكتب</h3>
          <input type="text" name="name" value={officeData.name} onChange={handleChangeOffice} />
          <button type="button" onClick={() => handleUpdateField('name')}><AiFillLike /></button>
        </div>

        <div className="edit-titel">
          <h3>: Office Name</h3>
          <input type="text" name="nameEnglish" value={officeData.nameEnglish} onChange={handleChangeOffice} />
          <button type="button" onClick={() => handleUpdateField('nameEnglish')}><AiFillLike /></button>
        </div>

        <div className="edit-phon">
          <h3>: تعيين رقم الهاتف للمكتب</h3>
          <input type="number" name="mobile" value={officeData.mobile} placeholder='ادخل رقم المكتب' onChange={handleChangeOffice} />
          <button type="button" onClick={() => handleUpdateField('mobile')}><AiFillLike /></button>
        </div>

        <div className="edit-location">
          <h3>:تعيين موقع المكتب</h3>
          <input type="text" name="address" value={officeData.address} onChange={handleChangeOffice} />
          <button type="button" onClick={() => handleUpdateField('address')}><AiFillLike /></button>
        </div>

        <div className="edit-about">
          <h3>:حول المكتب</h3>
          <input type="text" name="aboutOffice" value={officeData.aboutOffice} onChange={handleChangeOffice} />
          <button type="button" onClick={() => handleUpdateField('aboutOffice')}><AiFillLike /></button>
        </div>
      </form>

     </div>  
    </div>
    </div>
  )
}

export default DashBoardManager